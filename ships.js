
function devAmount(x,y) {
  if (x*y<-2.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61ece8d66e65f4d1c3074d43_terrible.svg"
  } else if (x*y<-1.5 && x*y>-2.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61e624c8839eb823edb25eca_worst.svg"
  } else if (x*y<-0.5 && x*y>-1.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61e624cdfb13b0117e4ae274_worse.svg"
  } else if (x*y<0.5 && x*y>-0.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61e624c8afbc9f803b2a9b9c_level.svg"
  } else if (x*y<1.5 && x*y>0.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61e624c8ebafac1e3294ca29_better.svg"
  } else if (x*y<2.5 && x*y>1.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61e624c8ea8d7f80e0a68f83_best.svg"
  } else if (x*y>2.5) {
    img = "https://uploads-ssl.webflow.com/5fdacfb999e5df1c5c481dc9/61ece2d20c0971c3196254fd_top.svg"
  }
}

function c(x) {
  return x.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }
function p(x) {
  return Math.round(x*100) + "%";
  }
function pt(x) {
  return (x*100).toFixed(2)+"%";
  }
function pp(x) {
  return x.toFixed(2)+"%"
}  
function r(x) {
  return x.toFixed(0);
  }
function o(x) {
  return (1*x).toFixed(1);
  }
function t(x) {
  return (1*x).toFixed(2);
  }

function flagSelect(x){
    if (x == "Europe") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62340519427724587afced5d_europe_min.svg'}
    else if (x == "France") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbcd0ea43424d9dab095_france.svg'}
    else if (x == "Germany") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd1a3ae6a08a0dd397e_germany.svg'}
    else if (x == "Italy") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd6f20b977b27f8dfe6_italy.svg'}
    else if (x == "Japan") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd1a3ae6a05f5dd397d_japan.svg'}
    else if (x == "Pan-Asian") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/615b05d1332aa9d9e651ddba_pas-flag.svg'}
    else if (x == "U.K.") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd1cfe6f7704f1d0cbf_uk.svg'}
    else if (x == "U.S.A.") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbcdb67f56ed06f0e5f9_usa.svg'}
    else if (x == "U.S.S.R.") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd438320f7a32ca2155_ussr.svg'}
}


var ship = JSON.parse($('#ship-data').html())
console.log(ship)
var peer = JSON.parse($('#peer-data').html()).sort(function(a,b){
    return b.hp - a.hp
  })
$('#peer-data').html(JSON.stringify(peer))

//Add scores
function scorePrint(){
  if (score.count>9.9){
    $('#progress_section').hide()
    $('#rating_bars').show()
    $.each(score,function(index,value){
      console.log(index)
      console.log(value)
      var drift = (value/5*100+"%")
      $('#'+index+'_rating').html(t(value))
      $('#'+index+'_slider').css('left',drift)
    })
  } else {
    $('#progress_section').show()
    $('#rating_bars').hide()
    $('#rating_progress').html(score.count+"/10")
    var drift = (100-((score.count/10)*100)+"%")
    $('.progress-bar-level').css('right',drift)
  }
}

