let userList = JSON.parse(localStorage.getItem('userList')) || [];
let id = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1; 

function createUser(firstName, lastName, email, message) {
    let newUser = { id: id++, firstName: firstName, lastName: lastName, email: email, message: message };
    userList.push(newUser);
    localStorage.setItem('userList', JSON.stringify(userList));
}

function sendMessage() {
    let firstName = document.getElementById('fname').value.trim();
    let lastName = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let messageError = document.getElementById('message-error');

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    let isValid = true;

    if (!nameValidator(firstName) || !nameValidator(lastName)) {
        nameError.innerHTML = 'Invalid name, only letters allowed';
        isValid = false;
    }
    if (!emailValidator(email)) {
        emailError.innerHTML = 'Please enter a valid email address';
        isValid = false;
    }
    if (message.length < 10) {
        messageError.innerHTML = 'Your message must be at least 10 characters long';
        isValid = false;
    }

    if (isValid) {
        createUser(firstName, lastName, email, message);
        clearInputs();
        window.location.href = 'message.html';
    }
}

function nameValidator(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function emailValidator(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearInputs() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}


window.onload = read;

function read() {
    let fullName = document.getElementById('full-name')
    let userEmail = document.getElementById('user-email')
    let userMessage = document.getElementById('user-message')

    let firstName = localStorage.getItem('firstName')
    let lastName = localStorage.getItem('lastName')
    let email = localStorage.getItem('email')
    let message = localStorage.getItem('message')

    if (fullName) fullName.textContent = `${firstName} ${lastName}`
    if (userEmail) userEmail.textContent = email
    if (userMessage) userMessage.textContent = message
}

function nameValidator(name) {
    let validator = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/
    return validator.test(name);
}

function emailValidator(email) {
    let validator = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
    return validator.test(email)
}

function clearInputs() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function subscribe() {
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError')

    if(email.value.length == 0) {
        emailError.innerHTML = 'Please enter your email address'
        emailError.classList.add('error-message');
        emailError.classList.remove('success-message');
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)  
    } else if(!emailValidator(email.value)) {
        emailError.innerHTML = 'Invalid email'
        emailError.classList.add('error-message');
        emailError.classList.remove('success-message');
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)
    } else {
        localStorage.setItem('email-subscribe', email.value);
        email.value = ''
        emailError.innerHTML = 'Your email has been successfully registered'
        emailError.classList.add('success-message');
        emailError.classList.remove('error-message');
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)
    }
}