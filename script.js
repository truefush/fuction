alert("This application determines the distance you travel from a point (a) to a point (b) from the time generated by the average that it takes you to travel this distance at an average speed of 5k/h.");
alert("The more times you travel this path from point (a) to point (b), the more accurate the distance traveled will be.");
var numComings = parseInt(prompt("add number of times you want to move to point (b)"));
var pro = 0;
for(let i = 0; i < numComings; i++){
    var speed = parseFloat(prompt("add how long did it take to arrivea"));
    var pro = pro + speed;
}
console.log(pro);
average(pro , numComings);

function average(pro, numComings){
    return distance = 83.33 * (pro/numComings);
}
console.log(distance);
alert(distance + " meters");
document.write("the distance you travel is " + distance + " meters");
