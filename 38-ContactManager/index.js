/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync = require('readline-sync');
var fs = require('fs');
var contactArr = [];

function showMenu() {
    console.log('---- Contact Manager App ----');
    console.log('1. Show All Contact');
    console.log('2. Create New Contact');
    console.log('3. Edit Existing Contact');
    console.log('4. Delete Contact');
    console.log('5. Find Contact By Name/Phone');
    console.log('6. Save & Exit');

    var options = readlineSync.question('> ');
    switch (options) {
        case '1':
            showContactList();
            showMenu();
            break;
        case '2':
            createNewContact();
            showMenu();
            break;
        case '3':
            console.log('3 selected');
            showMenu();
            break;
        case '4':
            deleteContact();
            showMenu();
            break;
        case '5':
            console.log('5 selected');
            showMenu();
            break;
        case '6':
            saveContact();
            break;
        default:
            console.log('Invalid Options');
            showMenu();
            break;
    }
}

function loadData() {
    var contactData = fs.readFileSync('./contact.json', { encoding: 'utf-8' });
    contactArr = JSON.parse(contactData);
}

function showContactList() {
    for (var contact of contactArr) {
        console.log('Name: ' + contact.name + ', phone: ' + contact.phone);
    }
}

function createNewContact() {
    var newName = readlineSync.question('Enter name: ');
    var newPhone = readlineSync.question('Enter phone number: ');
    
    var newContact = {
        name: newName,
        phone: newPhone
    }

    contactArr.push(newContact);
    /* for(var i=0; i<contactArr.length; i++){
        if(contactArr[i].name === newContact.name){
            console.log('Duplicated name and phone number')
        } else {
            contactArr.push(newContact);
            break;
        }
    } */
}


function deleteContact() {
    var name = readlineSync.question('Delete contact, type name: ');
    for (var i = 0; i < contactArr.length; i++) {
        if (contactArr[i].name === name) {
            contactArr.splice(i, 1);
            console.log('Delete Successfully');
        }
    }
}

function saveContact() {
    var contactStr = JSON.stringify(contactArr);
    fs.writeFileSync('./contact.json', contactStr);
}

function main() {
    loadData();
    showMenu();
}

main();