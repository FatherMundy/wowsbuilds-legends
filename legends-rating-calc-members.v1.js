function calcRating () {
  var ratingFinal;
  var resultTextTemp = document.getElementById("resultAmountTemp");
  var resultLevelTemp = document.getElementById("resultLevelTemp");
  var resultContTemp = document.getElementById("resultContTemp");
  var wins = document.getElementById("wins").value;
  var played = document.getElementById("played").value;
  var survived = document.getElementById("survived").value;
  var guns = document.getElementById("guns").value;
  var torps = document.getElementById("torps").value;
  var countKills = document.getElementById("kills").value;
  var kills = countKills/played;
  var damage = document.getElementById("damage").value;
  var spottingCount = document.getElementById("spotting").value;
  var tanking = document.getElementById("attracted-damage").value;
  var winRate = wins / played * 100;
  var spotting = spottingCount / played;
  var solo = 0.0333;
  var div = 0.01
  var survivability = (survived/played) * 100000;  
  var gunsPerDamage = (guns*damage) / 100;  
  var torpsPerDamage = (torps*damage) / 100;  
  var spotsPerFrags = (kills*spotting*damage) / survivability  ;
  var attrPerSurv = (tanking*survivability) / 1000000;
  var wrBonus = winRate*1000; 
  var sumMod = survivability+gunsPerDamage+torpsPerDamage+spotsPerFrags+attrPerSurv+wrBonus; 
  var sumPerFragPerMod = spotsPerFrags*attrPerSurv; 
  var soloDivMod = sumMod*solo; 
  var sumFinal = sumMod+soloDivMod+sumPerFragPerMod;  
  var ratingFinal = Math.round(sumFinal/100);
  console.log(ratingFinal);
if (ratingFinal < 650) {
   var ratingLabel = "Bad";
} 
else if (650 < ratingFinal && ratingFinal < 900) {
   var ratingLabel = "Average";
} 
  else if (900 < ratingFinal &&  ratingFinal < 1200) {
   var ratingLabel = "Above Average";
} 
  else if (1200 < ratingFinal && ratingFinal < 1600) {
   var ratingLabel = "Good";
} 
  else if (1600 < ratingFinal && ratingFinal < 2000) {
   var ratingLabel = "Very Good";
} 
  else if (2000 < ratingFinal && ratingFinal < 2500) {
   var ratingLabel = "Great";
} 
  else if (2500 < ratingFinal && ratingFinal < 2900){
   var ratingLabel = "Unicum";
} else {
   var ratingLabel = "Super Unicum";
};
resultTextTemp.innerHTML = ratingFinal;
resultLevelTemp.innerHTML = ratingLabel;
document.getElementById("ratingLabelTitle").innerHTML = "New Rating";
document.getElementById("rating-value").value = ratingFinal;
document.getElementById("rating-label").value = ratingLabel;
document.getElementById("ratingSubmit").style.display = 'block';
document.getElementById("calculate").style.display = 'none'
};