
/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    var convert = arr.map(function(alphabet){
        switch (alphabet) {
            case 'A':
            case 'a':
                return 1;
            case 'B':
            case 'b':
                return 2;
            default:
                return 0;
        }
    })
    return convert;
}

console.log(transform(['A', 'a', 'B', 'b', 'c', 'v']))