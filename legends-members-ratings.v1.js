

const options = {
    responsive: true,
    parsing: {
      xAxisKey: 'battles',
      yAxisKey: 'ratingValue'
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff'
        },
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#ffffff20'
        },
        type: 'linear',
        offset: true

      },
      y: {
        type: 'linear',
        ticks: {
          color: '#ffffff',
          stepSize: 10
        },
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#ffffff20'
        },
        offset: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
      autocolors: false,
      tooltip: {
        callbacks: {
          label: function(context) {
                        var label = context.dataset.label || '';
                        var data = context.parsed.y;
                        if (label) {
                          label += ': ';
                        }
                        if (data < 650) {
                            label += data += " – Bad";
                        }
                        else if (650<data && data<900) {
                            label += data += " – Average";
                        }
                        else if (900<data && data<1200) {
                            label += data += " – Above Average";
                        }
                        else if (1200<data && data<1600) {
                            label += data += " – Good";
                        }
                        else if (1600<data && data<2000) {
                            label += data += " – Very Good";
                        }
                        else if (2000<data && data<2500) {
                            label += data += " – Great";
                        }
                        else if (2500<data && data<2900) {
                            label += data += " – Unicum";
                        } else {
                            label += data += " – Super Unicum"
                        }
                        return label;
          },          
          title: function(context) {
            return "Rating"
          },
        }
      }
    }
  } 

const config = {
  type: 'line',
  data: data,
  options: options 
};

