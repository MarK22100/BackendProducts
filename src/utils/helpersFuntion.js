const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPassword= /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

function ValidateEmail(candidateEmail){
    return regexEmail.test(candidateEmail);
}

function ValidatePassword(candidatePassword){
    return regexPassword.test(candidatePassword);
}
function validateTitle(title){
    if (title.length>=4 && title.length<=20) {
        return true;
    } else {
        return false;
    }
}
function validateDescription(str){
    if (str.length>=4 && str.length<=200) {
        return true;
    } else {
        return false;
    }
}
function validateCategory(str){
    if (str!==undefined) {
        return true;
    } else {
        return false;
    }
}
module.exports={ValidateEmail, ValidatePassword, validateTitle, validateDescription, validateCategory};
