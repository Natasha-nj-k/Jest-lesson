const {validatePassword, validateNames, validateEmail, validatePhoneNumber} = require("../utils")

test("Validate password works as expected", () => {
  expect(validatePassword("s", "S")) .toBe (false)
  expect(validatePassword("S", "S")) .toBe (false)
  expect(validatePassword("SSSSs", "SSSSs")) .toBe (false)
  expect(validatePassword("password123", "password1234")) .toBe (false)
  expect(validatePassword("1@333", "1@333")) .toBe (false)
  expect(validatePassword("S2444", "S2444")) .toBe (true)
  expect(validatePassword("moon", "Moon")) .toBe (false)
  expect(validatePassword("", "")) .toBe (false)
  expect(validatePassword("     ", "     ")) .toBe (false)
  expect(validatePassword("pasword123", "")) .toBe (false)
  expect(validatePassword("password123", "password123")) .toBe (false)
  expect(validatePassword("StrongPass1", "StrongPass1")) .toBe (true)
  expect(validatePassword("NoNumbersHere", "NoNumbersHere")) .toBe (false)
  expect(validatePassword("12345678", "12345678")) .toBe (false)
  expect(validatePassword("Aa1Bb2Cc3", "Aa1Bb2Cc3")) .toBe (true)
})

test("It validates that the first name and last name of more than 4 characters",() =>{
  expect(validateNames("jo", "se")) .toBe(false)
  expect(validateNames("Ri", "ri")) .toBe(false)
  expect(validateNames("Samuel", "Wanyne")) .toBe(true)
  expect(validateNames("Natasha", "Karanja")) .toBe(true)
})

test("It checks if email contain the appropriate characters", () =>{
  expect(validateEmail("email@gmail.com", ".email1@gmail.com")) .toBe(true)
  expect(validateEmail("@", ".com")) .toBe(false)
})

test("It checks if the number has the correct lenght and if it's Kenyan", () => {
  expect(validatePhoneNumber("0707715939", "0712345678")) . toBe (true)
  expect(validatePhoneNumber("07123456", "712345678")) . toBe (false)
})