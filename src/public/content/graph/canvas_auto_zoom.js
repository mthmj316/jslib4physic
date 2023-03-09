const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const canvas_x_max = 1000;
const canvas_y_max = 750;
const margin = 10;

// START: Test data defninition ------------------------------------------
{
// Lines
var ax = 10;
var ay = 10;
var bx = -300;
var by = -270;
var cx = 150;
var cy = 500;
var dx = 50;
var dy = -40;
var ex = 250;
var ey = 500;
var fx = 650;
var fy = 300;

var line_a = [];
line_a.x = ax;
line_a.y = ay;

var line_b = [];
line_b.x = bx;
line_b.y = by;

var line_c = [];
line_c.x = cx;
line_c.y = cy;

var line_d = [];
line_d.x = dx;
line_d.y = dy;

var line_e = [];
line_e.x = ex;
line_e.y = ey;

var line_f = [];
line_f.x = fx;
line_f.y = fy;

var lines = [line_a, line_b, line_c, line_d, line_e, line_f];

// Circles
//x-center, y-center, radius, circle-start, circle-end
var arc_1 = [];
arc_1.x_center = 70;
arc_1.y_center = 70;
arc_1.radius = 50;
arc_1.circle_start = 0; 
arc_1.circle_end = 2;

var arc_2 = [];
arc_2.x_center = 270;
arc_2.y_center = 370;
arc_2.radius = 150;
arc_2.circle_start = 0; 
arc_2.circle_end = 2;

var arc_3 = [];
arc_3.x_center = 1270;
arc_3.y_center = 370;
arc_3.radius = 250;
arc_3.circle_start = 0; 
arc_3.circle_end = 2;

var arcs = [arc_1, arc_2, arc_3];

}

// END: Test data defninition --------------------------------------------

// Prepare data for zoom validation --------------------------------------

const x_values = [ax, bx, cx, dx, ex, fx];
const y_values = [ay, by, cy, dy, ey, fy];

for(var i = 0; i < arcs.length; i++){

	var x_center = arcs[i].x_center;
	var y_center = arcs[i].y_center;
	var radius = arcs[i].radius;
	
	x_values.push(x_center - radius);
	x_values.push(x_center + radius);
	
	y_values.push(y_center - radius);
	y_values.push(y_center + radius);
}

// -----------------------------------------------------------------------

//shift_by = [2_right, downwards]
var shift_by = shiftOutOfNegative(x_values,y_values);

var max_x = 0;
var max_y = 0;

for(var i = 0; i < x_values.length; i++){

	if (x_values[i] > max_x){
    	max_x = x_values[i] + shift_by[0];
    }
}

//alert(max_x);

for(var i = 0; i < y_values.length; i++){

	if (y_values[i] > max_y){
    	max_y = y_values[i] + shift_by[1];
    }
}

//alert(max_y);

var factor = 1;

while(((max_x * factor) > (canvas_x_max-10)) || ((max_y * factor) > (canvas_y_max -10))){
	factor = factor - 0.1;
}

//alert("factor=" + factor);

if (factor < 0.005){
	factor = 0.005;
}

var isFirst = true;
for(var i = 0; i < lines.length; i++){
	
	var x = (lines[i].x + shift_by[0])*factor;
	var y = (lines[i].y + shift_by[1]) *factor;
	
	if (isFirst){
		
		ctx.moveTo(x, y);
		isFirst = false;
		
	} else {
		ctx.lineTo(x, y);
	}
}

console.log('arc_1.x_center=' + arc_1.x_center);


ctx.stroke();

for(var i = 0; i < arcs.length; i++){
	
	var arc = arcs[i];	
	var x = (arc.x_center + shift_by[0])*factor;
	var y = (arc.y_center + shift_by[1])*factor;
	
	ctx.moveTo(x, y+arc.radius*factor);
	
	ctx.arc(x,y,arc.radius*factor,arc.circle_start,arc.circle_end*Math.PI);
}


ctx.stroke();

/*
 * Calcualtes the shifting of all passed points in order that they at least 
 * with in the coordinates x >= 0 and y >= 0.
 */
function shiftOutOfNegative(x_values, y_values){

	console.log('shiftOutOfNegative: param -> \nx_values=' + x_values + ',\ny_values=' + y_values );
	
	// Space between the canvas border and the object
	var shift_2_right = 0;
	var shift_downward = 0;
	
	for (var i = 0; i < x_values.length; i++){
	
		if(shift_2_right > x_values[i]){
			shift_2_right = x_values[i];
		}
	
		if(shift_downward > y_values[i]){
			shift_downward = y_values[i];
		}
	}
	
	//Space by which all objects must be shifted to the right
	//in order that no object overlaps the left edge minus margin of the canvas.
	if(shift_2_right < 0){
		shift_2_right = (shift_2_right * -1);
	}
	
	//Space by which all objects must be shifted downwards
	//in order that no object overlaps the top edge minus margin of the canvas.
	if(shift_downward < 0){
		shift_downward = (shift_downward * -1);
	}
	
	console.log('shiftOutOfNegative: return [' + shift_2_right + ', ' + shift_downward + ']');
	
	return [shift_2_right, shift_downward];
}
