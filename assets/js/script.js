const user = {
    username: 'user1',
    password: 'password123'
};

const loginForm = document.getElementById('login-form');
const verifyForm = document.getElementById('verify-form');
const loginContainer = document.getElementById('login-container');
const verifyContainer = document.getElementById('verify-container');
const messages = document.getElementById('messages');
const verifyMessages = document.getElementById('verify-messages');
const showCode = document.getElementById('show-code');

let verificationCode = null;

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    messages.innerHTML = '';

    if (username === user.username && password === user.password) {
        verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        showCode.innerHTML = `Código de verificación: ${verificationCode}`;
        messages.innerHTML = '<li class="success">Contraseña verificada. Se ha enviado un código de verificación.</li>';
        loginContainer.style.display = 'none';
        verifyContainer.style.display = 'block';
    } else {
        messages.innerHTML = '<li class="danger">Nombre de usuario o contraseña incorrectos.</li>';
    }
});

verifyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;

    verifyMessages.innerHTML = '';

    if (code === verificationCode) {
        verifyMessages.innerHTML = '<li class="success">Código verificado. Autenticación completa. Acceso concedido.</li>';
        window.location.href = 'bienvenido.html'; // Redireccionar a la página de bienvenida
    } else {
        verifyMessages.innerHTML = '<li class="danger">Código incorrecto. Acceso denegado.</li>';
    }
});

