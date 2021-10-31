/* Students: Please use this week's project for Week 11: Assignment 9: Basic Data Visualization. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
//load Json
console.log("start Json");
function loadJSON() {
$.getJSON( "data.json", function(data) {
                        console.log(data);
                        doPie(data);
                    }
                );
}
console.log(doPie);
console.log("we got json");
//start making the pie chart
function doPie(data){
  console.log("hello");
  console.log(data[4].value + data[0].color);
//with var
var circle1 = document.getElementById('c1');
var pie = circle1.getContext('2d');
console.log("let's go");
//x center
var x= circle1.width/2;
//y center
var y= circle1.height/2;
console.log("x&y");
//radius
var radius = Math.min(circle1.width, circle1.height) / 2;
//angle
var angle = 0, total = 0, i, percent, pie2, x, y;
//sum of data.value
console.log(" Json.length: " + (data.length));
for (var i=0; i < (data.length); i++) {
  total += data[i].value;

//percent =+ Math.round((data[i].value / total) * 100) +"%";
}
console.log("total: " + total + " & " + percent);
//slicing
for(var i=0; i< (data.length); i++){
//slicing
console.log("begin path");
pie.beginPath();
//middle of Canvas
pie.moveTo(x, y);
pie2 = Math.PI* 2 * (data[i].value/ total);
console.log(pie2)
pie.arc(x, y, radius, angle, angle + pie2, false);
//line to center
pie.lineTo(x, y);
//add color
pie.fillStyle= (data[i].color);
//fill the slice
pie.fill();
//text for slice
posX= x + (radius*.75)* Math.cos(angle + (pie2/2));
posY= y + (radius*.75)*Math.sin(angle + (pie2 /2));
pie.fillStyle="black";
pie.font="bold 10px Arial";
pie.fillText(data[i].value,posX,posY);
angle += pie2;
}
}
