/*
*    
*    Description Bracom 
*    by Carles & Gonzalo
*
*/

ui.toolbar.show(false); // We set it to display the title bar

//Media files
media.volume(100);
ui.enableVolumeKeys(true);
var wave1 = media.createWave();
var waveBaseVal = 60;
var waveDeltaBaseVal = 10;
//media.textToSpeech("uno"); //Slow media playback for button events

var padWith = 400;
var padHeight = 700;




//this is a touchable pad 
var pad = ui.addXYPad(10, 210, ui.screenWidth - 20, 400, function(e) {
    for (var i = 0; i < e.length; i++) {
        //  console.log(e[i].id + " " + e[i].x + " " + e[i].y);
        
        //Make a map of the button areas- Draw and make manual visual events to all buttons
        
        
        
    }
});



/*Not intersant
var var0 = ui.addTouchArea(0, 0, ui.screenWidth /2, ui.screenHeight /2, true, function(touching, x, y){ 
device.vibrate(100);
});*/


//  device.vibrate(100);
//  media.textToSpeech("u"); 
