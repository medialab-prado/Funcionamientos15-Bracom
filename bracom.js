ui.toolbar.title("Bracom"); // We enter the title (Hello world!)
ui.toolbar.bgColor(55, 155, 155, 255); // We change the colour of the title bar
ui.toolbar.show(true); // We set it to display the title bar
//ui.screenMode("fullscreen"); // The app can display it in full screen

var margin = 10; // The size of the margin we will use
var w = ui.screenWidth - 2*margin; // We will use the w variable as the width of the elements
var h = 150; // We will use the h variable as the height of the elements

var margin = 10;

//	< formato antiguo, no es importante >
	var width = ui.screenWidth / 2;	//	
	var height = ui.screenHeight / 3;	//	formato antiguo, no es importante

	var linePointUp = 100;
	var linePointMid = 400;
	var linePointDown = 800;
//	</ formato antiguo, no es importante >

var uno = ui.addButton("texto", 0, 0, width, height).onClick(function() {
    // The code for the function 
});

var dos = ui.addButton("texto", width, 0, width, height).onClick(function() {
    // The code for the function 
});

