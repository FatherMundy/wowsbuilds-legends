window.onload = function() {
console.log('start')
var current = JSON.parse($('#current-data').html())
var rawData = JSON.parse($('#history-data').html()).sort(function(a,b){
  return b.battles - a.battles
})

  console.log(current)
  console.log(rawData)

  console.log("run function")
  var pageID = document.getElementById("currentMemberId").innerHTML;
  var memberID = document.getElementById("authMemberId").innerHTML;
  console.log(pageID+" hello");
  console.log(memberID);
  if (pageID == memberID) {
    console.log("IDmatch");
    document.getElementById("updateRating").style.display = "block";
    document.getElementById("member-controls").style.display = "block";
    document.getElementById("member-rating").style.display = "block";
    document.getElementById("history-controls").style.display = "none";
  } else if (pageID !== memberID) {
    console.log("NoDmatch");
    $("#updateRating").hide()
  };

var dataxp = {
  datasets: [
    {
      label: 'XP',
      data: rawData,
      borderColor: '#40B599',
      backgroundColor: '#40B599',
      color: '#fff',
      fill: false,
      tension: .1
    }
  ]
};

var datawr = {
  datasets: [
    {
      label: 'Recent PR',
      data: rawData,
      borderColor: '#007CC3',
      backgroundColor: '#007CC3',
      color: '#fff',
      fill: false,
      tension: .1
    }
  ]
};

const data = {
  datasets: [
    {
      label: 'PR',
      data: rawData,
      borderColor: '#EC5829',
      backgroundColor: '#EC5829',
      color: '#fff',
      fill: false,
      tension: .1
    }
  ]
};

const xpoptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    parsing: {
      xAxisKey: 'battles',
      yAxisKey: 'xp'
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff80',
          font: {
            size: 12
          }
        },
        title: {
          color: '#ffffff80',
          display: true,
          text: 'Battles Played'
        },
        grace: '0%',
        offset: false,
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
        },
        type: 'linear',
        offset: true

      },
      y: {
        type: 'linear',
        ticks: {
          color: '#ffffff80',
          stepSize: 10,
          font: {
            size: 12
          }
        },
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
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
                        return data
          },          
          title: function(context) {
            return "Avg. XP"
          },
        }
      }
    }
  } 

const wroptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    parsing: {
      xAxisKey: 'battles',
      yAxisKey: 'winRate'
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff80',
          font: {
            size: 12
          }
        },
        title: {
          color: '#ffffff80',
          display: true,
          text: 'Battles Played'
        },
        grace: '0%',
        offset: false,
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
        },
        type: 'linear',
        offset: true

      },
      y: {
        type: 'linear',
        ticks: {
          color: '#ffffff80',
          font: {
            size: 12
          }
        },
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
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
                        return data += "%";
          },          
          title: function(context) {
            return "Win Rate"
          },
        }
      }
    }
  } 

