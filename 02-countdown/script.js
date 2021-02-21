const mins__count = document.querySelector('.js-mins');
const seconds__count = document.querySelector('.js-seconds');

const start = document.querySelector('.js-start');
const reset = document.querySelector('.js-reset');

var time = document.forms[0].elements['radio'].value;


let secondInterval;
let second = 60;
let minute = time;



document.querySelector('.timer').addEventListener('change', () => {

    globalThis.time = document.forms[0].elements['radio'].value;
    mins__count.innerHTML = addZero(time);
})
mins__count.innerHTML = addZero(time);
seconds__count.innerHTML = "00";

start.addEventListener('click', startTimer);
reset.addEventListener('click', stopTimer);

function startTimer() {
    minute = time;

    start.disabled = true;
    reset.disabled = false;

    // seconds();

    document.querySelectorAll('.timer .input').forEach((input) => {
        // console.log(input);
        if (!input.disabled) {
            input.disabled = true;
        }

    })

    secondInterval = setInterval(seconds, 1000);

}
function stopTimer() {

    second = 3;
    minute = time;

    mins__count.innerHTML = addZero(minute);
    seconds__count.innerHTML = addZero(0);

    start.disabled = false;
    reset.disabled = true;

    document.querySelectorAll('.timer .input').forEach((input) => {
        console.log(input);
        if (input.disabled) {
            input.disabled = false;
        }
    })


    clearInterval(secondInterval);

}

// console.log(second, "seconds");
function seconds() {
    second--;
    // console.log(second);
    if (second < 0) {
        second = 59;
        // console.log(typeof +minute);
        // console.log(typeof +minute, "increment");
        // console.log(typeof +minute, "increment");
        minute = +minute - 1;
        if (minute < 0) {
            stopTimer();
            return false;
        }
        mins__count.innerHTML = addZero(minute);
    }

    seconds__count.innerHTML = addZero(second);
    console.log({ minute, second });
}

// console.log(time);
// console.log(document.forms[0].elements['radio'].value);


// Choose the "red" option
// radios.value = 'red';


function addZero(number) {
    return number < 10 ? '0' + number : number;
}






















// const date = new Date();

// // console.log(date.getDate());
// // console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// const secondInterval = setInterval(seconds, 1000)

// let second = 5;
// let minute = 2;
// document.querySelector('.mins__count').innerHTML = minute
// document.querySelector('.seconds__count').innerHTML = second

// function seconds() {
//     if (second < 0) {
//         if (minute = 0) {
//             document.querySelector('.mins__count').innerHTML = 00;
//             document.querySelector('.seconds__count').innerHTML = 00;
//             clearInterval(secondInterval)
//             return
//         }
//         minute--;
//         // finally an Explanation i=on diffrence between ++i vs --i
//         console.log({minute});
//         document.querySelector('.mins__count').innerHTML = minute;
//         second = 5;
//     }
//     document.querySelector('.seconds__count').innerHTML = second--
// }

// function startTimer() {

// }
// function stopTimer() {

// }