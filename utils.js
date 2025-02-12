function validatePassword(str1, str2) {
  if(str1 === str2 && str1.length >= 4 && str1 !== "" && str1.length !== 0 && str1.trim().length !==0 && /[A-Z]/.test(str1) && /\d/.test(str1) && /[a-zA-Z]/.test(str1)){
    return true
  }
  else{
    return false
  }
}

function validateNames(firstName, lastName){
  if(firstName.length <= 4 && lastName.length <= 4){
    return false
  }
  else{
    return true
  }
}

function validateEmail(email){
  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return true
  }
  else{
    return false
  }
}

function validatePhoneNumber(number){
  if(/^(\+254|0|254)(7)\d{8}$/.test(number) && number.length >=10){
    return true
  }
  else{
    return false
  }
}

module.exports = {validatePassword, validateNames, validateEmail, validatePhoneNumber}