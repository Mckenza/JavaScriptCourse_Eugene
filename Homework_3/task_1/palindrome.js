function isPalindrome(str){
    if(typeof(str) === 'string'){
        if(str.toLowerCase() === (str.split('').reverse().join('')).toLowerCase()){
            return objErrors.palindrome;
        } else {
            return objErrors.notPalindrome;
        }
    } else {
        return objErrors.notString;
    }
}

const objErrors = {
    palindrome: true,
    notPalindrome: false,
    notString: `It isn't string`
}

console.log(isPalindrome('Anna.Anna'));


