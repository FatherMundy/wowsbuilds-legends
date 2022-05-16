let modArray = new Array("recuBqJewmQlHAxld","recuBqJewmQlHAxld","recuBqJewmQlHAxld","recuBqJewmQlHAxld");
var skillArray = "[\"recKw9BQWtPeWItjV\",\"recKw9BQWtPeWItjV\",\"recKw9BQWtPeWItjV\",\"recKw9BQWtPeWItjV\",\"recKw9BQWtPeWItjV\"]"

function shipSearch () {
  var search = $('#ship-search').val().toLowerCase()
  $('.ship-select').each(function(){
    var name = $(this).find('.select-data').attr('name').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    if (name.toLowerCase().indexOf(search) >= 0 && search !== '') {
      $(this).show()
    } else {
      $(this).hide()
    }
  })
}


function shipSelect(){
    var shipID = $(this).find('.select-data').attr('ship-id')
    var shipNation = $(this).find('.select-data').attr('nation')
    var shipName = $(this).find('.select-data').attr('name')
    var shipTier = $(this).find('.select-data').attr('tier')
    var flag = $(this).find('img').attr('src')

    //Select Ship
    $('.ship-select').each(function(){$(this).removeClass('selected')})
    $('#ship-input').val(shipID)
    $('#selected-ship-flag').attr('src',flag)
    $('#ship-name').html(shipTier +' '+ shipName)
    $(this).addClass('selected')

    //Show Mods
    $('.mod-select').each(function(){$(this).hide()})
    $(this).find('.hidden').each(function(){
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

    //Show Commanders
    $('.commander-select').each(function(){
      $(this).hide()
      var commNation = $(this).find('.select-data').attr('nation')
      if (commNation == shipNation) {
        $(this).show()
      }
    })

    //Hide Obfuscate
    $('#mods-grid').removeClass('hidden')
    $('#mods-empty').addClass('hidden')
    $('#comms-list').removeClass('hidden')
    $('#comms-empty').addClass('hidden')
    $('#mod-input').val(modArray);
    $('.mod-select').each(function(){
      $(this).removeClass('selected')
    })
    $('#mod-input-1').val("recuBqJewmQlHAxld")
    $('#mod-input-2').val("recuBqJewmQlHAxld")
    $('#mod-input-3').val("recuBqJewmQlHAxld")
    $('#mod-input-4').val("recuBqJewmQlHAxld")
    $('#selected-mods').find('.icon').each(function(){
      $(this).attr('src',"https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60a4698aa588_empty-block.svg")
    })
}


function modSelect() {
  var modId = $(this).find('.select-data').attr('mod-id');
  var modString = "\""+modId+"\""
  var modSlot = Number($(this).find('.select-data').attr('slot'));
  var icon = $(this).find('img').attr("src")

  $('.mod-select').each(function(){
    var slotSelect = Number($(this).find('.select-data').attr('slot'));
    if (slotSelect == modSlot) {
      var selectedMod = $(this).find('.select-data').attr('mod-id');
      modArray[(modSlot-1)] = modId;
      $('#mod-input').html(modArray);
      $(this).removeClass('selected');
    } else {
      modArray[(modSlot-1)] = modId;
      $('#mod-input').html(modArray);
    }
  })

  $('#mod-input-'+modSlot).val(modId)
  $(this).addClass('selected');



  $('#selected-mods').find('.icon').each(function(){
    var iconSlot = Number($(this).attr('data-mod'));
    if(iconSlot == modSlot) {
      $(this).attr('src',icon)
    }
  })
};

function commanderSelect() {
  var commId = $(this).find('.select-data').attr('commander-id')
  var commName = $(this).find('.select-data').attr('name')
  var flag = $(this).find('.select-data').attr('flag')
  var skills1 = JSON.parse($(this).find('.skills1').html())
  var skills2 = JSON.parse($(this).find('.skills2').html())
  var skills3 = JSON.parse($(this).find('.skills3').html())
  var skills4 = JSON.parse($(this).find('.skills4').html())
  var skills5 = JSON.parse($(this).find('.skills5').html())

  //Select Commander
  $('.commander-select').each(function(){$(this).removeClass('selected')})
  $('#commander-name').html(commName)
  $('#commander-flag').attr('src',flag)
  $('#commander-input').val(commId)
  $(this).addClass('selected')

  //Skill Rows
  $('.skill-select').each(function(){$(this).remove()})
  $.each(skills1,function(i,val){
    var img = $( "#" + val ).attr('img')
    var id = $( "#" + val ).attr('id')
    var name = $( "#" + val ).attr('name')
    var row = 1
    $('#row-1').append('<div class="skill-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
  })
  $.each(skills2,function(i,val){
    var img = $( "#" + val ).attr('img')
    var id = $( "#" + val ).attr('id')
    var name = $( "#" + val ).attr('name')
    var row = 2
    $('#row-2').append('<div class="skill-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
  })
  $.each(skills3,function(i,val){
    var img = $( "#" + val ).attr('img')
    var id = $( "#" + val ).attr('id')
    var name = $( "#" + val ).attr('name')
    var row = 3
    $('#row-3').append('<div class="skill-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
  })
  $.each(skills4,function(i,val){
    var img = $( "#" + val ).attr('img')
    var id = $( "#" + val ).attr('id')
    var name = $( "#" + val ).attr('name')
    var row = 4
    $('#row-4').append('<div class="skill-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
  })
  $.each(skills5,function(i,val){
    var img = $( "#" + val ).attr('img')
    var id = $( "#" + val ).attr('id')
    var name = $( "#" + val ).attr('name')
    var row = 5
    $('#row-5').append('<div class="skill-select"><img class="icon _64h" src="'+img+'"><div class="select-data" slot='+row+' skill-id="'+id+'"</div></div>')
  })

  //Hide Insp
  $('.inspiration-select').each(function(){
      if ($(this).find('.select-data').attr('inspiration-id') == commId) {
        $(this).addClass('hidden')
      }
    })

  //Clear Skills
  $('#selected-skills').find('.icon').each(function(){
      $(this).attr('src',"https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60a4698aa588_empty-block.svg")
  })
  $('#skill-input-1').val("recKw9BQWtPeWItjV")
  $('#skill-input-2').val("recKw9BQWtPeWItjV")
  $('#skill-input-3').val("recKw9BQWtPeWItjV")
  $('#skill-input-4').val("recKw9BQWtPeWItjV")
  $('#skill-input-5').val("recKw9BQWtPeWItjV")



}

function skillSelect() {
  var skillId = $(this).find('.select-data').attr('skill-id');
  var skillString = "\""+skillId+"\""
  var skillSlot = Number($(this).find('.select-data').attr('slot'));
  var icon = $(this).find('img').attr("src")

  $('.skill-select').each(function(){
    var slotSelect = Number($(this).find('.select-data').attr('slot'));
    if (slotSelect == skillSlot) {
      var selectedSkill = $(this).find('.select-data').attr('skill-id');
      skillArray[(skillSlot-1)] = skillId;
      $('#skill-input').val(skillArray);
      $(this).removeClass('selected');
    } else {
      skillArray[(skillSlot-1)] = skillId;
      $('#skill-input').val(skillArray);
    }
  })


  $('#skill-input-'+skillSlot).val(skillId)
  $(this).addClass('selected');

  $('#selected-skills').find('.icon').each(function(){
    var iconSlot = Number($(this).attr('data-skill'));
    if(iconSlot == skillSlot) {
      $(this).attr('src',icon)
    }
  })
};

function inspSearch () {
  var search = $('#insp-search').val().toLowerCase()
  $('.inspiration-select').each(function(){
    var name = $(this).find('.select-data').attr('name')
    if (name.toLowerCase().indexOf(search) >= 0 && search !== '') {
      $(this).show()
    } else {
      $(this).hide()
    }
  })
}


function inspirationSelect(){
  var inspirationId = $(this).find('.select-data').attr('inspiration-id')
  var flag = $(this).find('.select-data').attr('flag')
  var portrait = $(this).find('.select-data').attr('portrait')
  var name = $(this).find('.select-data').attr('name')
  var trait = $(this).find('.select-data').attr('trait')
  var traitImg = $(this).find('.select-data').attr('trait-img')
  var desc = $(this).find('.select-data').attr('trait-desc')

  //Fill Slot
  if ($('#insp-1-input').val() == '' && $('#insp-2-input').val() !== '\"'+inspirationId+'\"' && $('#commander-input').val() !== inspirationId) {
    $('#insp-1').find('.comm-icon').attr('src',portrait)
    $('#insp-1').find('.icon._18h').attr('src',flag)
    $('#insp-1').find('.icon._48h').attr('src',traitImg)
    $('#insp-1').find('.detail-text').html(desc)
    $('#insp-1').find('.selected-name.trait').html(trait)
    $('#insp-1').find('.selected-name.insp').html(name)
    $('#insp-1').find('.select-data').attr('inspiration-id',inspirationId)
    $('#insp-1').find('.close-icon').show()
    $('#insp-1-flag').attr('src',flag)
    $('#insp-1-name').html(name)
    $('#insp-1-input').val(inspirationId)
  } else if ($('#insp-2-input').val() == '' && $('#insp-1-input').val() !== '\"'+inspirationId+'\"' && $('#commander-input').val() !== inspirationId) {
    $('#insp-2').find('.comm-icon').attr('src',portrait)
    $('#insp-2').find('.icon._18h').attr('src',flag)
    $('#insp-2').find('.icon._48h').attr('src',traitImg)
    $('#insp-2').find('.detail-text').html(desc)
    $('#insp-2').find('.selected-name.trait').html(trait)
    $('#insp-2').find('.selected-name.insp').html(name)
    $('#insp-2').find('.select-data').attr('inspiration-id',inspirationId)
    $('#insp-2').find('.close-icon').show()
    $('#insp-2-flag').attr('src',flag)
    $('#insp-2-name').html(name)
    $('#insp-2-input').val(inspirationId)    
  }
}

function clearInspiration(){
    var select = $(this).attr('slot')
    var id = $("#"+select).find('.select-data').attr('inspiration-id')
    $(this).hide()
    $("#"+select).find('.comm-icon').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/61954edbb20d7b6f05c95ce5_comm%20placeholder.svg')
    $("#"+select).find('.icon._18h').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60327c8aa589_demo-flag.svg')
    $("#"+select).find('.icon._48h').attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60a4698aa588_empty-block.svg')
    $("#"+select).find('.detail-text').html('')
    $("#"+select).find('.selected-name.trait').html('')
    $("#"+select).find('.selected-name.insp').html('')
    $("#"+select).find('.select-data').attr('inspiration-id','')
    $("#"+select+"-flag").attr('src','https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/6193e208300e60327c8aa589_demo-flag.svg')
    $("#"+select+"-name").html('')
    $("#"+select+"-input").val('')
    $('.inspiration-select').each(function(){
      if ($(this).find('.select-data').attr('inspiration-id') == id) {
        $(this).show()
      }
    })
}

function buildTitle(){
  var input = $(this).val()
  $('#build-title').html(input)
  $('#sub').show()
}

$('#ship-search').keyup(shipSearch)
$('.ship-select').click(shipSelect)
$('.mod-select').click(modSelect)
$('.commander-select').click(commanderSelect)
$('#commander').on('click','.skill-select',skillSelect);
$('#insp-search').keyup(inspSearch)
$('.inspiration-select').click(inspirationSelect)
$('.close-icon').click(clearInspiration)
$('#build-title-input').keyup(buildTitle)
$('#refresh-page').click(function() {
    location.reload();
});

