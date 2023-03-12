//formatting functions
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

//imgs
	let off = 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62340a79701d7419a3a9f931_vis%20off.svg'
	let on = 'https://global-uploads.webflow.com/5f3b00acbb1ebd856f32d560/62340a7b121fe22593c4ac9b_vis_on.svg'

function flagSelect(x){
    if (x == "Europe") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62340519427724587afced5d_europe_min.svg'}
    else if (x == "France") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbcd0ea43424d9dab095_france.svg'}
    else if (x == "Germany") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd1a3ae6a08a0dd397e_germany.svg'}
    else if (x == "Italy") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd6f20b977b27f8dfe6_italy.svg'}
    else if (x == "Japan") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd1a3ae6a05f5dd397d_japan.svg'}
    else if (x == "Pan-Asian" || x == "Pan-Asia") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/615b05d1332aa9d9e651ddba_pas-flag.svg'}
    else if (x == "U.K.") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd1cfe6f7704f1d0cbf_uk.svg'}
    else if (x == "U.S.A.") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbcdb67f56ed06f0e5f9_usa.svg'}
    else if (x == "U.S.S.R.") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61a4fbd438320f7a32ca2155_ussr.svg'}
    else if (x == "Commonwealth") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6237ce1346d204c08c5113f3_com-flag.svg'}
    else if (x == "Pan-America") {return 'https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6237ce1346d204211a5113f5_pam-flag.svg'}
}


function tierSelect(x){
	if (x==1) {return "I"}
	else if (x==2) {return "II"}
	else if (x==3) {return "III"}
	else if (x==4) {return "IV"}
	else if (x==5) {return "V"}
	else if (x==6) {return "VI"}
	else if (x==7) {return "VII"}
	else if (x==8) {return "VIII"}
	else if (x==9) {return "★"}
}

function classSelect(x,p){
	if (p==false){	//tech tree
		if (x=='Destroyer') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf96873d8050a1_DD.svg"}
		else if (x=='Battleship') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf9648f08050a0_BB.svg"}
		else if (x=='Cruiser') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf961a2a80509f_CR.svg"}
		else if (x=='Aircraft Carrier') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf9636898050a2_CV.svg"}
	} else {	//premium
		if (x=='Destroyer') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf9644ad8050a3_DD-Prem.svg"}
		else if (x=='Battleship') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf96e7c08050a6_BB-Prem.svg"}
		else if (x=='Cruiser') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf960a078050a4_CR-Prem.svg"}
		else if (x=='Aircraft Carrier') {return "https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6213ef4765cf9617b48050a5_CV-prem.svg"}
	}
}

function printRows(index,key,value,columns_selected){
	var rank = index+1
	var flag = flagSelect(key.nation)
	var tier = tierSelect(key.tier)
	var ship_class = classSelect(key.class,key.premium)
	var id = key.main_id
	if (key.premium == true){
		var color = '#ffca5f'
	} else {
		var color = '#ffffff'
	}
	$('#peer_board').append('<div class="w-layout-grid leaderboard-row-2" id="'+id+'" tier="'+key.tier+'" class="'+key.class+'"><div class="sticky-l"><b info="rank" style="min-width:24px;">'+rank+'</b><img class="icon _12h" src="'+flag+'"><img class="icon _12h" src="'+ship_class+'"><div style="color:'+color+'">'+tier+" "+key.name+'</div><a href="/ships/'+key.slug+'" target=”_blank”><img class="icon" style="min-width:14px;min-height:14px;" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba47d8ca605b30bebdf084_newtabblue.svg"></a></div></div>')
	
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
}

//Looks for checked filters and saves filters in divs
function getCurrentFilters(){
	//Reset filter arrays
	var tier_filter = new Array //Selected tiers
	var class_filter = new Array //selected classes

	//Get pre-selected filters
	$('#tier').find('[select=1]').each(function(){
		tier_filter.push(parseInt($(this).attr('data-value')))
	})
	$('#class').find('[select=1]').each(function(){
		class_filter.push($(this).attr('data-value'))
	})

	//store filters in divs 
	$('#class_array').html(JSON.stringify(class_filter))
	$('#tier_array').html(JSON.stringify(tier_filter))
}

//Looks for current columns and returns an array
function getCurrentColumns(){
	//reset exisiting array
		var columns_selected = new Array //selected columns

	//get selected colmuns
	$('#columns').find('[select=1]').each(function(){
		columns_selected.push($(this).attr('stat'))
	})

	//return
	return columns_selected
}

//Takes all data and applies current filters. Returns a filtered list, sorted by HP
function filterAndSort(){
	var filtered = new Array //Our filtered list
	var full = $('#peer_board').data()
	var tier_filter = JSON.parse($('#tier_array').html())
	var class_filter = JSON.parse($('#class_array').html())

	//search through full json, if match found, add it to Filtered
	//Filter and Sort Master List
	$.each(full,function(index,key,value){
		//remove filtered by tier
		if (tier_filter.indexOf(key.tier)!==-1 && class_filter.indexOf(key.class)!==-1) {
		  	filtered.push(key)
		}
	})
	//sort our newly filtered json by hp
	filtered.sort(function(a,b){
	    return b.hp - a.hp
	  })
	return filtered
}

