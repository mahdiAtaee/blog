/*--
               form validation
           ------------------------*/
const form = document.getElementById("form")
const user_name = document.getElementById("user_name")
const email = document.getElementById("user_email")
const phone = document.getElementById("user_phone")


var emailRegex = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/i;

form.addEventListener('submit', (e) => {
    var Errors = [];

    //checkInput();

    const usernameValue = user_name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();


    if (usernameValue == "") {
        Errors.push("- field username is empty")
        seterror(user_name, "* نام نمیتواند خالی باشد");
    } else {
        setSuccess(user_name);
    }

    if (emailValue == "") {
        Errors.push("- field Email is empty")
        seterror(email, " * ایمیل نمیتواند خالی باشد");
    } else if (!isEmail(emailValue)) {
        seterror(email, " لطفا یک ایمیل معتبر وارد نمایید * ");
    } else {
        setSuccess(email)
    }


    if (Errors.length === 0) {
        return alert("پیام شما با موفقت ارسال شد");
    } else {
        e.preventDefault();
    }

});




function seterror(input, error) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');


    small.innerText = error;

    formControl.className = 'inputs-wrapper error';
}

function setSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = 'inputs-wrapper success';
}

function isEmail(input) {
    return /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/i.test(input);
}