function printShip(){
  // PRRINT SCORES
  scorePrint()
  // SHIP PRINTING
  $.each(ship, function(key,value){
      if (key.indexOf("_dev") !== -1) {
        var x = $("#"+key)
        var a = x.attr('data-type')
        devAmount(value,a)
        x.attr('src',img)
      } else if (value !== null) {
        var x = $("#"+key).find('[info="value"]')
        var fmt = x.attr('data-fmt')
        if (fmt == "c") {
          x.html(c(value))
        } else if (fmt == "km") {
          x.html(o(value)+" km")
        } else if (fmt == "t") {
          x.html(t(value))
        } else if (fmt == "po") {
          x.html(p(value))
        } else if (fmt == "kt") {
          x.html(o(value)+" kt")
        } else if (fmt == "pt") {
          x.html(pt(value))
        } else if (fmt == "mm") {
          x.html(r(value)+" mm")
        } else if (fmt == "dps") {
          x.html(t(value)+" º/s")
        } else if (fmt == "so") {
          x.html(o(value)+" s")
        } else if (fmt == "st") {
          x.html(t(value)+" s")
        } else if (fmt == "p") {
          x.html(p(value))
        } else if (fmt == "m") {
          x.html(r(value)+" m")
        } else {
          x.html(value)
        }
      }

      //hiding
      if (key == "class" && value == "Aircraft Carrier") {
        $('#aircraft').show()
        $('#mb').hide()
      }
      if (key == "torpedo_layout" && value == null) {
        $('#torpedo').hide()
      }
      if (key == "he_damage" && value == null) {
        $('#he-shell').hide()
      }
      if (key == "ap_damage" && value == null) {
        $('#ap-shell').hide()
      }
      if (key == "atba_range" && value == null) {
        $('#sb').hide()
      }
      if (key == "atba_2_name" && value == null) {
        $('#atba_2').hide()
      }
      if (key == "aa_1_name" && value == null) {
        $('#aa').hide()
      }
      if (key == "aa_2_name" && value == null) {
        $('#aa2').hide()
      }
      if (key == "aa_3_name" && value == null) {
        $('#aa3').hide()
      }
      if (key == "aa_4_name" && value == null) {
        $('#aa4').hide()
      }

      //PRINT CONSUMES
      if (key.indexOf('consum')!==-1){
        var slot = key
        console.log(value)
        if (value.length==0) {$('#'+slot).hide()}
        $.each(value, function(index,key,value){
          var type = key.name
          $('#'+slot).append('<div class="card-outline no-hover" data-option="'+type+'"><div class="flex-h-c"><img src="'+key.icon+'" loading="lazy" alt="" class="icon _24r"><div class="selected-name minor">'+type+'</div></div></div>')
          if (key.effects.smoke_disp!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Dispersion Time</div><div class="bold-2">'+o(key.effects.smoke_disp)+' s</div></div>')
          }
          if (key.effects.speed_boost!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Speed Boost</div><div class="bold-2 green">'+p(key.effects.speed_boost)+'</div></div>')
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Max Speed</div><div class="bold-2 green">'+o((1+key.effects.speed_boost)*ship.max_speed)+' kt</div></div>')
          }
          if (key.effects.heal_amount!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Health per second</div><div class="bold-2 green">+'+key.effects.heal_amount*100+' %</div></div>')
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Max Heal</div><div class="bold-2 green">+'+c(key.effects.heal_amount*ship.hp*key.duration)+'</div></div>')
          }
          if (key.effects.torp_detect!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Torp Detection</div><div class="bold-2">'+o(key.effects.torp_detect)+' km</div></div>')
          }
          if (key.effects.ship_detect!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Ship Detection</div><div class="bold-2">'+o(key.effects.ship_detect)+' km</div></div>')
          }
          if (key.effects.aa_damage_multi!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>AA DPS Increase</div><div class="bold-2 green">+200%</div></div>')
          }
          if (key.effects.radar_range!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Radar Range</div><div class="bold-2">'+o(key.effects.radar_range)+' km</div></div>')
          }
          if (key.effects.sigma!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Shell Grouping</div><div class="bold-2 green">+10%</div></div>')
          }
          if (key.effects.atbas_sigma!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Secondary Shell Grouping</div><div class="bold-2 green">+100%</div></div>')
          }
          if (key.effects.atbas_disp!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Secondary Shell Dispersion</div><div class="bold-2 green">-50%</div></div>')
          }
          if (key.effects.torp_reload!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Torpedo Reload</div><div class="bold-2">'+r(key.effects.torp_reload)+' s</div></div>')
          }
          if (key.effects.reload!==undefined) {
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Reload Time Boost</div><div class="bold-2 green">+50%</div></div>')
            $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Reload Time</div><div class="bold-2">'+o(ship.reload*.5)+' s</div></div>')
          }
          //basic info
          if (key.charges > 10) {var charges = "∞"} else {var charges = key.charges}
          $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Duration</div><div class="bold-2">'+o(key.duration)+' s</div></div>')
          $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Cooldown</div><div class="bold-2">'+o(key.cooldown)+' s</div></div>')
          $('[data-option="'+type+'"]').append('<div class="row2 minor"><div>Charges</div><div class="bold-2">'+charges+'</div></div>')
        })
      }
  })

//CREATE PEER TABLE
$.each(peer,function(index,key,value){
  var rank = index+1
  var flag = flagSelect(key.nation)
  if (key.premium == true){
      var color = '#ffca5f'
    } else {
      var color = '#ffffff'
    }
  if (key.class == "Aircraft Carrier") {
      $('#peer_board').append('<div class="w-layout-grid leaderboard-row-2" id="'+key.main_id+'"><div class="sticky-l"><div info="rank">'+rank+'</div><img class="icon _16h" src="'+flag+'"><div style="color:'+color+'">'+key.name+'</div><a href="/ships/'+key.slug+'" target=”_blank”><img class="icon" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba47d8ca605b30bebdf084_newtabblue.svg"></a></div><div class="right" data-filter="hp">'+c(key.hp)+'</div><div class="right" data-filter="range">-</div><div class="right" data-filter="ap_dpm">-</div><div class="right" data-filter="rudder_shift">'+t(key.rudder_shift)+'</div><div class="right"data-filter="sea_detect">'+t(key.sea_detect)+'</div></div>')
  } else {
      $('#peer_board').append('<div class="w-layout-grid leaderboard-row-2" id="'+key.main_id+'"><div class="sticky-l"><div info="rank">'+rank+'</div><img class="icon _16h" src="'+flag+'"><div style="color:'+color+'">'+key.name+'</div><a href="/ships/'+key.slug+'" target=”_blank”><img class="icon" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba47d8ca605b30bebdf084_newtabblue.svg"></a></div><div class="right" data-filter="hp">'+c(key.hp)+'</div><div class="right" data-filter="range">'+o(key.range)+'</div><div class="right" data-filter="ap_dpm">'+c(key.ap_dpm)+'</div><div class="right" data-filter="rudder_shift">'+t(key.rudder_shift)+'</div><div class="right"data-filter="sea_detect">'+t(key.sea_detect)+'</div></div>')
  }
  $('[data-filter="hp"]').addClass('selected').attr('data-sort',1).find('.filter').show()
})
}


