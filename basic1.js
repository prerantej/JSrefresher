function test() {
    var a = "3";
    var b = "8";
var c=a;
a=b;
b=c;
    console.log("a is " + a);
    console.log("b is " + b);
}

/* length */
var tweet = prompt("enter the string");
var tweetcount = tweet.length;
alert(tweetcount) 

/* slice */
if (tweet.length>140){
    alert("greater length");
    alert(tweet.slice(0,140) + "this can be postable")
}
/* casing change */
var name2 = prompt("enter the name");
var lengthofname=name2.length;
alert("Hii " + name2.slice(0,1).toUpperCase() + name2.slice(1,lengthofname).toLowerCase());

/* operators "dog age calculator" */

var dogage=prompt("enter the age of your dog")
var humanage= (((dogage - 2)*4)+21)
alert("the dog age in human age is "+ humanage)