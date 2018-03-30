async function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

(async () => {
    console.log('start');
    await sleep(1000);
    console.log('end');
})();