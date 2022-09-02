const urlParams = new URLSearchParams(window.location.search);
const url_username = urlParams.get('username');
const url_id = urlParams.get('id');
const queryURI = 'https://api.airtable.com/v0/appuDJTZMggJXiiyL/Members/' + url_id

const options = { month: 'long', year: 'numeric'};
const options2 = { month: 'short', year: 'numeric',day: 'numeric'};

const readOnly = 'key3mEMK4VVsdmpkq'

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

function inputData(ratings_data,result,index,id) {
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

function addPlayerDetails(result){

  var createDate = new Date(result.fields.created_date).toLocaleDateString(undefined,options)
  var sub_renews = new Date(result.fields.sub_renews).toLocaleDateString(undefined,options2)
  var platform = "no platofrm"

  if (result.fields.platform == "Xbox"){
    var platform = 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/609e8bc6296946cac1bcdc87_xbox-icon.svg'
  } else if (result.fields.platform == "Playstation"){
    var platform = 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/609e8bc6da2c0a84415717d8_ps-icon.svg'
  }

  document.title = result.fields.username + " - WoWS Builds Member";
  $('#profile_photo').attr('src',result.fields.profile_photo_url)
  $('#rank_icon').attr('src',result.fields.rank_icon[0])
  $('#rank_icon_title').attr('src',result.fields.rank_icon[0])
  $('#rank_icon_minor').attr('src',result.fields.rank_icon[0])
  $('#username_title').html(result.fields.username)
  $('#rank_label').html(result.fields.rank_label[0])
  $('#count_builds').html(result.fields.count_builds)
  $('#count_upvotes').html(result.fields.count_upvotes)
  $('#damage_records').html(result.fields.damage_records)
  $('#damage_records_title').html(result.fields.damage_records)
  $('#xp_records').html(result.fields.xp_records)
  $('#xp_records_title').html(result.fields.xp_records)
  if (result.fields.location != undefined) {
    $('#location').html(result.fields.location)
  } else {
    $('#location_row').hide()
  }
  if (result.fields.platform != undefined) {
    $('#platform').attr('src',platform)
    $('#gamertag').html(result.fields.gamertag)
  } else {
    $('#platform_row').hide()
  }
  if (result.fields.discord_name != undefined) {
    $('#discord_name').html(result.fields.discord_name)
  } else {
    $('#discord_row').hide()
  }
  if (result.fields.class_bool == 1) {
    $('#class_icon').attr('src',result.fields.class_img[0])
    $('#class_name').html(result.fields.class_name[0])
  } else {
    $('#class_row').hide()
  }
  if (result.fields.ship_bool == 1) {
    $('#ship_icon').attr('src',result.fields.ship_img[0])
    $('#ship_name').html(result.fields.ship_name[0])
  } else {
    $('#ship_row').hide()
  }
  if (result.fields.nation_bool == 1) {
    $('#nation_icon').attr('src',result.fields.nation_img[0])
    $('#nation_name').html(result.fields.nation_name[0])
  } else {
    $('#nation_row').hide()
  }
  $('#months_subbed').html(result.fields.months_subbed_real)
  $('#create_date').html(createDate)

  //member controls
  $('#sub_renews').html(sub_renews)
  $('#account_type').html(result.fields.account_type)
}

function buildData(result){
  const builds = JSON.parse(result.fields.builds_json)
    $.each(builds,function(index,value){
      $('#builds_table').append('<a href="/builds/'+value.id+'" class="leaderboard-row-2 build-table w-inline-block"><div class="flex-h-c table-cell"><img src="https://global-uploads.webflow.com/5f3b00acbb1ebd856f32d560/5f64e83e3d893884a7cecd05_upvote.svg" class="icon _12r"><div class="table-upvotes">'+value.upvotes+'</div><div class="pre-wrap">'+value.name+'</div></div><div class="flex-h-c table-cell"><img src="'+value.flag+'" class="icon _12h"><div>'+value.tier+' '+value.ship+'</div></div><div >'+value.commander+'</div><div class="flex-h-r"><div class="right blue-text">View Build</div><img src="https://global-uploads.webflow.com/5f3b00acbb1ebd856f32d560/61ba4ed45df68825cc122198_chevron_right_white_24dp%201.svg" class="icon"></div></a>')
    })
}

function ratingData(result){
  var ratings_data = JSON.parse(result.fields.rating_json).sort(function(a,b){
    return b.battles - a.battles
  })

  $.each(ratings_data,function(i,value){
    var date = new Date (value.date*1000)
    var format = date.toLocaleDateString('en-US', options2)
    $('.history-cont').append('<div class="history-row" id="'+value.id+'" data-index="'+i+'"><div><div class="row-title">'+value.battles+'</div><div class="date-text">'+format+'</div></div><img src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba510512dcf0b605ac25d0_visibility_black_24dp%20(2)%201.svg" class="hidden"></div>')
  })

  var first = ratings_data[0]
  var date = new Date (first.date*1000)
  var format = date.toLocaleDateString('en-US', options2)

  $('#rating-text').html(first.rating)
  $('#rating-label-text').html(first.category)
  $('#recent_rating_print').html(first.recent_rating)
  $('#recent_category_print').html(first.recent_category)
  $('#last_upload_date').html(format)
  $('#last_upload_battles').html(first.recent_battles + " recent battles")

  inputData(ratings_data,result,0,first.id)

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
}

function recordData(result){
  var records = JSON.parse(result.fields.record_json)
  $.each(records,function(i,value){
    $('#records').append('<a href="/ships/'+value.ship_slug+'" class="card-outline flex-h-s w-inline-block"><div class="flex-v-l"><div class="flex-h-c"><img src="'+value.flag+'" loading="lazy" alt="" class="icon _12h"><div>'+value.tier+' '+value.ship+'</div></div><div class="flex-h-c"><div class="tag">'+value.type+'</div><div class="tag green">Active</div></div></div><div class="saria-subtitle">'+c(value.record)+'</div></a>')
  })
}

function seriesData(result){
  var series = JSON.parse(result.fields.series_json)
  $.each(series,function(i,value){
    $('#series').append('<a href="/ships/'+value.ship_slug+'" class="card-outline flex-h-s w-inline-block"><div class="flex-v-l"><div class="flex-h-c"><img src="'+value.flag+'" loading="lazy" alt="" class="icon _12h"><div>'+value.tier+' '+value.ship+'</div></div><div class="flex-h-c"><div class="tag">'+value.type+'</div><div class="tag green">Active</div></div></div><div class="saria-subtitle">'+c(value.record)+'</div></a>')
  })
}

function memberControls(result){
  var id = $('#auth').html()
  if (id == result.fields.airtable_id) {
    $('[data-vision="auth"]').each(function(){$(this).removeClass('hidden')})
  } else {
    $('[data-vision="auth"]').each(function(){$(this).addClass('hidden')})
  }
}

async function getMember() {
    let result
    try {
      const result = $.ajax({
        url: queryURI,
        headers: {'Authorization': 'Bearer '+readOnly},
      })
      return result
    } catch  (error) {
      console.log(error)
    }
}

async function runQuery(){
  var result = await getMember()
  //console.log(result.fields)
  addPlayerDetails(result)
  if (result.fields.builds_json != '[]') {
    buildData(result)
  } else {
    $('#empty_builds').show()
  }
  if (result.fields.rating_json != '[]') {
    ratingData(result)
  } else {
    $('#no_upload').show()
    $('#ratings').hide()
  }
  if (result.fields.record_json != '[]') {
    recordData(result)
  } else {
    $('#empty_records').show()
  }
  if (result.fields.series_json != '[]') {
    seriesData(result)
  } else {
    $('#empty_series').show()
  }
  memberControls(result)
  $('#username_title').data(result)
}

window.onload = runQuery

$(document).on('click','.history-row',function(){
  var index=$(this).attr('data-index')
  var id=$(this).attr('id')
  var result=$('#username_title').data()
  var ratings_data = JSON.parse(result.fields.rating_json)
  inputData(ratings_data,result,index,id)
})