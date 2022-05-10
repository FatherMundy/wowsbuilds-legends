
$('.preview').each(function(){
	var mods = JSON.parse($(this).find('.select-data').attr('mods'))
	var skills = JSON.parse($(this).find('.select-data').attr('skills'))
	var build = this
	$.each(mods,function(i,val){
		var img = $("#" + val).attr('data-img')
		$(build).find('.build-grid.mods').append('<img class=\"card-icon\" src=\"'+img+'\">')
	})
	$.each(skills,function(i,val){
		var img = $("#" + val).attr('data-img')
		$(build).find('.build-grid.skills').append('<img class=\"card-icon\" src=\"'+img+'\">')
	})
})

var commBuilds = $('#comm-builds').find('.rel').length

var inspBuilds = $('#insp-builds').find('.rel').length

$('#comm-build-count').html(commBuilds)
$('#comm-insp-count').html(inspBuilds)
$('#comm-bureau-count').html($('#bureau').find('.card-image').length)

$(document).on('click','.button-new-2.blue.right',function(){
	$('.button-new-2.blue.right').each(function(){
		$(this).addClass('on')
		$(this).find('.icon').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba60b37b942add51134372_visibility_off_black_24dp%20(1)%201.svg')
		$(this).find('.show').html("Hide Build Previews")
	})
	
})

$(document).on('click','.button-new-2.blue.right.on',function(){
	$('.button-new-2.blue.right.on').each(function(){
		$(this).removeClass('on')
		$(this).find('.icon').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61ba510512dcf0b605ac25d0_visibility_black_24dp%20(2)%201.svg')
		$(this).find('.show').html("Show Build Previews")
	}) 
})