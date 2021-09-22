    function h(){

    head.classList.add("anm1");
    marks1.classList.add("anm2");
    sub.classList.add("anm4");
    marks2.classList.add("anm3");
    container.classList.add("anm5");
    note.classList.add("anm6");
            }
            
function hoverin(x) {
  x.style.filter = "brightness(150%)";
}

function hoverout(x) {
  x.style.filter = "brightness(70%)";
}
           
    
function sbt() {

var sub = document.getElementById("select1").value;

          if (sub == 1) {  f(); }
          if (sub == 2) {  v(); }
          if (sub == 3) { alert("Please choose an Additional paper"); }

};



function d() {
var sub = document.getElementById("select1").value;
var t7 = document.getElementById("t7");

         if (sub == 1) {document.getElementById("t7").disabled = false; }
          if (sub == 2) {
         t7.value=""; document.getElementById("t7").disabled = true; }
          }



function f() {  


var t1 = document.getElementById("t1").value;
var t2 = document.getElementById("t2").value;
var t3 = document.getElementById("t3").value;
var t4 = document.getElementById("t4").value;

if (Math.max(t1 , t2 , t3 , t4) <= 100)   {

var a = document.getElementById("t5").value;
var b = document.getElementById("t6").value;
var c = document.getElementById("t7").value;
var d = document.getElementById("t8").value;

var sum = (t1 -(- t2) -(- t3) -(- t4));
var x = ((sum) * 32 / 400);
var y = ((sum) * 28 / 400);

var e = (a / 80);
var g = (b / 80);
var h = (c / 70);
var i = (d / 80);
var j = (Math.max(e , g , h , i));

var k = Math.round((x + 20 + (48 * e)));
var l = Math.round((x + 20 + (48 * g)));
var m = Math.round((x + 20 + (48 * i)));
var n = Math.round((y + 30 + (42 * h)));
var o = Math.round((y + 30 + (42 * j)));
var q = Math.min(k , l , m , n , o);

var s = (k -(- l) -(- m) -(- n) -(- o) -(- o));
var p = (Math.round(100 * s / 6) / 100);
var t = (s - q);
var u = (Math.round(100 * t / 5) / 100);
    
    if ((Math.max(a , b , c , d) <= 80) , (c <= 70))   
    {     var r = confirm("We are considering all project and practical marks to be 100% \nSure to continue?");
         if (r == true) {
         alert("Marks obtained:\n1st language: " + k + "\n2nd language: " + l + "\nMaths: " + m + "\nPhysics: " + o + "\nChemistry: " + o + "\nBiology: " + n + "\nTotal: " + s + "/600" + "\nPercentage: " + p + "%");
         
         alert("Considering best 5 papers,\nYour obtained marks will be:\nTotal: " + t + " / 500" + "\nPercentage: " + u + " %");
         
         if (u > 90) {alert("Congratulations!\nYou've got AA (Outstanding) grade for marks above 90%")} else {if (u > 80) {alert("Congratulations!\nYou've got A+ (Excellent) grade for marks above 80%")} else {if (u > 60) {alert("Congratulations!\nYou've got A (Very good) grade for marks above 60%")} else {alert("You've potential in you!\nI'm sorry, but you didn't get an A graded marks :(")}}}
    }   else    {
    alert("You're lacking self-confidence! ");}
    }
   
    
 else {     alert("Please enter valid marks! ")};


}
   
    
 else {     alert("You've got " + Math.max(t1 , t2 , t3 , t4) + " out of 100 in your Madhyamik paper?\nAm I joke to you???\nEnter correct marks! " )};

};



function v() {

var t1 = document.getElementById("t1").value;
var t2 = document.getElementById("t2").value;
var t3 = document.getElementById("t3").value;
var t4 = document.getElementById("t4").value;


if (Math.max(t1 , t2 , t3 , t4) <= 100)   {

var a = document.getElementById("t5").value;
var b = document.getElementById("t6").value;
var d = document.getElementById("t8").value;

var sum = (t1 -(- t2) -(- t3) -(- t4));
var x = ((sum) * 32 / 400);
var y = ((sum) * 28 / 400);

var e = (a / 80);
var g = (b / 80);
var i = (d / 80);
var j = (Math.max(e , g , i));

var k = Math.round((x + 20 + (48 * e)));
var l = Math.round((x + 20 + (48 * g)));
var m = Math.round((x + 20 + (48 * i)));
var o = Math.round((y + 30 + (42 * j)));
var q = Math.min(k , l , m , o);

var s = (k -(- l) -(- m) -(- o) -(- o) -(- o));
var p = (Math.round(100 * s / 6) / 100);
var t = (s - q);
var u = (Math.round(100 * t / 5) / 100);
    
    if (Math.max(a , b , d) <= 80)   
    {     var r = confirm("We are considering all project and practical marks to be 100% \nSure to continue?");
         if (r == true) {
         alert("Marks obtained:\n1st language: " + k + "\n2nd language: " + l + "\nMaths: " + m + "\nPhysics: " + o + "\nChemistry: " + o + "\nStatistics: " + o + "\nTotal: " + s + " / 600" + "\nPercentage: " + p + " %");
         
         alert("Considering best 5 papers,\nYour obtained marks will be:\nTotal: " + t + " / 500" + "\nPercentage: " + u + " %");
         
         if (u > 90) {alert("Congratulations!\nYou've got AA (Outstanding) grade for marks above 90%")} else {if (u > 80) {alert("Congratulations!\nYou've got A+ (Excellent) grade for marks above 80%")} else {if (u > 60) {alert("Congratulations!\nYou've got A (Very good) grade for marks above 60%")} else {alert("You've potential in you!\nI'm sorry, but you didn't get an A graded marks :(")}}}
    }   else    {
    alert("You're lacking self-confidence! ");}
    }
   
    
 else {     alert("Please enter valid marks! ")};

}
   
    
 else {     alert("You've got " + Math.max(t1 , t2 , t3 , t4) + " out of 100 in your Madhyamik paper?\nAm I joke to you???\nEnter correct marks! " )};


    
};
    
