const determineWeather = temp => {
  if (temp > 25) {
    return "hot"
  }
  return "cold"
}
const commentOnWeather = temp => "its a " + determineWeather(temp)

console.log(commentOnWeather(30));//returns "It's hot"
commentOnWeather(22) //returns "It's cold"