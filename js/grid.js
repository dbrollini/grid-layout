$(window).load(function() {


	function drawGrid() {

	var width = $('main').width();
	var height = $('main').height();
	
	$('main').prepend('<canvas id="grid" width="'+ width + '" height="' + height + '" style="display: none;background: #fff; opacity: 0.5; position: absolute;left: 0;top: 0;right:0;bottom: 0;background: #fff;z-index: 9999;"></canvas>');

   		var canvas = document.getElementById('grid');
     	var context = canvas.getContext('2d');
	  	
		var mod = 1;
		var i = 0;
		
		var height = height;
		var width = width;
		
		var leading = 12 // parseInt($('body').css('line-height'), 10) / 2;
		var amount = height / leading;
		var columns = 5;
		var gutters = 16; // in Pixels
		
		while (i < (amount * leading)) {
			
			// Fills
			if(mod%2 == 0){
			context.beginPath();
      		context.rect(0, i, width, leading);
      		context.fillStyle = '#FFdddd';
      		context.fill();
			}
			
			// Horz
			context.beginPath();
			context.moveTo(0, i);
			context.lineTo(width, i);
			context.lineWidth = 0.1;
			context.strokeStyle = '#ff0000';
			context.stroke();
			
			mod++; 
    		i+= leading;
		}
		
		var move = (width / columns);
	
		
		while (columns > -1) {
			// Columns
			context.beginPath();
			context.moveTo(move * columns, 0);
			context.lineTo(move * columns, width);
			context.lineWidth = 0.1;
			context.strokeStyle = '#ff0000';
			context.stroke(); 
			
			// Gutters
			
			context.beginPath();
			context.moveTo((move * columns) - (gutters/2), 0);
			context.lineTo((move * columns) - (gutters/2), width);
			context.lineWidth = 0.1;
			context.strokeStyle = '#ff0000';
			context.stroke(); 
		
			
			context.beginPath();
			context.moveTo((move * columns) + (gutters/2), 0);
			context.lineTo((move * columns) + (gutters/2), width);
			context.lineWidth = 0.1;
			context.strokeStyle = '#ff0000';
			context.stroke(); 
			
			columns--;
		}

		$('body').prepend('<div id="grid-button" style="cursor: pointer; font-size: 12px; padding: 0 10px; position: fixed; top: 0; right: 0; background: #ff0000; color: #fff; text-align: center">GRID<div>');

		$('#grid-button').on('click', function () {
    		$('canvas').toggle();
	});

	}

	drawGrid();
	

	$(window).resize(function() {
		$('canvas').remove();
		$('#grid-button').remove();
  		drawGrid();
	});
});




     
		
    		
		
			
     
