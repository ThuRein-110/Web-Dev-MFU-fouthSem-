let captcha;

function generateCaptcha() {
    captcha = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('captchaValue').innerText = captcha;
};

function register(){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userCaptcha = document.getElementById('captchaInput').value;
    const errorMessage = document.getElementById('message');

    errorMessage.className = '';

    if (password !== confirmPassword) {
        errorMessage.className = 'error';
        errorMessage.innerText = 'Passwords do not match.';
        return;
    }
    
    else if  (userCaptcha != captcha) {
        errorMessage.className = 'error';
        errorMessage.innerText = 'Captcha is incorrect.';
        generateCaptcha();
        return;
    }

    else{
        errorMessage.className = 'success';
        errorMessage.innerText = 'Registration successful!';
        return;
    }
    
};

window.onload = function() {
    generateCaptcha();
};