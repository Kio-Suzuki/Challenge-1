/*
- Os campos de formulário devem ser todos validados com **JavaScript**, isso é válido para todos os campos para preenchimento nas duas páginas:
    - Enquanto todos os campos não forem preenchidos, o botão deve estar desabilitado;
    - Campos de First Name e Last Name não podem ter números ou caracteres especiais;
    - Validar o campo de e-mail com regex;
    - O campo de Message deve ter pelo menos 10 caracteres;
    - Ao enviar o formulário, direcionar pra uma página de sucesso com as informações que foram preenchidas.
- Armazene os dados do formulário no LocalStorage.

*/ 

function sendMessage() {

    let firstName = document.getElementById('fname')
    let lastName = document.getElementById('lname')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    let nameError = document.getElementById('nameError')
    let emailError = document.getElementById('emailError')
    let messageError = document.getElementById('messageError')
    let successMessage = document.getElementById('successMessage')

    if(!nameValidator(firstName.value) || !nameValidator(lastName.value)) {
        nameError.innerHTML = 'Invalid name' 
    } else if (!emailValidator(email.value)) {
        emailError.innerHTML = 'Por favor entre com um email válido'
    } else if (message.value.length < 10) {
        messageError.innerHTML = 'O campo de Message deve ter pelo menos 10 caracteres'
    } else {
        localStorage.setItem('firstName', firstName.value)
        localStorage.setItem('lasttName', lastName.value)
        localStorage.setItem('email', email.value) 
        localStorage.setItem('message', message.value) 
        successMessage.innerHTML = 'Sua mensagem foi enviada com sucesso!' 
        clearInputs() 
    }
}

function nameValidator(name) {
    let validator = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    return validator.test(name)
}

function emailValidator(email) {
    let validator = /^[a-z0-9.]+@[a-z0-9/+\.[a-z]+\.([a-z]+)?$/i;
    return validator.test(email)
}

function subscribe(email) {

    let emailError = document.getElementById('emailError')

    if(emailValidator(email)) {
        emailError.innerHTML = 'Sucesso'    
    } else {
        emailError.innerHTML = 'Falha'   
    }
}

function clearInputs() {
    document.getElementById('fname').value = ''
    document.getElementById('lname').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
}