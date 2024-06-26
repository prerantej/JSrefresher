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
   
/*fizzbuzz*/
var arr=[];
var count = 1
function fizzbuzz(){
if(count % 5===0 && count % 3===0 ){
    arr.push("fizzbuzz")
}
else if(count % 5===0){
    arr.push("buzz")
}
else if(count % 3===0){
    arr.push("fizz")
}
else{
    arr.push(count)
}
count++
return arr
}
        
/*Random payment*/
function whosPaying(names) {
var random= Math.floor(Math.random()*names.length);
return (names[random]+" is going to buy lunch today!");

}

// while loop
var i =1;
while(i<10){
console.log("hi "+i);
i++;
}


var i=99;
while(i>=0){
console.log("there are " + i + "bottles i took one " );
i--;
console.log("now " + i + "bottles are there" );
}

// for loop

function fibonacciGenerator (n) {
if(n==1){
    return [0];
}
else if (n==2){
    return [0,1];
}
else{
    var arr=[0,1];
    for(var i=0;i<n-2;i++){
        var l=arr.length;
        var temp = arr[l-2] + arr[l-1];
        arr.push(temp);
        
        
    }
return arr;
}

}