
//-----------------------------------------------------------------------------------------------------------
/*
Instructions
In this Kata, you will be given a string and your task is to return the most valuable character. 
The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. 
Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.
*/
function solve(st) {
    return [...new Set(st)].reduce((a, v) => {
        if (st.lastIndexOf(v) - st.indexOf(v) > st.lastIndexOf(a) - st.indexOf(a)) {
            a = v;
        }
        else if (st.lastIndexOf(v) - st.indexOf(v) === st.lastIndexOf(a) - st.indexOf(a)) {
            a = a < v ? a : v;
        }
        return a
    }, st[0])
}

//-----------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------
/*
You are given an array (which will have a length of at least 3,
but could be very large) containing integers. The array is either entirely comprised of odd integers or
entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
*/
function findOutlier(integers) {
    let even = integers.filter(x => x % 2 !== 0)
    let odd = integers.filter(x => x % 2 === 0)
    if (even.length === 1) return even[0];
    else return odd[0]
}
//-----------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------

/*
Return the sum of all numbers below the givn number that are a multiple of 3 or 5
*/
function solution(number) {
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum
}
//-----------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------
/*
If given 'abc' should return 'A-Bb-Ccc'
*/
function accum(s) {
    let split = s.split('')
    return split.reduce((acc, val, ind) => {
        let str = ''
        for (let i = 0; i < ind; i++) {
            str += s[ind]
        }
        if (ind === s.length - 1) {
            return acc + s[ind].toUpperCase() + str.toLowerCase()
        }
        return acc + s[ind].toUpperCase() + str.toLowerCase() + '-';
    }, '')
}
//-----------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------
/*
Generate a christmas tree of the specified height
for example, height = 3     
       *
      ***
     *****
*/
function christmasTree(height) {
    let tree = ''
    let refHeight = height - 1
    let starNum = 1
    for (let i = 0; i < height; i++) {
        if (i == height - 1) {
            tree += ' '.repeat(refHeight) + "*".repeat(starNum) + ' '.repeat(refHeight)
        }
        else {
            tree += ' '.repeat(refHeight) + "*".repeat(starNum) + ' '.repeat(refHeight) + '\n'
        }
        refHeight--
        starNum += 2
    }
    return tree
}
//-----------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------
/*
Return the length of the shortest word in the string
*/
function findShort(str) {
    var split = str.split(' ');
    var shortest = split.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, split[0]);
    return shortest.length;
}
//-----------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------
/*
Returns the longest combination of k consecutive strings in the string array strarr.
*/
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
    let lengthsArr = strarr.map(elem => {
        return elem.length
    })

    let currMax = 0
    let currSum;
    let strSeqStartPoint = 0
    for (let i = 0; i <= lengthsArr.length - k; i++) {
        currSum = 0
        for (j = 0; j < k; j++) {
            currSum += lengthsArr[i + j]
            if (currSum > currMax) {
                currMax = currSum
                strSeqStartPoint = i
            }
        }
        console.log(currSum, currMax, strSeqStartPoint)
    }
    let res = ''
    for (i = 0; i < k; i++) {
        res += strarr[strSeqStartPoint + i]
    }
    return res
}
//-----------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------



let denom = 1
function halvingSum(n) {
    if (n === 1) return 1
    if (n <= 1) {
        return 0
    }
    return n + Math.floor(halvingSum(n / (denom * 2)))
}
//-----------------------------------------------------------------------------------------------------------------





//-----------------------------------------------------------------------------------------------------------------
/*
Rate the baker!
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
*/

function cakes(recipe, available) {
    let ing = Object.getOwnPropertyNames(recipe)
    let availIng = Object.getOwnPropertyNames(available)
    let hasAllIngreds = true
    let ingredQuotes = []
    ing.forEach((elem, ind) => {
        if (!availIng.includes(elem)) {
            hasAllIngreds = false
        }
        if (hasAllIngreds) {
            ingredQuotes.push(Math.floor(available[elem] / recipe[elem]))
        }
    })
    return hasAllIngreds ? Math.min(...ingredQuotes) : 0
}
//-----------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------
/*
You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.
The list(lst) contains integers, that means it may contain some negative numbers.
If the list is empty or contains a single element, return 0.
The list(lst) is not sorted.
*/

function maxDiff(list) {
    return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
}
//-----------------------------------------------------------------------------------------------------------------





//-----------------------------------------------------------------------------------------------------------------
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/
function solve(s) {
    let numUpper = (s.match(/[A-Z]/g) || []).length;
    let numLower = (s.match(/[a-z]/g) || []).length;
    return numUpper > numLower ? s.toUpperCase() : s.toLowerCase()
}
//-----------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.
*/
function findEvenIndex(arr) {
    let sum1 = 0
    let sum2 = 0
    let evenInd = -1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            sum1 += arr[j]
        }
        for (let k = i + 1; k < arr.length; k++) {
            sum2 += arr[k]
        }
        if (sum1 == sum2) evenInd = i
        sum1 = 0
        sum2 = 0
    }
    return evenInd
}
//-----------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------
/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except 
for one integer that is either only negative or only positive. Your task will be to find that integer.
*/

function solve(arr) {
    let res = 0
    arr.forEach(elem => {
        if (!arr.includes(-elem)) {
            res = elem
        }
    })
    return res
};
//-----------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------
/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on 
the inside. The strings will not be the same length, but they may be empty ( length 0 ).
*/
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}
//-----------------------------------------------------------------------------------------------------------------




