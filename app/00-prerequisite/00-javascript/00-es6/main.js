var myGlobal = 'coucou';

function hello() {
    console.log('myGlobal', myGlobal);
}

hello();

function f1() {
    var myClosure = 32;
    function f2() {
        console.log('myClosure', myClosure);
    }
}

hoisting2();
function hoisting2() {
    console.log('executing hoisting2', hoistingSucks);

}
var hoistingSucks = 'yes it really sucks';

function f3() {
    {
        var varSucks = 'yes it sucks';
        const constIsBetter = 'yes true';
        console.log('constIsBetter is now defined', constIsBetter);
        // constIsBetter stops here (block scoped)
    }
    console.log('var still sucks', varSucks);
}

f3();

const message = 'Really.'

const template = `
I love template.
${message}
`;

const array = [1,3,7].map(x => 3*x);
console.log('array', array);

const showMyArgs = (...args) => {
    console.log('args', args);
}

showMyArgs('coucou', 1, 2, 'trois');

