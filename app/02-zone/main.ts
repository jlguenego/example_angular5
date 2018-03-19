import 'zone.js/dist/zone.js';

console.log('creating zone');

// We create a new zone by forking an existing zone.
let zoneA = Zone.current.fork({ name: 'zoneA' });
let zoneB = Zone.current.fork({ name: 'zoneB' });

console.log('rootZone', Zone.current);
console.log('zoneA', zoneA);
console.log('zoneB', zoneB);

zoneA.run(() => {
    console.log('Zone.current', Zone.current);

    // console.log('stackTrace', Error.captureStackTrace());
});


// setTimeout(() => {
//     console.log('rootZone', Zone.current);
// }, 1000);