const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    parsing: {
      xAxisKey: 'battles',
      yAxisKey: 'ratingValue'
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff80',
          font: {
            size: 14
          }
        },
        title: {
          color: '#ffffff80',
          display: true,
          text: 'Battles Played'
        },
        grace: '0%',
        offset: false,
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
        },
        type: 'linear',
        offset: true

      },
      y: {
        type: 'linear',
        ticks: {
          color: '#ffffff80',
          stepSize: 10,
          font: {
            size: 14
          }
        },
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
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
                            label += data += " - Bad";
                        }
                        else if (650 <= data && data < 900){
                            label += data += " - Average";
                        }
                        else if (900 <= data && data < 1200){
                            label += data += " - Above Average";
                        }
                        else if (1200 <= data && data < 1600){
                            label += data += " - Good";
                        }
                        else if (1600 <= data && data < 2000){
                            label += data += " - Very Good";
                        }
                        else if (2000 <= data && data < 2500){
                            label += data += " - Great";
                        }
                        else if(2500 <= data && data < 2900){
                            label += data += " - Unicum";
                        }
                        else {
                            label += data += " - Super Unicum";
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

const optionsM = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.25,
    parsing: {
      xAxisKey: 'battles',
      yAxisKey: 'ratingValue'
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff80',
          font: {
            size: 14
          }
        },
        title: {
          color: '#ffffff80',
          display: true,
          text: 'Battles Played'
        },
        grace: '0%',
        offset: false,
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
        },
        type: 'linear',
        offset: true

      },
      y: {
        type: 'linear',
        ticks: {
          color: '#ffffff80',
          stepSize: 10,
          font: {
            size: 14
          }
        },
        grid: {
          borderColor: '#ffffff',
          borderWidth: 2,
          color: '#0a284e'
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
                            label += data += " - Bad";
                        }
                        else if (650 <= data && data < 900){
                            label += data += " - Average";
                        }
                        else if (900 <= data && data < 1200){
                            label += data += " - Above Average";
                        }
                        else if (1200 <= data && data < 1600){
                            label += data += " - Good";
                        }
                        else if (1600 <= data && data < 2000){
                            label += data += " - Very Good";
                        }
                        else if (2000 <= data && data < 2500){
                            label += data += " - Great";
                        }
                        else if(2500 <= data && data < 2900){
                            label += data += " - Unicum";
                        }
                        else {
                            label += data += " - Super Unicum";
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

const configM = {
  type: 'line',
  data: data,
  options: optionsM 
};

const xpconfig = {
  type: 'line',
  data: dataxp,
  options: xpoptions 
};

const wrconfig = {
  type: 'line',
  data: datawr,
  options: wroptions 
};

function ratingColor (x) {
  if (x < 650) {
   return "#EA3524";
} else if (650 < x && x < 900) {
   return "#EE8032";
} else if (900 < x &&  x < 1200) {
     return "#F7C84B";
} else if (1200 < x && x < 1600) {
     return "#9FCF62";
} else if (1600 < x && x < 2000) {
     return "#59AE5B";
} else if (2000 < x && x < 2500) {
     return "#5AC6B3";
} else if (2500 < x && x < 2900){
     return "#BF52EB";
} else if (x > 2900) {
   return "#9329BE";
} else {
   return "#FFFFFF";
}
}

  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, config);
  var ctxm = document.getElementById("myChartMobile").getContext("2d");
  new Chart(ctxm, configM);
  var ctxxp = document.getElementById("xpChart").getContext("2d");
  var ctxxpm = document.getElementById("xpChartMobile").getContext("2d");
  new Chart(ctxxp, xpconfig);
  new Chart(ctxxpm, xpconfig);
  var ctxwr = document.getElementById("wrChart").getContext("2d");
  var ctxwrm = document.getElementById("wrChartMobile").getContext("2d");
  new Chart(ctxwr, wrconfig);
  new Chart(ctxwrm, wrconfig);  

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
console.log(rating);
console.log(recentTitle);
console.log(xp);


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
document.getElementById("rating-text").style.color = ratingColor(rating);
document.getElementById("rating-label-text").style.color = ratingColor(rating);
document.getElementById("recentRating").style.color = ratingColor(recentRating);
document.getElementById("rating").innerHTML = r0(rating);
document.getElementById("ratingVX").innerHTML = d(ratingDiff) + " (" + d(ratingPerc) + "%)";
document.getElementById("ratingVX").style.color = ratingK;
// Rating Level
document.getElementById("recentRatingLabel").innerHTML = recentTitle;
document.getElementById("recentRatingLabel").style.color = ratingColor(recentRating);
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
  

new gridjs.Grid({
  columns: [{ id:'battles',
             name: 'Battles',                      
            }, 
            {id:'ratingValue',
             name: 'Rating',
             formatter: (_, row) => `${(row.cells[1].data + ' ('+ row.cells[3].data + ')')}`
            },
            { id:'ratingTitle',
             name: '',
             sort: 0              
            },
           { id:'ratingValueChange',
             name: 'Change',
             hidden: true,
             sort: 0              
            }],
  data: rawData,
  style: {
    td: {
       background: '#061931',
       color: '#fff',
       'font-size': 16,
       'font-family': '\'Open Sans\',sans-serif',
       'border-top': '1px solid #0a284e',
       'border-bottom': '0px solid #061931',
       'border-right': '1px solid #061931',
        'border-left': '1px solid #061931'
    },
    table: {
        background: '#061931',
    },
    container: {
       'border-radius': '4px',
       'border': '1px solid #0a284e',
       'padding': '0px',
       background: '#061931'
    },
    th: {
       background: '#061931',
       color: '#fff',
       'font-family': '\'Open Sans\',sans-serif',
       'font-size': 16,
       'border-bottom': '2px solid #0a284e',
       'border-top': '0px solid #061931',
       'border-right': '1px solid #061931',
        'border-left': '1px solid #061931'
    }
  },
  sort: true,
}).render(document.getElementById("wrapper"));

};