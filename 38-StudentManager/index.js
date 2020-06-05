/* Requirement:
A student manager app can be able to:
- Show current student list
- Add new student
- Save and exit

E.g: Menu on terminal:
1. Show All Students
2. Create new student
3. Save & Exit */

var readlineSync = require('readline-sync');
var fs = require('fs');



function showMenu() {
    console.log('---- Student Manager App ----');
    console.log('1. Show All Students');
    console.log('2. Create New Student');
    console.log('3. Save & Exit');

    var options = readlineSync.question('> ');
    switch (options) {
        case '1':
            showAllStudent();
            showMenu();
            break;
        case '2':
            createStudent();
            showMenu();
            break;
        case '3':
            saveStudent();
            break;
        default:
            console.log('Your option is not valid');
            showMenu();
            break;
    }
}
var studentArr = [];
function loadData(){
    var data = fs.readFileSync('./data.json',{encoding: 'utf-8'})
    studentArr = JSON.parse(data);
}

function showAllStudent(){
    for (var i = 0; i<studentArr.length;i++){
        console.log(studentArr[i].name, studentArr[i].age);
    }
}

function createStudent(){
    var name = readlineSync.question('Please, enter name: ');
    var age = readlineSync.question('Please, enter age: ');
    var newStudent = {
        name: name,
        age: parseInt(age)
    }
    studentArr.push(newStudent);
}

function saveStudent(){
    var content = JSON.stringify(studentArr);
    fs.writeFileSync('./data.json', content)
}

function main() {
    loadData();
    showMenu();
}

main();