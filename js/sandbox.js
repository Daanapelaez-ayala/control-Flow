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


// const password = 'p@ss';

// if(password.length >=12 && password.includes('@')){
//     console.log ('that password is mighty strong');

// } else if (password.length >=8 || password.includes('@') && password.length > 5){
//     console.log ('that password is long enough!');
// } else {
//     console.log ('password is not long enough');
// }


// // Break and continue

// const score= [50,25,0, 30, 100, 20, 10];

// for(let i=0; i < scores.length; i++){

//     if(score[i] === 0){
//         continue;
//     }

//     console.log('your score; ', scores [i]);
//     if(scores[i]=== 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// switch statements 
const grade = '50';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;

        case 'B':
            console.log('you got an B!');
            break;
     case 'C':
        console.log('you got an C!');
        break;

    case 'D':
            console.log('you got an D!');
            break;
     case 'E':
                console.log('you got an E!');
                break;

  default:
                    console.log('not a valid grade');
                    break;
}