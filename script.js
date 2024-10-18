/**
 * @function E1for3
 * @description Handles all button presses for the calculator and processes the input.
 */

let D_number = 0;
let number_1 = 0;
let calc = 0;
const display_Render = document.querySelector(".display");

function E1for3(keystroke) {
  switch (keystroke) {
    case 1:
      f4r21(1);
      break;
    case 2:
      f4r21(2);
      break;
    case 3:
      f4r21(3);
      break;
    case 4:
      f4r21(4);
      break;
    case 5:
      f4r21(5);
      break;
    case 6:
      f4r21(6);
      break;
    case 7:
      f4r21(7);
      break;
    case 8:
      f4r21(8);
      break;
    case 9:
      f4r21(9);
      break;
    case 0:
      f4r21(0);
      break;
    case 10:
      f4r21(10);
      break;
    case 11:
      f4r21(11);
      break;
    case 12:
      f4r21(12);
      break;
    case 13:
      f4r21(13);
      break;
    case 14:
      f4r21(14);
      break;
    case 15:
      f4r21(15);
      break;
  }
}

function f4r21(i) {
  let k = i;
  // console.log(i);
  if (i == 10 || i == 11 || i == 12 || i == 13) {
    number_1 = D_number;
    D_number = 0;
    calc = i;
    display_Render.value = 0;
  } else if (i == 14) {
    D_number = 0;
    display_Render.value = 0;
  } else if (i == 15) {
    switch (calc) {
      case 10:
        D_number = number_1 + D_number;
        display_Render.value = D_number;
        break;
      case 11:
        D_number = number_1 - D_number;
        display_Render.value = D_number;
        break;
      case 12:
        D_number = number_1 * D_number;
        display_Render.value = D_number;
        break;
      case 13:
        D_number = number_1 / D_number;
        display_Render.value = D_number;
        break;
    }
  } else {
    D_number = D_number * Number(10) + k;
    display_Render.value = D_number;
  }
}
