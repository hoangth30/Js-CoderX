var orders = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 1, unitPrice: 400 },
    { name: 'C', quantity: 5, unitPrice: 15 }
];

// ----- calculate sumAge by array.reduce()
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

arr = [];
function groupAge(objectArray) {
    var sumAge = objectArray.reduce(function (totalAge, currentAge) {
        return totalAge + currentAge.age;
    }, 0)
    return sumAge;
}
console.log(groupAge(people));

// ----- tinh tong price
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingPrice(arr) {
    var sumPrice = arr.reduce(function (totalPrice, currentPrice) {
        return totalPrice + currentPrice.price;
    }, 0)
    return sumPrice;
}
console.log(shoppingPrice(wishlist));

//--- exercise 3
var titleArr = [];
function arrayTitle(wishlist) {
    wishlist.map(function (obj) {
        titleArr.push(obj.title);
    })
    return titleArr;
}

console.log(arrayTitle(wishlist));

// -----
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
// Explanation: The zero at the end is the initial value of a. a is known as the accumulator. 
// The "reduce" function iterates through each value in the array, passing in the accumulator "a" as well is the current item "c". 
// The right size of the fat arrow is the return value. 
// If yourboolvariable value is true, it will add 1 to a and return that. 
// If yourboolvariable value is false, it will simply return the previous value of a, ready to be passed in to the next iteration. 
// The final value of a becomes the result returned to count.

/* function totalVotes(arr) {
    var count = arr.reduce((a, c) => c.voted ? ++a : a, 0);
    return count;
} */

function totalVotes(arr) {
    var count = arr.reduce(function (total, current) {
        if (current.voted === true) {
            return total += 1;
        } else {
            return total;
        }
    }, 0)
    return count;
}
console.log(totalVotes(voters));

// ----- extra exercise
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist1 = [{
    title: "Tesla Model S",
    quantity: 2,
    price: 90000
},
{
    title: "4 carat diamond ring",
    quantity: 1,
    price: 45000
},
{
    title: "Fancy hacky Sack",
    quantity: 10,
    price: 5
},
{
    title: "Gold fidgit spinner",
    quantity: 2,
    price: 2000
},
{
    title: "A second Tesla Model S",
    quantity: 1,
    price: 90000
}
];

function shoppingSpree(wishlist) {
    var sum = wishlist.reduce(function (total, current) {
        return total + current.price * current.quantity;
    }, 0)
    return sum;
}

console.log(shoppingSpree(wishlist1));


    // Given an array of arrays, flatten them into a single array
    /**
     * Example: 
     * var arrays = [
     *    ["1", "2", "3"],
     *    [true],
     *    [4, 5, 6]
     *  ];
     * 
     * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
     */

    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ];
    function flatten(arr) {
        var joinArr = arr.reduce(function (prev, current) {
            return prev.concat(current);
        }, [])
        return joinArr;
    }

    console.log(flatten(arrays));

    /**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/
    let arr = ['c', 'b', 'a', 'b', 'a'];

    function countOccurrences(arr) {
        var countOcc = arr.reduce(function (allItem, item) {
            if (item in allItem) {
                if (allItem.hasOwnProperty(item)) {
                    allItem[item]++; //allItem[item] là value của item 
                    //item là key
                }
                console.log(allItem[item])
            } else {
                allItem[item] = 1;
            }
            return allItem;
        }, {})
        return countOcc;
    }
    console.log(countOccurrences(arr));

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

