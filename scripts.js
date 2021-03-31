// Reverse a string

// Solution #1

function reverse(str) {
return str.split('').reverse().join('')
}


// Solution # 2

function reverse(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;

    }

return reversed;


}


// Solution 3

function reverse(str) {
   return str.split('').reduce((rev,char) => char + rev, '')
}


// Palindrome



// Solution #1

function palindrome(str) {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr 
}


// Solution #2

function palindrome(str) {
 return str.split('').every((char,i)=>{
    return char === str[str.length - i -1]
 })
   
}



// Reversing an integer

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}


// Max characters

function maxChar(str) {
const charMap = {}
let max = 0;
let maxChar = '';

for (let char of str) {
    if(charMap[char]) {
        charMap[char] ++
    } else {
        charMap[char] = 1
    }
    
}
for (let char in charMap) {
    if(charMap[char] > max) {
        max = charMap[char]
        maxChar = char
    }
}
  return maxChar;
}



// FizzBuzz

function fizzBuzz(n) {

for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if(i % 5 === 0) {
        console.log('buzz')
    } else if(i % 3 === 0) {
       console.log('fizz')
    } else {
        console.log(i)
    }
}

}


