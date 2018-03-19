import 'zone.js/dist/zone.js';

async function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, time);
    });
}

const logBold = console.log.bind(console, '%c%s', 'color: black; font-weight:bold; font-size: 16px;');

(async () => {

    logBold('1) At the beginning, there is always only one zone: the root zone.');
    console.log('Zone %O', Zone);
    console.log('Zone.current', Zone.current);
    await sleep(10);
    logBold('2) creating 2 zones with fork');

    // We create a new zone by forking an existing zone.
    let zoneA = Zone.current.fork({ name: 'zoneA' });
    let zoneB = Zone.current.fork({ name: 'zoneB' });

    console.log('zoneA', zoneA);
    console.log('zoneB', zoneB);

    logBold('3) running code sync and async with a given zone');

    zoneA.run(async () => {
        console.log('3(A)->Zone.current', Zone.current);
        await sleep(10);
        console.log('3(A)->Zone.current', Zone.current);
    });

    zoneB.run(async () => {
        console.log('3(B)->Zone.current', Zone.current);
        await sleep(20);
        console.log('3(B)->Zone.current', Zone.current);
    });
    await sleep(30);

    logBold('4) zones have name and a parent');
    console.log('zoneA name', zoneA.name);
    console.log('zoneA parent name', zoneA.parent.name);

    logBold('5) zones have also properties.');
    let zoneC = Zone.current.fork({ name: 'zoneC', properties: { hello: {} } });

    zoneC.run(async () => {
        const hello = Zone.current.get('hello');
        hello.world = 'foo';
        await sleep(10);
        console.log('Getting some context data of the current zone: ', Zone.current.get('hello').world);
    });

    await sleep(20);
    logBold('6) zones have task queue');
    let zoneD = Zone.current.fork({ name: 'zoneD', onHasTask(delegate, current, target, hasTaskState) {
        console.log('delegate', delegate);
        console.log('current', current); 
        console.log('target', target);   
        console.log('hasTaskState', hasTaskState); 
    }});
    zoneD.run(async () => {
        console.log('zoneD start');

        // macro task (setTimeout)
        setTimeout(() => {
            console.log('zoneD task 1');
        }, 10);
        setTimeout(() => {
            console.log('zoneD task 2');
        }, 20);

        // event task (addEventListener)
        function myFunction() {
            console.log('event task');
            window.removeEventListener('kiki', myFunction);
        }
        window.addEventListener('kiki', myFunction);
        window.dispatchEvent(new Event('kiki'));

        // micro task (Promise or MutableObserver)
        Promise.resolve().then(() => {
            console.log('microtask 1');
        }).then(() => {
            console.log('microtask 2');
        });
    });
    await sleep(30);
    logBold('7) Each task can trigger a special callback onInvokeTask');
    let timer: number;
    let zoneE = Zone.current.fork({ name: 'zoneE', onInvokeTask(delegate, currentZone, targetZone, task, ...args: any[]) {
        const name = task.callback.name;
        console.log('about to invoke the task', name);
        const result = delegate.invokeTask(targetZone, task, delegate, args);
        console.log(
          Date.now() - timer, result, 
         `task with callback '${name}' is removed from the task queue`
       );
       return result;
      }});
    zoneE.run(async () => {
        timer = Date.now();
        console.log('zoneE start');

        const task = (n) => {
            return function macrotaskFn() {
                console.log(`executing macrotask ${n} with zone ${Zone.current.name}`);
                return 'hello';
            };
        };
        
        setTimeout(task(1), 10);
        setTimeout(task(2), 20);

        // event task (addEventListener)
        window.addEventListener('keke', task(3));
        const e = new Event('keke');
        window.dispatchEvent(e);
        window.dispatchEvent(e);
    });

    await sleep(30);

    logBold('8) When entering a Zone, we can trigger a callback using <code>onInvoke</code>.');
    const zoneF = Zone.current.fork({
        name: 'zoneF',
        onInvoke(delegate, current, target, callback, ...args: any[]) {
            console.log(`entering zone '${target.name}'`);
            return delegate.invoke(target, callback, 'this is a THIS', ['args0', 'args1'], 'this is the source string');
        }
    });
    
    function toto(...args: any[]) {
        console.log('this', this);
        console.log('args', args);
        console.log('zone', Zone.current);
    }
    
    zoneF.run(toto);
})();




