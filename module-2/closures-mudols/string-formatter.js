const stringFormatter = function(){

    const capitalizeFirst = function(word){

        return word[0].toUpperCase()+word.slice(1).toLowerCase()

    }
    const skewerCase = function(words){

        return words.replaceAll(" ","-")
    }
    return {
        capitalizeFirst:capitalizeFirst,
        skewerCase:skewerCase

    }
}
const formatter = stringFormatter()

console.log(formatter.capitalizeFirst("dorothy"));//should print Dorothy
formatter.skewerCase("blue box") //should print blue-box
