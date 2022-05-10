const autoMetrics = {
    "max_speed":[1,1],
    "rudder_shift":[1,-1],
    "ap_damage":[1,1],
    "he_damage":[1,1],
    "aa_1_dps":[1,1],
    "aa_2_dps":[1,1],
    "aa_3_dps":[1,1],
    "aa_4_dps":[1,1],
    "torpedo_range":[1,1],
    "torpedo_speed":[0,1],
    "range":[1,1],
    "torpedo_damage":[1,1],
    "torpedo_reload":[1,-1],
    "torpedo_bomber_resto":[1,-1],
    "he_bomber_resto":[1,-1],
    "aa_1_range":[1,1],
    "aa_2_range":[1,1],
    "aa_3_range":[1,1],
    "aa_4_range":[1,1],
    "he_bomber_damage":[1,1],
    "he_bomber_detect":[1,-1],
    "reload":[1,-1],
    "atba_1_range":[1,1],
    "atba_2_range":[1,1],
    "torpedo_bomber_hp":[1,1],
    "torpedo_bomber_damage":[1,1],
    "torpedo_bomber_detect":[1,-1],
    "atba_1_damage":[1,1],
    "atba_1_reload":[1,-1],
    "atba_2_damage":[1,1],
    "atba_2_reload":[1,-1],
    "he_bomber_max":[1,1],
    "torpedo_bomber_max":[1,1],
    "he_bomber_hp":[1,1],
    "he_bomber_fire":[0,1]
}
const constMetrics = ['armor','torp_reduc','turning_circle','torpedo_bomber_attack','torpedo_bomber_flight','he_bomber_attack','he_bomber_flight']

var ship = JSON.parse($('[data-type="ship-data"]').html())
var traits = new Array()
var skills = new Array()
var mods = new Array()

function c(x) {
  return x.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }
function p(x) {
  return Math.round(x*100) + "%";
  }
function pt(x) {
  return (x*100).toFixed(2)+"%";
  }
