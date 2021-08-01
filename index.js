// Code your solutions in this file

// uses let instead of const because the variable is incremented

/*for (let age = 30; age < 40; age++){
   console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i=0; i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);
*/

let cards = [];

function writeCards(names, eventName){
    for (let i=0; i< names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

writeCards(names, eventName);

function countDown(i){
    let number = i
    while(number>=0){
        console.log(number--);
    }
}