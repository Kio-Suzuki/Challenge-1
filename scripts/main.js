let userList = JSON.parse(localStorage.getItem('userList')) || []
let id = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1

let subscriberList = JSON.parse(localStorage.getItem('subscriberList')) || []
let subId = 1 


function createUser(firstName, lastName, email, message) {
    let newUser = { id: id++, firstName: firstName, lastName: lastName, email: email, message: message }
    userList.push(newUser)
    localStorage.setItem('userList', JSON.stringify(userList))
}


function createSubscriber(email) {
    let newSubscriber = {subId: subId++, email: email}
    subscriberList.push(newSubscriber)
    localStorage.setItem('subscriberList', JSON.stringify(subscriberList))
}


function sendMessage() {
    let firstName = document.getElementById('fname').value.trim()
    let lastName = document.getElementById('lname').value.trim()
    let email = document.getElementById('email').value.trim()
    let message = document.getElementById('message').value.trim()
    let nameError = document.getElementById('name-error')
    let emailError = document.getElementById('email-error')
    let messageError = document.getElementById('message-error')

    nameError.innerHTML = ''
    emailError.innerHTML = ''
    messageError.innerHTML = ''

    let isValid = true

    if (!nameValidator(firstName) || !nameValidator(lastName)) {
        nameError.innerHTML = 'Invalid name, only letters allowed'
        setTimeout(() => {
            nameError.innerHTML = ''
        },3000)
        isValid = false
    }
    if (!emailValidator(email)) {
        emailError.innerHTML = 'Please enter a valid email address'
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)
        isValid = false
    }
    if (message.length < 10) {
        messageError.innerHTML = 'Your message must be at least 10 characters long'
        setTimeout(() => {
            messageError.innerHTML = ''
        },3000)
        isValid = false
    }

    if (isValid) {
        createUser(firstName, lastName, email, message)
        clearInputs()
        window.location.href = 'message.html'
    }
}

function nameValidator(name) {
    return /^[a-zA-Z]+$/.test(name)
}

function emailValidator(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function clearInputs() {
    document.getElementById('fname').value = ''
    document.getElementById('lname').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
}

window.onload = read


function subscribe() {
    let email = document.getElementById('subscribeEmail')
    let emailError = document.getElementById('emailError')

    if(email.value.length == 0) {
        emailError.innerHTML = 'Please enter your email address'
        emailError.classList.add('error-message')
        emailError.classList.remove('success-message')
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)  
    } else if(!emailValidator(email.value)) {
        emailError.innerHTML = 'Invalid email'
        emailError.classList.add('error-message')
        emailError.classList.remove('success-message')
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)
    } else {
        createSubscriber(email.value)
        email.value = ''
        emailError.innerHTML = 'Your email has been successfully registered'
        emailError.classList.add('success-message')
        emailError.classList.remove('error-message')
        setTimeout(() => {
            emailError.innerHTML = ''
        },3000)
    }
}

function read() {
    let fullName = document.getElementById('full-name')
    let userEmail = document.getElementById('user-email')
    let userMessage = document.getElementById('user-message')

    let list = JSON.parse(localStorage.getItem('userList'))
        
    fullName.textContent = list[list.length - 1].firstName + ' ' + list[list.length - 1].lastName
    userEmail.textContent = list[list.length - 1].email
    userMessage.textContent = list[list.length - 1].message
}

const button = document.getElementById('submitButton')
button.style.opacity = 0.1
button.disabled = true

let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let email = document.getElementById('email')
let message = document.getElementById('message')

const form = [firstName, lastName, email, message]

function checkForm() {

    let fieldsFilled = true
  
    form.forEach((field) => {
      if (field.value === '') {
        fieldsFilled = false
      }
    });
  
    if (fieldsFilled) {
      button.removeAttribute('disabled')
      button.style.opacity = 1
      button.style.cursor = "pointer"
    } else {
      button.disabled = true
    }
}

form.forEach((field) => {
    field.addEventListener('input', checkForm)
  })