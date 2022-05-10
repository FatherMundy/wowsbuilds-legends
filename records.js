function filterShips (){
	var query = $('#search').val().toLowerCase()
	console.log(query)
	if (query !== '') {
		$('[data-type="search-index"]').each(function(){
			var index = $(this).html().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
			console.log(index)
			if(index.indexOf(query)>=0){
				console.log("match")
				$(this).parent().parent().removeClass('hidden')
			} else {
				console.log("no match")
				$(this).parent().parent().addClass('hidden')
			}
		})
	} else {
		$('[data-type="search-index"]').each(function(){
			$(this).parent().parent().removeClass('hidden')
		})
	}
	
}

$('#record-button').prop('disabled', true)

$('#search').keyup(filterShips)

$('#table').on('click','[func="proof"]',function(){
	let source = $(this).find('[data="proof"]').html()
	//window.open(source, '_blank');
	$('.record-proof').css('opacity','100%').css('display','flex')
	$('#proof-img').attr('src',source)
})

$('#table').on('click','.w-layout-grid',function(){
	let id = $(this).find('[data-info="ship-info"]').html()
	let name = $(this).find('[data-info="ship"]').html()
	let nation = $(this).find('[data-info="flag"]').attr('src')
	let classIcon = $(this).find('[data-info="class"]').attr('src')
	if ($(this).find('[data-info="damage"]').html()==''){
		var damage = "–"
	} else {
		var damage = $(this).find('[data-info="damage"]').html()
	}
	if ($(this).find('[data-info="xp"]').html()==''){
		var xp = "–"
	} else {
		var xp = $(this).find('[data-info="xp"]').html()
	}
	console.log(classIcon)
	console.log(classIcon.indexOf('rem.svg'))
	if (classIcon.indexOf('rem.svg')!==-1){
		var color = "#ffca5f"
	} else {
		var color = "#fff"
	}
	$('.w-layout-grid').each(function(){
		$(this).removeClass('pick')
		$(this).find('.sticky-l').removeClass('selected')
	})
	$(this).addClass('pick')
	$(this).find('.sticky-l').addClass('selected')
	$('#record-button').removeClass('disabled')
	$('#record-button').html("Set New "+name+" Record")
	$('#ship-input').val(id)
	$('#form-ship-name').html(name).css('color',color)
	$('#form-ship-nation').attr('src',nation)
	$('#form-ship-class').attr('src',classIcon)
	$('#form-ship-damage').html(damage)
	$('#form-ship-xp').html(xp)
	$('#ship-current-damage').val(damage)
	$('#ship-current-xp').val(xp)
})

$('.close-button').click(function(){
	$('#field-2').val('')
	$('#wf-form-Record-Page-Submission').css('display','block')
	$('#default-upload').css('display','block')
	$('.form-success').css('display','none')
	$('#upload-success').css('display','none')
	$('[type="radio"]').each(function(){$(this).prop('checked', false)})
})