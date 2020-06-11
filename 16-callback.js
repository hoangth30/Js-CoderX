 /**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */
function double(num) {
    return num * 2;
    // viết code ở đây.
}

function sumAndDo(nums, callback) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
    return callback(sum);
}

console.log(sumAndDo([2, 5, 6, 7], double));

function transform(numbers, callback) {
    var result = [];
    var newElement;
    for (var i = 0; i < numbers.length; i++) {
        newElement = numbers[i];
        result.push(callback(newElement));
    }
    return result;
}

console.log(transform([1, 2, 3], double));

// Mảng            
var keywords = ["Cuong", "Freetuts.net", "Học lập trình", "thehalfheart"];

// Lặp qua từng phần tử và xử lý trong hàm callback
keywords.forEach(function (eachName, index) {
    console.log(index + 1 + ". " + eachName);
});

// Hàm tạo chuỗi mật khẩu
function createPassword(callback) {
    return callback('freetuts.net');
}

// Sử dụng
var password = createPassword(function (secret_key) {
    return secret_key;
});

alert(password);