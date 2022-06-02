const reverseString = function(str){
    if(str.length === 0)
        return ''
    return reverseString(str.substr(1))+str[0]
}
console.log( reverseString('cat cat   ahn') );