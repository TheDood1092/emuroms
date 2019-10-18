// Created by iWeb 2.0.4 local-build-20191018

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:3,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:3,offset:new IWPoint(1.3383,1.4863),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,2.0000),color:'#463c3c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome!_files/Welcome!Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Welcome!_files','shapeimage_1','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
