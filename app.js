const birthday = document.querySelector("#birthday")
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-button")
const showMessage = document.querySelector("#show-message")


checkButton.addEventListener("click", () => {

  const userBirthday = birthday.value.replaceAll("-", "")
  let counter = 0

  for (let i = 0; i < userBirthday.length; i++) {
    counter = counter + Number(userBirthday.charAt(i))
    console.log(counter)
  }

  const noDivisibleByBday = counter % luckyNumber.value
  
  if(noDivisibleByBday === 0) {
    showMessage.innerText = "yes"
  } else {
    showMessage.innerText = "no"
  }
})