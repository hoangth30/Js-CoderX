
    // ----- filter product by category id
    var listProducts = [{
        id: 1,
        categoryId: 1,
        name: 'Tivi'
    },
    {
        id: 2,
        categoryId: 1,
        name: 'Tủ lạnh'
    },
    {
        id: 3,
        categoryId: 3,
        name: 'Ghế sofa'
    },
    {
        id: 4,
        categoryId: 1,
        name: 'Máy giặt'
    },
    {
        id: 5,
        categoryId: 2,
        name: 'Chén bát'
    },
    {
        id: 6,
        categoryId: 2,
        name: 'Nồi cơm điện'
    },
    {
        id: 7,
        categoryId: 3,
        name: 'Cửa kính'
    },
    {
        id: 8,
        categoryId: 1,
        name: 'Điều hoà'
    },
    {
        id: 9,
        categoryId: 3,
        name: 'Bàn tròn'
    },
    {
        id: 10,
        categoryId: 2,
        name: 'Lò vi sóng'
    },
    ]

    function filterProductsByCategoryId(products, categoryId) {
        var category = products.filter(function (item) {
            return item.categoryId === categoryId;
        })
        return category;
    }
    console.log(filterProductsByCategoryId(listProducts, 3));

    /**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

// ---- using arrow function
function removeDuplicate(array){
    var duplicate = array.filter((item, index) => {
        return array.indexOf(item) === index;
    })
    return duplicate;
}

 /*    function removeDuplicate(array) {
        var duplicateItem = array.filter(function(item, index){
            if (array.indexOf(item) === index){
                return true;
            } else {
                return false;
            }
        })
        return duplicateItem;
    }
 */
    var array = [1, 1, 2, 2, 2, 3, 4];
    console.log(removeDuplicate(array));
