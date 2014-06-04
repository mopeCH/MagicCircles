function circle(selector, radius) {

    var width = 500;
    height = 500;
    svg = d3.select(selector)
        .select("svg")

    svg.append("circle")
        .attr("r", 0)
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("stroke", "#000")
        .attr("fill", "none")
        .attr("stroke-width", 3)
        .transition()
        .duration(500)
        .attr("r", radius)

}

function circleRing(selector, radius, count, innerRadius, reverse) {

    var width = 500;
    var height = 500;
    var RAD = Math.PI * 2;
    svg = d3.select(selector)
        .select("svg")

		for (var i = 0; i < count; i++) {

			var completeness = i / count;
			// debugger;
			var q = 1;
			var g = svg.append("g")

			g
			  //.attr("transform","translate(500,500)");

            var offset = 0;

			var circle = g.append("circle");
            circle
			    .attr("r", innerRadius)
			    .attr("cx", width / 2 + (Math.cos((offset + completeness) * RAD) )* q * radius )
                .attr("cy", height / 2 + (Math.sin((offset + completeness) * RAD)) * q * radius)
			    .attr("completeness", completeness)
			    .attr("stroke", "gray")
			    .attr("fill", "none")
			    .attr("stroke-width", 3);
			//     .transition()
			//     .duration(10000)
			//     .ease("linear")
			//     .attr("transform", "translate(0,-500) rotate("+180+")");;



            setInterval(animate, 1000,circle);

		}

        function animate(thing) {
               offset = (reverse) ? offset - 0.001 : offset + 0.001;

               console.log("animating thing");
                thing
                    .transition()
                    .ease("linear")
                    .duration(1000)
                    .attr("cx", function(d,t,s) {
                        var completeness = parseFloat(thing.attr('completeness'));
                        // debugger;
                        return width / 2 + (Math.cos((offset + completeness) * RAD) )* q * radius; 
                    })
                    .attr("cy", function(d,t,s) {
                        var completeness = parseFloat(thing.attr('completeness'));
                        return height / 2 + (Math.sin((offset + completeness) * RAD)) * q * radius;
                    });

        }


    

}

function rune(selector, radius, text, fontSize, reverse) {

    var width = $(selector).width();
    var height = $(selector).height();
    var rotation = 0;
    rotation = (reverse) ? rotation - 179.9 : rotation + 179.9;

    var svg = d3.select(selector)
        .select("svg")

    var runeId = lol.guid();

    var path = svg.append("defs").append("path");
    path
        .attr("id", "s3" + runeId)
        .attr("d", "M 0,-1   C 0.5523, -1   1, -0.5523    1,0  C 1, 0.5523    0.5523, 1     0,1  C -0.5523, 1   -1, 0.5523    -1,0         C -1, -0.5523  -0.5523, -1   0,-1")
        .attr("transform", "scale(" + radius + "," + radius + ")");
        // .transition()
        // .duration(5000)
        // .ease("linear")
        // .attr("transform", "scale(" + radius + "," + radius + ")");


    function animate() {
    			rotation = (reverse) ? rotation - 179.9 : rotation + 179.9;
    	    thing
    	        .transition()
    	        .duration(5000)
    	        .ease("linear")
    	        .attr("transform","translate(" + width / 2 + "," + height / 2 + ")  rotate("+rotation+")");

    }
    
    setInterval(animate, 5000);


    var thing = svg.append("g")
        .attr("id", "thing" + runeId)
        .attr('transform',"translate(" + width / 2 + "," + height / 2 + ")  rotate("+rotation+")")

    thing.append("text")
        .style("font-size", fontSize || 20 + "px")
        .append("textPath")
        .attr("xlink:href", "#s3" + runeId)
        .text(text);

    thing.append("use")
        .attr("xlink:href", "#s3" + runeId)
        .style("stroke", "none")
        .attr("text-rendering", "optimizeSpeed ")
        .style("fill", "none");
    
	    animate();

}


circle("#circle1", 150);
circle("#circle1", 145);
circle("#circle1", 180);

circle("#circle1", 105);
circle("#circle1", 85);

circle("#circle1", 50);
circle("#circle1", 45);

circle("#circle1", 35);
circle("#circle1", 25);

circleRing("#circle1", 70, 6,15);
circleRing("#circle1", 85, 40, 2);
 circleRing("#circle1", 165, 24,6);

rune("#circle1", 45, "ηκε ολοσχερώς στο μυαλό των θεατών από τη φαντασ", 8, false);
rune("#circle1", 90, "μέχρι το μυαλό της σε μια εμφάνιση του θάρρους. Όταν", 15,true);
rune("#circle1", 115, "δάκρυ φάνηκε να σκοτεινιάζει τα μάτια της όταν μας είδε? αλλά ανάρρωσε γρήγορα τον εαυτό της ", 35);
rune("#circle1", 160, "δάκρυ φάνηκε να σκοτεινιάζει τα μάτια της όταν μας είδε? αλλά ανάρρωσε γρήγορα τον εαυτό της ", 15,true);
//rune("#circle1", 145, lol.hipster() + lol.hipster(), 7,true);
