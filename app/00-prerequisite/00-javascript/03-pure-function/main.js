const p1 = x => 2*x;
const p2 = x => Math.random() + x;
const p3 = x => {
    console.log('coucou');
    return x;
}

const file = {
    content: '',
    write(msg) {
        this.content += msg;
    }
};

const p3 = x => {
    file.write('coucou');
    return x;
}

const obj = { b: 2};
const p4 = (x,y) => {
    obj.b = x;
    return y;
};

const p5 = (x, y) => y = x;

const a = 3;
const b = 4;
p5(a, b);
console.log('a', a);
console.log('b', b);
