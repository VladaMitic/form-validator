const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let isMatching = false;

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();
    //Style main message on error
    if(!isValid) {
        message.textContent = 'Please fill out all fields'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    //Check if passwords match
    if(password1El.value === password2El.value) {
        isMatching = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        isMatching = false;
        message.textContent = 'Password not matching';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    //validate form if password is match
    if(isValid && isMatching) {
        message.textContent = "Successfully Registered!";
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        webiste: form.webiste.value,
        password: form.password.value
    };
    //do something with data
    console.log(user);
}

function processForm(e) {
    e.preventDefault();
    //Validate form
    validateForm();
    //Store data from form if valid
    if(isValid && isMatching) {
        storeFormData();
    }
}

//Event listener
form.addEventListener('submit', processForm);