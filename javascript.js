
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