//SORT TABLE
function filterTable(){
  var data = JSON.parse($('#peer-data').html())
  var filter = $(this).attr('data-filter')
  var sort = $(this).attr('data-sort')
  var cols = JSON.parse($('#select-cols').html())
  if (sort == 0 || sort == -1) {
    //Sort large to small
    var sort = data.sort(function(a,b){
      return b[filter] - a[filter]
    })
    //remove rows
    $('#peer_board').find('.leaderboard-row-2').each(function(){
      if ($(this).attr('id') !== undefined) {$(this).remove()}
    })
    //Add Rows
    $.each(sort,function(index,key,value){
      var rank = index+1
      var flag = flagSelect(key.nation)
      var id = key.main_id
      if (key.premium == true){
        var color = '#ffca5f'
      } else {
        var color = '#ffffff'
      }
      $('#peer_board').append('<div class="w-layout-grid leaderboard-row-2" id="'+id+'"><div class="sticky-l"><div info="rank">'+rank+'</div><img class="icon _16h" src="'+flag+'"><div style="color:'+color+'">'+key.name+'</div><a href="/ships/'+key.slug+'" target=”_blank”><img class="icon" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba47d8ca605b30bebdf084_newtabblue.svg"></a></div></div>')
      $.each(cols,function(index,value){
        var stat = key[value]
        var fmt = $('[stat="'+value+'"]').attr('fmt')
        if (stat==null){
          $("#"+id).append('<div class="right" data-filter="'+value+'">–</div>')
        } else {
          if (fmt == "c") {
              var select =c(stat)
            } else if (fmt == "t") {
              var select =t(stat)
            } else if (fmt == "o") {
              var select =o(stat)
            } else {
              var select =stat
            }
          $("#"+id).append('<div class="right" data-filter="'+value+'">'+select+'</div>')
        }
      })
    })
    
    //Modify Header
    $('.table-filter').each(function(){
      $(this).removeClass('selected').attr('data-sort',0).find('.filter').hide().css('transform', 'rotate(0deg)')
    })
    $(this).addClass('selected').attr('data-sort',1).find('.filter').show().css('transform', 'rotate(0deg)')

    //Update Data
    $('#peer-data').html(JSON.stringify(sort))
  } else if (sort == 1) {
    //Sort small to large
    var sort = data.sort(function(a,b){
      return a[filter] - b[filter]
    })
    //remove rows
    $('#peer_board').find('.leaderboard-row-2').each(function(){
      if ($(this).attr('id') !== undefined) {$(this).remove()}
    })
    //Add Rows
    $.each(sort,function(index,key,value){
      var rank = index+1
      var flag = flagSelect(key.nation)
      var id = key.main_id
      if (key.premium == true){
        var color = '#ffca5f'
      } else {
        var color = '#ffffff'
      }
      $('#peer_board').append('<div class="w-layout-grid leaderboard-row-2" id="'+id+'"><div class="sticky-l"><div info="rank">'+rank+'</div><img class="icon _16h" src="'+flag+'"><div style="color:'+color+'">'+key.name+'</div><a href="/ships/'+key.slug+'" target=”_blank”><img class="icon" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba47d8ca605b30bebdf084_newtabblue.svg"></a></div></div>')
      $.each(cols,function(index,value){
        var stat = key[value]
        var fmt = $('[stat="'+value+'"]').attr('fmt')
        if (stat==null){
          $("#"+id).append('<div class="right" data-filter="'+value+'">–</div>')
        } else {
          if (fmt == "c") {
              var select =c(stat)
            } else if (fmt == "t") {
              var select =t(stat)
            } else if (fmt == "o") {
              var select =o(stat)
            } else {
              var select =stat
            }
          $("#"+id).append('<div class="right" data-filter="'+value+'">'+select+'</div>')
        }
      })
    })
    //Modify Header
    $('.table-filter').each(function(){
      $(this).removeClass('selected')
      $(this).find('.filter').hide()
      $(this).find('.filter').css('transform', 'rotate(0deg)')
      $(this).attr('data-sort',0)
    })
    $(this).addClass('selected')
    $(this).find('.filter').show()
    $(this).find('.filter').css('transform', 'rotate(180deg)');
    $(this).attr('data-sort',-1)
    $('#peer-data').html(JSON.stringify(sort))
  }
}

