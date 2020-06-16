/*Write a function to count from 1 to 10
return a promise */

function countFrom(a, b) {
    return new Promise(function (resolve, reject) {
        var id = setInterval(function () {
            console.log(a);
            a++;
            if (a > b) {
                clearInterval(id);
                resolve();
            }
        }, 1000)

    })
}

countFrom(1, 10).then(function () {
    console.log('Done');
});

/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
    return new Promise(function (resolve, reject) {
        var id = setInterval(function () {
            console.log(x);
            x--;
            if (x < 0) {
                clearInterval(id);
                resolve();
            }
        }, 1000)
    })
}

function sayHappyNewYear() {
    console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);