function pz(x) {
  return (x*100).toFixed(0)+"%";
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
function k(x){
  if (x > 0){
    return "#40b599"
  } else if (x<0) {
    return "#f2441d"
  } else {
    return "#ffffff50"
  }
};
function ki(x){
  if (x > 0) {
    return "#f2441d"
  } else if (x<0){
    return "#40b599"
  } else {
    return "#ffffff50"
  }
};

function upgradeMods (mods,metric,base) {
  var array = []
  $.each(mods,function(index,key,value){
    if(key[metric]!==undefined){array.push(key[metric])}
  })
  var change = array.reduce(function(a,b){return a+b},0)
  final = base+change
  return final
}

function printShip(ship){
  console.log(ship)
  //show/hide
    if (ship.class == 'Aircraft Carrier') {
      $('#aircraft').show()
      $('#mb').hide()
    } else {
      $('#aircraft').hide()
      $('#mb').show()
    }
    if (ship.he_damage == null) {
      $('#heShell').hide()
    } else {
      $('#heShell').show()
    }
    if (ship.ap_damage == null) {
      $('#apShell').hide()
    } else {
      $('#apShell').show()
    }
    if (ship.atba_1_damage == null) {
      $('#sb').hide()
    } else {
      $('#sb').show()
    }
    if (ship.atba_2_damage == null) {
      $('#sb2').hide()
    } else {
      $('#sb2').show()
    }
    if (ship.torpedo_damage == null) {
      $('#torpedo').hide()
    } else {
      $('#torpedo').show()
    }
    if (ship.aa_1_dps == null) {
      $('#aa').hide()
    } else {
      $('#aa').show()
    }
    if (ship.aa_2_dps == null) {
      $('#aa2').hide()
    } else {
      $('#aa2').show()
    }
    if (ship.aa_3_dps == null) {
      $('#aa3').hide()
    } else {
      $('#aa3').show()
    }
    if (ship.aa_4_dps == null) {
      $('#aa4').hide()
    } else {
      $('#aa4').show()
    }

  $.each(ship, function(key,value){
    if(value!==null){
      var fmt = $('#'+key).attr('fmt')
      if (fmt == "c") {
        $('#'+key).find('div[info="stock"]').html(c(value))
      } else if (fmt == "pz") {
        $('#'+key).find('div[info="stock"]').html(pz(value))
      } else if (fmt == "km") {
        $('#'+key).find('div[info="stock"]').html(t(value)+" km")
      } else if (fmt == "s") {
        $('#'+key).find('div[info="stock"]').html(o(value)+" s")
      } else if (fmt == "ds") {
        $('#'+key).find('div[info="stock"]').html(t(value)+" º/s")
      } else if (fmt == "st") {
        $('#'+key).find('div[info="stock"]').html(t(value)+" s")
      } else if (fmt == "t") {
        $('#'+key).find('div[info="stock"]').html(t(value))
      } else if (fmt == "pt") {
        $('#'+key).find('div[info="stock"]').html(pt(value))
      } else if (fmt == "kt") {
        $('#'+key).find('div[info="stock"]').html(o(value)+" kt")
      } else if (fmt == "m") {
        $('#'+key).find('div[info="stock"]').html(c(value)+" m")
      } else if (fmt =="n") {
        $('#'+key).find('div[info="value"]').html(value)
      } else {
        $('#'+key).find('div[info="stock"]').html(value)
      }
    }  
  })
  $('#aa_max_range').find('[info="stock"]').html(Math.max(ship.aa_1_range,ship.aa_2_range,ship.aa_3_range,ship.aa_4_range).toFixed(2)+" km")

}

function calcBuild(){

  printShip(ship)
  var mods1 = JSON.parse($('#mods1').html())
  var mods2 = JSON.parse($('#mods2').html())
  var mods3 = JSON.parse($('#mods3').html())
  var mods4 = JSON.parse($('#mods4').html())
  var selected_mods = JSON.parse($('#selected-mods').html())
  
  $.each(mods1,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 1
      $('#slot-1').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
  $.each(mods2,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 1
      $('#slot-2').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
  $.each(mods3,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 1
      $('#slot-3').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
  $.each(mods4,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 1
      $('#slot-4').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
  
  $.each(selected_mods,function(index,value){
    $('[skill-id="id-'+value+'"]').parent().addClass('selected')
  })

  var skills1 = JSON.parse($('#skills1').html())
  var skills2 = JSON.parse($('#skills2').html())
  var skills3 = JSON.parse($('#skills3').html())
  var skills4 = JSON.parse($('#skills4').html())
  var skills5 = JSON.parse($('#skills5').html())
  var selected_skills = JSON.parse($('#selected-skills').html())
  
  $.each(skills1,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 1
      $('#row-1').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
    $.each(skills2,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 2
      $('#row-2').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
    $.each(skills3,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 3
      $('#row-3').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
    $.each(skills4,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 4
      $('#row-4').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
    $.each(skills5,function(i,val){
      var img = $( "#id-" + val ).attr('img')
      var id = $( "#id-" + val ).attr('id')
      var name = $( "#id-" + val ).attr('name')
      var row = 5
      $('#row-5').append('<div class="build-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
    })
   
    $.each(selected_skills,function(index,value){
      $('[skill-id="id-'+value+'"]').parent().addClass('selected')
    })

  $('[data-type="mod-data"]').each(function(){
    var json = JSON.parse($(this).html())
    mods.push(json)
  })

  console.log('mods')
  console.log(mods)

  $('[data-type="skill-data"]').each(function(){
    var json = JSON.parse($(this).html())
    skills.push(json)
  })

  console.log('skills')
  console.log(skills)

  $('[data-type="trait-data"]').each(function(){
    var json = JSON.parse($(this).html())
    traits.push(json)
  })

  console.log('traits')
  console.log(traits)
 

  //auto values
    $.each(autoMetrics,function(key,value){
      var s = ship[key]
      if(s!==null){
        var up = upgradeMods(mods,key,value[0])
        var sk = upgradeMods(skills,key,value[0])
        var bt = upgradeMods(traits,key,value[0])
        var v = value[1]
        var fmt = $('#'+key).attr('fmt')

        if (value[0] == 0) {
          var b = s + up + sk + bt
        } else {
          var b = s * up * sk * bt
        }

        $('#'+key).removeData().data("build",b)

        if (fmt == "c") {
          $('#'+key).find('div[info="build"]').html(c(b))
        } else if (fmt == "pz") {
          $('#'+key).find('div[info="build"]').html(pz(b))
        } else if (fmt == "km") {
          $('#'+key).find('div[info="build"]').html(t(b)+" km")
        } else if (fmt == "s") {
          $('#'+key).find('div[info="build"]').html(o(b)+" s")
        } else if (fmt == "ds") {
          $('#'+key).find('div[info="build"]').html(t(b)+" º/s")
        } else if (fmt == "st") {
          $('#'+key).find('div[info="build"]').html(t(b)+" s")
        } else if (fmt == "pt") {
          $('#'+key).find('div[info="build"]').html(pt(b))
        } else if (fmt == "kt") {
          $('#'+key).find('div[info="build"]').html(o(b)+" kt")
        } else if (fmt == "m") {
          $('#'+key).find('div[info="build"]').html(c(b)+" m")
        } else {
          $('#'+key).find('div[info="build"]').html(b)
        }

        $('#'+key).find('div[info="diff"]').html(((b-s)/s*100).toFixed(2)+"%") //Calc Diff

        if (v == 1) {
          $('#'+key).find('div[info="diff"]').css('color',k(b-s))
        } else if ( v == -1) {
          $('#'+key).find('div[info="diff"]').css('color',ki(b-s))
        }
      }
    })

  //constant values
    $.each(constMetrics,function(index,value){
      var s = $('#'+value).find('div[info="stock"]').html()
      $('#'+value).find('div[info="build"]').html(s)
      $('#'+value).find('div[info="diff"]').html('0.00%').css('color','#ffffff50')
    })

  //manual values
    //hp
      var s = ship.hp
      var up = upgradeMods(mods,'hp_multi',1)
      var sk_add = upgradeMods(skills,'hp_add',0)
      var sk_multi = upgradeMods(skills,'hp_multi',1)
      var bt_add = upgradeMods(traits,'hp_add',0)
      var bt_multi = upgradeMods(traits,'hp_multi',1)

      var b = s * up * sk_multi * bt_multi + (sk_add*ship.tier) + (bt_add*ship.tier)

      $('#hp').find('div[info="build"]').html(c(b))
      $('#hp').find('div[info="diff"]').html(((b-s)/s*100).toFixed(2)+"%")
      $('#hp').find('div[info="diff"]').css('color',k(b-s))
      $('#hp').removeData().data('build',b)

    //traverse
      var s = ship.traverse
      if (s!==null) {
        var up = upgradeMods(mods,'traverse_multi',1)
        var sk_add = upgradeMods(skills,'traverse_add',0)
        var bt_add = upgradeMods(traits,'traverse_add',0)
        var bt_multi = upgradeMods(traits,'traverse_multi',1)

        var b = (s * up + sk_add) * bt_multi + bt_add
        var b_turn = 180/b

        $('#traverse').find('div[info="build"]').html(t(b)+" º/s")
        $('#traverse').find('div[info="diff"]').html(((b-s)/s*100).toFixed(2)+"%")
        console.log("traverse diff")
        console.log((b-s)*100)
        $('#traverse').find('div[info="diff"]').css('color',k((b-s)*100))
        $('#traverse').removeData().data('build',b)

        $('#turn').find('div[info="build"]').html(o(b_turn)+" s")
        $('#turn').find('div[info="diff"]').html(((b_turn-ship.turn)/ship.turn*100).toFixed(2)+"%")
        $('#turn').find('div[info="diff"]').css('color',ki(b_turn-ship.turn))
        $('#turn').removeData().data('build',b_turn)
      }

    //he
      var max_salvo = ship.max_salvo
      var reload = $('#reload').data().build
      var he_damage = $('#he_damage').data().build
      var he_alpha = he_damage*max_salvo
      var s_alpha = ship.he_alpha
      var s_dpm = ship.he_dpm
      var he_dpm = he_alpha*(60/reload)
      if(s_alpha!==null){
        $('#he_alpha').find('div[info="build"]').html(c(he_alpha))
        $('#he_alpha').find('div[info="diff"]').html(((he_alpha-s_alpha)/s_alpha*100).toFixed(2)+"%")
        $('#he_alpha').find('div[info="diff"]').css('color',k(he_alpha-s_alpha))
        $('#he_alpha').removeData().data('build',he_alpha)

        $('#he_dpm').find('div[info="build"]').html(c(he_dpm))
        $('#he_dpm').find('div[info="diff"]').html(((he_dpm-s_dpm)/s_dpm*100).toFixed(2)+"%")
        $('#he_dpm').find('div[info="diff"]').css('color',k(he_dpm-s_dpm))
        $('#he_dpm').removeData().data('build',he_dpm)
      }

    //ap
      var ap_damage = $('#ap_damage').data().build
      var ap_alpha = ap_damage*max_salvo
      var s_alpha = ship.ap_alpha
      var s_dpm = ship.ap_dpm
      var ap_dpm = ap_alpha*(60/reload)

      if(s_alpha!==null){
        $('#ap_alpha').find('div[info="build"]').html(c(ap_alpha))
        $('#ap_alpha').find('div[info="diff"]').html(((ap_alpha-s_alpha)/s_alpha*100).toFixed(2)+"%")
        $('#ap_alpha').find('div[info="diff"]').css('color',k(ap_alpha-s_alpha))
        $('#ap_alpha').removeData().data('build',ap_alpha)

        $('#ap_dpm').find('div[info="build"]').html(c(ap_dpm))
        $('#ap_dpm').find('div[info="diff"]').html(((ap_dpm-s_dpm)/s_dpm*100).toFixed(2)+"%")
        $('#ap_dpm').find('div[info="diff"]').css('color',k(ap_dpm-s_dpm))
        $('#ap_dpm').removeData().data('build',ap_dpm)
      }

    //mb_fire
      var s_mb = ship.he_fire
      var s_fpm = ship.fpm
      var s_sb1 = ship.atba_1_fire
      var s_sb2 = ship.atba_2_fire
      var sk_add = upgradeMods(skills,'fire_add',0)
      var sk_multi = upgradeMods(skills,'fire_multi',1)
      var bt_add = upgradeMods(traits,'fire_add',0)
      var bt_multi = upgradeMods(traits,'fire_multi',1)
      if (s_mb!==null){
        var b_mb = (s_mb * sk_multi + sk_add) * bt_multi + bt_add
        var b_sb1 = (s_sb1 * sk_multi + sk_add) * bt_multi + bt_add
        var b_sb2 = (s_sb2 * sk_multi + sk_add) * bt_multi + bt_add
        var b_fpm = (60/reload)*(1-(Math.pow(1-b_mb,max_salvo)))

        $('#he_fire').find('div[info="build"]').html(pt(b_mb))
        $('#he_fire').find('div[info="diff"]').html(((b_mb-s_mb)/s_mb*100).toFixed(2)+"%")
        $('#he_fire').find('div[info="diff"]').css('color',k(b_mb-s_mb))
        $('#he_fire').removeData().data('build',b_mb)

        $('#fpm').find('div[info="build"]').html(t(b_fpm))
        $('#fpm').find('div[info="diff"]').html(((b_fpm-s_fpm)/s_fpm).toFixed(2)+"%")
        $('#fpm').find('div[info="diff"]').css('color',k(b_fpm-s_fpm))
        $('#fpm').removeData().data('build',b_fpm)
      }
      if (s_sb1!==0) {
        $('#atba_1_fire').find('div[info="build"]').html(pt(b_sb1))
        $('#atba_1_fire').find('div[info="diff"]').html(((b_sb1-s_sb1)/s_sb1*100).toFixed(2)+"%")
        $('#atba_1_fire').find('div[info="diff"]').css('color',k(b_sb1-s_sb1))
        $('#atba_1_fire').removeData().data('build',b_sb1)
      }
      if (s_sb2!==0) {
        $('#atba_2_fire').find('div[info="build"]').html(pt(b_sb2))
        $('#atba_2_fire').find('div[info="diff"]').html(((b_sb2-s_sb2)/s_sb2*100).toFixed(2)+"%")
        $('#atba_2_fire').find('div[info="diff"]').css('color',k(b_sb2-s_sb2))
        $('#atba_2_fire').removeData().data('build',b_sb2)
      }

    //tdetect
      var s = ship.torpedo_detect
      if(s!==null){
        var s_react = ship.torpedo_reaction
        var sk_add = upgradeMods(skills,'torpedo_detect_add',0)
        var sk_multi = upgradeMods(skills,'torpedo_detect_multi',1)
        var bt_add = upgradeMods(traits,'torpedo_detect_add',0)
        var bt_multi = upgradeMods(traits,'torpedo_detect_multi',1)

        var b = (s * sk_multi + sk_add) * bt_multi + bt_add
        var b_react = (b*1000)/($('#torpedo_speed').data().build*2.6)

        $('#torpedo_detect').find('div[info="build"]').html(t(b)+" km")
        $('#torpedo_detect').find('div[info="diff"]').html(((b-s)/s*100).toFixed(2)+"%")
        $('#torpedo_detect').find('div[info="diff"]').css('color',ki(b-s))
        $('#torpedo_detect').removeData().data('build',b)

        $('#torpedo_reaction').find('div[info="build"]').html(t(b_react)+" s")
        $('#torpedo_reaction').find('div[info="diff"]').html(((b_react-s_react)/s_react*100).toFixed(2)+"%")
        $('#torpedo_reaction').find('div[info="diff"]').css('color',ki((b_react-s_react)*100))
        $('#torpedo_reaction').removeData().data('build',b_react)
      }
    
    //detect
      var s_sea = ship.sea_detect
      var s_air = ship.air_detect
      var s_smoke = ship.smoke_fire
      var up = upgradeMods(mods,'all_detect',1)
      var sk_all = upgradeMods(skills,'all_detect',1)
      var sk_air = upgradeMods(skills,'air_detect',0)
      var sk_smoke = upgradeMods(skills,'smoke_firing',0)
      var bt_all = upgradeMods(traits,'all_detect',1)
      var bt_air = upgradeMods(traits,'air_detect',0)
      var bt_smoke = upgradeMods(traits,'smoke_firing',0)

      var b_sea = s_sea * up * sk_all * bt_all
      var b_air = s_air * up * (sk_all + sk_air) * (bt_all +bt_air)
      var b_smoke = s_smoke * up * (sk_all + sk_smoke) * (bt_all +bt_smoke)

      $('#sea_detect').find('div[info="build"]').html(t(b_sea)+" km")
      $('#sea_detect').find('div[info="diff"]').html(((b_sea-s_sea)/s_sea*100).toFixed(2)+"%")
      $('#sea_detect').find('div[info="diff"]').css('color',ki((b_sea-s_sea)*100))
      $('#sea_detect').removeData().data('build',b_sea)

      $('#air_detect').find('div[info="build"]').html(t(b_air)+" km")
      $('#air_detect').find('div[info="diff"]').html(((b_air-s_air)/s_air*100).toFixed(2)+"%")
      $('#air_detect').find('div[info="diff"]').css('color',ki((b_air-s_air)*100))
      $('#air_detect').removeData().data('build',b_air)

      $('#smoke_fire').find('div[info="build"]').html(t(b_smoke)+" km")
      $('#smoke_fire').find('div[info="diff"]').html(((b_smoke-s_smoke)/s_smoke*100).toFixed(2)+"%")
      $('#smoke_fire').find('div[info="diff"]').css('color',ki((b_smoke-s_smoke)*100))
      $('#smoke_fire').removeData().data('build',b_smoke)

      //aa
      var s = Math.max(ship.aa_1_range,ship.aa_2_range,ship.aa_3_range,ship.aa_4_range)
      var up = upgradeMods(mods,'aa_1_range',1)
      var sk = upgradeMods(skills,'aa_1_range',1)
      var bt = upgradeMods(traits,'aa_1_range',1)
      var b = s * up * sk * bt
      $('#aa_max_range').find('div[info="build"]').html(t(b)+" km")
      $('#aa_max_range').find('div[info="diff"]').html(((b-s)/s*100).toFixed(2)+"%")
      $('#aa_max_range').find('div[info="diff"]').css('color',k((b-s)*100))
      $('#aa_max_range').removeData().data('build',b)

      var s = ship.aa_max_dps
      var up = upgradeMods(mods,'aa_1_dps',1)
      var sk = upgradeMods(skills,'aa_1_dps',1)
      var bt = upgradeMods(traits,'aa_1_dps',1)
      var b = s * up * sk * bt
      $('#aa_max_dps').find('div[info="build"]').html(r(b))
      $('#aa_max_dps').find('div[info="diff"]').html(((b-s)/s*100).toFixed(2)+"%")
      $('#aa_max_dps').find('div[info="diff"]').css('color',k((b-s)*100))
      $('#aa_max_dps').removeData().data('build',b)
}

window.onready = calcBuild()

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





