
// adding up score ----------------------

document.querySelectorAll(".dice_container")[1].style.float = "right";
document.querySelectorAll(".dice_container")[0].style.float = "left";
document.querySelectorAll(".score_card")[1].style.float = "right";
var move = 3;
function addScore(){
  var entry1 = document.querySelector("#p1score1").value;
  var entry2 = document.querySelector("#p1score2").value;
  var entry3 = document.querySelector("#p1score3").value;
  var entry4 = document.querySelector("#p1score4").value;
  var entry5 = document.querySelector("#p1score5").value;
  var entry6 = document.querySelector("#p1score6").value;
  var entry7 = document.querySelector("#p1score7").value;
  var entry8 = document.querySelector("#p1score8").value;
  var entry9 = document.querySelector("#p1score9").value;
  var entry10 = document.querySelector("#p1score10").value;
  var entry11 = document.querySelector("#p1score11").value;
  var entry12 = document.querySelector("#p1score12").value;
  var entry13 = document.querySelector("#p1score13").value;
  var entry14 = document.querySelector("#p1score14").value;

  var p1Total = Number(entry1) + Number(entry2) + Number(entry3) + Number(entry4) +
  Number(entry5) + Number(entry6) + Number(entry7) + Number(entry8) + Number(entry9) +
   + Number(entry10) + Number(entry11) + Number(entry12) + Number(entry13) + Number(entry14);
  document.querySelector("#p1total").innerHTML = p1Total;

  var score1 = document.querySelector("#p2score1").value;
  var score2 = document.querySelector("#p2score2").value;
  var score3 = document.querySelector("#p2score3").value;
  var score4 = document.querySelector("#p2score4").value;
  var score5 = document.querySelector("#p2score5").value;
  var score6 = document.querySelector("#p2score6").value;
  var score7 = document.querySelector("#p2score7").value;
  var score8 = document.querySelector("#p2score8").value;
  var score9 = document.querySelector("#p2score9").value;
  var score10 = document.querySelector("#p2score10").value;
  var score11= document.querySelector("#p2score11").value;
  var score12= document.querySelector("#p2score12").value;
  var score13= document.querySelector("#p2score13").value;
  var score14 = document.querySelector("#p2score14").value;


  var p2Total = Number(score1) + Number(score2) + Number(score3) +
  Number(score4) + Number(score5) + Number(score6) + Number(score7) + Number(score8)
   + Number(score9) + Number(score10) + Number(score11) + Number(score12) + Number(score13) + Number(score14);
  document.querySelector("#p2total").innerHTML = p2Total;
}


document.querySelector(".next-move-container").onclick = function(){


addScore();
// _______________Randomise Dice_____________________________________
  var diceValue = 1;

  while(diceValue < 6){
    document.querySelector("#diceText" + diceValue).innerHTML = Math.floor(Math.random() * 6)+1;
    diceValue++;
  }
  // ____________Move Counter________________

if(move >= 1){
  move--;
  document.querySelector("#roll").innerHTML = move + " goes left";

}else if(move == 0){

      for(diceNumber = 1; diceNumber <=5; diceNumber++){
      document.querySelector("#diceText" + diceNumber).style = "display:none";
    } // hide dice when dice has been rolled 3 times.
}
}
//________________________ Start next turn ____________________________

document.querySelector(".nextTurn").onclick = function(){
  var bonus1 = Math.floor(Math.random()*13)+1;
  var bonus2 = Math.floor(Math.random()*13)+1;
if(bonus1 == bonus2){
  move = 4;
}else{
  move = 3;
}

var bogus1 = Math.floor(Math.random()*35)+1;
var bogus2 = Math.floor(Math.random()*35)+1;
if(bogus1 == bogus2){
move = 5;
}

//loop to make all dice visible, and keep dice blank
  for(diceNumber = 1; diceNumber <=5; diceNumber++){
  document.querySelector("#diceText" + diceNumber).style = "display:block";
  document.querySelector("#diceText" + diceNumber).innerHTML = "";
  document.querySelector("#newDice" + diceNumber).style = "display:none";

}
//re-label the ROLL button
  document.querySelector("#roll").innerHTML = move + " ROLLS LEFT!";
//add up total score every time a go is ended
  addScore();

}
//_________________________keeping Dice_____________________________________

document.querySelector("#diceText1").onclick = function(){
 document.querySelector("#newDice1").style.display = "block";
 document.querySelector("#newDice1").innerHTML = document.querySelector("#diceText1").innerHTML;
 document.querySelector("#diceText1").style.display = "none";
}
document.querySelector("#diceText2").onclick = function(){
 document.querySelector("#newDice2").style.display = "block";
 document.querySelector("#newDice2").innerHTML = document.querySelector("#diceText2").innerHTML;
 document.querySelector("#diceText2").style.display = "none";
}
document.querySelector("#diceText3").onclick = function(){
document.querySelector("#newDice3").style.display = "block";
 document.querySelector("#newDice3").innerHTML = document.querySelector("#diceText3").innerHTML;
 document.querySelector("#diceText3").style.display = "none";
}
document.querySelector("#diceText4").onclick = function(){
document.querySelector("#newDice4").style.display = "block";
 document.querySelector("#newDice4").innerHTML = document.querySelector("#diceText4").innerHTML;
 document.querySelector("#diceText4").style.display = "none";
}
document.querySelector("#diceText5").onclick = function(){
  document.querySelector("#newDice5").style.display = "block";
 document.querySelector("#newDice5").innerHTML = document.querySelector("#diceText5").innerHTML;
 document.querySelector("#diceText5").style.display = "none";
}
