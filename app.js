//2
var arr1 = [[0,1,2,3], [1,0,1,2], [2,1,0,1]]
document.write (`${arr1[0]}<br>${arr1[1]}<br>${arr1[2]}`)

//3
document.write (`<br>`)
document.write (`<br>`)
for ( var a = 1; a <= 10; a++){
    document.write (`${a}<br>`)
}

//4
document.write (`<br>`)
document.write (`<br>`)
var tableNumber = prompt (`Enter a number to show its multiplication table`)
var tableLength = prompt (`Enter length of multiplication table`)
document.write (`Multiplication table of ${tableNumber} length ${tableLength}<br><br>`)
for ( var a = 1; a <= tableLength; a++){
    document.write (`${tableNumber} x ${a} = ${tableNumber*a}<br>`)
}

//5
document.write (`<br>`)
document.write (`<br>`)
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for ( var a = 0; a < fruits.length; a++){
    document.write (`${fruits[a]}<br>`)
}

//7
var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var useritem = prompt(`Welcome to A bakery. What do you want to buy?`)
var flag = false
for ( var a = 0; a < bakkeryItems.length; a++){
    if (useritem==bakkeryItems[a]) {
        flag = true
        alert (`${useritem} is available at index ${bakkeryItems.indexOf(useritem)} in our bakery.`)
        break
    }
}
    if (flag==false) {
        alert (`We are sorry. ${useritem} is not availale in our bakery.`)
    }

//8
document.write (`<br>`)
document.write (`<br>`)
var numbers = [24, 53, 78, 91, 12]
document.write (`Array items: ${numbers}<br>`)
if (numbers[0]<numbers[1] && numbers[0]<numbers[2] && numbers[0]<numbers[3] && numbers[0]<numbers[4]) {
    document.write (`The smallest number is: ${numbers[0]}`)
}
else if (numbers[1]<numbers[0] && numbers[1]<numbers[2] && numbers[1]<numbers[3] && numbers[1]<numbers[4]) {
    document.write (`The smallest number is: ${numbers[1]}`)
}
else if (numbers[2]<numbers[0] && numbers[2]<numbers[1] && numbers[2]<numbers[3] && numbers[2]<numbers[4]) {
    document.write (`The smallest number is: ${numbers[2]}`)
}
else if (numbers[3]<numbers[0] && numbers[3]<numbers[2] && numbers[3]<numbers[1] && numbers[3]<numbers[4]) {
    document.write (`The smallest number is: ${numbers[3]}`)
}
else if (numbers[4]<numbers[0] && numbers[4]<numbers[2] && numbers[4]<numbers[3] && numbers[4]<numbers[1]) {
    document.write (`The smallest number is: ${numbers[4]}`)
}

//9
document.write (`<br>`)
document.write (`<br>`)
var numbers = [24, 53, 78, 91, 12]
document.write (`Array items: ${numbers}<br>`)
if (numbers[0]>numbers[1] && numbers[0]>numbers[2] && numbers[0]>numbers[3] && numbers[0]>numbers[4]) {
    document.write (`The largest number is: ${numbers[0]}`)
}
else if (numbers[1]>numbers[0] && numbers[1]>numbers[2] && numbers[1]>numbers[3] && numbers[1]>numbers[4]) {
    document.write (`The largest number is: ${numbers[1]}`)
}
else if (numbers[2]>numbers[0] && numbers[2]>numbers[1] && numbers[2]>numbers[3] && numbers[2]>numbers[4]) {
    document.write (`The largest number is: ${numbers[2]}`)
}
else if (numbers[3]>numbers[0] && numbers[3]>numbers[2] && numbers[3]>numbers[1] && numbers[3]>numbers[4]) {
    document.write (`The largest number is: ${numbers[3]}`)
}
else if (numbers[4]>numbers[0] && numbers[4]>numbers[2] && numbers[4]>numbers[3] && numbers[4]>numbers[1]) {
    document.write (`The largest number is: ${numbers[4]}`)
}