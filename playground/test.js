var name = 'Max';
console.log(name);

const summarizeUser = (userName, userAge, userHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ', hobby is ' + userHobby;
}

console.log(summarizeUser(name, 20, 'play game'));
const person = {
    name : 'MMM',
    age : 30,
    greet : () => 'Hi, I\'m ' + this.name 
}

console.log(person.greet());

const hobbies = ['Sports', 'Cooking', true, person];
console.log(hobbies);
let i = 0;
console.log(hobbies.map( hobby => '[' + (++i) + '] : ' + hobby));
