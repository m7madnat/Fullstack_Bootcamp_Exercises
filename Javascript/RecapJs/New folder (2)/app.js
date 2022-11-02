/** 1)
  Create an input field and a button when the button is clicked 
  call  function that receives 'number' as a parameter (from input field) 
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive' 
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */
//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions

const inputField = document.querySelector('input');
const button = document.querySelector('button');

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 17) {
        resolve(`You can drive`);
      } else {
        reject(`You're too young to drive`);
      }
    }, 2000);
  });
};

const checkAgeAsync = async (age) => {
  try {
    const age = await checkAge(inputField.value);
    alert(age);
  } catch (err) {
    alert(err);
  }  
  // checkAge(inputField.value)
  //   .then((res) => alert(res))
  //   .catch((err) => alert(err));
}
const setEvents = () => {
  button.addEventListener('click', checkAgeAsync);
}

setEvents();

