import 'zone.js/dist/zone.js';

console.log('1) At the beginning, there is always only one zone: the root zone.', Zone.current);

console.log('2) creating 2 zones with fork');

// We create a new zone by forking an existing zone.
let zoneA = Zone.current.fork({ name: 'zoneA' });
let zoneB = Zone.current.fork({ name: 'zoneB' });

console.log('zoneA', zoneA);
console.log('zoneB', zoneB);

console.log('3) running code sync and async with a given zone');

zoneA.run(() => {
    console.log('Zone.current', Zone.current);
    setTimeout(() => {
        console.log('Zone.current', Zone.current);
    }, 10);
});

zoneB.run(() => {
    console.log('Zone.current', Zone.current);
    setTimeout(() => {
        console.log('Zone.current', Zone.current);
    }, 20);
});

setTimeout(() => {
    console.log('4) zone have name and a parent');
    console.log('zoneA name', zoneA.name);
    console.log('zoneA parent name', zoneA.parent.name);

    console.log('4) zone have also properties.');
    let zoneC = Zone.current.fork({ name: 'zoneB', properties: { hello: {}} });

    zoneC.run(() => {
        const hello = Zone.current.get('hello');
        hello.world = 'foo';
        setTimeout(() => {
            console.log('5) getting some context data of the current zone: ', Zone.current.get('hello').world);
        }, 10);
    });

}, 30);




