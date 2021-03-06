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


// Array Chunk

function chunk(array, size) {
 let chunked = []

 for (const el of array) {
    const last = chunked[chunked.length - 1]
    if(!last || last.length === size) {
        chunked.push([el])
    } else {
        last.push(el)
    }
 }
 return chunked
}


// Solution #2


function chunk(array, size) {
    const chunked = []
    let i = 0

    while (i < array.length) {
     chunked.push(array.slice(i, i+size))
     i += size
    }
    return chunked

   }


// Anagrams


// My solution

// function anagrams(stringA, stringB) {
//     let str = stringA.replace(/[^A-Za-z']/g, "");
//     str = str.toLowerCase().split('')
   
//     let str2 =  stringB.replace(/[^A-Za-z']/g, "");
//     str2 = str2.toLowerCase().split('')

//     if(str.length === str2.length && str2.every(el => str.includes(el))) {
//         return str2.every(el => str.includes(el))
//     } else {
//         return false
//     }
// }


// Solution #1

// function anagrams(stringA, stringB) {
  
//   const charMapA = buildCharMap(stringA)
//   const charMapB = buildCharMap(stringB)

//   if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//       return false

//   } else {
//       for (let char in charMapA) {
//           if(charMapA[char] !== charMapB[char]){
//               return false
//           }
//       }
      
//   }
//   return true
// }


// Helper function 

function buildCharMap(str) {
    const charMap = {}
    for (let char of str.replace(/[^A-Za-z']/g, "").toLowerCase()) {
        if(charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    return charMap
}




// Solution #2

function anagrams(stringA, stringB) {

let a = stringA.replace(/[^A-Za-z']/g, "").toLowerCase().split('').sort().join('')
let b = stringB.replace(/[^A-Za-z']/g, "").toLowerCase().split('').sort().join('')

return a === b


  }


// Capitalize 


// My solution 


function capitalize(str) {

let a = str.split(' ')
let result = []

for (let word of a) {
   let letters = word.split('')
 
   let first = letters.shift().toUpperCase()
 
   letters.unshift(first)
   let upperCaseWord= letters.join('')
   result.unshift(upperCaseWord)
   result.join(' ')

}
return result.reverse().join(' ')

}


// Solution # 1

function capitalize(str) {
    const words = []
    for (let word of str.split(' ')) {
       words.push(word[0].toUpperCase() + word.slice(1)) 
    }
   return words.join(' ')
    }


// Solution #2 

function capitalize(str) {
    let result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
        if(str[i-1] === '') {
           result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
        
    }
        return result

    }


// Steps Question 


function steps(n) {
    for (let row = 0; row < n; row++) {
       let stair = ''
       for (let col = 0; col < n; col++) {
           if(col <= row) {
               stair += '#'
           } else {
               stair += ''
           }
       }
        console.log(stair);
    }
}


// Solution # 1

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = ''
        for (let col = 0; n; col++) {
            if(col <= row){
                stair += '#'
            } else {
                stair += ' '
            }
            console.log(stair);
        }
        
    }

}

// Solution #2 - Recursion 

function steps(n, row = 0, stair = '') {
    if(n === row) {
        return 
    }
    if(n === stair.length) {
        console.log(stair);
       steps(n, row + 1)
       return 
    }

    if(stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    
    steps(n, row, stair)

}


// Two sided pyramids 

// Solution # 1

function pyramid(n) {
const midpoint = Math.floor((2*n-1)/2)

for (let row = 0; row < n; row++) {
    let level = ''

    for (let col = 0; col < (2 * n -1); col++) {
       if(midpoint - row <= col && midpoint + row >= col) {
           level += '#';
       } else {
           level += ' '
       }

    }
    console.log(level);
}


}

// Solution # 2 Recursion 

function pyramid(n, row = 0, level = '') {
    if(row === n) {
        return 
    } 
    
    if(level.length === 2 * n -1) {
        console.log(level);
        return  pyramid(n, row + 1)
    }

    const midpoint = Math.floor((2 * n - 1) / 2)
    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add  = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, level + add)
    
    }
    


// Find the vowels 


// My solution 

function vowels(str) {
    const vowels = ['a','e','i','o','u']
    let clean = str.replace(/[^A-Za-z']/g, "").toLowerCase().split('')
    let count = 0;
    for (const char of clean) {
        if(vowels.includes(char)){
            count += 1
        } 
    }

    return count
    
    } 



// Solution # 1

function vowels(str) {
   let count =0;
   const checker = ['a','e','i','o','u']

   for (let char of str.toLowerCase()) {
       if (checker.includes(char)) {
           count++
       }
   }
   return count
    } 


// Solution 2

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
 } 


