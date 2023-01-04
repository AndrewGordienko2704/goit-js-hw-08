import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formKey = "feedback-form-state";

 let json = localStorage.getItem(formKey);
let parsed = JSON.parse(json);
 
form.addEventListener('input', onInput)
form.addEventListener("submit", onSubmit)

defaultForm();

// console.log(parsed)


function onInput(){
         json = localStorage.getItem(formKey);
         parsed = JSON.parse(json);
        // console.log(parsed)
    localStorage.setItem(formKey, JSON.stringify({
       email : input.value,
       message : textarea.value
   }))
}
function onSubmit (evt){
     evt.preventDefault();
          json = localStorage.getItem(formKey);
         parsed = JSON.parse(json)
        console.log(parsed)
    localStorage.clear();
    input.value = '';
    textarea.value = '';
}
function defaultForm(){
         json = localStorage.getItem(formKey);
         parsed = JSON.parse(json);
// console.log(parsed) 
    if(parsed){
        input.value = parsed.email || '';
        textarea.value = parsed.message || '';
    }
}





















// // Import library
// import throttle from 'lodash.throttle';
// import * as storageLocal from './storage';

// // Initial constants
// const FB_FORM_STATE = 'feedback-form-state';
// const formData = {};

// // Get form element
// const formRef = document.querySelector('.feedback-form');

// // Call function checks localStorage
// populateForm();

// // Add event listener on form submit and input
// formRef.addEventListener('submit', onFormSubmit);
// formRef.addEventListener('input', throttle(onTextInput, 500));

// // Write on formData value event listener input  and save in localStorag
// function onTextInput(e) {
//   const { name, value } = e.target;

//   formData[name] = value;
//   storageLocal.save(FB_FORM_STATE, formData);
// }

// // Checks localStorage and writ in form save value
// function populateForm() {
//   const savedFormData = storageLocal.load(FB_FORM_STATE);

//   if (savedFormData) {
//     const { email = '', message = '' } = savedFormData;
//     formRef.email.value = email;
//     formRef.message.value = message;
    
//     formData.email = email;
//     formData.message = message;
//   }
// }

// // Clears the form and 'feedback-form-state' in localstorage
// function onFormSubmit(e) {
//   e.preventDefault();

//   console.log(formData);

//   e.currentTarget.reset();
//   storageLocal.remove(FB_FORM_STATE);

//   // Clears obj formData
//   for (const key in formData) {
//     if (formData.hasOwnProperty(key)) delete formData[key];
//   }
// }


















// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 1000));
// form.addEventListener('submit', onSubmitForm);

// const formData = {};

// function onFormData(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// function onSubmitForm(e) {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// })();


