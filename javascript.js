
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

