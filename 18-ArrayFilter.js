// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var greaterThanFive = arr.filter(function (item) {
        return item >= 5;
    })
    return greaterThanFive;
};

console.log(fiveAndGreaterOnly([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    var evenNumber = arr.filter(function (item) {
        return item % 2 === 0;
    })
    return evenNumber;
}

console.log(evensOnly([1, 2, 4, 5, 6, 7, 9, 10, 22, 33, 11]));

/**
* Give a list of students, filter out non-female 
*/

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
    var nonFemale = members.filter(function(item){
        const container = {};
        if (item.gender != 'female'){
        
            return container;
        };
    })
    return nonFemale;
}

console.log(filterOutFemales(members));