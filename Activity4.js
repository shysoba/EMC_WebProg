function checksUser() {
    const usernameInput = document.getElementById('username');
    const resultDiv = document.getElementById('result');
    const requirementsDiv = document.getElementById('reqs');
    const username = usernameInput.value;

    // checks un
    if (username.length >= 6 && /^[a-zA-Z0-9_]+$/.test(username)) {
        resultDiv.textContent = 'Valid username!';
        requirementsDiv.innerHTML = '';
    } else {
        resultDiv.textContent = '';
        requirementsDiv.innerHTML = '<div style="color: red;"> <center> Username must be at least 6 characters and not contain special characters except _ </div>';
    }
}

function checksPass() {
    const passwordInput = document.getElementById('password');
    const resultDiv = document.getElementById('result');
    const requirementsDiv = document.getElementById('reqs');
    const password = passwordInput.value;

    // checks pass
    if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) &&
        /\d/.test(password) && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        resultDiv.textContent = 'Valid password!';
        requirementsDiv.innerHTML = '';
    } else {
        resultDiv.textContent = '';
        requirementsDiv.innerHTML = '<div style="color: red;">Password must be at least 8 characters <br>A combination of upper and lower case <br>Must contain at least 1 digit <br>Must have at least 1 special character </div>';
    }
}

function submit() {
    const resultDiv = document.getElementById('result');
    const requirementsDiv = document.getElementById('reqs');
    
    // checks both user and pass
    // soba: lawd...
    const usernameValid = (document.getElementById('username').value.length >= 6 && /^[a-zA-Z0-9_]+$/.test(document.getElementById('username').value));
    const passwordValid = (document.getElementById('password').value.length >= 8 && /[a-z]/.test(document.getElementById('password').value) &&
        /[A-Z]/.test(document.getElementById('password').value) && /\d/.test(document.getElementById('password').value) &&
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(document.getElementById('password').value));

    if (usernameValid && passwordValid) {
        requirementsDiv.innerHTML = '!';
        resultDiv.textContent = 'Complete requirements!';
    } else {
        let missingReqs = 'Missing requirements:';
        
        if (!usernameValid) {
            missingReqs += '<br>Username must be at least 6 characters and not contain special characters except _.';
        }

        if (!passwordValid) {
            missingReqs += '<br>Password must be at least 8 characters, a combination of upper and lower case, contain at least 1 digit, and at least 1 special character.';
        }

        requirementsDiv.innerHTML = '<div style="color: red;">' + missingReqs + '</div>';
        resultDiv.textContent = '';
    }
}
