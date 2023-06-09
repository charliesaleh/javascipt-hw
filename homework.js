//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (let dog_name of dog_names){
        if(dog_name == dog_names[dog_name]){
            console.log(`Matched ${dog_name}\n`)
        }
        else {
            console.log(`No Match`)
        }
    }
    console.log()
}

findWords()
// I did not understand how to do this function ask dylan later

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < 6; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, "even index");
        }
    }
    console.log(arr)
}

replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Code Wars

// 1.) Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(num) {
    if(num % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(evenOrOdd(2))

// 2.) Multiply
// This code does not execute properly. Try to figure out why.
function multiply(num1, num2) {
    return num1 * num2
}

console.log(multiply(2,2))