const n = 6

function GeneraArray(n) {
    let arr = [];
    for ( let i = 0; i <= n; i++) {
        arr[i] = Math.floor
        (Math.random() * 10);
    }
    console.log(arr);
}

GeneraArray(n);