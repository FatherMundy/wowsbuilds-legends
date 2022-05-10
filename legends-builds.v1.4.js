function calcBuild(){

   // Calculations
  // HP
var buildHP = Math.round(ship.hp * skill1.hpModMulti * skill2.hpModMulti * skill3.hpModMulti * skill4.hpModMulti * skill5.hpModMulti * mod1.hpModMulti * mod2.hpModMulti * mod3.hpModMulti * mod4.hpModMulti * comm1.hpModMulti * insp1.hpModMulti * insp2.hpModMulti + (comm1.hpModAdd * ship.tierNum) + (insp1.hpModAdd * ship.tierNum) + (insp1.hpModAdd * ship.tierNum));
var diffHP = (buildHP-ship.hp);

  // MB Range
var buildMBRange = (ship.mbRange * skill1.mbRangeMod * skill2.mbRangeMod * skill3.mbRangeMod * skill4.mbRangeMod * skill5.mbRangeMod * mod1.mbRangeMod * mod2.mbRangeMod * mod3.mbRangeMod * mod4.mbRangeMod * comm1.mbRangeMod * insp1.mbRangeMod * insp2.mbRangeMod).toFixed(1);
var diffMBRange = (buildMBRange-ship.mbRange).toFixed(1);

  // MB Traverse
var buildMBTraverse = (180/((180/ship.mbTraverse) + skill1.mbTraverseAdd + skill2.mbTraverseAdd + skill3.mbTraverseAdd + skill4.mbTraverseAdd + skill5.mbTraverseAdd + mod1.mbTraverseAdd + mod2.mbTraverseAdd + mod3.mbTraverseAdd + mod4.mbTraverseAdd + comm1.mbTraverseAdd + insp1.mbTraverseAdd + insp2.mbTraverseAdd) * skill1.mbTraverseModMulti * skill2.mbTraverseModMulti * skill3.mbTraverseModMulti * skill4.mbTraverseModMulti * skill5.mbTraverseModMulti * mod1.mbTraverseModMulti * mod2.mbTraverseModMulti * mod3.mbTraverseModMulti * mod4.mbTraverseModMulti * comm1.mbTraverseModMulti * insp1.mbTraverseModMulti * insp2.mbTraverseModMulti).toFixed(1);
var diffMBTraverse = (buildMBTraverse-ship.mbTraverse).toFixed(1);

  // MB Reload
var buildMBReload = (ship.mbReload * skill1.mbReloadMod * skill2.mbReloadMod * skill3.mbReloadMod * skill4.mbReloadMod * skill5.mbReloadMod * mod1.mbReloadMod * mod2.mbReloadMod * mod3.mbReloadMod * mod4.mbReloadMod * comm1.mbReloadMod * insp1.mbReloadMod * insp2.mbReloadMod).toFixed(1);
var diffMBReload = (buildMBReload-ship.mbReload).toFixed(1);

  // MB HE
var buildMBHE = Math.round(ship.mbHE * skill1.mbHEMod * skill2.mbHEMod * skill3.mbHEMod * skill4.mbHEMod * skill5.mbHEMod * mod1.mbHEMod * mod2.mbHEMod * mod3.mbHEMod * mod4.mbHEMod * comm1.mbHEMod * insp1.mbHEMod * insp2.mbHEMod);
var diffMBHE = Math.round(buildMBHE-ship.mbHE);

  // MB Fire Chance
var buildMBFire = (ship.mbFire * skill1.mbFireModMulti * skill2.mbFireModMulti * skill3.mbFireModMulti * skill4.mbFireModMulti * skill5.mbFireModMulti * mod1.mbFireModMulti * mod2.mbFireModMulti * mod3.mbFireModMulti * mod4.mbFireModMulti * comm1.mbFireModMulti * insp1.mbFireModMulti * insp2.mbFireModMulti + skill1.mbFireModAdd + skill2.mbFireModAdd + skill3.mbFireModAdd + skill4.mbFireModAdd + skill5.mbFireModAdd + mod1.mbFireModAdd + mod2.mbFireModAdd + mod3.mbFireModAdd + mod4.mbFireModAdd + comm1.mbFireModAdd + insp1.mbFireModAdd + insp2.mbFireModAdd).toFixed(2);
var diffMBFire = (buildMBFire-ship.mbFire).toFixed(4);

  // MB AP
var buildMBAP = Math.round(ship.mbAP * skill1.mbAPMod * skill2.mbAPMod * skill3.mbAPMod * skill4.mbAPMod * skill5.mbAPMod * mod1.mbAPMod * mod2.mbAPMod * mod3.mbAPMod * mod4.mbAPMod * comm1.mbAPMod * insp1.mbAPMod * insp2.mbAPMod);
var diffMBAP = Math.round(buildMBAP-ship.mbAP);

  // Torp Reload
var buildTReload = (ship.tReload * (1-((1-skill1.tReloadMod) + (1-skill2.tReloadMod) + (1-skill3.tReloadMod) + (1-skill4.tReloadMod) + (1-skill5.tReloadMod) + (1-mod1.tReloadMod) + (1-mod2.tReloadMod) + (1-mod3.tReloadMod) + (1-mod4.tReloadMod) + (1-comm1.tReloadMod) + (1-insp1.tReloadMod) + (1-insp2.tReloadMod)))).toFixed(1);
var diffTReload = (buildTReload-ship.tReload).toFixed(1);

  // Torp Damage
var buildTDamage = Math.round(ship.tDamage * skill1.tDamageMod * skill2.tDamageMod * skill3.tDamageMod * skill4.tDamageMod * skill5.tDamageMod * mod1.tDamageMod * mod2.tDamageMod * mod3.tDamageMod * mod4.tDamageMod * comm1.tDamageMod * insp1.tDamageMod * insp2.tDamageMod);
var diffTDamage = Math.round(buildTDamage-ship.tDamage);

  // Torp Detect
var buildTDetect = (ship.tDetect * skill1.tDetectModMulti * skill2.tDetectModMulti * skill3.tDetectModMulti * skill4.tDetectModMulti * skill5.tDetectModMulti * mod1.tDetectModMulti * mod2.tDetectModMulti * mod3.tDetectModMulti * mod4.tDetectModMulti * comm1.tDetectModMulti * insp1.tDetectModMulti * insp2.tDetectModMulti + comm1.tDetectModAdd + insp1.tDetectModAdd + insp2.tDetectModAdd).toFixed(1);
var diffTDetect = (buildTDetect-ship.tDetect).toFixed(1);

  // Torp Range
var buildTRange = (ship.tRange * skill1.tRangeMod * skill2.tRangeMod * skill3.tRangeMod * skill4.tRangeMod * skill5.tRangeMod * mod1.tRangeMod * mod2.tRangeMod * mod3.tRangeMod * mod4.tRangeMod * comm1.tRangeMod * insp1.tRangeMod * insp2.tRangeMod).toFixed(1);
var diffTRange = (buildTRange-ship.tRange).toFixed(1);

  // Torp Speed
var buildTSpeed = Math.round(ship.tSpeed + skill1.tSpeedMod + skill2.tSpeedMod + skill3.tSpeedMod + skill4.tSpeedMod + skill5.tSpeedMod + mod1.tSpeedMod + mod2.tSpeedMod + mod3.tSpeedMod + mod4.tSpeedMod + comm1.tSpeedMod + insp1.tSpeedMod + insp2.tSpeedMod);
var diffTSpeed = Math.round(buildTSpeed-ship.tSpeed);

  // SA1 Range
var buildSA1Range = (ship.sa1Range * mod1.saRangeMod * mod2.saRangeMod * mod3.saRangeMod * mod4.saRangeMod * skill1.saRangeMod * skill2.saRangeMod * skill3.saRangeMod * skill4.saRangeMod * skill5.saRangeMod * comm1.saRangeMod * insp1.saRangeMod * insp2.saRangeMod).toFixed(1);
var diffSA1Range = (buildSA1Range-ship.sa1Range).toFixed(1);

  // SA1 Reload
var buildSA1Reload = (ship.sa1Reload * skill1.saReloadMod * skill2.saReloadMod * skill3.saReloadMod * skill4.saReloadMod * skill5.saReloadMod * mod1.saReloadMod * mod2.saReloadMod * mod3.saReloadMod * mod4.saReloadMod * comm1.saReloadMod * insp1.saReloadMod * insp2.saReloadMod).toFixed(1);
var diffSA1Reload = (buildSA1Reload-ship.sa1Reload).toFixed(1);

  // SA1 Damage
var buildSA1Damage = Math.round(ship.sa1Damage * skill1.saDamageMod * skill2.saDamageMod * skill3.saDamageMod * skill4.saDamageMod * skill5.saDamageMod * mod1.saDamageMod * mod2.saDamageMod * mod3.saDamageMod * mod4.saDamageMod * comm1.saDamageMod * insp1.saDamageMod * insp2.saDamageMod);
var diffSA1Damage = Math.round(buildSA1Damage-ship.sa1Damage);

  // SA1 Fire Chance
var buildSA1Fire = Math.round((ship.sa1Fire * skill1.saFireMod * skill2.saFireMod * skill3.saFireMod * skill4.saFireMod * skill5.saFireMod * mod1.saFireMod * mod2.saFireMod * mod3.saFireMod * mod4.saFireMod * comm1.saFireMod * insp1.saFireMod * insp2.saFireMod)*100);
var diffSA1Fire = (buildSA1Fire-(100*ship.sa1Fire)).toFixed(2);

  // SA2 Range
var buildSA2Range = (ship.sa2Range * mod1.saRangeMod * mod2.saRangeMod * mod3.saRangeMod * mod4.saRangeMod * skill1.saRangeMod * skill2.saRangeMod * skill3.saRangeMod * skill4.saRangeMod * skill5.saRangeMod * comm1.saRangeMod * insp1.saRangeMod * insp2.saRangeMod).toFixed(1);
var diffSA2Range = (buildSA2Range-ship.sa2Range).toFixed(1);

  // SA2 Reload
var buildSA2Reload = (ship.sa2Reload * skill1.saReloadMod * skill2.saReloadMod * skill3.saReloadMod * skill4.saReloadMod * skill5.saReloadMod * mod1.saReloadMod * mod2.saReloadMod * mod3.saReloadMod * mod4.saReloadMod * comm1.saReloadMod * insp1.saReloadMod * insp2.saReloadMod).toFixed(1);
var diffSA2Reload = (buildSA2Reload-ship.sa2Reload).toFixed(1);

  // SA2 Damage
var buildSA2Damage = Math.round(ship.sa2Damage * skill1.saDamageMod * skill2.saDamageMod * skill3.saDamageMod * skill4.saDamageMod * skill5.saDamageMod * mod1.saDamageMod * mod2.saDamageMod * mod3.saDamageMod * mod4.saDamageMod * comm1.saDamageMod * insp1.saDamageMod * insp2.saDamageMod);
var diffSA2Damage = Math.round(buildSA2Damage-ship.sa2Damage);

  // SA2 Fire Chance
var buildSA2Fire = Math.round((ship.sa2Fire * skill1.saFireMod * skill2.saFireMod * skill3.saFireMod * skill4.saFireMod * skill5.saFireMod * mod1.saFireMod * mod2.saFireMod * mod3.saFireMod * mod4.saFireMod * comm1.saFireMod * insp1.saFireMod * insp2.saFireMod)*100);
var diffSA2Fire = (buildSA2Fire-(100*ship.sa2Fire)).toFixed(2);

  // AA1 Range
var buildAA1Range = (ship.aa1Range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA1Range = (buildAA1Range-ship.aa1Range).toFixed(1);

  // AA1 DPS
var buildAA1DPS = Math.round(ship.aa1DPS * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA1DPS = Math.round(buildAA1DPS-ship.aa1DPS);

  // AA2 Range
var buildAA2Range = (ship.aa2Range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA2Range = (buildAA2Range-ship.aa2Range).toFixed(1);

  // AA2 DPS
var buildAA2DPS = Math.round(ship.aa2DPS * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA2DPS = Math.round(buildAA2DPS-ship.aa2DPS);

  // AA3 Range
var buildAA3Range = (ship.aa3Range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA3Range = (buildAA3Range-ship.aa3Range).toFixed(1);

  // AA3 DPS
var buildAA3DPS = Math.round(ship.aa3DPS * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA3DPS = Math.round(buildAA3DPS-ship.aa3DPS);

  // AA4 Range
var buildAA4Range = (ship.aa4Range * skill1.aaRangeMod * skill2.aaRangeMod * skill3.aaRangeMod * skill4.aaRangeMod * skill5.aaRangeMod * mod1.aaRangeMod * mod2.aaRangeMod * mod3.aaRangeMod * mod4.aaRangeMod * comm1.aaRangeMod * insp1.aaRangeMod * insp2.aaRangeMod).toFixed(1);
var diffAA4Range = (buildAA4Range-ship.aa4Range).toFixed(1);

  // AA4 DPS
var buildAA4DPS = Math.round(ship.aa4DPS * skill1.aaDPSMod * skill2.aaDPSMod * skill3.aaDPSMod * skill4.aaDPSMod * skill5.aaDPSMod * mod1.aaDPSMod * mod2.aaDPSMod * mod3.aaDPSMod * mod4.aaDPSMod * comm1.aaDPSMod * insp1.aaDPSMod * insp2.aaDPSMod);
var diffAA4DPS = Math.round(buildAA4DPS-ship.aa4DPS);

  // TB Hitpoints
var buildTBHitpoints = Math.round(ship.tbHitpoints * skill1.tbHitpointsMod * skill2.tbHitpointsMod * skill3.tbHitpointsMod * skill4.tbHitpointsMod * skill5.tbHitpointsMod * mod1.tbHitpointsMod * mod2.tbHitpointsMod * mod3.tbHitpointsMod * mod4.tbHitpointsMod * comm1.tbHitpointsMod * insp1.tbHitpointsMod * insp2.tbHitpointsMod);
var diffTBHitpoints = Math.round(buildTBHitpoints-ship.tbHitpoints);

  // TB Cruise Speed
var buildTBCruiseSpeed = Math.round(ship.tbCruiseSpeed * skill1.tbCruiseSpeedMod * skill2.tbCruiseSpeedMod * skill3.tbCruiseSpeedMod * skill4.tbCruiseSpeedMod * skill5.tbCruiseSpeedMod * mod1.tbCruiseSpeedMod * mod2.tbCruiseSpeedMod * mod3.tbCruiseSpeedMod * mod4.tbCruiseSpeedMod * comm1.tbCruiseSpeedMod * insp1.tbCruiseSpeedMod * insp2.tbCruiseSpeedMod);
var diffTBCruiseSpeed = Math.round(buildTBCruiseSpeed-ship.tbCruiseSpeed);

  // TB Max Speed
var buildTBMaxSpeed = Math.round(ship.tbMaxSpeed * skill1.tbMaxSpeedMod * skill2.tbMaxSpeedMod * skill3.tbMaxSpeedMod * skill4.tbMaxSpeedMod * skill5.tbMaxSpeedMod * mod1.tbMaxSpeedMod * mod2.tbMaxSpeedMod * mod3.tbMaxSpeedMod * mod4.tbMaxSpeedMod * comm1.tbMaxSpeedMod * insp1.tbMaxSpeedMod * insp2.tbMaxSpeedMod);
var diffTBMaxSpeed = Math.round(buildTBMaxSpeed-ship.tbMaxSpeed);

  // TB Attack Unit
var buildTBAttackUnit = Math.round(ship.tbAttackUnit + skill1.tbAttackUnitMod + skill2.tbAttackUnitMod + skill3.tbAttackUnitMod + skill4.tbAttackUnitMod + skill5.tbAttackUnitMod + mod1.tbAttackUnitMod + mod2.tbAttackUnitMod + mod3.tbAttackUnitMod + mod4.tbAttackUnitMod + comm1.tbAttackUnitMod + insp1.tbAttackUnitMod + insp2.tbAttackUnitMod);
var diffTBAttackUnit = Math.round(buildTBAttackUnit-ship.tbAttackUnit);

  // TB Squadron
var buildTBSquadron = Math.round(ship.tbSquadron + skill1.tbSquadronMod + skill2.tbSquadronMod + skill3.tbSquadronMod + skill4.tbSquadronMod + skill5.tbSquadronMod + mod1.tbSquadronMod + mod2.tbSquadronMod + mod3.tbSquadronMod + mod4.tbSquadronMod + comm1.tbSquadronMod + insp1.tbSquadronMod + insp2.tbSquadronMod);
var diffTBSquadron = Math.round(buildTBSquadron-ship.tbSquadron);

  // TB Detectability Range
var buildTBDetect = Math.round(ship.tbDetect * skill1.tbDRMod * skill2.tbDRMod * skill3.tbDRMod * skill4.tbDRMod * skill5.tbDRMod * mod1.tbDRMod * mod2.tbDRMod * mod3.tbDRMod * mod4.tbDRMod * comm1.tbDRMod * insp1.tbDRMod * insp2.tbDRMod);
var diffTBDetect = Math.round(buildTBDetect-ship.tbDetect);

  // TB Deck 
var buildTBDeck = Math.round(ship.tbDeck + skill1.tbDeckMod + skill2.tbDeckMod + skill3.tbDeckMod + skill4.tbDeckMod + skill5.tbDeckMod + mod1.tbDeckMod + mod2.tbDeckMod + mod3.tbDeckMod + mod4.tbDeckMod + comm1.tbDeckMod + insp1.tbDeckMod + insp2.tbDeckMod);
var diffTBDeck = Math.round(buildTBDeck-ship.tbDeck);

  // TB Restoration
var buildTBResto = Math.round(ship.tbResto * skill1.tbRestoMod * skill2.tbRestoMod * skill3.tbRestoMod * skill4.tbRestoMod * skill5.tbRestoMod * mod1.tbRestoMod * mod2.tbRestoMod * mod3.tbRestoMod * mod4.tbRestoMod * comm1.tbRestoMod * insp1.tbRestoMod * insp2.tbRestoMod);
var diffTBResto = Math.round(buildTBResto-ship.tbResto);

  // TB Damage
var buildTBDamage = Math.round(ship.tbDamage * skill1.tbDamageMod * skill2.tbDamageMod * skill3.tbDamageMod * skill4.tbDamageMod * skill5.tbDamageMod * mod1.tbDamageMod * mod2.tbDamageMod * mod3.tbDamageMod * mod4.tbDamageMod * comm1.tbDamageMod * insp1.tbDamageMod * insp2.tbDamageMod);
var diffTBDamage = Math.round(buildTBDamage-ship.tbDamage);

  // TB T Speed
var buildTBTSpeed = Math.round(ship.tbTSpeed * skill1.tbTSpeedMod * skill2.tbTSpeedMod * skill3.tbTSpeedMod * skill4.tbTSpeedMod * skill5.tbTSpeedMod * mod1.tbTSpeedMod * mod2.tbTSpeedMod * mod3.tbTSpeedMod * mod4.tbTSpeedMod * comm1.tbTSpeedMod * insp1.tbTSpeedMod * insp2.tbTSpeedMod);
var diffTBTSpeed = Math.round(buildTBTSpeed-ship.tbTSpeed);

  // TB T Range
var buildTBTRange = (ship.tbTRange * skill1.tbTRangeMod * skill2.tbTRangeMod * skill3.tbTRangeMod * skill4.tbTRangeMod * skill5.tbTRangeMod * mod1.tbTRangeMod * mod2.tbTRangeMod * mod3.tbTRangeMod * mod4.tbTRangeMod * comm1.tbTRangeMod * insp1.tbTRangeMod * insp2.tbTRangeMod).toFixed(1);
var diffTBTRange = (buildTBTRange-ship.tbTRange).toFixed(1);

  // DB Hitpoints
var buildDBHitpoints = Math.round(ship.dbHitpoints * skill1.dbHitpointsMod * skill2.dbHitpointsMod * skill3.dbHitpointsMod * skill4.dbHitpointsMod * skill5.dbHitpointsMod * mod1.dbHitpointsMod * mod2.dbHitpointsMod * mod3.dbHitpointsMod * mod4.dbHitpointsMod * comm1.dbHitpointsMod * insp1.dbHitpointsMod * insp2.dbHitpointsMod);
var diffDBHitpoints = Math.round(buildDBHitpoints-ship.dbHitpoints);

  // DB Cruise Speed
var buildDBCruiseSpeed = Math.round(ship.dbCruiseSpeed * skill1.dbCruiseSpeedMod * skill2.dbCruiseSpeedMod * skill3.dbCruiseSpeedMod * skill4.dbCruiseSpeedMod * skill5.dbCruiseSpeedMod * mod1.dbCruiseSpeedMod * mod2.dbCruiseSpeedMod * mod3.dbCruiseSpeedMod * mod4.dbCruiseSpeedMod * comm1.dbCruiseSpeedMod * insp1.dbCruiseSpeedMod * insp2.dbCruiseSpeedMod);
var diffDBCruiseSpeed = Math.round(buildDBCruiseSpeed-ship.dbCruiseSpeed);

  // DB Max Speed
var buildDBMaxSpeed = Math.round(ship.dbMaxSpeed * skill1.dbMaxSpeedMod * skill2.dbMaxSpeedMod * skill3.dbMaxSpeedMod * skill4.dbMaxSpeedMod * skill5.dbMaxSpeedMod * mod1.dbMaxSpeedMod * mod2.dbMaxSpeedMod * mod3.dbMaxSpeedMod * mod4.dbMaxSpeedMod * comm1.dbMaxSpeedMod * insp1.dbMaxSpeedMod * insp2.dbMaxSpeedMod);
var diffDBMaxSpeed = Math.round(buildDBMaxSpeed-ship.dbMaxSpeed);

  // DB Attack Unit
var buildDBAttackUnit = Math.round(ship.dbAttackUnit + skill1.dbAttackUnitMod + skill2.dbAttackUnitMod + skill3.dbAttackUnitMod + skill4.dbAttackUnitMod + skill5.dbAttackUnitMod + mod1.dbAttackUnitMod + mod2.dbAttackUnitMod + mod3.dbAttackUnitMod + mod4.dbAttackUnitMod + comm1.dbAttackUnitMod + insp1.dbAttackUnitMod + insp2.dbAttackUnitMod);
var diffDBAttackUnit = Math.round(buildDBAttackUnit-ship.dbAttackUnit);

  // DB Squadron
var buildDBSquadron = Math.round(ship.dbSquadron + skill1.dbSquadronMod + skill2.dbSquadronMod + skill3.dbSquadronMod + skill4.dbSquadronMod + skill5.dbSquadronMod + mod1.dbSquadronMod + mod2.dbSquadronMod + mod3.dbSquadronMod + mod4.dbSquadronMod + comm1.dbSquadronMod + insp1.dbSquadronMod + insp2.dbSquadronMod);
var diffDBSquadron = Math.round(buildDBSquadron-ship.dbSquadron);

  // DB Detectability Range
var buildDBDetect = Math.round(ship.dbDetect * skill1.dbDRMod * skill2.dbDRMod * skill3.dbDRMod * skill4.dbDRMod * skill5.dbDRMod * mod1.dbDRMod * mod2.dbDRMod * mod3.dbDRMod * mod4.dbDRMod * comm1.dbDRMod * insp1.dbDRMod * insp2.dbDRMod);
var diffDBDetect = Math.round(buildDBDetect-ship.dbDetect);

  // DB Deck 
var buildDBDeck = Math.round(ship.dbDeck + skill1.dbDeckMod + skill2.dbDeckMod + skill3.dbDeckMod + skill4.dbDeckMod + skill5.dbDeckMod + mod1.dbDeckMod + mod2.dbDeckMod + mod3.dbDeckMod + mod4.dbDeckMod + comm1.dbDeckMod + insp1.dbDeckMod + insp2.dbDeckMod);
var diffDBDeck = Math.round(buildDBDeck-ship.dbDeck);

  // DB Restoration
var buildDBResto = Math.round(ship.dbResto * skill1.dbRestoMod * skill2.dbRestoMod * skill3.dbRestoMod * skill4.dbRestoMod * skill5.dbRestoMod * mod1.dbRestoMod * mod2.dbRestoMod * mod3.dbRestoMod * mod4.dbRestoMod * comm1.dbRestoMod * insp1.dbRestoMod * insp2.dbRestoMod);
var diffDBResto = Math.round(buildDBResto-ship.dbResto);

  // DB Damage
var buildDBDamage = Math.round(ship.dbDamage * skill1.dbDamageMod * skill2.dbDamageMod * skill3.dbDamageMod * skill4.dbDamageMod * skill5.dbDamageMod * mod1.dbDamageMod * mod2.dbDamageMod * mod3.dbDamageMod * mod4.dbDamageMod * comm1.dbDamageMod * insp1.dbDamageMod * insp2.dbDamageMod);
var diffDBDamage = Math.round(buildDBDamage-ship.dbDamage);

  // DB Fire
var buildDBFire = (ship.dbFire * skill1.dbFireMod * skill2.dbFireMod * skill3.dbFireMod * skill4.dbFireMod * skill5.dbFireMod * mod1.dbFireMod * mod2.dbFireMod * mod3.dbFireMod * mod4.dbFireMod * comm1.dbFireMod * insp1.dbFireMod * insp2.dbFireMod).toFixed(2);
var diffDBFire = (buildDBFire-ship.dbFire).toFixed(2);

  // Max Speed
var buildMaxSpeed = (ship.ms * skill1.speedMod * skill2.speedMod * skill3.speedMod * skill4.speedMod * skill5.speedMod * mod1.speedMod * mod2.speedMod * mod3.speedMod * mod4.speedMod * comm1.speedMod * insp1.speedMod * insp2.speedMod).toFixed(1);
var diffMaxSpeed = (buildMaxSpeed-ship.ms).toFixed(1);

  // Rudder Shift
var buildRudderShift = (ship.rst * skill1.rudderShiftMod * skill2.rudderShiftMod * skill3.rudderShiftMod * skill4.rudderShiftMod * skill5.rudderShiftMod * mod1.rudderShiftMod * mod2.rudderShiftMod * mod3.rudderShiftMod * mod4.rudderShiftMod * comm1.rudderShiftMod * insp1.rudderShiftMod * insp2.rudderShiftMod).toFixed(1);
var diffRudderShift = (buildRudderShift-ship.rst).toFixed(1);

  // Sea Detectability
var buildDrSea = (ship.drSea * skill1.detectMod * skill2.detectMod * skill3.detectMod * skill4.detectMod * skill5.detectMod * mod1.detectMod * mod2.detectMod * mod3.detectMod * mod4.detectMod * comm1.detectMod * insp1.detectMod * insp2.detectMod).toFixed(1);
var diffDrSea = (buildDrSea-ship.drSea).toFixed(1);

  // Air Detectability
var buildDrAir = (ship.drAir * skill1.detectMod * skill2.detectMod * skill3.detectMod * skill4.detectMod * skill5.detectMod * mod1.detectMod * mod2.detectMod * mod3.detectMod * mod4.detectMod * comm1.detectMod * insp1.detectMod * insp2.detectMod).toFixed(1);
var diffDrAir = (buildDrAir-ship.drAir).toFixed(1);

  // Smoke Detectability
var buildDrSmoke = (ship.drSmoke * skill1.detectMod * skill2.detectMod * skill3.detectMod * skill4.detectMod * skill5.detectMod * mod1.detectMod * mod2.detectMod * mod3.detectMod * mod4.detectMod * comm1.detectMod * insp1.detectMod * insp2.detectMod).toFixed(1);
var diffDrSmoke = (buildDrSmoke-ship.drSmoke).toFixed(1);

// RPM
  var buildRPM = Math.round(ship.maxSalvo * (60/buildMBReload));
  var diffRPM = Math.round(buildRPM - ship.rpm);

// AS AP
  var buildAsAP = Math.round(ship.maxSalvo * buildMBAP);
  var diffAsAP = Math.round(buildAsAP - ship.asAP);

// AS HE
  var buildAsHE = Math.round(ship.maxSalvo * buildMBHE);
  var diffAsHE = Math.round(buildAsHE - ship.asHE);

// DPM AP
  var buildDpmAP = Math.round (buildMBAP * buildRPM);
  var diffDpmAP = Math.round(buildDpmAP - ship.dpmAP);

// DPM HE
  var buildDpmHE = Math.round (buildMBHE * buildRPM);
  var diffDpmHE = Math.round(buildDpmHE - ship.dpmHE);

// Torp React
  var buildTorpReact = ((buildTDetect * 1000) / (buildTSpeed * 2.6)).toFixed(2);
  var diffTorpReact = (buildTorpReact - ship.trt).toFixed(2);

// Fire Salvo
  var buildFireSalvo = (1 - Math.pow(1-buildMBFire,ship.maxSalvo*0.4));
  var diffFireSalvo = (buildFireSalvo-ship.fireSalvo).toFixed(4);


  // Printing
  // HP
document.getElementById("shipHitpoints").innerHTML = c(ship.hp);
document.getElementById("buildHitpoints").innerHTML = c(buildHP);
document.getElementById("diffHitpoints").innerHTML = d(diffHP);
document.getElementById("diffHitpoints").style.color = k(diffHP);
  // Armor
document.getElementById("shipArmor").innerHTML = ship.arm;
document.getElementById("buildArmor").innerHTML = ship.arm;
  // Torp Reduction
document.getElementById("shipTorpReduc").innerHTML = ship.torpReduc;
document.getElementById("buildTorpReduc").innerHTML = ship.torpReduc;
  // MB Range
document.getElementById("shipMBRange").innerHTML = o(ship.mbRange)+" km";
document.getElementById("buildMBRange").innerHTML = buildMBRange+" km";
document.getElementById("diffMBRange").innerHTML = d(diffMBRange)+" km";
document.getElementById("diffMBRange").style.color = k(diffMBRange);
  // MB Reload
document.getElementById("shipMBReload").innerHTML = o(ship.mbReload)+" s";
document.getElementById("buildMBReload").innerHTML = buildMBReload+" s";
document.getElementById("diffMBReload").innerHTML = d(diffMBReload)+" s";
document.getElementById("diffMBReload").style.color = ki(diffMBReload);
  // MB Traverse
document.getElementById("shipMBTraverse").innerHTML = o(ship.mbTraverse)+" s";
document.getElementById("buildMBTraverse").innerHTML = buildMBTraverse+" s";
document.getElementById("diffMBTraverse").innerHTML = d(diffMBTraverse)+" s";
document.getElementById("diffMBTraverse").style.color = ki(diffMBTraverse);
  // MB HE
document.getElementById("shipMBHE").innerHTML = c(ship.mbHE);
document.getElementById("buildMBHE").innerHTML = c(buildMBHE);
document.getElementById("diffMBHE").innerHTML = d(diffMBHE);
document.getElementById("diffMBHE").style.color = k(diffMBHE);
  // MB Fire
document.getElementById("shipMBFire").innerHTML = p(ship.mbFire)+"%";
document.getElementById("buildMBFire").innerHTML = p(buildMBFire)+"%";
document.getElementById("diffMBFire").innerHTML = d(pt(diffMBFire))+"%";
document.getElementById("diffMBFire").style.color = k(diffMBFire);
  // MB AP
document.getElementById("shipMBAP").innerHTML = c(ship.mbAP);
document.getElementById("buildMBAP").innerHTML = c(buildMBAP);
document.getElementById("diffMBAP").innerHTML = d(diffMBAP);
document.getElementById("diffMBAP").style.color = k(diffMBAP);
  // T Reload
document.getElementById("shipTReload").innerHTML = o(ship.tReload)+" s";
document.getElementById("buildTReload").innerHTML = o(buildTReload)+" s";
document.getElementById("diffTReload").innerHTML = d(diffTReload)+" s";
document.getElementById("diffTReload").style.color = ki(diffTReload);
  // T Damage
document.getElementById("shipTDamage").innerHTML = c(ship.tDamage);
document.getElementById("buildTDamage").innerHTML = c(buildTDamage);
document.getElementById("diffTDamage").innerHTML = d(diffTDamage);
document.getElementById("diffTDamage").style.color = k(diffTDamage);
  // T Detect
document.getElementById("shipTDetect").innerHTML = o(ship.tDetect)+" km";
document.getElementById("buildTDetect").innerHTML = o(buildTDetect)+" km";
document.getElementById("diffTDetect").innerHTML = d(diffTDetect)+" km";
document.getElementById("diffTDetect").style.color = ki(diffTDetect);
  // T Range
document.getElementById("shipTRange").innerHTML = o(ship.tRange)+" km";
document.getElementById("buildTRange").innerHTML = buildTRange+" km";
document.getElementById("diffTRange").innerHTML = d(diffTRange)+" km";
document.getElementById("diffTRange").style.color = k(diffTRange);
  // T Speed
document.getElementById("shipTSpeed").innerHTML = ship.tSpeed+" kt";
document.getElementById("buildTSpeed").innerHTML = buildTSpeed+" kt";
document.getElementById("diffTSpeed").innerHTML = d(diffTSpeed)+" kt";
document.getElementById("diffTSpeed").style.color = k(diffTSpeed);
  // SA1 Reload
document.getElementById("shipSA1Reload").innerHTML = ship.sa1Reload+" s";
document.getElementById("buildSA1Reload").innerHTML = buildSA1Reload+" s";
document.getElementById("diffSA1Reload").innerHTML = d(diffSA1Reload)+" s";
document.getElementById("diffSA1Reload").style.color = ki(diffSA1Reload);
  // SA1 Damage
document.getElementById("shipSA1Damage").innerHTML = c(ship.sa1Damage);
document.getElementById("buildSA1Damage").innerHTML = c(buildSA1Damage);
document.getElementById("diffSA1Damage").innerHTML = d(diffSA1Damage);
document.getElementById("diffSA1Damage").style.color = k(diffSA1Damage);
  // SA1 Range
document.getElementById("shipSA1Range").innerHTML = o(ship.sa1Range)+" km";
document.getElementById("buildSA1Range").innerHTML = buildSA1Range+" km";
document.getElementById("diffSA1Range").innerHTML = d(diffSA1Range)+" km";
document.getElementById("diffSA1Range").style.color = k(diffSA1Range);
  // SA1 Fire
document.getElementById("shipSA1Fire").innerHTML = p(ship.sa1Fire)+"%";
document.getElementById("buildSA1Fire").innerHTML = buildSA1Fire+"%";
document.getElementById("diffSA1Fire").innerHTML = d(diffSA1Fire)+"%";
document.getElementById("diffSA1Fire").style.color = k(diffSA1Fire);
  // SA2 Reload
document.getElementById("shipSA2Reload").innerHTML = o(ship.sa2Reload)+" s";
document.getElementById("buildSA2Reload").innerHTML = buildSA2Reload+" s";
document.getElementById("diffSA2Reload").innerHTML = d(diffSA2Reload)+" s";
document.getElementById("diffSA2Reload").style.color = ki(diffSA2Reload);
  // SA2 Damage
document.getElementById("shipSA2Damage").innerHTML = c(ship.sa2Damage);
document.getElementById("buildSA2Damage").innerHTML = c(buildSA2Damage);
document.getElementById("diffSA2Damage").innerHTML = d(diffSA2Damage);
document.getElementById("diffSA2Damage").style.color = k(diffSA2Damage);
  // SA2 Range
document.getElementById("shipSA2Range").innerHTML = o(ship.sa2Range)+" km";
document.getElementById("buildSA2Range").innerHTML = buildSA2Range+" km";
document.getElementById("diffSA2Range").innerHTML = d(diffSA2Range)+" km";
document.getElementById("diffSA2Range").style.color = k(diffSA2Range);
  // SA2 Fire
document.getElementById("shipSA2Fire").innerHTML = p(ship.sa2Fire)+"%";
document.getElementById("buildSA2Fire").innerHTML = buildSA2Fire+"%";
document.getElementById("diffSA2Fire").innerHTML = d(diffSA2Fire)+"%";
document.getElementById("diffSA2Fire").style.color = k(diffSA2Fire);
  // AA1 DPS
document.getElementById("shipAA1DPS").innerHTML = ship.aa1DPS;
document.getElementById("buildAA1DPS").innerHTML = buildAA1DPS;
document.getElementById("diffAA1DPS").innerHTML = d(diffAA1DPS);
document.getElementById("diffAA1DPS").style.color = k(diffAA1DPS);
  // AA1 Range
document.getElementById("shipAA1Range").innerHTML = o(ship.aa1Range)+" km";
document.getElementById("buildAA1Range").innerHTML = buildAA1Range+" km";
document.getElementById("diffAA1Range").innerHTML = d(diffAA1Range)+" km";
document.getElementById("diffAA1Range").style.color = k(diffAA1Range);
  // AA2 DPS
document.getElementById("shipAA2DPS").innerHTML = ship.aa2DPS;
document.getElementById("buildAA2DPS").innerHTML = buildAA2DPS;
document.getElementById("diffAA2DPS").innerHTML = d(diffAA2DPS);
document.getElementById("diffAA2DPS").style.color = k(diffAA2DPS);
  // AA2 Range
document.getElementById("shipAA2Range").innerHTML = o(ship.aa2Range)+" km";
document.getElementById("buildAA2Range").innerHTML = buildAA2Range+" km";
document.getElementById("diffAA2Range").innerHTML = d(diffAA2Range)+" km";
document.getElementById("diffAA2Range").style.color = k(diffAA2Range);
  // AA3 DPS
document.getElementById("shipAA3DPS").innerHTML = ship.aa3DPS;
document.getElementById("buildAA3DPS").innerHTML = buildAA3DPS;
document.getElementById("diffAA3DPS").innerHTML = d(diffAA3DPS);
document.getElementById("diffAA3DPS").style.color = k(diffAA3DPS);
  // AA3 Range
document.getElementById("shipAA3Range").innerHTML = o(ship.aa3Range)+" km";
document.getElementById("buildAA3Range").innerHTML = buildAA3Range+" km";
document.getElementById("diffAA3Range").innerHTML = d(diffAA3Range)+" km";
document.getElementById("diffAA3Range").style.color = k(diffAA3Range);
  // AA4 DPS
document.getElementById("shipAA4DPS").innerHTML = ship.aa4DPS;
document.getElementById("buildAA4DPS").innerHTML = buildAA4DPS;
document.getElementById("diffAA4DPS").innerHTML = d(diffAA4DPS);
document.getElementById("diffAA4DPS").style.color = k(diffAA4DPS);
  // AA4 Range
document.getElementById("shipAA4Range").innerHTML = o(ship.aa4Range)+" km";
document.getElementById("buildAA4Range").innerHTML = buildAA4Range+" km";
document.getElementById("diffAA4Range").innerHTML = d(diffAA4Range)+" km";
document.getElementById("diffAA4Range").style.color = k(diffAA4Range);
  // TB Hitpoints
document.getElementById("shipTBHitpoints").innerHTML = c(ship.tbHitpoints);
document.getElementById("buildTBHitpoints").innerHTML = c(buildTBHitpoints);
document.getElementById("diffTBHitpoints").innerHTML = d(diffTBHitpoints);
document.getElementById("diffTBHitpoints").style.color = k(diffTBHitpoints);
  // TB Cruise Speed
document.getElementById("shipTBCruiseSpeed").innerHTML = ship.tbCruiseSpeed+" kt";
document.getElementById("buildTBCruiseSpeed").innerHTML = buildTBCruiseSpeed+" kt";
document.getElementById("diffTBCruiseSpeed").innerHTML = d(diffTBCruiseSpeed)+" kt";
document.getElementById("diffTBCruiseSpeed").style.color = k(diffTBCruiseSpeed);
  // TB Max Speed
document.getElementById("shipTBMaxSpeed").innerHTML = ship.tbMaxSpeed+" kt";
document.getElementById("buildTBMaxSpeed").innerHTML = buildTBMaxSpeed+" kt";
document.getElementById("diffTBMaxSpeed").innerHTML = d(diffTBMaxSpeed)+" kt";
document.getElementById("diffTBMaxSpeed").style.color = k(diffTBMaxSpeed);
  // TB AttackUnit
document.getElementById("shipTBAttackUnit").innerHTML = ship.tbAttackUnit;
document.getElementById("buildTBAttackUnit").innerHTML = buildTBAttackUnit;
document.getElementById("diffTBAttackUnit").innerHTML = d(diffTBAttackUnit);
document.getElementById("diffTBAttackUnit").style.color = k(diffTBAttackUnit);
  // TB Squadron
document.getElementById("shipTBSquadron").innerHTML = ship.tbSquadron;
document.getElementById("buildTBSquadron").innerHTML = buildTBSquadron;
document.getElementById("diffTBSquadron").innerHTML = d(diffTBSquadron);
document.getElementById("diffTBSquadron").style.color = k(diffTBSquadron);
  // TB Detect
document.getElementById("shipTBDetect").innerHTML = o(ship.tbDetect)+" km";
document.getElementById("buildTBDetect").innerHTML = o(buildTBDetect)+" km";
document.getElementById("diffTBDetect").innerHTML = d(diffTBDetect)+" km";
document.getElementById("diffTBDetect").style.color = ki(diffTBDetect);
  // TB Deck
document.getElementById("shipTBDeck").innerHTML = ship.tbDeck;
document.getElementById("buildTBDeck").innerHTML = buildTBDeck;
document.getElementById("diffTBDeck").innerHTML = d(diffTBDeck);
document.getElementById("diffTBDeck").style.color = k(diffTBDeck);
  // TB Resto
document.getElementById("shipTBResto").innerHTML = ship.tbResto+" s";
document.getElementById("buildTBResto").innerHTML = buildTBResto+" s";
document.getElementById("diffTBResto").innerHTML = d(diffTBResto)+" s";
document.getElementById("diffTBResto").style.color = ki(diffTBResto);
  // TB Damage
document.getElementById("shipTBDamage").innerHTML = c(ship.tbDamage);
document.getElementById("buildTBDamage").innerHTML = c(buildTBDamage);
document.getElementById("diffTBDamage").innerHTML = d(diffTBDamage);
document.getElementById("diffTBDamage").style.color = k(diffTBDamage);
  // TB TSpeed
document.getElementById("shipTBTSpeed").innerHTML = ship.tbTSpeed+" kt";
document.getElementById("buildTBTSpeed").innerHTML = buildTBTSpeed+" kt";
document.getElementById("diffTBTSpeed").innerHTML = d(diffTBTSpeed)+" kt";
document.getElementById("diffTBTSpeed").style.color = k(diffTBTSpeed);
  // TB TRange
document.getElementById("shipTBTRange").innerHTML = o(ship.tbTRange)+" km";
document.getElementById("buildTBTRange").innerHTML = o(buildTBTRange)+" km";
document.getElementById("diffTBTRange").innerHTML = d(diffTBTRange)+" km";
document.getElementById("diffTBTRange").style.color = k(diffTBTRange);
  // DB Hitpoints
document.getElementById("shipDBHitpoints").innerHTML = c(ship.dbHitpoints);
document.getElementById("buildDBHitpoints").innerHTML = c(buildDBHitpoints);
document.getElementById("diffDBHitpoints").innerHTML = d(diffDBHitpoints);
document.getElementById("diffDBHitpoints").style.color = k(diffDBHitpoints);
  // DB Cruise Speed
document.getElementById("shipDBCruiseSpeed").innerHTML = ship.dbCruiseSpeed+" kt";
document.getElementById("buildDBCruiseSpeed").innerHTML = buildDBCruiseSpeed+" kt";
document.getElementById("diffDBCruiseSpeed").innerHTML = d(diffDBCruiseSpeed)+" kt";
document.getElementById("diffDBCruiseSpeed").style.color = k(diffDBCruiseSpeed);
  // DB Max Speed
document.getElementById("shipDBMaxSpeed").innerHTML = ship.dbMaxSpeed+" kt";
document.getElementById("buildDBMaxSpeed").innerHTML = buildDBMaxSpeed+" kt";
document.getElementById("diffDBMaxSpeed").innerHTML = d(diffDBMaxSpeed)+" kt";
document.getElementById("diffDBMaxSpeed").style.color = k(diffDBMaxSpeed);
  // DB AttackUnit
document.getElementById("shipDBAttackUnit").innerHTML = ship.dbAttackUnit;
document.getElementById("buildDBAttackUnit").innerHTML = buildDBAttackUnit;
document.getElementById("diffDBAttackUnit").innerHTML = d(diffDBAttackUnit);
document.getElementById("diffDBAttackUnit").style.color = k(diffDBAttackUnit);
  // DB Squadron
document.getElementById("shipDBSquadron").innerHTML = ship.dbSquadron;
document.getElementById("buildDBSquadron").innerHTML = buildDBSquadron;
document.getElementById("diffDBSquadron").innerHTML = d(diffDBSquadron);
document.getElementById("diffDBSquadron").style.color = k(diffDBSquadron);
  // DB Detect
document.getElementById("shipDBDetect").innerHTML = o(ship.dbDetect)+" km";
document.getElementById("buildDBDetect").innerHTML = o(buildDBDetect)+" km";
document.getElementById("diffDBDetect").innerHTML = d(diffDBDetect)+" km";
document.getElementById("diffDBDetect").style.color = ki(diffDBDetect);
  // DB Deck
document.getElementById("shipDBDeck").innerHTML = ship.dbDeck;
document.getElementById("buildDBDeck").innerHTML = buildDBDeck;
document.getElementById("diffDBDeck").innerHTML = d(diffDBDeck);
document.getElementById("diffDBDeck").style.color = k(diffDBDeck);
  // DB Resto
document.getElementById("shipDBResto").innerHTML = ship.dbResto+" s";
document.getElementById("buildDBResto").innerHTML = buildDBResto+" s";
document.getElementById("diffDBResto").innerHTML = d(diffDBResto)+" s";
document.getElementById("diffDBResto").style.color = ki(diffDBResto);
  // DB Damage
document.getElementById("shipDBDamage").innerHTML = c(ship.dbDamage);
document.getElementById("buildDBDamage").innerHTML = c(buildDBDamage);
document.getElementById("diffDBDamage").innerHTML = d(diffDBDamage);
document.getElementById("diffDBDamage").style.color = k(diffDBDamage);
  // DB Fire
document.getElementById("shipDBFire").innerHTML = p(ship.dbFire)+"%";
document.getElementById("buildDBFire").innerHTML = p(buildDBFire)+"%";
document.getElementById("diffDBFire").innerHTML = d(diffDBFire)+"%";
document.getElementById("diffDBFire").style.color = k(diffDBFire);
  // Max Speed
document.getElementById("shipMaxSpeed").innerHTML = o(ship.ms)+" kt";
document.getElementById("buildMaxSpeed").innerHTML = buildMaxSpeed+" kt";
document.getElementById("diffMaxSpeed").innerHTML = d(diffMaxSpeed)+" kt";
document.getElementById("diffMaxSpeed").style.color = k(diffMaxSpeed);
  // Turning Circle
document.getElementById("shipTurningCircle").innerHTML = c(ship.tcr)+" m";
document.getElementById("diffTurningCircle").innerHTML = c(ship.tcr)+" m";
  // Rudder Shift Time
document.getElementById("shipRudderShift").innerHTML = o(ship.rst)+" s";
document.getElementById("buildRudderShift").innerHTML = buildRudderShift+" s";
document.getElementById("diffRudderShift").innerHTML = d(diffRudderShift)+" s";
document.getElementById("diffRudderShift").style.color = ki(diffRudderShift);
  // Sea Detectability
document.getElementById("shipDrSea").innerHTML = o(ship.drSea)+" km";
document.getElementById("buildDrSea").innerHTML = buildDrSea+" km";
document.getElementById("diffDrSea").innerHTML = d(diffDrSea)+" km";
document.getElementById("diffDrSea").style.color = ki(diffDrSea);
  // Air Detectability
document.getElementById("shipDrAir").innerHTML = o(ship.drAir)+" km";
document.getElementById("buildDrAir").innerHTML = buildDrAir+" km";
document.getElementById("diffDrAir").innerHTML = d(diffDrAir)+" km";
document.getElementById("diffDrAir").style.color = ki(diffDrAir);
  // Smoke Detectability
document.getElementById("shipDrSmoke").innerHTML = o(ship.drSmoke)+" km";
document.getElementById("buildDrSmoke").innerHTML = buildDrSmoke+" km";
document.getElementById("diffDrSmoke").innerHTML = d(diffDrSmoke)+" km";
document.getElementById("diffDrSmoke").style.color = ki(diffDrSmoke);
    // RPM
document.getElementById("shipRPM").innerHTML = Math.round(ship.rpm);
document.getElementById("buildRPM").innerHTML = buildRPM;
document.getElementById("diffRPM").innerHTML = d(diffRPM);
document.getElementById("diffRPM").style.color = k(diffRPM);
    // AS AP
document.getElementById("shipAsAP").innerHTML = c(ship.asAP);
document.getElementById("buildAsAP").innerHTML = c(buildAsAP);
document.getElementById("diffAsAP").innerHTML = d(diffAsAP);
document.getElementById("diffAsAP").style.color = k(diffAsAP);
    // AS HE
document.getElementById("shipAsHE").innerHTML = c(ship.asHE);
document.getElementById("buildAsHE").innerHTML = c(buildAsHE);
document.getElementById("diffAsHE").innerHTML = d(diffAsHE);
document.getElementById("diffAsHE").style.color = k(diffAsHE);
    // DPM AP
document.getElementById("shipDPMAP").innerHTML = c(Math.round(ship.dpmAP));
document.getElementById("buildDPMAP").innerHTML = c(buildDpmAP);
document.getElementById("diffDPMAP").innerHTML = d(diffDpmAP);
document.getElementById("diffDPMAP").style.color = ki(diffDPMAP);
    // DPM HE
document.getElementById("shipDPMHE").innerHTML = c(Math.round(ship.dpmHE));
document.getElementById("buildDPMHE").innerHTML = c(buildDpmHE);
document.getElementById("diffDPMHE").innerHTML = d(diffDpmHE);
document.getElementById("diffDPMHE").style.color = ki(diffDPMHE);
    // Torp React
document.getElementById("shipTorpReact").innerHTML = t(ship.trt)+" s";
document.getElementById("buildTorpReact").innerHTML = buildTorpReact+" s";
document.getElementById("diffTorpReact").innerHTML = d(diffTorpReact)+" s";
document.getElementById("diffTorpReact").style.color = ki(diffTorpReact);
    // Fire Salvo
document.getElementById("shipFireSalvo").innerHTML = p(ship.fireSalvo)+"%";
document.getElementById("buildFireSalvo").innerHTML = p(buildFireSalvo)+"%";
document.getElementById("diffFireSalvo").innerHTML = d(pt(diffFireSalvo))+"%";
document.getElementById("diffFireSalvo").style.color = k(diffFireSalvo);
};