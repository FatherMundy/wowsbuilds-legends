
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
	return (1*x).toFixed(2)
	}
function k(x){
	if (x > 0){
	return "#40b599";
	} else if (x < 0){
	return "#f2441d";
	} else {
	return "#ffffff50";
	}
	}
function ki(x){
	if (x > 0){
	return "#f2441d";
	} else if (x < 0){
	return "#40b599";
	} else {
	return "#ffffff50";
	}
	}

function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=')

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
		}
	}
	return false;
}

var selectedMods = ['recga6GRTggtPTIut','recga6GRTggtPTIut','recga6GRTggtPTIut','recga6GRTggtPTIut']
var selectedModData = ['','','','']
var selectedSkills = ["recKw9BQWtPeWItjV","recKw9BQWtPeWItjV","recKw9BQWtPeWItjV","recKw9BQWtPeWItjV","recKw9BQWtPeWItjV"]
var selectedSkillData = ['','','','','']
var selectedBaseTrait = []
var selectedBaseData = ['','','']
var selectedInspirations = []
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
const constMetrics = ['armor','torp_reduc','turning_circle','torpedo_bomber_attack','torpedo_bomber_flight','torpedo_bomber_bomb_speed','torpedo_bomber_range','he_bomber_attack','he_bomber_flight']

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
		 $('#atba').hide()
		} else {
		 $('#atba').show()
		}
		if (ship.atba_2_damage == null) {
		 $('#atba_2').hide()
		} else {
		 $('#atba_2').show()
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
	 } else if (fmt == "n") {
		$('#'+key).find('div[info="value"]').html(value)
	 } else {
		$('#'+key).find('div[info="stock"]').html(value)
	 }
	}

	//PRINT CONSUMABLES 
	if (key.indexOf('consum')!==-1){
	 var slot = key
	 console.log(value)
	 if (value.length==0) {$('#'+slot).hide()}
	 $.each(value, function(index,key,value){
		var type = key.name
		$('#'+slot).append('<div class="card-outline no-hover" data-option="'+type+'" data-kind="consume"><div class="flex-h-c"><img src="'+key.icon+'" loading="lazy" alt="" class="icon _32r"><div class="stat-title">'+type+'</div></div></div>')
		if (key.effects.smoke_disp!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Dispersion Time</div><div style="justify-self:end;">'+o(key.effects.smoke_disp)+' s</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.speed_boost!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Speed Boost</div><div style="justify-self:end;">'+p(key.effects.speed_boost)+'</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Max Speed</div><div style="justify-self:end;">'+o((1+key.effects.speed_boost)*ship.max_speed)+' kt</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.heal_amount!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Health per second</div><div style="justify-self:end;">+'+key.effects.heal_amount*100+' %</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Max Heal</div><div style="justify-self:end;">+'+c(key.effects.heal_amount*ship.hp*key.duration)+'</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.torp_detect!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Torp Detection</div><div style="justify-self:end;">'+o(key.effects.torp_detect)+' km</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.ship_detect!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Ship Detection</div><div style="justify-self:end;">'+o(key.effects.ship_detect)+' km</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.aa_damage_multi!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>AA DPS Increase</div><div style="justify-self:end;">+200%</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.radar_range!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Radar Range</div><div style="justify-self:end;">'+o(key.effects.radar_range)+' km</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.sigma!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Shell Grouping</div><div style="justify-self:end;">+10%</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.atbas_sigma!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Secondary Shell Grouping</div><div style="justify-self:end;">+100%</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.atbas_disp!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Secondary Shell Dispersion</div><div style="justify-self:end;">-50%</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.torp_reload!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Torpedo Reload</div><div style="justify-self:end;">'+r(key.effects.torp_reload)+' s</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		if (key.effects.reload!==undefined) {
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Reload Time Boost</div><div style="justify-self:end;">+50%</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		 $('[data-option="'+type+'"]').append('<div class="row2 build"><div>Reload Time</div><div style="justify-self:end;">'+o(ship.reload*.5)+' s</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		}
		//basic info
		if (key.charges > 10) {var charges = "∞"} else {var charges = key.charges}
		$('[data-option="'+type+'"]').append('<div class="row2 build"><div>Duration</div><div style="justify-self:end;">'+o(key.duration)+' s</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		$('[data-option="'+type+'"]').append('<div class="row2 build"><div>Cooldown</div><div style="justify-self:end;">'+o(key.cooldown)+' s</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
		$('[data-option="'+type+'"]').append('<div class="row2 build"><div>Charges</div><div style="justify-self:end;">'+charges+'</div><div info="build" style="justify-self:end;">–</div><div info="diff" class="delta" style="justify-self:end;">–</div></div>')
	 })
	} 
 
 })
}

function printSkill(i,val,row) {
	let img = $( "#" + val ).attr('img')
	let id = $( "#" + val ).attr('id')
	let name = $( "#" + val ).attr('name')
	let json = $( "#" + val ).attr('json')
	let e1 = $( "#" + val ).attr('e1')
	let v1 = $( "#" + val ).attr('v1')
	let e2 = $( "#" + val ).attr('e2')
	let v2 = $( "#" + val ).attr('v2')
	let e3 = $( "#" + val ).attr('e3')
	let v3 = $( "#" + val ).attr('v3')
	$('#row-'+row).append('<div class="skill-select"><div class="skill-tt ft"> <div class="selected-name">'+name+'</div><div class="flex-h-t nowrap"> <div class="detail-text bold">'+v1+'</div><div class="detail-text">'+e1+'</div></div><div class="flex-h-t nowrap"> <div class="detail-text bold no-min">'+v2+'</div><div class="detail-text no-min">'+e2+'</div></div><div class="flex-h-t nowrap"> <div class="detail-text bold no-min">'+v3+'</div><div class="detail-text no-min">'+e3+'</div></div><div class="carrot bottom"></div></div><img class="icon _40" src="'+img+'"><div class="select-data hidden" slot='+row+' skill-id="'+id+'">'+json+'</div></div>')
 }

function shipSearch() {
 var search = $('#ship-search').val().toLowerCase()
 $('#ship-select').find('.card-outline').each(function(){
	var name = $(this).find('.select-data').attr('name').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
	if (name.toLowerCase().indexOf(search) >= 0 && search !== '') {
	 $(this).removeClass('hidden')
	} else {
	 $(this).addClass('hidden')
	}
 })
}

function shipSelect(id){
	let selected = $('[ship-id="'+id+'"]')

	var ship_id = id
	var nation = selected.attr('nation')
	var name = selected.attr('name')
	var tier = selected.attr('tier')
	var premium = selected.attr('premium')
	var icon = selected.attr('icon')
	var flag = selected.attr('flag')
	var class_icon = selected.attr('class_icon')
	var ship = JSON.parse(selected.html())


	//Select Ship
	$('#selected-ship-flag').attr('src',flag)
	$('#selected-ship-class').attr('src',class_icon)
	$('#selected-ship-image').attr('src',icon)
	$('#selected-ship-name').html(tier+' '+name)
	if (premium=='true'){$('#selected-ship-name').css('color','#ffca5f')}else{$('#selected-ship-name').css('color','#fff')}
	$('#ship-input').val(ship_id)
	$('#ship-data').removeData().data(ship)
	$('#clear-ship').removeClass('hidden')

	
	//Show Mods
	$('.mod-select').each(function(){$(this).hide()})
	$('[ship-id="'+id+'"]').parent().find('.hidden').each(function(){
	 var slot = $(this).attr('slot-data')
	 var modString = $(this).html()
	 $('.mod-select').each(function(){
		var selectSlot = $(this).find('.select-data').attr('slot')
		var modId = $(this).find('.select-data').attr('mod-id')
		if (selectSlot == slot && modString.indexOf(modId) !== -1) {
		 $(this).show()
		}
	 })
	})

	$('#selected-ship').removeClass('hidden')
	$('#commanders').show()
	$('#inspiration-search').removeClass('hidden')
	
	//Show Commanders
	$('#commanders').find('.card-outline').each(function(){
	 $(this).hide()
	 var commNation = $(this).find('.select-data').attr('nation')
	 if (commNation == nation) {
		$(this).show()
	 }   
	})

	//Fill Stats
	printShip(ship)

	//Add to Form
	$('#ship-input').val(ship_id)

 $('#ships').hide()
}

function removeShip(){
	$('.mod-select').each(function(){$(this).hide()})
	$('#selected-ship').addClass('hidden')
	$('#ship-data').removeData()
	$('#ship-input').val('rec4yTlB5QCBgiT0t')
	$('#commanders').find('.card-outline').each(function(){
	 $(this).hide()
	})
	$('#inspiration-search').addClass('hidden')
	$('#ships').show()
	$('#ship-search').focus()
	$('.mod-select').each(function(){$(this).removeClass('selected')})
	selectedMods = ['recga6GRTggtPTIut','recga6GRTggtPTIut','recga6GRTggtPTIut','recga6GRTggtPTIut']
	selectedModData = ['','','','']
	removeCommander()
	$('#mod-data').removeData()
	$('#base-trait-data').removeData()
	$('div[info="stock"]').each(function(){$(this).html("–")})
	$('div[info="build"]').each(function(){$(this).html("–")})
	$('div[info="value"]').each(function(){$(this).html("–")})
	$('div[info="diff"]').each(function(){$(this).html("–").css('color','#ffffff50')})
	$('[data-kind="consume"]').each(function(){$(this).remove()})

	window.history.pushState(null,null,'https://www.wowsbuilds.com/fitting-tool')
}

function modSelect(id,slot){
	let selected = $("#slot"+slot).find('[mod-id="'+id+'"]')
	var mod_data = JSON.parse(selected.html())

	//add to arrays
	selectedMods.splice(slot-1,1,"\""+id+"\"")
	$('#mod-input').val(selectedMods)
	selectedModData.splice(slot-1,1,mod_data)
	$('#mod-data').removeData().data(selectedModData)

	//Visual update
	$("#slot"+slot).find('.mod-select.selected').removeClass('selected')
	selected.parent().addClass('selected')
}

function commanderSelect(id){
 let selected = $('[commander-id="'+id+'"]')

 var commander_id = id
 var name = selected.attr('name')
 var flag = selected.attr('flag')
 var bust = selected.attr('bust')
 var json = JSON.parse(selected.html())
 var skills1 = JSON.parse($('[commander-id="'+id+'"]').parent().find('.skills1').html())
 var skills2 = JSON.parse($('[commander-id="'+id+'"]').parent().find('.skills2').html())
 var skills3 = JSON.parse($('[commander-id="'+id+'"]').parent().find('.skills3').html())
 var skills4 = JSON.parse($('[commander-id="'+id+'"]').parent().find('.skills4').html())
 var skills5 = JSON.parse($('[commander-id="'+id+'"]').parent().find('.skills5').html())

 
 //Select Commander
 $('#selected-commander-name').html(name)
 $('#selected-commander-flag').attr('src',flag)
 $('#selected-commander-bust').attr('src',bust)
 $('#commander-input').val(commander_id)
 $('#selected-commander').removeClass('hidden')
 $('#commanders').hide()
 $('#insp-search').val()
 inspSearch()

 //Skill Rows
 $('.skill-select').each(function(){$(this).remove()})
 $.each(skills1,function(i,val){
	printSkill(i,val,1)
 })
 $.each(skills2,function(i,val){
	printSkill(i,val,2)})
 $.each(skills3,function(i,val){
	printSkill(i,val,3)})
 $.each(skills4,function(i,val){
	printSkill(i,val,4)})
 $.each(skills5,function(i,val){
	printSkill(i,val,5)})

 //Add to Form
 $('#commander-input').val(commander_id)
 selectedBaseData.splice(0,1,json)
 $('#base-trait-data').removeData().data(selectedBaseData)

}

function removeCommander(){
 $('.commander-select').each(function(){$(this).hide()})
 $('.skill-select').each(function(){$(this).remove()})
 var id = $('#commander-input').val()
 $('#commander-input').val('')
 selectedSkills = ['recKw9BQWtPeWItjV','recKw9BQWtPeWItjV','recKw9BQWtPeWItjV','recKw9BQWtPeWItjV','recKw9BQWtPeWItjV']
 selectedSkillData = ['','','','','']
 $('#skill-data').removeData()
 $('#selected-commander').addClass('hidden')
 $('#commanders').show()
 $('#inspiration-search').find('.card-outline[inspiration-id="'+id+'"]').removeClass('select-hide')
}

function skillSelect(id){
 let selected = $('[skill-id="'+id+'"]')

 var slot = selected.attr('slot')
 var skill_data = JSON.parse(selected.html())

 //add to arrays
 selectedSkills.splice(slot-1,1,"\""+id+"\"")
 //console.log(selectedSkills)
 $('#skill-input').val(selectedSkills)
 selectedSkillData.splice(slot-1,1,skill_data)
 $('#skill-data').removeData().data(selectedSkillData)
 //console.log(selectedSkillData)

 //Visual update
 selected.parent().siblings().removeClass('selected')
 selected.parent().addClass('selected')
}

function inspSearch() {
 var search = $('#insp-search').val().toLowerCase()
 $('#inspiration-search').find('.card-outline').each(function(){
	var name = $(this).find('.select-data').attr('name')
	var trait = $(this).find('.select-data').attr('trait-desc')
	var id = $(this).find('.select-data').attr('inspiration-id')
	var commander_id = $('#commander-input').val()
	if (name.toLowerCase().indexOf(search) >= 0 && search !== '' && id !==commander_id && $('#insp-1-input').val()!==id && $('#insp-2-input').val()!==id || trait.toLowerCase().indexOf(search) >= 0 && search !== '' && id !==commander_id && $('#insp-1-input').val()!==id && $('#insp-2-input').val()!==id) {
	 $(this).removeClass('hidden')
	} else {
	 $(this).addClass('hidden')
	}
 })
}

function inspirationSelect(id){
 var selected = $('[inspiration-id="'+id+'"]')

 var inspirationId = id
 var flag = selected.attr('flag')
 var portrait = selected.attr('portrait')
 var name = selected.attr('name')
 //console.log(name)
 var trait = selected.attr('trait')
 var traitImg = selected.attr('trait-img')
 var desc = selected.attr('trait-desc')
 var json = JSON.parse(selected.html())

 //Fill Slot
 if ($('#insp-1-input').val() == '' && $('#insp-2-input').val() !== '\"'+inspirationId+'\"' && $('#commander-input').val() !== inspirationId) {
	$('#insp-1-flag').attr('src',flag)
	$('#insp-1-icon').attr('src',traitImg)
	$('#insp-1-trait').html(trait)
	$('#insp-1-name').html(name)
	$('#insp-1-input').val(inspirationId)
	$('#insp-1-detail').html(desc)
	$('#insp-1').find('.close-icon').show()
	$('#insp-1').removeClass('hidden')
	selectedBaseData.splice(1,1,json)
 $('#base-trait-data').removeData().data(selectedBaseData)
 } else if ($('#insp-2-input').val() == '' && $('#insp-1-input').val() !== '\"'+inspirationId+'\"' && $('#commander-input').val() !== inspirationId) {
	$('#insp-2-flag').attr('src',flag)
	$('#insp-2-icon').attr('src',traitImg)
	$('#insp-2-trait').html(trait)
	$('#insp-2-name').html(name)
	$('#insp-2-input').val(inspirationId)
	$('#insp-2-detail').html(desc)
	$('#insp-2').find('.close-icon').show()
	$('#insp-2').removeClass('hidden')
	selectedBaseData.splice(2,1,json)
 $('#base-trait-data').removeData().data(selectedBaseData)
 }
 $('#insp-search').val('')
 inspSearch()
 if ($('#insp-1-input').val() !== '' && $('#insp-2-input').val() !== ''){
	$('#inspiration-search').hide()
 }
}

function clearInspiration(){
	var select = $(this).attr('slot')
	var id = $("#"+select).find('.select-data').attr('inspiration-id')
	$(this).hide()
	$('#'+select+'-flag').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60327c8aa589_demo-flag.svg')
	$('#'+select+'-icon').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60a4698aa588_empty-block.svg')
	$('#'+select+'-trait').html('')
	$('#'+select+'-name').html('')
	$('#'+select+'-input').val('')
	$('#'+select).addClass('hidden')
	$('#insp-search').val('')
	inspSearch()
	$('#inspiration-search').show()
}

function calcBuild(){
 var ship = $('#ship-data').data()
 var mods = $('#mod-data').data()
 var skills = $('#skill-data').data()
 var traits = $('#base-trait-data').data()

 console.log(ship)
 console.log(mods)
 console.log(skills)
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
		$('#fpm').find('div[info="diff"]').html(((b_fpm-s_fpm)/s_fpm*100).toFixed(2)+"%")
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
		$('#torpedo_detect').find('div[info="diff"]').css('color',ki(b_react-s))
		$('#torpedo_detect').removeData().data('build',b)

		$('#torpedo_reaction').find('div[info="build"]').html(t(b_react)+" s")
		$('#torpedo_reaction').find('div[info="diff"]').html(((b_react-s_react)/s_react*100).toFixed(2)+"%")
		$('#torpedo_reaction').find('div[info="diff"]').css('color',ki(b_react-s_react))
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
	 $('#sea_detect').find('div[info="diff"]').css('color',ki(b_sea-s_sea))
	 $('#sea_detect').removeData().data('build',b_sea)

	 $('#air_detect').find('div[info="build"]').html(t(b_air)+" km")
	 $('#air_detect').find('div[info="diff"]').html(((b_air-s_air)/s_air*100).toFixed(2)+"%")
	 $('#air_detect').find('div[info="diff"]').css('color',ki(b_air-s_air))
	 $('#air_detect').removeData().data('build',b_air)

	 $('#smoke_fire').find('div[info="build"]').html(t(b_smoke)+" km")
	 $('#smoke_fire').find('div[info="diff"]').html(((b_smoke-s_smoke)/s_smoke*100).toFixed(2)+"%")
	 $('#smoke_fire').find('div[info="diff"]').css('color',ki(b_smoke-s_smoke))
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

 modURL()
}

function modURL() {
 var ship = $('#ship-input').val()
 let mods = new Array
 $('.mod-select.selected').each(function(){
	let id = $(this).find('.select-data').attr('mod-id')
	mods.push("\""+id+"\"")
 })
 let skills = new Array
 $('.skill-select.selected').each(function(){
	let id = $(this).find('.select-data').attr('skill-id')
	skills.push("\""+id+"\"")
 })
 var comm = $('#commander-input').val()
 let insp = new Array
 if ($('#insp-1-input').val()!==''){
	console.log($('#insp-1-input').val())
	insp.push("\""+$('#insp-1-input').val()+"\"")
 }
 if ($('#insp-2-input').val()!==''){
	console.log($('#insp-2-input').val())
	insp.push("\""+$('#insp-2-input').val()+"\"")
 }
 var url = 'https://www.wowsbuilds.com/fitting-tool'

 if (ship!==''){
	var ship_url = url+'?s='+ship
 } else {
	var ship_url = url
 }
 if (comm!==''){
	var comm_url = ship_url+"&c="+comm
 } else {
	var comm_url = ship_url
 }
 if (insp!=='"",""'){
	var insp_url = comm_url+"&i=["+insp+"]"
 } else {
	var insp_url = comm_url
 }
 if (mods!=='') {
	var mods_url = insp_url+"&m=["+mods+"]"
 } else {
	var mods_url = insp_url
 }
 if (skills!==''){
	var skills_url = mods_url+"&sk=["+skills+"]"
 } else {
	var skills_url = mods_url
 }
 window.history.pushState(null,null,skills_url)
}

function loadCheck(){
 if(getUrlParameter('s')!==''){
	var ship = getUrlParameter('s')
 } else {
	var ship = false
 }
 var ship = getUrlParameter('s')
 var mods = JSON.parse(getUrlParameter('m'))
 var skills = JSON.parse(getUrlParameter('sk'))
 var comm = getUrlParameter('c')
 if(getUrlParameter('i')!=='["",""]'){
	var insp = JSON.parse(getUrlParameter('i'))
 } else {
	var insp = false
 }
 var insp = JSON.parse(getUrlParameter('i'))
 if (ship!==false){
	shipSelect(ship)
 }
 if (mods!==false){
	$.each(mods, function(index,value){
	 var slot = index+1
	 modSelect(value,slot)
	})
 }
 if (comm!==false){
	commanderSelect(comm)
 }
 if (skills!==false){
	$.each(skills, function(index,value){
	 skillSelect(value)
	})
 }
 if (insp!==false){
	$.each(insp, function(index,value){
	 inspirationSelect(value)
	})
 }
 if(ship!==false) {
	calcBuild()
 }
}

window.onready = loadCheck()

$('#ship-search').keyup(shipSearch)
$('#ship-select').on('click','.card-outline',function(){
 var id=$(this).find('.select-data').attr('ship-id')
 shipSelect(id)
})
$('#commanders').on('click','.card-outline',function(){
 var id=$(this).find('.select-data').attr('commander-id')
 commanderSelect(id)
})
$('#insp-search').keyup(inspSearch)
$('#inspiration-search').on('click','.card-outline',function(){
 var id=$(this).find('.select-data').attr('inspiration-id')
 inspirationSelect(id)
})
$('.close-icon').click(clearInspiration)
$('#clear-ship').click(removeShip)
$('.mod-select').click(function(){
 var id=$(this).find('.select-data.hidden').attr('mod-id')
 var slot=$(this).find('.select-data.hidden').attr('slot')
 modSelect(id,slot)
})
$('#selected-commander').on('click','.skill-select',function(){
 var id=$(this).find('.select-data').attr('skill-id')
 skillSelect(id)
})
$('#commander').on('click','#clear-comm',removeCommander)
$('#calculate').click(calcBuild)

$('.mod-select').hover(function(){
	$(this).find('.skill-tt').css('display','block').css('opacity',100).css('bottom',60)
},
function(){
	$(this).find('.skill-tt').css('display','none').css('opacity',0)
})

$(document).on('mouseenter','.skill-select',function(){
	$(this).find('.skill-tt').css('display','block').css('opacity',100).css('bottom',60)
})
$(document).on('mouseleave','.skill-select',function(){
	$(this).find('.skill-tt').css('display','none').css('opacity',0)
})

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