function calcRecent(){
//DEFS
var rating = current.ratingValue;
var recentRating = current.recentRating;
var ratingTitle = current.ratingTitle;
var recentTitle = current.recentTitle;  
var battles = current.battles;
var recentBattles = current.recentBattles;
var winRate = current.winRate;
var recentWinRate = current.recentWinRate; 
var avgFrags = current.avgFrags;
var recentAvgFrags = current.recentAvgFrags; 
var Damage = current.avgDamage;
var recentDamage = current.recentDamage;  
var survRate = current.surivedRate;
var recentSurvRate = current.recentSurvivalRate; 
var avgSpotted = current.avgSpotted;
var recentAvgSpotted = current.recentSpottingRate;
var spottingDamage = current.avgSpottedDamage;
var recentSpottingDamage = current.recentSpottingDmg;
var xp = current.xp;
var recentXP = current.recentXP;  
var potentialDamage = current.potentialDamage;
var recentPotentialDamage = current.recentPotentialDamage;   
  
//CALCS
// Rating  
var ratingDiff = r0(recentRating - rating);
var ratingPerc = r2(ratingDiff / rating * 100);
var ratingK = k(ratingDiff);
// Win Rate  
var winRateDiff = r2((recentWinRate - winRate)*100);
var winRatePerc = r2(winRateDiff / winRate);
var winRateK = k(winRateDiff);
// Frags  
var avgFragsDiff = r2(recentAvgFrags - avgFrags);
var avgFragsPerc = r2(avgFragsDiff / avgFrags * 100);
var avgFragsK = k(avgFragsDiff);
// avgDamage  
var avgDamageDiff = r0(recentDamage - Damage);
var avgDamagePerc = r2(avgDamageDiff / Damage * 100);
var avgDamageK = k(avgDamageDiff);
// Survival Rate
var survRateDiff = r2((recentSurvRate - survRate)*100);
var survRatePerc = r2(survRateDiff / survRate);
var survRateK = k(survRateDiff);
// Spotted  
var avgSpottedDiff = r2(recentAvgSpotted - avgSpotted);
var avgSpottedPerc = r2(avgSpottedDiff / avgSpotted * 100);
var avgSpottedK = k(avgSpottedDiff);
// avgDamageonSpotting  
var spottingDamageDiff = r0(recentSpottingDamage - spottingDamage);
var spottingDamagePerc = r2(spottingDamageDiff / spottingDamage * 100);
var spottingDamageK = k(spottingDamageDiff); 
// XP  
var xpDiff = r0(recentXP - xp);
var xpPerc = r2(xpDiff / xp * 100);
var xpK = k(xpDiff);  
// PotentialDamage  
var potentialDamageDiff = r0(recentPotentialDamage - potentialDamage);
var potentialDamagePerc = r2(potentialDamageDiff / potentialDamage * 100);
var potentialDamageK = k(potentialDamageDiff); 
  
//PRINTING
// Rating
document.getElementById("recentRating").innerHTML = r0(recentRating);
document.getElementById("rating").innerHTML = r0(rating);
document.getElementById("ratingVX").innerHTML = d(ratingDiff) + " (" + d(ratingPerc) + "%)";
document.getElementById("ratingVX").style.color = ratingK;
// Rating Level
document.getElementById("recentRatingLabel").innerHTML = recentTitle;
document.getElementById("ratingLabel").innerHTML = ratingTitle;  
  // Battles
document.getElementById("recentBattles").innerHTML = c(recentBattles);
document.getElementById("battles").innerHTML = c(battles);
  // WR
document.getElementById("recentWinRate").innerHTML = p(recentWinRate)+"%";
document.getElementById("winRate").innerHTML = p(winRate)+"%";
document.getElementById("winRateVX").innerHTML = d(winRateDiff) + "pp (" + d(winRatePerc) + "%)";
document.getElementById("winRateVX").style.color = winRateK;
  // Avg. Destroyed
document.getElementById("recentAvgFrags").innerHTML = r2(recentAvgFrags);
document.getElementById("avgFrags").innerHTML = r2(avgFrags);
document.getElementById("avgFragsVX").innerHTML = d(avgFragsDiff) + " (" + d(avgFragsPerc) + "%)";
document.getElementById("avgFragsVX").style.color = avgFragsK;
  // Avg. Damage
document.getElementById("recentAvgDamage").innerHTML = c(r0(recentDamage));
document.getElementById("avgDamage").innerHTML = c(r0(Damage));
document.getElementById("avgDamageVX").innerHTML = c(d(avgDamageDiff)) + " (" + d(avgDamagePerc) + "%)";
document.getElementById("avgDamageVX").style.color = avgDamageK;
  // Survival
document.getElementById("recentSurvivalRate").innerHTML = p(recentSurvRate)+"%";
document.getElementById("survivalRate").innerHTML = p(survRate)+"%";
document.getElementById("survivalRateVX").innerHTML = d(survRateDiff) + "pp (" + d(survRatePerc) + "%)";
document.getElementById("survivalRateVX").style.color = survRateK;
  // Avg. Spotted
document.getElementById("recentAvgSpotted").innerHTML = r2(recentAvgSpotted);
document.getElementById("avgSpotted").innerHTML = r2(avgSpotted);
document.getElementById("avgSpottedVX").innerHTML = d(avgSpottedDiff) + " (" + d(avgSpottedPerc) + "%)";
document.getElementById("avgSpottedVX").style.color = avgSpottedK; 
  // Avg. Damage on Spotting
document.getElementById("recentDamageOnSpotting").innerHTML = c(r0(recentSpottingDamage));
document.getElementById("damageOnSpotting").innerHTML = c(spottingDamage);
document.getElementById("damageOnSpottingVX").innerHTML = c(d(spottingDamageDiff)) + " (" + d(spottingDamagePerc) + "%)";
document.getElementById("damageOnSpottingVX").style.color = spottingDamageK;
  // Avg. XP
document.getElementById("recentXP").innerHTML = c(r0(recentXP));
document.getElementById("xp").innerHTML = c(xp);
document.getElementById("xpVX").innerHTML = d(xpDiff) + " (" + d(xpPerc) + "%)";
document.getElementById("xpVX").style.color = xpK;  
    // Avg. Potential Damage
document.getElementById("recentpotentialDamage").innerHTML = c(r0(recentPotentialDamage));
document.getElementById("potentialDamage").innerHTML = c(potentialDamage);
document.getElementById("potentialDamageVX").innerHTML = c(d(potentialDamageDiff)) + " (" + d(potentialDamagePerc) + "%)";
document.getElementById("potentialDamageVX").style.color = potentialDamageK;    
};