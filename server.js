const userName = 'Harry';
//let age = 11;
//const isWizard = true;



//if(age < 11) {
    //console.log(`${userName}, you are too young to become a wizard.`);
//}
//else if (age > 11) {
    //console.log(`Have you missed your letter from Hogwarts, ${userName}?`);
//}
//else {
    //console.log(`Congratulations, ${userName}! You are a wizard now!`);
//}

//&& - AND 
//if(userName === 'Harry' && age === 11 && isWizard) { 
    //console.log(`${userName}, here is your letter from Hogwarts.`); 
//} else { 
    //console.log(`You are not a Wizard, ${userName}. Here is your Amazon package.`); }

//|| OR 
//if(userName !== 'Harry' || age !== 11 || !isWizard) { 
    //console.log(`You are not a wizard, ${userName}. Here is your Amazon package.`); 
//} else { 
    //console.log(`${userName}, here is your letter from Hogwarts.`); }

//for(let i = 0; i < 5; i++) {
    //console.log('I am a wizard now! Hurray!');
//}

let friends = ['Ron', 'Hermione', 'Hedwig'];
friends.push('Draco');

console.log(`${userName} has got ${friends.length} friends.`);

for(let i = 0; i < friends.length; i++) {
    if(friends[i] === 'Draco') {
        weAreNotFriends(friends[i]);
        continue;
    }
    friends[i] = friends[i] + '*';
    greeting(friends[i]);
    //console.log(`${i + 1}. ${friends[i]}`);
}

//friends.forEach(friend => {
    //friend = friend + '*';
    //console.log(friend);
//});

friends.forEach(friend => {
    console.log(friend);
});

function greeting(friendsName) {
    console.log(`Hello!, ${friendsName}!`);
}

function weAreNotFriends(enemyName) {
    console.log(`Go away, ${enemyName}! We are not friends!`);
}