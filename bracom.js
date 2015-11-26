/*
*    
*    Description Bracom 
*    by Carles, Gonzalo & Carmen
*
*/

ui.toolbar.show(true); // We set it to display the title bar
ui.screenOrientation("portrait");

//Media files
media.volume(100);
ui.enableVolumeKeys(true);
var wave1 = media.createWave();
var waveBaseVal = 60;
var waveDeltaBaseVal = 10;
//media.textToSpeech("uno"); //Slow media playback for button events

var padWidth = 300;
var padHeight = 200;

var marginWidth = ( ui.screenWidth - padWidth ) / 2 ;
var marginHeight = ( ui.screenHeight - padHeight ) / 2 ;

//  Align
    alignHeightPad="top";
    alignHeightPad="down";

    //  Height

    switch(alignHeightPad) {
        case "top": marginHeight = 0; break;
        case "down": marginHeight =  marginHeight * 2; break;
    }

    //  Width

    alignWidthPad="left";
    alignWidthtPad="right";

    switch(alignWidthPad) {
        case "left": marginWidth = marginWidth * 2; break;
        case "right": marginWidth = 0; break;
    }



//  Align

var nombre = ui.addText("texto", 0, 0, ui.screenWidth, 40);

//this is a touchable pad 
var pad = ui.addXYPad(marginWidth, marginHeight, padWidth, padHeight, function(e) {
    for (var i = 0; i < e.length; i++) {
          console.log(e[i].id + " " + e[i].x + " " + e[i].y);
        
        //Make a map of the button areas- Draw and make manual visual events to all buttons
        
        
    }
});



/*Not intersant
var var0 = ui.addTouchArea(0, 0, ui.screenWidth /2, ui.screenHeight /2, true, function(touching, x, y){ 
device.vibrate(100);
});*/


//  device.vibrate(100);
//  media.textToSpeech("u"); 
