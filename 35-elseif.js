/* Calculate bus ticket fee
    age < 15: discount 20%
    age > 60: discount 10%
    otherwise 10000/ticket
    param {object} person */

//create object


function getTicketFee(person){
    var baseTicket = 10000;
    if(person.age < 16){
        return baseTicket*0.8;
    } else if (person.age >= 60){
        return baseTicket*0.9;
    } else {
        return baseTicket;
    }
}

var person = {
    name: "akai",
    age: 90
};

var fee = getTicketFee(person)
console.log(fee)