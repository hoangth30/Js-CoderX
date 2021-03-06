// Reformatting Array Objects with array.map
var rectangles = [
    { name: 's1', width: 5, height: 10 },
    { name: 's2', width: 10, height: 20 },
    { name: 's3', width: 4, height: 16 }
];

var newS = rectangles.map(function (item) {
    const container = {};
    container[item.name] = item.width * item.height;
    return container;
}
);

const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})
console.log(usersByLikes);
console.log(newS);

// Exercise 2
var users = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16

    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

//khai báo arr trước để store name
var nameArr = [];
function namesOnly(arr) {
    var userName = arr.map(function (itemName) {
        nameArr.push(itemName.name);
    })
    //trả về arr để in ra 1 array chứa 5 name
    //nếu trả về userName thì sẽ in ra 5 object chứa 5 name
    return nameArr;
};

console.log(namesOnly(users));

// Exercise 3
var usersArr = [];
function readyToPutInTheDOM(arr) {
    var userObj = arr.map(function (userItem) {
        usersArr.push('<h1>'+userItem.name+'</h1><h2>'+userItem.age+'</h2>');
    })
    return usersArr;
}

console.log(readyToPutInTheDOM(users));
// Exercise 1

function tripple(num) {
    return num * 3;
}

function multiply(numbers) {
    var trippleNum = numbers.map(tripple);
    return trippleNum;
};

console.log(multiply([1, 2]));