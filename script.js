//refernce to the form and all the inputs
let form = document.querySelector('form');
let email = document.querySelector('#email');
let country = document.querySelector('#country');
let zipcode = document.querySelector('#zipcode');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');

//adding an input event listener to each input control. when ever user types something, each input is checked against it's dedicated input checking function. those functions display the error/instructions
email.addEventListener('input', checkEmail);
country.addEventListener('input', checkCountry);
zipcode.addEventListener('input', checkzipcode);
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input',checkConfirmPassword);

//adding event listener to the form. when submitted, checkAll function is run. if it returns false, that means that atleast one(or more) input is filled incorrectly. the form is not submitted in this scenario, otherwise it is submitted 
form.addEventListener('submit', (event) => {
    if (!checkAll()) {
        event.preventDefault();
    }
});

//checks if the email input is corretly filled. if its not, adds text to the instruction span and returns false. otherwise, clears instruction span and returns true
function checkEmail() {
    let emailError = document.querySelector('input#email + span');
    //email checking
    if (email.validity.valueMissing) {
        emailError.textContent = "Email is required";
        return false;
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = "Use email format with '@'";
        return false;
    }
    else if (email.validity.tooShort) {
        emailError.textContent = `${email.minLength} characters required. You entered ${email.value.length}`;
        return false;
    }
    else {
        emailError.textContent = "";
        return true;
    }
}

//checks if the country input is corretly filled. if its not, adds text to the instruction span and returns false. otherwise, clears instruction span and returns true
function checkCountry() {
    let countryError = document.querySelector('input#country + span');
    //country checking
    if (country.validity.valueMissing) {
        countryError.textContent = "Country is required";
        return false;
    }
    else {
        countryError.textContent = "";
        return true;
    }
}

//checks if the zipcode input is corretly filled. if its not, adds text to the instruction span and returns false. otherwise, clears instruction span and returns true
function checkzipcode() {
    let zipcodeError = document.querySelector('input#zipcode + span');
    //password checking

    //a regular expression which checks if the zipcode contains numbers only.
    //if not, /[^0-9]/.test(zipcode.value) return true
    if (/[^0-9]/.test(zipcode.value)) {
        zipcodeError.textContent = "Zipcode should contain numbers only";
        return false;
    }
    else {
        zipcodeError.textContent = "";
        return true;
    }
}

//checks if the password input is corretly filled. if its not, adds text to the instruction span and returns false. otherwise, clears instruction span and returns true
function checkPassword() {
    let passwordError = document.querySelector('input#password + span');
    //Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    //password checking
    if(password.validity.valueMissing) {
        passwordError.textContent = "Password is required";
        return false;
    }
    else if (!passwordRegEx.test(password.value)) {
        passwordError.textContent = "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
        return false;
    }
    else {
        passwordError.textContent = "";
        return true;
    }
}

//checks if the confirm password input is corretly filled. if its not, adds text to the instruction span and returns false. otherwise, clears instruction span and returns true
function checkConfirmPassword() {
    let confirmPasswordError = document.querySelector('input#confirm-password + span');

    // confirm password checking
    if(password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Password does not match";
        return false;
    }
    else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

//returns true if all inputs are correctly filled. if even one is not, reurns false.
//this function first runs all the check functions so that any errors in input can be displayed to the user. this function is when submitting the form
function checkAll() {
    let emailEr = checkEmail();
    let countryEr = checkCountry();
    let zipcodeEr = checkzipcode(); 
    let passwordEr = checkPassword();
    let confirmPasswordEr = checkConfirmPassword();
    
    return (emailEr && countryEr && zipcodeEr && passwordEr && confirmPasswordEr);
}