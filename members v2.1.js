const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'}

function c(x) {
  return (1*x).toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
function p(x) {
  return Math.round(x*100) + "%";
  }
function pt(x) {
  return (x*100).toFixed(2)+"%";
  }  
function r(x) {
  return (1*x).toFixed(0);
  }
function o(x) {
  return (1*x).toFixed(1);
  }
function t(x) {
  return (1*x).toFixed(2);
  }
function d(num){
  if (num == 0){
    return "-";
  }
  else if (num > 0){
    return "+"+num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }else{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
function k(x){
  if (x == 0){
    return "#ffffff50";
  }
  else if (x > 0){
    return "#40b599";
  }else{
    return "#f2441d";
  }
};
function ki(x){
  if (x == 0){
    return "#ffffff50";
  }
  else if (x > 0){
    return "#f2441d";
  }else{
    return "#40b599";
  }
};

//var current = JSON.parse($('#current-data').html())
var ratings_data = JSON.parse($('#ratings_data').html()).sort(function(a,b){
  return b.battles - a.battles
})


$.each(ratings_data,function(i,value){
  var date = new Date (value.date*1000)
  var format = date.toLocaleDateString('en-US', dateOptions)
  $('.history-cont').append('<div class="history-row" id="'+value.id+'" data-index="'+i+'"><div><div class="row-title">'+value.battles+'</div><div class="date-text">'+format+'</div></div><img src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba510512dcf0b605ac25d0_visibility_black_24dp%20(2)%201.svg" class="hidden"></div>')
})


function inputData(index,id) {
  var ratings_data = JSON.parse($('#ratings_data').html()).sort(function(a,b){
  return a.battles - b.battles
  })
  var len = ratings_data.length
  var select = len - index - 1
  var data = ratings_data[select]
  $.each(data,function(key,value){
    var x = $('#'+key)
    var fmt = x.attr('data_fmt')
    if (fmt == "c") {
      x.html(c(value))
    } else if (fmt == "p") {
      x.html(pt(value))
    } else if (fmt =="t") {
      x.html(t(value))
    } else {
      x.html(value)
    }
    if (key.indexOf("recent_") == -1 && key !== "battles") {
    var diff = $('#diff_'+key)
    var a = value
    var b1 = "recent_"+key
    var b2 = data[b1]
    var pdiff = pt((b2-a)/a)
    var d = o(b2-a)
    diff.html(pdiff)
    diff.css('color',k((b2-a)/a))
    }
  }) 
  $('#'+id).siblings().removeClass('selected').find('img').hide()
  $('#'+id).addClass('selected').find('img').show()
  $('#rating_id').val(id)
  $('#rating_id_2').val(id)
}

var first = ratings_data[0]

inputData(0,first.id)

$(document).on('click','.history-row',function(){
  var index=$(this).attr('data-index')
  var id=$(this).attr('id')
  inputData(index,id)
})

window.onload = function() {
  var pageID = document.getElementById("currentMemberId").innerHTML;
  var memberID = document.getElementById("authMemberId").innerHTML;
  if (pageID == memberID) {
  $('#updateRating').show()
  $('#updateRating_2').show()
  $('#member-controls').show()
  $('#member-rating').show()
  $('#history-controls').removeClass('hidden')
  } else if (pageID !== memberID) {
  $('#updateRating').hide()
  $('#updateRating_2').hide()
  $('#member-controls').hide()
  $('#member-rating').hide()
  $('#history-controls').addClass('hidden')
}

var dataxp = {
  datasets: [
    {
      label: 'XP',
      data: ratings_data,
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
      data: ratings_data,
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
      data: ratings_data,
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
      yAxisKey: 'win_rate'
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
      yAxisKey: 'rating'
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
      yAxisKey: 'rating'
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

};

$('#wf-form-Rating-Delete').submit(function(){
  var id = $('#rating_id_2').val()
  var index = $('#'+id).attr('data-index')
  ratings_data.splice(index,1)
  $('#'+id).remove()
  var first = ratings_data[0]
  $('.stat-grid').find('.bold').each(function(){$(this).html("-")})
  $('.stat-grid').find('.delta').each(function(){$(this).html("-").css('color','#ffffff50')})
})




