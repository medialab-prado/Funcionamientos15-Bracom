/*
*    
*    Description Bracom 
*    by Carles, Gonzalo & Carmen
*
*/

//  device.vibrate(100);
//  media.textToSpeech("u");


//  < CONFIGURATION >

ui.toolbar.show(true);
ui.allowScroll(false); 
ui.screenOrientation("portrait");
device.screenAlwaysOn(true);

var padWidth = 300;
var padHeight = 500;

var alignWidthPad="center";
var alignHeightPad="middle";

//  < / CONFIGURATION >



var marginWidth = ( ui.screenWidth - padWidth ) / 2 ;
var marginHeight = ( ui.screenHeight - padHeight ) / 2 ;

//  Align
    switch(alignWidthPad) {
        case "left": marginWidth = 0; break;
        case "right": marginWidth = marginWidth * 2; break;
        case "center": marginWidth = ( ui.screenWidth - padWidth ) / 2 ; break;
        default: break;
    }
    switch(alignHeightPad) {
        case "top": marginHeight = 0; break;
        case "bottom": marginHeight =  marginHeight * 2; break;
        case "middle": marginHeight = ( ui.screenHeight - padHeight ) / 2 ; break;
        default: break;
    }
//  Align

//this is a touchable pad 
var pad = ui.addXYPad(marginWidth, marginHeight, padWidth, padHeight, function(e) {
    for (var i = 0; i < e.length; i++) {
            console.log("finger: "+e[i].id + " x: " + e[i].x + " y: " + e[i].y);

    }
});

pad.backgroundColor("#550000FF");

