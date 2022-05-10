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

function tierSelect(x){
	if (x==1) {return "I"}
	else if (x==2) {return "II"}
	else if (x==3) {return "III"}
	else if (x==4) {return "IV"}
	else if (x==5) {return "V"}
	else if (x==6) {return "VI"}
	else if (x==7) {return "VII"}
	else if (x==8) {return "★"}
}

function printRows(index,key,value,columns_selected){
	var rank = index+1
	var flag = flagSelect(key.nation)
	var tier = tierSelect(key.tier)
	var id = key.main_id
	if (key.premium == true){
		var color = '#ffca5f'
	} else {
		var color = '#ffffff'
	}
	$('#peer_board').append('<div class="w-layout-grid leaderboard-row-2" id="'+id+'" tier="'+key.tier+'" class="'+key.class+'"><div class="sticky-l"><div info="rank">'+rank+'</div><img class="icon _16h" src="'+flag+'"><div style="color:'+color+'">'+tier+" "+key.name+'</div><a href="/ships/'+key.slug+'" target=”_blank”><img class="icon" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba47d8ca605b30bebdf084_newtabblue.svg"></a></div></div>')
	
	$.each(columns_selected,function(index,value){
		var stat = key[value]
		var fmt = $('[stat="'+value+'"]').attr('fmt')
		if (stat==null){
			$("#"+id).append('<div class="right" data-filter="'+value+'">–</div>')
		} else {
			if (fmt == "c") {
			  var select=c(stat)
			} else if (fmt == "t") {
			  var select=t(stat)
			} else if (fmt == "o") {
			  var select=o(stat)
			} else {
			  var select=stat
			}
			$("#"+id).append('<div class="right" data-filter="'+value+'">'+select+'</div>')
		}
	})
	$('[data-filter="hp"]').addClass('selected').attr('data-sort',1).find('.filter').show()

}

//Define Base Arrays
var full = new Array
$('[contents="data"]').each(function(){
	full.push(JSON.parse($(this).html()))
})
//this remains unchanged
$('#peer_board').data(full)




//base sort
var sort = full.sort(function(a,b){
    return b.hp - a.hp
  })

//Create Selection Arrays
var filtered = new Array
var tier_filter = new Array
var class_filter = new Array
var columns_selected = new Array

$('#tier').find('[select=1]').each(function(){
	tier_filter.push(parseInt($(this).attr('data-value')))
})
$('#class').find('[select=1]').each(function(){
	class_filter.push($(this).attr('data-value'))
})
$('#columns').find('[select=1]').each(function(){
	columns_selected.push($(this).attr('stat'))
})

//store filters
$('#column_array').html(JSON.stringify(columns_selected))
$('#class_array').html(JSON.stringify(class_filter))
$('#tier_array').html(JSON.stringify(tier_filter))

//Filter and Sort Master List
$.each(full,function(index,key,value){
	//remove filtered by tier
	if (tier_filter.indexOf(key.tier)!==-1 && class_filter.indexOf(key.class)!==-1) {
	  	filtered.push(key)
	}
})
filtered.sort(function(a,b){
    return b.hp - a.hp
  })



//Run Print
$.each(filtered,function(index,key,value){
	printRows(index,key,value,columns_selected)
})

$('#table_array').removeData().data(filtered)

//Add/Remove Columns
$('#columns').on('click','.button-x.select',function(){
	//get variables for selected column
	var stat = $(this).attr('stat')
	var title = $(this).attr('title')
	var fmt = $(this).attr('fmt')

	//update columns select
	$('#columns').find('[select=1]').each(function(){
		columns_selected.push($(this).attr('stat'))
	})
	$('#column_array').html(JSON.stringify(columns_selected))
	//get current table
	var table = $('#table_array').data()

	//Add/Remove Col
	if ($(this).attr('select') == 1) {//Column is currently active
		$('[data-filter="'+stat+'"]').each(function(){$(this).remove()})
		$(this).removeClass('selected').attr('select',0)
		$(this).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62340a79701d7419a3a9f931_vis%20off.svg')
	} else {
		let data = $('#table_array').data()
		$('.leaderboard-row-2').each(function(){
			if ($(this).hasClass('top')==false) {//Ignore header row
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
			} else {//Append to header row
				$(this).append('<div class="table-filter right" data-sort=0 data-filter="'+stat+'"><div>'+title+'</div><img class="filter" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62335c0d754dd754a40a466d_filter_top.svg"></div>')
			}
		})
		$(this).addClass('selected').attr('select',1)
		$(this).find('img').attr('src','https://global-uploads.webflow.com/5f3b00acbb1ebd856f32d560/62340a7b121fe22593c4ac9b_vis_on.svg')
		}
		$('#selected-stat-title').html("Selected Stats – " + columns_selected.length)
})

//Add/Remove Filter
$('#tier').on('click','.button-x.select',function(){
	var tier = parseInt($(this).attr('data-value'))
	var status = $(this).attr('select')
	var tier_filter = JSON.parse($('#tier_array').html())
	var current_table = $('#table_array').data()

	if (status==1) {//remove matching tiers
		$(this).removeClass('selected').attr('select',0).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62340a79701d7419a3a9f931_vis%20off.svg')
		$('[tier='+tier+']').each(function(){$(this).remove()})
	} else {//add matching tiers
		$(this).addClass('selected').attr('select',1).find('img').attr('src','https://global-uploads.webflow.com/5f3b00acbb1ebd856f32d560/62340a7b121fe22593c4ac9b_vis_on.svg')
	}

	$('#tier').find('[select=1]').each(function(){
		tier_filter.push(parseInt($(this).attr('data-value')))
	})
	$('#tier_array').html(JSON.stringify(tier_filter))

	//Reed, update the current table after filter is done - Past reed
	console.log(current_table)
})







