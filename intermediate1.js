var name1= prompt("Enter the your name")
var name2= prompt("Enter the your partner's name") 

var randomnum= Math.random()
var rangerandnum= randomnum * 100
var floornum = Math.floor(rangerandnum)

alert("Your love score is " + floornum)

/*if else*/
function bmiCalculator (weight, height) {
    var bmi= weight/(height*height)
    if (bmi<18.5){
        return ("Your BMI is " + bmi+", so you are underweight.");}
        else if (bmi>18.5 & bmi<24.9){
            return ("Your BMI is " + bmi+", so you have a normal weight.");}
            else{
                return ("Your BMI is " + bmi+", so you are overweight.");}
                
}


/*LEAP YEAR*/
function isLeap(year) {
    if (year % 400 === 0) {
        return "Leap year.";
        } else if (year % 100 === 0) {
        return "Not leap year.";
        } else if (year % 4 === 0) {
        return "Leap year.";
        } else {
        return "Not leap year.";
        }
}    
   
   
            