// if statements
// const age = 25;

// if(age > 20){
//  console.log ('you are over 20 years old');
// }

// const ninjas= ['shuan', 'ryu', 'chun- li', 'yoshi'];

// if (ninjas.length > 4) {
// console.log("that's a lot of ninjas");
// }
// const password = 'p@ss';
// if (password.length >= 8) {
    // console.log ('that password is long enough!')




    // Day 2
// for Loops

// for(let i=0; i<5; i++) {
// Console.log('in loop:')}
// console.log('loop finish');
// const names = [ 'shuan', 'mario', 'luigi'];
// for(let i=0; i< names. length; i++){
//     // console.log(name[i]);
//     let html=<div>${names[i]}</div>
//     console.log(html);
// }

// do while loops
// let i=5;

// do{
//     console.log('val of i is: ', i);
//     i++;

// } while (i<5);


// logical operators


const password = 'p@ss';

if(password.length >=12 && password.includes('@')){
    console.log ('that password is mighty strong');

} else if (password.length >=8 || password.includes('@') && password.length > 5){
    console.log ('that password is long enough!');
} else {
    console.log ('password is not long enough');
}
