

console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
}

const firstName = document.getElementById("firstName")
const submitBtn = document.getElementById("submitBtn")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const alertspan = document.getElementById("alert-password")


firstName.addEventListener("change", (e) => {
    const name = e.target.value
    details.firstName = name
})

lastName.addEventListener("change", (e) => {
  const name = e.target.value
  details.lastName = name
})

email.addEventListener("change", (e) => {
  const email = e.target.value
  details.email = email
})


phoneNumber.addEventListener("change", (e) => {
    const phone = e.target.value
    // details.phoneNumber = phoneNumber
    // Using regular expression, validate if the number is a valid kenyan number
    // if it's not, using the alert function, notify the user that the
    // number is not valid
    const phoneNumber = /^(\+254|0|254)(7)\d{8}$/;
    if(phoneNumber.test(phone)) {
      details.phoneNumber = phone
      console.log("Valid phone number")
    }
    else{
      alert("Invalid phone number!")
      e.target.value = ""
    }

})
// Add event listeners for all remaining input elements and update the
// details object

password.addEventListener("change", (e) => {
  const password = e.target.value
  details.password = password

  const isValid = validatephoneNumber(phoneNumber)

  if(isValid){
    window.location.href = "/dashboard.html"
  }
  else{
    alertspan.classList.remove("alertOffMessage")
    alertspan.classList.add("alertOnMessage")
  }
})

confirmPassword.addEventListener("change", (e) => {
  const confirmPassword = e.target.value
  details.confirmPassword = confirmPassword
})


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


// Style your HTML FORM!!!!
submitBtn.addEventListener("click", () => {
    const { firstName, lastName, email, password, phoneNumber,
confirmPassword, agreeTerms} = details
console.log(details)
      const isPasswordValidated = validatePassword(password, confirmPassword)
      const isNamesValidated = validateNames (firstName, lastName)
      const isPhoneNuberValidated = validatePhoneNumber(phoneNumber)
      const isEmailValidated = validateEmail(email)

      if(isPasswordValidated && isEmailValidated && isNamesValidated && isPhoneNuberValidated){
        window.location.href = "/dashboard.html"
      }
      else{
      alertspan.classList.remove("alert-off-message")
      alertspan.classList.add("alert-on-message")
      }
    
      const alertmessage = getElementById("alert-password")

      alertmessage.style.display = "block"

      setTimeout(() => {
        alertmessage.style.display = "none"
      }, 5000)
})