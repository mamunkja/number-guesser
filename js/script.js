let btn = document.querySelector('#show_prompt');
let result_div = document.querySelector('#result');
const max = 11;
let result;
const chance = 3;
let msg;

btn.addEventListener('click', promptDialog);
document.addEventListener('DOMContentLoaded', setRandomNum);

function setRandomNum() {
    result = getRandomInt(max);
    if(result == 0) {
        result = 1;
    }
}

function getRandomInt(max) {
    //will return 0 to max-1
    return Math.floor(Math.random() * max);
  }

function promptDialog(e) {
    setRandomNum();
    let count = 0;
    let promptNum = prompt('1. Please enter your guess number between 1 and 10 \n 2. You have 3 chances to guess the number!');
    count++;
    alert(result);

    while(count < 3){
        if(promptNum > result) {
            promptNum = prompt(`
            1. Currect answer is smaller
            2. You have ${chance - count} chance(s)
            3. Please guess the number again!`);
        } else if(promptNum < result) {
            promptNum = prompt(`
            1. Currect answer is greater
            2. You have ${chance - count} chance(s)
            3. Please guess the number again!`);
        }
        else {
            msg = 'Hurray you win';         
            break;
        } 
        count++;       
    }
    
    if(promptNum != result){
        msg = 'You Lose!!!, Please start game again';
        result_div.className = 'error';
        
    } else {        
        result_div.className = 'success';      
    }
    alert(msg);
    result_div.innerHTML = msg;
    e.preventDefault();
}