//ADD/REMOVE COLUMN
function modColumn(){
  var stat = $(this).attr('stat')
  var title = $(this).attr('title')
  var fmt = $(this).attr('fmt')
  var cols = []
  if ($(this).attr('select') == 1) {
    $('[data-filter="'+stat+'"]').each(function(){$(this).remove()})
    $(this).removeClass('selected').attr('select',0)
    $(this).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62340a79701d7419a3a9f931_vis%20off.svg')
  } else {
    let data = JSON.parse($('#peer-data').html())
    $('.leaderboard-row-2').each(function(){
      if ($(this).hasClass('top')==false) {
        var rank = $(this).find('[info="rank"]').html()-1
        if (data[rank][stat]==null) {
            var select = "–"
          } else {
            if (fmt == "c") {
              var select =c(data[rank][stat])
            } else if (fmt == "t") {
              var select =t(data[rank][stat])
            } else if (fmt == "o") {
              var select =o(data[rank][stat])
            } else {
              var select =data[rank][stat]
            }
        }
        $(this).append('<div class="right" data-filter="'+stat+'">'+select+'</div>')
      } else {
        $(this).append('<div class="table-filter right" data-sort=0 data-filter="'+stat+'"><div>'+title+'</div><img class="filter" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62335c0d754dd754a40a466d_filter_top.svg"></div>')
      }
    })
    $(this).addClass('selected').attr('select',1)
    $(this).find('img').attr('src','https://global-uploads.webflow.com/5f3b00acbb1ebd856f32d560/62340a7b121fe22593c4ac9b_vis_on.svg')
  }
  $('.leaderboard-row-2.top').find('.table-filter').each(function(){
    cols.push($(this).attr('data-filter'))
  })
  $('#selected-stat-title').html("Selected Stats – " + cols.length)
  $('#select-cols').html(JSON.stringify(cols))
}

//BUILD CARDS
if ($('#top-build').length!==0) {
var mods = JSON.parse($('#top-build').find('[data-set="mods"]').html())
var skills = JSON.parse($('#top-build').find('[data-set="skills"]').html())
var inspirations = JSON.parse($('#top-build').find('[data-set="inspirations"]').html())
$.each(mods,function(index,value){
  var icon = $('#'+value).attr('icon')
  $('#top-build').find('[data-print="mods"]').append('<img src="'+icon+'" class="icon _40h">')
})
$.each(skills,function(index,value){
  var icon = $('#'+value).attr('icon')
  $('#top-build').find('[data-print="skills"]').append('<img src="'+icon+'" class="icon _40h">')
})
$.each(inspirations,function(index,value){
  var icon = $('#'+value).attr('icon')
  var head = $('#'+value).attr('head')
  $('#top-build').find('[data-print="inspirations"]').append('<img src="'+head+'" class="icon _40h">').append('<img src="'+icon+'" class="icon _40h">')
})
}

window.onready = printShip()

$(document).on('click','.row2.rollup',function(){
  $(this).siblings('.row2.sub.hide').removeClass('hide')
  $(this).removeClass('rollup')
  $(this).addClass('rolldown')
  $(this).find('.icon').css('transform','rotate(180deg)')
})


$(document).on('click','.row2.rolldown',function(){
  $(this).siblings('.row2.sub').addClass('hide')
  $(this).removeClass('rolldown')
  $(this).addClass('rollup')
  $(this).find('.icon').css('transform','rotate(0deg)')
})

$(document).on('click','.table-filter',filterTable)

$(document).on('click','.button-x.select',modColumn)

$(document).on('click','#show-hide-stats',function(){
  if ($('.compress').attr('status')==0){
    $('.compress').addClass('expand')
    $('.compress').attr('status',1)
    $(this).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba60b37b942add51134372_visibility_off_black_24dp%20(1)%201.svg')
    $(this).find('div').html("Hide Stat Selection")
  } else {
    $('.compress').removeClass('expand')
    $('.compress').attr('status',0)
    $(this).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba510512dcf0b605ac25d0_visibility_black_24dp%20(2)%201.svg')
    $(this).find('div').html("Show Stat Selection")
  }
})



