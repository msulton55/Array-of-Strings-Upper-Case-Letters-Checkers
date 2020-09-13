/*
  NextGenCoder Coding Challenge #54 - Array of Strings Checker from Upper Case Letters
  Coded by         : Sulton Wibawa
  Instagram Source : @nextgencoder

  [Intro]
  This code is written using modern javascript arrow function ES6 feature. 
  
  Arrow function is the shorter way of how we want to present the code 
  rather than normal function. Lets say, we want to use javascript framework like ReactJS
  or VueJS or AngularJS, this approach is commonplace now (we can use class-based or function-based as well).

  [Main]
  asdasdas
  dasdasdsad
  asdsadas
  dasdasd
*/

const Input = () => new Array(
    "NEXT",
    "GEN",
    "CODER"
)

const Process = (array) => {
  let totalIdentifier = 0
  let counter = 0
  for (let content of array) {
    let identifier = content.length
    totalIdentifier = totalIdentifier + identifier
    for (const key in content) {
      if (content.hasOwnProperty(key)) {
        const word = content[key]
        if (!isNaN(word))
          return `Only Alpha Allowed`
        else {
          if (word === word.toUpperCase()) {
            counter++
          }
        }
      }
    }
  } 
  if (counter === totalIdentifier)
    return `All`
  else
    return counter  
}

const Output = (output) => {
  console.log(output)
}

const Main = () => {
  const initArray = Input()
  const process = Process(initArray)
  Output(process)
}

Main()