//Prints the table, duh
function printTable(filtered,columns_selected){
	$.each(filtered,function(index,key,value){
		printRows(index,key,value,columns_selected)
	})
	//Save data
	$('#table_array').removeData().data(filtered)
}

//Runs on startup to parse through CMS
function initialization(){
	// First, we take all of the data from the CMS items and combine them in the master array, full
	//Define Base Arrays
	var full = new Array
	$('[contents="data"]').each(function(){
		full.push(JSON.parse($(this).html()))
	})

	//Save this in the peer_board item
	//this remains unchanged
	$('#peer_board').data(full)


	//Next, sort that big list by HP
	//base sort
	var sort = full.sort(function(a,b){
    return b.hp - a.hp
  })
  $('[data-filter="hp"]').addClass('selected').attr('data-sort',1).find('.filter').show()


	//Load Preset filters and columns
	getCurrentFilters()


	//Filter and Sort based on current settings
	var filtered = filterAndSort()


	//Get current columns
	var columns_selected = getCurrentColumns()


	//Run Print
	printTable(filtered,columns_selected)
}

function removeAllRows(){
	$('.leaderboard-row-2').each(function(){
		if ($(this).hasClass('top')==false) {	// not a header row
			$(this).remove()
		}
	})
}

function createHeader(columns_selected){
	$('.table-filter').each(function(){	//remove all current headers expect ship
		$(this).remove()
	})
	$('#columns').find('[select=1]').each(function(){
		var stat = $(this).attr('stat')
  	var title = $(this).attr('title')
		$('.leaderboard-row-2.top').append('<div class="table-filter right" data-sort=0 data-filter="'+stat+'"><div>'+title+'</div><img class="filter" src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/62335c0d754dd754a40a466d_filter_top.svg"></div>')
	})
}

function modifyColumns(){
	//get variables for selected column
	var stat = $(this).attr('stat')
	var title = $(this).attr('title')


	//Select or unselect button
	if ($(this).attr('select') == 1) { //Column is currently active	
		$(this).removeClass('selected').attr('select',0)		// add selected to button
		$(this).find('img').attr('src',off) 		// chnage image to off
	} else { //Column is currently inactive
		$(this).addClass('selected').attr('select',1) // mark button
		$(this).find('img').attr('src',on) // change image
	}


	//get all selected columns
	var columns_selected = getCurrentColumns()
	getCurrentFilters()
	var filtered = filterAndSort()
	removeAllRows()
	createHeader()
	printTable(filtered,columns_selected)


	//Update selected columns text
	$('#selected-stat-title').html(columns_selected.length)
}

function modifyFilter(){
	var status = $(this).attr('select') 	//get current filter status 

	if (status==1) {//tier currently ON
		$(this).removeClass('selected').attr('select',0).find('[ind=1]').attr('src',off) //update button
	} else {//tier currently OFF
		$(this).addClass('selected').attr('select',1).find('[ind=1]').attr('src',on) //update button
	}

	getCurrentFilters()
	var columns_selected = getCurrentColumns()
	var filtered = filterAndSort()
	removeAllRows()
	printTable(filtered,columns_selected)
}

function sortTable(){
	var filtered = filterAndSort()
	var sort = $(this).attr('data-sort')
	var column = $(this).attr('data-filter')

	if (sort == 0 || sort == -1) {	//sort is not applied or is least to greatest
		var filteredSort = filtered.sort(function(a,b){
      return b[column] - a[column]
    })
		$('.table-filter').each(function(){ //mod header
      $(this).removeClass('selected').attr('data-sort',0).find('.filter').hide().css('transform', 'rotate(0deg)') //return all to normal
    })
    $(this).addClass('selected').attr('data-sort',1).find('.filter').show().css('transform', 'rotate(0deg)') //activate selected
	} else if (sort == 1) { //sort is greatest to least
		var filteredSort = filtered.sort(function(a,b){
      return a[column] - b[column]
    })
	  $('.table-filter').each(function(){ //mod header
	    $(this).removeClass('selected').attr('data-sort',0).find('.filter').hide().css('transform', 'rotate(0deg)') //return all to normal
    })
    $(this).addClass('selected').attr('data-sort',-1).find('.filter').show().css('transform', 'rotate(180deg)') //activate selected
	}

	getCurrentFilters()
	var columns_selected = getCurrentColumns()
	removeAllRows()
	printTable(filteredSort,columns_selected)
}

function columnToggle(){
	if ($('.compress').attr('status')==0){
    $('.compress').addClass('expand').attr('status',1)
    $(this).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba60b37b942add51134372_visibility_off_black_24dp%20(1)%201.svg')
    $(this).find('div').html("Hide Stat Selection")
  } else {
    $('.compress').removeClass('expand').attr('status',0)
    $(this).find('img').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba510512dcf0b605ac25d0_visibility_black_24dp%20(2)%201.svg')
    $(this).find('div').html("Show Stat Selection")
  }
}


window.onload = initialization()


//Add/Remove Columns
$('#columns').on('click','.button-x.select',modifyColumns)



//Add/Remove Filters
$('#tier').on('click','.button-x.select',modifyFilter)
$('#class').on('click','.button-x.select',modifyFilter)



//Sort Table
$(document).on('click','.table-filter',sortTable)


//Toggle Column Selector
$(document).on('click','#show-hide-stats',columnToggle)


