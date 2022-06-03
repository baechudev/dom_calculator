// Assign each element in HTML into each variable.
const clear = document.querySelector('.main-area-clear');
const backspace = document.querySelector('.main-area-backspace');
const division = document.querySelector('.main-area-division');
const multiple = document.querySelector('.main-area-multiple');
const substraction = document.querySelector('.main-area-substraction');
const addition = document.querySelector('.main-area-addition');
const enter = document.querySelector('.main-area-enter');
const one = document.querySelector('.main-area-one');
const two = document.querySelector('.main-area-two');
const three = document.querySelector('.main-area-three');
const four = document.querySelector('.main-area-four');
const five = document.querySelector('.main-area-five');
const six = document.querySelector('.main-area-six');
const seven = document.querySelector('.main-area-seven');
const eight = document.querySelector('.main-area-eight');
const nine = document.querySelector('.main-area-nine');
const zero = document.querySelector('.main-area-zero');
const value = document.querySelector('.main-area-result-value');

// Temporary variables to be used while calculating.
var tempValue = '';
var tempFinal = '';
var toDo = '';

const arithmetic = (type) => {
  if (toDo === '' && tempValue !== '') {
    tempFinal = tempValue;
    tempValue = '';
    toDo = type;
  }
};

const inputNumber = (num) => {
  if (tempValue !== '0') {
    tempValue += num;
    value.innerHTML = tempValue;
  } else {
    tempValue = num;
  }
};

// clearNumber: to erase all input and display zero in the calculator.
const clearNumber = () => {
  tempValue = '';
  value.innerHTML = 0;
};

// deleteDigit: to get rid of the last digit in the number.
const deleteDigit = () => {
  if (tempValue !== '' && tempValue !== '0') {
    tempValue = tempValue.substring(0, tempValue.length - 1);
    value.innerHTML = tempValue.length === 0 ? 0 : tempValue;
  }
};

clear.addEventListener('click', clearNumber);
backspace.addEventListener('click', deleteDigit);
division.addEventListener('click', function () {
  arithmetic('division');
});

// multiple: to store the first entered number into tempFinal and get tempValue ready for the next number, and assign arithmetic to be used in enter to multiple.
multiple.addEventListener('click', function () {
  arithmetic('multiple');
});

// substraction: to store the first entered number into tempFinal and get tempValue ready for the next number, and assign arithmetic to be used in enter to substraction.
substraction.addEventListener('click', function () {
  arithmetic('substraction');
});

// addition: to store the first entered number into tempFinal and get tempValue ready for the next number, and assign arithmetic to be used in enter to addition.
addition.addEventListener('click', function () {
  arithmetic('addition');
});

// enter: based on the value in the arithmetic, it executes proper arithmetic between numbers stored in the tempFinal and tempValue.
//        if the length of the number is over 15, it will covert in exponential number and display the result on the calculator.
enter.addEventListener('click', function () {
  if (toDo !== '') {
    if (toDo === 'division') {
      try {
        if (tempValue === '0') {
          throw new Error('Dividing by 0 is Impossible, Please click `Clear`');
        }
        tempFinal = Number(tempFinal) / Number(tempValue);
      } catch (err) {
        alert(err);
      }
    } else if (toDo === 'multiple') {
      tempFinal = Number(tempFinal) * Number(tempValue);
    } else if (toDo === 'substraction') {
      tempFinal = Number(tempFinal) - Number(tempValue);
    } else {
      tempFinal = Number(tempFinal) + Number(tempValue);
    }
    tempFinal = tempFinal.toString();
    if (tempFinal.length > 15) {
      tempFinal = Number(tempFinal).toExponential(15);
    }
    value.innerHTML = tempFinal;
    tempValue = '0';
    toDo = '';
  }
});

// numbers: attach each number at the end of the tempValue which will be displayed on the calculator.
one.addEventListener('click', function () {
  inputNumber(1);
});

two.addEventListener('click', function () {
  inputNumber(2);
});

three.addEventListener('click', function () {
  inputNumber(3);
});

four.addEventListener('click', function () {
  inputNumber(4);
});

five.addEventListener('click', function () {
  inputNumber(5);
});

six.addEventListener('click', function () {
  inputNumber(6);
});

seven.addEventListener('click', function () {
  inputNumber(7);
});

eight.addEventListener('click', function () {
  inputNumber(8);
});

nine.addEventListener('click', function () {
  inputNumber(9);
});

zero.addEventListener('click', function () {
  inputNumber(0);
});
