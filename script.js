let form = document.querySelector('form');
let email = document.querySelector('#email');
let country = document.querySelector('#country');
let zipCode = document.querySelector('#zipcode');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');

email.addEventListener('input', () => {
    checkEmail();
})

form.addEventListener('submit', (event) => {
    if(!checkAll()) {
        event.preventDefault();
    }
} )

//checks if the email input is corretly filled. if its not, adds text to the instruction span and returns false. otherwise, clears instruction span and returns true
function checkEmail() {
    let emailError = document.querySelector('input#email + span');
    //email checking
    if(email.validity.valueMissing) {
        emailError.textContent = "Email is required";
        return false;
    }
    else if(email.validity.typeMismatch) {
        emailError.textContent = "Use email format with '@'";
        return false;
    }
    else if(email.validity.tooShort) {
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
    //email checking
    if(country.validity.valueMissing) {
        countryError.textContent = "Country is required";
        return false;
    }
    else {
        countryError.textContent = "";
        return true;
    }
}

//returns true if all inputs are correctly filled. if even one is not, reurns false
function checkAll() {
    let emailEr = checkEmail();
    let countryEr = checkCountry();

    return (emailEr && countryEr);
}




