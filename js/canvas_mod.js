
paper.install(window);
var canvas_mod = (function(){	
	canvas = null;
    init = function(){
		this.canvas = $('#paper')[0];
		paper.setup(this.canvas);		
		this.render();		
    };

	generateWave = function(initialY, initialVector, initialRotation){
		var wave = new Path();
		var width = view.size.width;
		wave.strokeColor = 'blue';
		wave.strokeWidth = 4;
		var offset = width / 30;
		var y = initialY;
	
		var vector = initialVector;
		
		var piece = width/20;
		
		var wavePoints =  [
		    new Point(offset, y),
		];
		
		var rotation = initialRotation;
		var position = offset;
		
		while(position<width){
			//wavePoints.push([[position, y], vector.rotate(rotation), vector]);
			wavePoints.push([position, y]);
			position += piece
		}
		wave.addSegments(wavePoints);
		//wave.smooth();
		return wave;
	};
	
	
	render = function(){
		var wave = generateWave(view.size.height/2, new Point({
		    angle: 70,
		    length: 100}), 180);
		view.onFrame = function(event){			
			wave.strokeColor.hue += 1;
			for(var i=0; i<wave.segments.length; i++){
				var segment = wave.segments[i];
				var entro = Math.floor(Math.random()*3+1)
				var sinus = Math.sin(event.time*3 + i);
				
				segment.point.y = sinus * view.size.height/4 + 300;
				wave.smooth();
			}
		};
		view.draw();	
	};

		
    return { init : init, render: render};

}());

$(document).ready(canvas_mod.init());