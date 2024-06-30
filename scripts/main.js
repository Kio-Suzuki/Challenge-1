function sendMessage() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let messageError = document.getElementById('message-error');

    // Limpar mensagens de erro antes de validar novamente
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    let isValid = true;

    if (!nameValidator(firstName.value) || !nameValidator(lastName.value)) {
        nameError.innerHTML = 'Invalid name, only letters allowed';
        isValid = false;
    }
    if (!emailValidator(email.value)) {
        emailError.innerHTML = 'Please enter a valid email address';
        isValid = false;
    }
    if (message.value.length < 10) {
        messageError.innerHTML = 'Your message must be at least 10 characters long';
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('message', message.value);
        clearInputs();
        window.location.href = 'message.html';
    }
}

window.onload = read;

function read() {
    let fullName = document.getElementById('full-name');
    let userEmail = document.getElementById('user-email');
    let userMessage = document.getElementById('user-message');

    let firstName = localStorage.getItem('firstName') || 'N/A';
    let lastName = localStorage.getItem('lastName') || 'N/A';
    let email = localStorage.getItem('email') || 'N/A';
    let message = localStorage.getItem('message') || 'N/A';

    if (fullName) fullName.textContent = `${firstName} ${lastName}`;
    if (userEmail) userEmail.textContent = email;
    if (userMessage) userMessage.textContent = message;
}

function nameValidator(name) {
    let validator = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    return validator.test(name);
}

function emailValidator(email) {
    let validator = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    return validator.test(email);
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


    if(!emailValidator(email.value)) {
        emailError.innerHTML = 'Erro'
    } else {
        clearInputs()
    }

}