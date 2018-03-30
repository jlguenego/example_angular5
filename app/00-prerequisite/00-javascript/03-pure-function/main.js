const p1 = x => 2*x;
const p2 = x => Math.random() + x;
const p3 = x => {
    console.log('coucou');
    return x;
};

const file = {
    content: '',
    write(msg) {
        this.content += msg;
    }
};

const p4 = x => {
    file.write('coucou');
    return x;
}

const obj = { b: 2};
const p5 = (x,y) => {
    obj.b = x;
    return y;
};

const p6 = (x, y) => y = x;

const a = 3;
const b = 4;
p6(a, b);
console.log('a', a);
console.log('b', b);

// high order function
const o1 = f => f;
const o2 = (f, x) => x => x;
const o3 = (f, x) => (...args) => f(x, ...args);

const add = (x,y) => x + y;
add17 = o3(add, 17);
console.log('is it true ?', add(17,2) === add17(2));

