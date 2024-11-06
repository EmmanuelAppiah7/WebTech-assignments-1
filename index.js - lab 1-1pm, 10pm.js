function area(height, width){
    let answer = height * width;
    return answer
}
area(4,4)

3; 
1.5; 
.
1 + 1; 
0.1 + 0.2; 
8 - 1; 
10 * 2; 
35 / 5; 

5 / 2; 

10 % 2; 
30 % 4; 
18.5 % 7; 

1 << 2; 

(1 + 3) * 2; 

true;
false;

'abc';
"Hello, world";

!true; 
!false; 

1 === 1; 
2 === 1; 

1 !== 1; 
2 !== 1; 

1 < 10; 
1 > 10; 
2 <= 2; 
2 >= 2; 

"Hello " + "world!"; 

"1, 2, " + 3; 
"Hello " + ["world", "!"]; 
13 + !0; 
"13" + !0; 

"a" < "b"; 
"5" == 5; 

"5" === 5; 
"This is a string".charAt(0); 
"Hello world".substring(0, 5); 
"Hello".length;
null; 
var someVar = 5;
var someFourthVar = 2, someFifthVar = 4;
someVar += 5; 
someVar *= 10; 
var myArray = ["Hello", 45, true];
var myArray0 = [32,false,"js",12,56,90];
var myObj = {myKey: "myValue", "my other key": 4};
var count = 1;
if (count == 3){
} else if (count == 4){
} else {
}
while (true){
}
do {
input = getInput();
} while (!isValid(input));
for (var i = 0; i < 5; i++){
}
outer:
for (var i = 0; i < 10; i++) {
for (var j = 0; j < 10; j++) {
if (i == 5 && j ==5) {
break outer;
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
description += person[x] + " ";
}
var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
myPets += pet + " ";
}
if (house.size == "big" && house.colour == "blue"){
house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
}
default values.
var name = otherName || "default";
grade = 'B';
switch (grade) {
case 'A':
console.log("Great job");
break;
case 'B':
console.log("OK job");
break;
case 'C':
console.log("You can do better");
break;
default:
console.log("Oy vey");
break;
}
function myFunction(){
}
if (true){
var i = 5;
}
(function(){
var temporary = 5;
"global object", which
may have a
Node.js.
window.permanent = 10;
})();
var prompt = "Hello, " + name + "!";
as if they were
function inner(){
alert(prompt);
}
sayHelloInFiveSeconds("Adam");
"Hello, Adam!" in 5s
var myObj = {
myFunc: function(){
return "Hello world!";
}
};
myString: "Hello world!",
myFunc: function(){
return this.myString;
}
};

var myOtherFunc = function(){
return this.myString.toUpperCase();
};

var anotherFunc = function(s){
return this.myString + s;
};
