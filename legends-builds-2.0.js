function calcBuild(){

var mods1 = JSON.parse($('#mods1').html())
var mods2 = JSON.parse($('#mods2').html())
var mods3 = JSON.parse($('#mods3').html())
var mods4 = JSON.parse($('#mods4').html())
var mods = JSON.parse($('#selected-mods').html())
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


var skills1 = JSON.parse($('#skills1').html())
var skills2 = JSON.parse($('#skills2').html())
var skills3 = JSON.parse($('#skills3').html())
var skills4 = JSON.parse($('#skills4').html())
var skills5 = JSON.parse($('#skills5').html())
var skills = JSON.parse($('#selected-skills').html())
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

  $('.build-select').each(function () {
  var id = $(this).find('.select-data').attr('skill-id').replace('id-','')
  if (skills.indexOf(id) !== -1){
    $(this).addClass('selected')
  } else if (mods.indexOf(id) !== -1){
    $(this).addClass('selected')
  }
})


   // Calculations
  // HP
var buildHP = Math.round(ship.hp * skill1.hpModMulti * skill2.hpModMulti * skill3.hpModMulti * skill4.hpModMulti * skill5.hpModMulti * mod1.hpModMulti * mod2.hpModMulti * mod3.hpModMulti * mod4.hpModMulti * comm1.hpModMulti * insp1.hpModMulti * insp2.hpModMulti + (comm1.hpModAdd * ship.tierNum) + (insp1.hpModAdd * ship.tierNum) + (insp1.hpModAdd * ship.tierNum));
var diffHP = (buildHP-ship.hp);
console.log(buildHP)
console.log(diffHP)

  // MB Range
var buildMBRange = (ship.range * skill1.mbRangeMod * skill2.mbRangeMod * skill3.mbRangeMod * skill4.mbRangeMod * skill5.mbRangeMod * mod1.mbRangeMod * mod2.mbRangeMod * mod3.mbRangeMod * mod4.mbRangeMod * comm1.mbRangeMod * insp1.mbRangeMod * insp2.mbRangeMod).toFixed(1);
var diffMBRange = (buildMBRange-ship.range).toFixed(1);

  // MB Traverse
var buildMBTraverse = (180/((180/ship.traverse) + skill1.mbTraverseAdd + skill2.mbTraverseAdd + skill3.mbTraverseAdd + skill4.mbTraverseAdd + skill5.mbTraverseAdd + mod1.mbTraverseAdd + mod2.mbTraverseAdd + mod3.mbTraverseAdd + mod4.mbTraverseAdd + comm1.mbTraverseAdd + insp1.mbTraverseAdd + insp2.mbTraverseAdd) * skill1.mbTraverseModMulti * skill2.mbTraverseModMulti * skill3.mbTraverseModMulti * skill4.mbTraverseModMulti * skill5.mbTraverseModMulti * mod1.mbTraverseModMulti * mod2.mbTraverseModMulti * mod3.mbTraverseModMulti * mod4.mbTraverseModMulti * comm1.mbTraverseModMulti * insp1.mbTraverseModMulti * insp2.mbTraverseModMulti).toFixed(1);
var diffMBTraverse = (buildMBTraverse-ship.traverse).toFixed(1);

  // MB Reload
var buildMBReload = (ship.reload * skill1.mbReloadMod * skill2.mbReloadMod * skill3.mbReloadMod * skill4.mbReloadMod * skill5.mbReloadMod * mod1.mbReloadMod * mod2.mbReloadMod * mod3.mbReloadMod * mod4.mbReloadMod * comm1.mbReloadMod * insp1.mbReloadMod * insp2.mbReloadMod).toFixed(1);
var diffMBReload = (buildMBReload-ship.reload).toFixed(1);

  // MB HE
var buildMBHE = Math.round(ship.he_damage * skill1.mbHEMod * skill2.mbHEMod * skill3.mbHEMod * skill4.mbHEMod * skill5.mbHEMod * mod1.mbHEMod * mod2.mbHEMod * mod3.mbHEMod * mod4.mbHEMod * comm1.mbHEMod * insp1.mbHEMod * insp2.mbHEMod);
var diffMBHE = Math.round(buildMBHE-ship.he_damage);

  // MB Fire Chance
var buildMBFire = (ship.he_fire * skill1.mbFireModMulti * skill2.mbFireModMulti * skill3.mbFireModMulti * skill4.mbFireModMulti * skill5.mbFireModMulti * mod1.mbFireModMulti * mod2.mbFireModMulti * mod3.mbFireModMulti * mod4.mbFireModMulti * comm1.mbFireModMulti * insp1.mbFireModMulti * insp2.mbFireModMulti + skill1.mbFireModAdd + skill2.mbFireModAdd + skill3.mbFireModAdd + skill4.mbFireModAdd + skill5.mbFireModAdd + mod1.mbFireModAdd + mod2.mbFireModAdd + mod3.mbFireModAdd + mod4.mbFireModAdd + comm1.mbFireModAdd + insp1.mbFireModAdd + insp2.mbFireModAdd).toFixed(2);
var diffMBFire = (buildMBFire-ship.he_fire).toFixed(4);

  // MB AP
var buildMBAP = Math.round(ship.ap_damage * skill1.mbAPMod * skill2.mbAPMod * skill3.mbAPMod * skill4.mbAPMod * skill5.mbAPMod * mod1.mbAPMod * mod2.mbAPMod * mod3.mbAPMod * mod4.mbAPMod * comm1.mbAPMod * insp1.mbAPMod * insp2.mbAPMod);
var diffMBAP = Math.round(buildMBAP-ship.ap_damage);

  // Torp Reload
var buildTReload = (ship.torpedo_reload * (1-((1-skill1.tReloadMod) + (1-skill2.tReloadMod) + (1-skill3.tReloadMod) + (1-skill4.tReloadMod) + (1-skill5.tReloadMod) + (1-mod1.tReloadMod) + (1-mod2.tReloadMod) + (1-mod3.tReloadMod) + (1-mod4.tReloadMod) + (1-comm1.tReloadMod) + (1-insp1.tReloadMod) + (1-insp2.tReloadMod)))).toFixed(1);
var diffTReload = (buildTReload-ship.torpedo_reload).toFixed(1);

  // Torp Damage
var buildTDamage = Math.round(ship.torpedo_damage * skill1.tDamageMod * skill2.tDamageMod * skill3.tDamageMod * skill4.tDamageMod * skill5.tDamageMod * mod1.tDamageMod * mod2.tDamageMod * mod3.tDamageMod * mod4.tDamageMod * comm1.tDamageMod * insp1.tDamageMod * insp2.tDamageMod);
var diffTDamage = Math.round(buildTDamage-ship.torpedo_damage);

  // Torp Detect
var buildTDetect = (ship.torpedo_detect * skill1.tDetectModMulti * skill2.tDetectModMulti * skill3.tDetectModMulti * skill4.tDetectModMulti * skill5.tDetectModMulti * mod1.tDetectModMulti * mod2.tDetectModMulti * mod3.tDetectModMulti * mod4.tDetectModMulti * comm1.tDetectModMulti * insp1.tDetectModMulti * insp2.tDetectModMulti + comm1.tDetectModAdd + insp1.tDetectModAdd + insp2.tDetectModAdd).toFixed(1);
var diffTDetect = (buildTDetect-ship.torpedo_detect).toFixed(1);

  // Torp Range
var buildTRange = (ship.torpedo_range * skill1.tRangeMod * skill2.tRangeMod * skill3.tRangeMod * skill4.tRangeMod * skill5.tRangeMod * mod1.tRangeMod * mod2.tRangeMod * mod3.tRangeMod * mod4.tRangeMod * comm1.tRangeMod * insp1.tRangeMod * insp2.tRangeMod).toFixed(1);
var diffTRange = (buildTRange-ship.torpedo_range).toFixed(1);

  // Torp Speed
var buildTSpeed = Math.round(ship.torpedo_speed + skill1.tSpeedMod + skill2.tSpeedMod + skill3.tSpeedMod + skill4.tSpeedMod + skill5.tSpeedMod + mod1.tSpeedMod + mod2.tSpeedMod + mod3.tSpeedMod + mod4.tSpeedMod + comm1.tSpeedMod + insp1.tSpeedMod + insp2.tSpeedMod);
var diffTSpeed = Math.round(buildTSpeed-ship.torpedo_speed);

  // SA1 Range
var buildSA1Range = (ship.atba_1_range * (1 + (mod1.saRangeMod-1) + (mod2.saRangeMod-1) + (mod3.saRangeMod-1) + (mod4.saRangeMod-1)) * (1+(skill1.saRangeMod-1) + (skill2.saRangeMod-1) + (skill3.saRangeMod-1) + (skill4.saRangeMod-1) + (skill5.saRangeMod-1) + (comm1.saRangeMod-1) + (insp1.saRangeMod-1) + (insp2.saRangeMod-1))).toFixed(1);
var diffSA1Range = (buildSA1Range-ship.atba_1_range).toFixed(1);

  // SA1 Reload
var buildSA1Reload = (ship.atba_1_reload * skill1.saReloadMod * skill2.saReloadMod * skill3.saReloadMod * skill4.saReloadMod * skill5.saReloadMod * mod1.saReloadMod * mod2.saReloadMod * mod3.saReloadMod * mod4.saReloadMod * comm1.saReloadMod * insp1.saReloadMod * insp2.saReloadMod).toFixed(1);
var diffSA1Reload = (buildSA1Reload-ship.atba_1_reload).toFixed(1);

  // SA1 Damage
var buildSA1Damage = Math.round(ship.atba_1_damage * skill1.saDamageMod * skill2.saDamageMod * skill3.saDamageMod * skill4.saDamageMod * skill5.saDamageMod * mod1.saDamageMod * mod2.saDamageMod * mod3.saDamageMod * mod4.saDamageMod * comm1.saDamageMod * insp1.saDamageMod * insp2.saDamageMod);
var diffSA1Damage = Math.round(buildSA1Damage-ship.atba_1_damage);

  // SA1 Fire Chance
var buildSA1Fire = Math.round((ship.atba_1_fire * skill1.saFireMod * skill2.saFireMod * skill3.saFireMod * skill4.saFireMod * skill5.saFireMod * mod1.saFireMod * mod2.saFireMod * mod3.saFireMod * mod4.saFireMod * comm1.saFireMod * insp1.saFireMod * insp2.saFireMod)*100);
var diffSA1Fire = (buildSA1Fire-(100*ship.atba_1_fire)).toFixed(2);

  // SA2 Range
var buildSA2Range = (ship.atba_2_range * (1 + (mod1.saRangeMod-1) + (mod2.saRangeMod-1) + (mod3.saRangeMod-1) + (mod4.saRangeMod-1)) * ( 1 + (skill1.saRangeMod-1) + (skill2.saRangeMod-1) + (skill3.saRangeMod-1) + (skill4.saRangeMod-1) + (skill5.saRangeMod-1) + (comm1.saRangeMod-1) + (insp1.saRangeMod-1) + (insp2.saRangeMod-1))).toFixed(1);
var diffSA2Range = (buildSA2Range-ship.atba_2_range).toFixed(1);

  // SA2 Reload
var buildSA2Reload = (ship.atba_2_reload * skill1.saReloadMod * skill2.saReloadMod * skill3.saReloadMod * skill4.saReloadMod * skill5.saReloadMod * mod1.saReloadMod * mod2.saReloadMod * mod3.saReloadMod * mod4.saReloadMod * comm1.saReloadMod * insp1.saReloadMod * insp2.saReloadMod).toFixed(1);
var diffSA2Reload = (buildSA2Reload-ship.atba_2_reload).toFixed(1);

  // SA2 Damage
var buildSA2Damage = Math.round(ship.atba_2_damage * skill1.saDamageMod * skill2.saDamageMod * skill3.saDamageMod * skill4.saDamageMod * skill5.saDamageMod * mod1.saDamageMod * mod2.saDamageMod * mod3.saDamageMod * mod4.saDamageMod * comm1.saDamageMod * insp1.saDamageMod * insp2.saDamageMod);
var diffSA2Damage = Math.round(buildSA2Damage-ship.atba_2_damage);

  // SA2 Fire Chance
var buildSA2Fire = Math.round((ship.atba_2_fire * skill1.saFireMod * skill2.saFireMod * skill3.saFireMod * skill4.saFireMod * skill5.saFireMod * mod1.saFireMod * mod2.saFireMod * mod3.saFireMod * mod4.saFireMod * comm1.saFireMod * insp1.saFireMod * insp2.saFireMod)*100);
var diffSA2Fire = (buildSA2Fire-(100*ship.atba_2_fire)).toFixed(2);

  // AA1 Range
var buildAA1Range = (ship.aa_1_range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA1Range = (buildAA1Range-ship.aa_1_range).toFixed(1);

  // AA1 DPS
var buildAA1DPS = Math.round(ship.aa_1_dps * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA1DPS = Math.round(buildAA1DPS-ship.aa_1_dps);

  // AA2 Range
var buildAA2Range = (ship.aa_2_range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA2Range = (buildAA2Range-ship.aa_2_range).toFixed(1);

  // AA2 DPS
var buildAA2DPS = Math.round(ship.aa_2_dps * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA2DPS = Math.round(buildAA2DPS-ship.aa_2_dps);

  // AA3 Range
var buildAA3Range = (ship.aa_3_range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA3Range = (buildAA3Range-ship.aa_3_range).toFixed(1);

  // AA3 DPS
var buildAA3DPS = Math.round(ship.aa_3_dps * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA3DPS = Math.round(buildAA3DPS-ship.aa_3_dps);

  // AA4 Range
var buildAA4Range = (ship.aa_4_range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA4Range = (buildAA4Range-ship.aa_4_range).toFixed(1);

  // AA4 DPS
var buildAA4DPS = Math.round(ship.aa_4_dps * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA4DPS = Math.round(buildAA4DPS-ship.aa_4_dps);

  // TB Hitpoints
var buildTBHitpoints = Math.round(ship.torpedo_bomber_hp * skill1.tbHitpointsMod * skill2.tbHitpointsMod * skill3.tbHitpointsMod * skill4.tbHitpointsMod * skill5.tbHitpointsMod * mod1.tbHitpointsMod * mod2.tbHitpointsMod * mod3.tbHitpointsMod * mod4.tbHitpointsMod * comm1.tbHitpointsMod * insp1.tbHitpointsMod * insp2.tbHitpointsMod);
var diffTBHitpoints = Math.round(buildTBHitpoints-ship.torpedo_bomber_hp);

  // TB Cruise Speed
var buildTBCruiseSpeed = Math.round(ship.torpedo_bomber_cruise * skill1.tbCruiseSpeedMod * skill2.tbCruiseSpeedMod * skill3.tbCruiseSpeedMod * skill4.tbCruiseSpeedMod * skill5.tbCruiseSpeedMod * mod1.tbCruiseSpeedMod * mod2.tbCruiseSpeedMod * mod3.tbCruiseSpeedMod * mod4.tbCruiseSpeedMod * comm1.tbCruiseSpeedMod * insp1.tbCruiseSpeedMod * insp2.tbCruiseSpeedMod);
var diffTBCruiseSpeed = Math.round(buildTBCruiseSpeed-ship.torpedo_bomber_cruise);

  // TB Max Speed
var buildTBMaxSpeed = Math.round(ship.torpedo_bomber_max * skill1.tbMaxSpeedMod * skill2.tbMaxSpeedMod * skill3.tbMaxSpeedMod * skill4.tbMaxSpeedMod * skill5.tbMaxSpeedMod * mod1.tbMaxSpeedMod * mod2.tbMaxSpeedMod * mod3.tbMaxSpeedMod * mod4.tbMaxSpeedMod * comm1.tbMaxSpeedMod * insp1.tbMaxSpeedMod * insp2.tbMaxSpeedMod);
var diffTBMaxSpeed = Math.round(buildTBMaxSpeed-ship.torpedo_bomber_max);

  // TB Attack Unit
var buildTBAttackUnit = Math.round(ship.torpedo_bomber_attack + skill1.tbAttackUnitMod + skill2.tbAttackUnitMod + skill3.tbAttackUnitMod + skill4.tbAttackUnitMod + skill5.tbAttackUnitMod + mod1.tbAttackUnitMod + mod2.tbAttackUnitMod + mod3.tbAttackUnitMod + mod4.tbAttackUnitMod + comm1.tbAttackUnitMod + insp1.tbAttackUnitMod + insp2.tbAttackUnitMod);
var diffTBAttackUnit = Math.round(buildTBAttackUnit-ship.torpedo_bomber_attack);

  // TB Squadron
var buildTBSquadron = Math.round(ship.torpedo_bomber_flight + skill1.tbSquadronMod + skill2.tbSquadronMod + skill3.tbSquadronMod + skill4.tbSquadronMod + skill5.tbSquadronMod + mod1.tbSquadronMod + mod2.tbSquadronMod + mod3.tbSquadronMod + mod4.tbSquadronMod + comm1.tbSquadronMod + insp1.tbSquadronMod + insp2.tbSquadronMod);
var diffTBSquadron = Math.round(buildTBSquadron-ship.torpedo_bomber_flight);

  // TB Detectability Range
var buildTBDetect = Math.round(ship.torpedo_bomber_detect * skill1.tbDRMod * skill2.tbDRMod * skill3.tbDRMod * skill4.tbDRMod * skill5.tbDRMod * mod1.tbDRMod * mod2.tbDRMod * mod3.tbDRMod * mod4.tbDRMod * comm1.tbDRMod * insp1.tbDRMod * insp2.tbDRMod);
var diffTBDetect = Math.round(buildTBDetect-ship.torpedo_bomber_detect);

  // TB Deck 
var buildTBDeck = Math.round(ship.torpedo_bomber_deck + skill1.tbDeckMod + skill2.tbDeckMod + skill3.tbDeckMod + skill4.tbDeckMod + skill5.tbDeckMod + mod1.tbDeckMod + mod2.tbDeckMod + mod3.tbDeckMod + mod4.tbDeckMod + comm1.tbDeckMod + insp1.tbDeckMod + insp2.tbDeckMod);
var diffTBDeck = Math.round(buildTBDeck-ship.torpedo_bomber_deck);

  // TB Restoration
var buildTBResto = Math.round(ship.torpedo_bomber_resto * skill1.tbRestoMod * skill2.tbRestoMod * skill3.tbRestoMod * skill4.tbRestoMod * skill5.tbRestoMod * mod1.tbRestoMod * mod2.tbRestoMod * mod3.tbRestoMod * mod4.tbRestoMod * comm1.tbRestoMod * insp1.tbRestoMod * insp2.tbRestoMod);
var diffTBResto = Math.round(buildTBResto-ship.torpedo_bomber_resto);

  // TB Damage
var buildTBDamage = Math.round(ship.torpedo_bomber_damage * skill1.tbDamageMod * skill2.tbDamageMod * skill3.tbDamageMod * skill4.tbDamageMod * skill5.tbDamageMod * mod1.tbDamageMod * mod2.tbDamageMod * mod3.tbDamageMod * mod4.tbDamageMod * comm1.tbDamageMod * insp1.tbDamageMod * insp2.tbDamageMod);
var diffTBDamage = Math.round(buildTBDamage-ship.torpedo_bomber_damage);

  // TB T Speed
var buildTBTSpeed = Math.round(ship.torpedo_bomber_bomb_speed * skill1.tbTSpeedMod * skill2.tbTSpeedMod * skill3.tbTSpeedMod * skill4.tbTSpeedMod * skill5.tbTSpeedMod * mod1.tbTSpeedMod * mod2.tbTSpeedMod * mod3.tbTSpeedMod * mod4.tbTSpeedMod * comm1.tbTSpeedMod * insp1.tbTSpeedMod * insp2.tbTSpeedMod);
var diffTBTSpeed = Math.round(buildTBTSpeed-ship.torpedo_bomber_bomb_speed);

  // TB T Range
var buildTBTRange = (ship.torpedo_bomber_range * skill1.tbTRangeMod * skill2.tbTRangeMod * skill3.tbTRangeMod * skill4.tbTRangeMod * skill5.tbTRangeMod * mod1.tbTRangeMod * mod2.tbTRangeMod * mod3.tbTRangeMod * mod4.tbTRangeMod * comm1.tbTRangeMod * insp1.tbTRangeMod * insp2.tbTRangeMod).toFixed(1);
var diffTBTRange = (buildTBTRange-ship.torpedo_bomber_range).toFixed(1);

  // DB Hitpoints
var buildDBHitpoints = Math.round(ship.he_bomber_hp * skill1.dbHitpointsMod * skill2.dbHitpointsMod * skill3.dbHitpointsMod * skill4.dbHitpointsMod * skill5.dbHitpointsMod * mod1.dbHitpointsMod * mod2.dbHitpointsMod * mod3.dbHitpointsMod * mod4.dbHitpointsMod * comm1.dbHitpointsMod * insp1.dbHitpointsMod * insp2.dbHitpointsMod);
var diffDBHitpoints = Math.round(buildDBHitpoints-ship.he_bomber_hp);

  // DB Cruise Speed
var buildDBCruiseSpeed = Math.round(ship.he_bomber_cruise * skill1.dbCruiseSpeedMod * skill2.dbCruiseSpeedMod * skill3.dbCruiseSpeedMod * skill4.dbCruiseSpeedMod * skill5.dbCruiseSpeedMod * mod1.dbCruiseSpeedMod * mod2.dbCruiseSpeedMod * mod3.dbCruiseSpeedMod * mod4.dbCruiseSpeedMod * comm1.dbCruiseSpeedMod * insp1.dbCruiseSpeedMod * insp2.dbCruiseSpeedMod);
var diffDBCruiseSpeed = Math.round(buildDBCruiseSpeed-ship.he_bomber_cruise);

  // DB Max Speed
var buildDBMaxSpeed = Math.round(ship.he_bomber_max * skill1.dbMaxSpeedMod * skill2.dbMaxSpeedMod * skill3.dbMaxSpeedMod * skill4.dbMaxSpeedMod * skill5.dbMaxSpeedMod * mod1.dbMaxSpeedMod * mod2.dbMaxSpeedMod * mod3.dbMaxSpeedMod * mod4.dbMaxSpeedMod * comm1.dbMaxSpeedMod * insp1.dbMaxSpeedMod * insp2.dbMaxSpeedMod);
var diffDBMaxSpeed = Math.round(buildDBMaxSpeed-ship.he_bomber_max);

  // DB Attack Unit
var buildDBAttackUnit = Math.round(ship.he_bomber_attack + skill1.dbAttackUnitMod + skill2.dbAttackUnitMod + skill3.dbAttackUnitMod + skill4.dbAttackUnitMod + skill5.dbAttackUnitMod + mod1.dbAttackUnitMod + mod2.dbAttackUnitMod + mod3.dbAttackUnitMod + mod4.dbAttackUnitMod + comm1.dbAttackUnitMod + insp1.dbAttackUnitMod + insp2.dbAttackUnitMod);
var diffDBAttackUnit = Math.round(buildDBAttackUnit-ship.he_bomber_attack);

  // DB Squadron
var buildDBSquadron = Math.round(ship.he_bomber_flight + skill1.dbSquadronMod + skill2.dbSquadronMod + skill3.dbSquadronMod + skill4.dbSquadronMod + skill5.dbSquadronMod + mod1.dbSquadronMod + mod2.dbSquadronMod + mod3.dbSquadronMod + mod4.dbSquadronMod + comm1.dbSquadronMod + insp1.dbSquadronMod + insp2.dbSquadronMod);
var diffDBSquadron = Math.round(buildDBSquadron-ship.he_bomber_flight);

  // DB Detectability Range
var buildDBDetect = Math.round(ship.he_bomber_detect * skill1.dbDRMod * skill2.dbDRMod * skill3.dbDRMod * skill4.dbDRMod * skill5.dbDRMod * mod1.dbDRMod * mod2.dbDRMod * mod3.dbDRMod * mod4.dbDRMod * comm1.dbDRMod * insp1.dbDRMod * insp2.dbDRMod);
var diffDBDetect = Math.round(buildDBDetect-ship.he_bomber_detect);

  // DB Deck 
var buildDBDeck = Math.round(ship.he_bomber_deck + skill1.dbDeckMod + skill2.dbDeckMod + skill3.dbDeckMod + skill4.dbDeckMod + skill5.dbDeckMod + mod1.dbDeckMod + mod2.dbDeckMod + mod3.dbDeckMod + mod4.dbDeckMod + comm1.dbDeckMod + insp1.dbDeckMod + insp2.dbDeckMod);
var diffDBDeck = Math.round(buildDBDeck-ship.he_bomber_deck);

  // DB Restoration
var buildDBResto = Math.round(ship.he_bomber_resto * skill1.dbRestoMod * skill2.dbRestoMod * skill3.dbRestoMod * skill4.dbRestoMod * skill5.dbRestoMod * mod1.dbRestoMod * mod2.dbRestoMod * mod3.dbRestoMod * mod4.dbRestoMod * comm1.dbRestoMod * insp1.dbRestoMod * insp2.dbRestoMod);
var diffDBResto = Math.round(buildDBResto-ship.he_bomber_resto);

  // DB Damage
var buildDBDamage = Math.round(ship.he_bomber_damage * skill1.dbDamageMod * skill2.dbDamageMod * skill3.dbDamageMod * skill4.dbDamageMod * skill5.dbDamageMod * mod1.dbDamageMod * mod2.dbDamageMod * mod3.dbDamageMod * mod4.dbDamageMod * comm1.dbDamageMod * insp1.dbDamageMod * insp2.dbDamageMod);
var diffDBDamage = Math.round(buildDBDamage-ship.he_bomber_damage);

  // DB Fire
var buildDBFire = (ship.he_bomber_fire * skill1.dbFireMod * skill2.dbFireMod * skill3.dbFireMod * skill4.dbFireMod * skill5.dbFireMod * mod1.dbFireMod * mod2.dbFireMod * mod3.dbFireMod * mod4.dbFireMod * comm1.dbFireMod * insp1.dbFireMod * insp2.dbFireMod).toFixed(2);
var diffDBFire = (buildDBFire-ship.he_bomber_fire).toFixed(2);

  // Max Speed
var buildMaxSpeed = (ship.max_speed * skill1.speedMod * skill2.speedMod * skill3.speedMod * skill4.speedMod * skill5.speedMod * mod1.speedMod * mod2.speedMod * mod3.speedMod * mod4.speedMod * comm1.speedMod * insp1.speedMod * insp2.speedMod).toFixed(1);
var diffMaxSpeed = (buildMaxSpeed-ship.max_speed).toFixed(1);

  // Rudder Shift
var buildRudderShift = (ship.rudder_shift * skill1.rudderShiftMod * skill2.rudderShiftMod * skill3.rudderShiftMod * skill4.rudderShiftMod * skill5.rudderShiftMod * mod1.rudderShiftMod * mod2.rudderShiftMod * mod3.rudderShiftMod * mod4.rudderShiftMod * comm1.rudderShiftMod * insp1.rudderShiftMod * insp2.rudderShiftMod).toFixed(1);
var diffRudderShift = (buildRudderShift-ship.rudder_shift).toFixed(1);

  // Sea Detectability
var buildDrSea = (ship.sea_detect * skill1.detectMod * skill2.detectMod * skill3.detectMod * skill4.detectMod * skill5.detectMod * mod1.detectMod * mod2.detectMod * mod3.detectMod * mod4.detectMod * comm1.detectMod * insp1.detectMod * insp2.detectMod * 0.965).toFixed(1);
var diffDrSea = (buildDrSea-ship.sea_detect).toFixed(1);

  // Air Detectability
var buildDrAir = (ship.air_detect * skill1.detectMod * skill2.detectMod * skill3.detectMod * skill4.detectMod * skill5.detectMod * mod1.detectMod * mod2.detectMod * mod3.detectMod * mod4.detectMod * comm1.detectMod * insp1.detectMod * insp2.detectMod * 0.965).toFixed(1);
var diffDrAir = (buildDrAir-ship.air_detect).toFixed(1);

  // Smoke Detectability
var buildDrSmoke = (ship.smoke_fire * skill1.detectMod * skill2.detectMod * skill3.detectMod * skill4.detectMod * skill5.detectMod * mod1.detectMod * mod2.detectMod * mod3.detectMod * mod4.detectMod * comm1.detectMod * insp1.detectMod * insp2.detectMod * 0.965).toFixed(1);
var diffDrSmoke = (buildDrSmoke-ship.smoke_fire).toFixed(1);

// RPM
  var buildRPM = Math.round(ship.max_salvo * (60/buildMBReload));
  var diffRPM = Math.round(buildRPM - ship.rpm);

// AS AP
  var buildAsAP = Math.round(ship.max_salvo * buildMBAP);
  var diffAsAP = Math.round(buildAsAP - ship.ap_alpha);

// AS HE
  var buildAsHE = Math.round(ship.max_salvo * buildMBHE);
  var diffAsHE = Math.round(buildAsHE - ship.he_alpha);

// DPM AP
  var buildDpmAP = Math.round (buildMBAP * buildRPM);
  var diffDpmAP = Math.round(buildDpmAP - ship.ap_dpm);

// DPM HE
  var buildDpmHE = Math.round (buildMBHE * buildRPM);
  var diffDpmHE = Math.round(buildDpmHE - ship.he_dpm);

// Torp React
  var buildTorpReact = ((buildTDetect * 1000) / (buildTSpeed * 2.6)).toFixed(2);
  var diffTorpReact = (buildTorpReact - ship.torpedo_reaction).toFixed(2);

// Fire Salvo
  var buildFireSalvo = (1 - Math.pow(1-buildMBFire,ship.max_salvo*0.4));
  var diffFireSalvo = (buildFireSalvo-ship.fps).toFixed(4);


  // Printing
  // Member Stats

console.log(ship)

  // HP
$("#hp").html(c(ship.hp));
$("#bhp").html(c(buildHP));
$("#dhp").html(d(diffHP));
$("#dhp").css("color",k(diffHP));
  // Armor
$("#arm").html(ship.armor);
$("#barm").html(ship.armor);
  // Torp Reduction
$("#tr").html(ship.torp_reduc);
$("#btr").html(ship.torp_reduc);
  // MB Range
$("#mbFr").html(o(ship.range)+" km");
$("#bmbFr").html(buildMBRange+" km");
$("#dmbFr").html(d(diffMBRange)+" km");
$("#dmbFr").css("color",k(diffMBRange));
  // MB Reload
$("#mbR").html(o(ship.reload)+" s");
$("#bmbR").html(buildMBReload+" s");
$("#dmbR").html(d(diffMBReload)+" s");
$("#dmbR").css("color",ki(diffMBReload));
  // MB Traverse
$("#mbT").html(o(ship.traverse)+" s");
$("#bmbT").html(buildMBTraverse+" s");
$("#dmbT").html(d(diffMBTraverse)+" s");
$("#dmbT").css("color",ki(diffMBTraverse));
  // MB HE
$("#mbHe").html(c(ship.he_damage));
$("#bmbHe").html(c(buildMBHE));
$("#dmbHe").html(d(diffMBHE));
$("#dmbHe").css("color",k(diffMBHE));
  // MB Fire
$("#mbFc").html(p(ship.he_fire)+"%");
$("#bmbFc").html(p(buildMBFire)+"%");
$("#dmbFc").html(d(pt(diffMBFire))+"%");
$("#dmbFc").css("color",k(diffMBFire));
  // MB AP
$("#mbAp").html(c(ship.ap_damage));
$("#bmbAp").html(c(buildMBAP));
$("#dmbAp").html(d(diffMBAP));
$("#dmbAp").css("color",k(diffMBAP));
  // T Reload
$("#tR").html(o(ship.torpedo_reload)+" s");
$("#btR").html(o(buildTReload)+" s");
$("#dtR").html(d(diffTReload)+" s");
$("#dtR").css("color",ki(diffTReload));
  // T Damage
$("#tD").html(c(ship.torpedo_damage));
$("#btD").html(c(buildTDamage));
$("#dtD").html(d(diffTDamage));
$("#dtD").css("color",k(diffTDamage));
  // T Detect
$("#tDr").html(o(ship.torpedo_detect)+" km");
$("#btDr").html(o(buildTDetect)+" km");
$("#dtDr").html(d(diffTDetect)+" km");
$("#dtDr").css("color",ki(diffTDetect));
  // T Range
$("#tFr").html(o(ship.torpedo_range)+" km");
$("#btFr").html(buildTRange+" km");
$("#dtFr").html(d(diffTRange)+" km");
$("#dtFr").css("color",k(diffTRange));
  // T Speed
$("#tS").html(ship.torpedo_speed+" kt");
$("#btS").html(buildTSpeed+" kt");
$("#dtS").html(d(diffTSpeed)+" kt");
$("#dtS").css("color",k(diffTSpeed));
  // SA1 Reload
$("#sa1R").html(ship.atba_1_reload+" s");
$("#bsa1R").html(buildSA1Reload+" s");
$("#dsa1R").html(d(diffSA1Reload)+" s");
$("#dsa1R").css("color",ki(diffSA1Reload));
  // SA1 Damage
$("#sa1D").html(c(ship.atba_1_damage));
$("#bsa1D").html(c(buildSA1Damage));
$("#dsa1D").html(d(diffSA1Damage));
$("#dsa1D").css("color",k(diffSA1Damage));
  // SA1 Range
$("#sa1Fr").html(o(ship.atba_1_range)+" km");
$("#bsa1Fr").html(buildSA1Range+" km");
$("#dsa1Fr").html(d(diffSA1Range)+" km");
$("#dsa1Fr").css("color",k(diffSA1Range));
  // SA1 Fire
$("#sa1Fc").html(p(ship.atba_1_fire)+"%");
$("#bsa1Fc").html(buildSA1Fire+"%");
$("#dsa1Fc").html(d(diffSA1Fire)+"%");
$("#dsa1Fc").css("color",k(diffSA1Fire));
  // SA2 Reload
$("#sa2R").html(o(ship.atba_2_reload)+" s");
$("#bsa2R").html(buildSA2Reload+" s");
$("#dsa2R").html(d(diffSA2Reload)+" s");
$("#dsa2R").css("color",ki(diffSA2Reload));
  // SA2 Damage
$("#sa2D").html(c(ship.atba_2_damage));
$("#bsa2D").html(c(buildSA2Damage));
$("#dsa2D").html(d(diffSA2Damage));
$("#dsa2D").css("color",k(diffSA2Damage));
  // SA2 Range
$("#sa2Fr").html(o(ship.atba_2_range)+" km");
$("#bsa2Fr").html(buildSA2Range+" km");
$("#dsa2Fr").html(d(diffSA2Range)+" km");
$("#dsa2Fr").css("color",k(diffSA2Range));
  // SA2 Fire
$("#sa2Fc").html(p(ship.atba_2_fire)+"%");
$("#bsa2Fc").html(buildSA2Fire+"%");
$("#dsa2Fc").html(d(diffSA2Fire)+"%");
$("#dsa2Fc").css("color",k(diffSA2Fire));
  // AA1 DPS
$("#aa1Dps").html(ship.aa_1_dps);
$("#baa1Dps").html(buildAA1DPS);
$("#daa1Dps").html(d(diffAA1DPS));
$("#daa1Dps").css("color",k(diffAA1DPS));
  // AA1 Range
$("#aa1Fr").html(o(ship.aa_1_range)+" km");
$("#baa1Fr").html(buildAA1Range+" km");
$("#daa1Fr").html(d(diffAA1Range)+" km");
$("#daa1Fr").css("color",k(diffAA1Range));
  // AA2 DPS
$("#aa2Dps").html(ship.aa_2_dps);
$("#baa2Dps").html(buildAA2DPS);
$("#daa2Dps").html(d(diffAA2DPS));
$("#daa2Dps").css("color",k(diffAA2DPS));
  // AA2 Range
$("#aa2Fr").html(o(ship.aa_2_range)+" km");
$("#baa2Fr").html(buildAA2Range+" km");
$("#daa2Fr").html(d(diffAA2Range)+" km");
$("#daa2Fr").css("color",k(diffAA2Range));
  // AA3 DPS
$("#aa3Dps").html(ship.aa_3_dps);
$("#baa3Dps").html(buildAA3DPS);
$("#daa3Dps").html(d(diffAA3DPS));
$("#daa3Dps").css("color",k(diffAA3DPS));
  // AA3 Range
$("#aa3Fr").html(o(ship.aa_3_range)+" km");
$("#baa3Fr").html(buildAA3Range+" km");
$("#daa3Fr").html(d(diffAA3Range)+" km");
$("#daa3Fr").css("color",k(diffAA3Range));
  // AA4 DPS
$("#aa4Dps").html(ship.aa_4_dps);
$("#baa4Dps").html(buildAA4DPS);
$("#daa4Dps").html(d(diffAA4DPS));
$("#daa4Dps").css("color",k(diffAA4DPS));
  // AA4 Range
$("#aa4Fr").html(o(ship.aa_4_range)+" km");
$("#baa4Fr").html(buildAA4Range+" km");
$("#daa4Fr").html(d(diffAA4Range)+" km");
$("#daa4Fr").css("color",k(diffAA4Range));
  // TB Hitpoints
$("#tbhp").html(c(ship.torpedo_bomber_hp));
$("#btbhp").html(c(buildTBHitpoints));
$("#dtbhp").html(d(diffTBHitpoints));
$("#dtbhp").css("color",k(diffTBHitpoints));
  // TB Max Speed
$("#tbms").html(ship.torpedo_bomber_max+" kt");
$("#btbms").html(buildTBMaxSpeed+" kt");
$("#dtbms").html(d(diffTBMaxSpeed)+" kt");
$("#dtbms").css("color",k(diffTBMaxSpeed));
  // TB AttackUnit
$("#tbau").html(ship.torpedo_bomber_attack);
$("#btbau").html(buildTBAttackUnit);
$("#dtbau").html(d(diffTBAttackUnit));
$("#dtbau").css("color",k(diffTBAttackUnit));
  // TB Squadron
$("#tbss").html(ship.torpedo_bomber_flight);
$("#btbss").html(buildTBSquadron);
$("#dtbss").html(d(diffTBSquadron));
$("#dtbss").css("color",k(diffTBSquadron));
  // TB Detect
$("#tbdr").html(o(ship.torpedo_bomber_detect)+" km");
$("#btbdr").html(o(buildTBDetect)+" km");
$("#dtbdr").html(d(diffTBDetect)+" km");
$("#dtbdr").css("color",ki(diffTBDetect));
  // TB Resto
$("#tbrt").html(ship.torpedo_bomber_resto+" s");
$("#btbrt").html(buildTBResto+" s");
$("#dtbrt").html(d(diffTBResto)+" s");
$("#dtbrt").css("color",ki(diffTBResto));
  // TB Damage
$("#tbd").html(c(ship.torpedo_bomber_damage));
$("#btbd").html(c(buildTBDamage));
$("#dtbd").html(d(diffTBDamage));
$("#dtbd").css("color",k(diffTBDamage));
  // TB TSpeed
$("#tbts").html(ship.torpedo_bomber_bomb_speedspeed+" kt");
$("#btbts").html(buildTBTSpeed+" kt");
$("#dtbts").html(d(diffTBTSpeed)+" kt");
$("#dtbts").css("color",k(diffTBTSpeed));
  // TB TRange
$("#tbtr").html(o(ship.torpedo_bomber_range)+" km");
$("#btbtr").html(o(buildTBTRange)+" km");
$("#dtbtr").html(d(diffTBTRange)+" km");
$("#dtbtr").css("color",k(diffTBTRange));
  // DB Hitpoints
$("#dbhp").html(c(ship.he_bomber_hp));
$("#bdbhp").html(c(buildDBHitpoints));
$("#ddbhp").html(d(diffDBHitpoints));
$("#ddbhp").css("color",k(diffDBHitpoints));
  // DB Max Speed
$("#dbms").html(ship.he_bomber_max+" kt");
$("#bdbms").html(buildDBMaxSpeed+" kt");
$("#ddbms").html(d(diffDBMaxSpeed)+" kt");
$("#ddbms").css("color",k(diffDBMaxSpeed));
  // DB AttackUnit
$("#dbau").html(ship.he_bomber_attack);
$("#bdbau").html(buildDBAttackUnit);
$("#ddbau").html(d(diffDBAttackUnit));
$("#ddbau").css("color",k(diffDBAttackUnit));
  // DB Squadron
$("#dbss").html(ship.he_bomber_flight);
$("#bdbss").html(buildDBSquadron);
$("#ddbss").html(d(diffDBSquadron));
$("#ddbss").css("color",k(diffDBSquadron));
  // DB Detect
$("#dbdr").html(o(ship.he_bomber_detect)+" km");
$("#bdbdr").html(o(buildDBDetect)+" km");
$("#ddbdr").html(d(diffDBDetect)+" km");
$("#ddbdr").css("color",ki(diffDBDetect));
  // DB Resto
$("#dbrt").html(ship.he_bomber_resto+" s");
$("#bdbrt").html(buildDBResto+" s");
$("#ddbrt").html(d(diffDBResto)+" s");
$("#ddbrt").css("color",ki(diffDBResto));
  // DB Damage
$("#dbd").html(c(ship.he_bomber_damage));
$("#bdbd").html(c(buildDBDamage));
$("#ddbd").html(d(diffDBDamage));
$("#ddbd").css("color",k(diffDBDamage));
  // DB Fire
$("#dbfc").html(p(ship.he_bomber_fire)+"%");
$("#bdbfc").html(p(buildDBFire)+"%");
$("#ddbfc").html(d(diffDBFire)+"%");
$("#ddbfc").css("color",k(diffDBFire));
  // Max Speed
$("#ms").html(o(ship.max_speed)+" kt");
$("#bms").html(buildMaxSpeed+" kt");
$("#dms").html(d(diffMaxSpeed)+" kt");
$("#dms").css("color",k(diffMaxSpeed));
  // Turning Circle
$("#tcr").html(c(ship.turning_circle)+" m");
$("#btcr").html(c(ship.turning_circle)+" m");
  // Rudder Shift Time
$("#rst").html(o(ship.rudder_shift)+" s");
$("#brst").html(buildRudderShift+" s");
$("#drst").html(d(diffRudderShift)+" s");
$("#drst").css("color",ki(diffRudderShift));
  // Sea Detectability
$("#sdr").html(o(ship.sea_detect)+" km");
$("#bsdr").html(buildDrSea+" km");
$("#dsdr").html(d(diffDrSea)+" km");
$("#dsdr").css("color",ki(diffDrSea));
  // Air Detectability
$("#adr").html(o(ship.air_detect)+" km");
$("#badr").html(buildDrAir+" km");
$("#dadr").html(d(diffDrAir)+" km");
$("#dadr").css("color",ki(diffDrAir));
  // Smoke Detectability
$("#sfdr").html(o(ship.smoke_fire)+" km");
$("#bsfdr").html(buildDrSmoke+" km");
$("#dsfdr").html(d(diffDrSmoke)+" km");
$("#dsfdr").css("color",ki(diffDrSmoke));
    // RPM
$("#rpm").html(Math.round(ship.rpm));
$("#brpm").html(buildRPM);
$("#drpm").html(d(diffRPM));
$("#drpm").css("color",k(diffRPM));
    // AS AP
$("#apas").html(c(ship.ap_alpha));
$("#bapas").html(c(buildAsAP));
$("#dapas").html(d(diffAsAP));
$("#dapas").css("color",k(diffAsAP));
    // AS HE
$("#heas").html(c(ship.he_alpha));
$("#bheas").html(c(buildAsHE));
$("#dheas").html(d(diffAsHE));
$("#dheas").css("color",k(diffAsHE));
    // DPM AP
$("#apdpm").html(c(Math.round(ship.ap_dpm)));
$("#bapdpm").html(c(buildDpmAP));
$("#dapdpm").html(d(diffDpmAP));
$("#dapdpm").css("color",k(diffDpmAP));
    // DPM HE
$("#hedpm").html(c(Math.round(ship.he_dpm)));
$("#bhedpm").html(c(buildDpmHE));
$("#dhedpm").html(d(diffDpmHE));
$("#dhedpm").css("color",k(diffDpmHE));
    // Torp React
$("#trt").html(t(ship.torpedo_reaction)+" s");
$("#btrt").html(buildTorpReact+" s");
$("#dtrt").html(d(diffTorpReact)+" s");
$("#dtrt").css("color",ki(diffTorpReact));
    // Fire Salvo
$("#fsc").html(p(ship.fps)+"%");
$("#bfsc").html(p(buildFireSalvo)+"%");
$("#dfsc").html(d(pt(diffFireSalvo))+"%");
$("#dfsc").css("color",k(diffFireSalvo));
};