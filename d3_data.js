console.log(d3.version);

// Declaring variables

var speed = [];
var state = [];
var gender = [];
var vehicle = [];
var alldata = [];

d3.csv('BITRE_ARDD_Fatalities_March_2018.csv', function(data) {

// Getting the data from excel file

  for(i=0; i<data.length; i++) {
    if(parseFloat(data[i].Speed_Limit) > 0  && parseFloat(data[i].Speed_Limit) < 150){
      speed.push( parseFloat(data[i].Speed_Limit) );
      state.push(data[i].State);
      vehicle.push(data[i].Road_User);
      gender.push(data[i].Gender);

      var newobj = {
        speed: parseFloat(data[i].Speed_Limit),
        state: data[i].State,
        vehicle: data[i].Road_User,
        gender: data[i].Gender
      }
      alldata.push(newobj);
    }

  }
});


setTimeout(function(){


// FUNCTIONS

  var radiusScale = d3.scaleLinear()
  .domain([d3.min(speed), d3.max(speed)])  // Max and Min of the dataset
  .range([3, 8])  // You come up with the values for your SVG

var colourScale = d3.scaleLinear()
  .domain([d3.min(speed), d3.max(speed)])
  .range(["red","blue"])

var xScale = d3.scaleLinear()
  .domain([0, speed.length])
  .range([0,750])


var yPos = d3.scaleLinear()
  .domain([d3.max(speed), d3.min(speed)])
  .range([0,300])


var yAxis = d3.axisLeft(yPos)
  .ticks(10)
  .tickPadding(3)
  .tickFormat(function(d) {return d });

d3.select(".svg1")
    .append("g")
    .attr("transform", function() {
      return `translate(${0-20}, 0)`
    })
    .call(yAxis)


var BtoW = d3.scaleLinear()
    .domain([d3.min(speed), d3.max(speed)])
    .range([70,10])

// CREATE SVG

var highscores = d3.select('.svg1')
  .selectAll("circle")
  .data(alldata)
  .enter()
  .append("circle")
  .attr("class", "circleclass")
  .attr("cy", function(d,i){
    // return console.log(d.speed)
    return Math.floor( yPos(d.speed))
  })
  .attr("cx", function(d,i){
    return Math.floor( xScale(i) )
    // return console.log(xScale(i));
  })
  .attr("r", function(d,i){
    return Math.floor( radiusScale(d.speed) );
  })
  .attr("fill", function(d,i){
    // return colourScale(d)
    return `hsl(0 , 5%, ${BtoW(d.speed)}%)`
  })
    .style("stroke", function(d,i){
    // return colourScale(d)
    return `rgba(152, 221, 255, 0.2)`
  })


  .attr("speed", function(d,i){
    return d.speed
  })
  .attr("state", function(d,i){
    return d.state
  })
  .attr("gender", function(d,i){
    return d.gender
  })
    .attr("vehicle", function(d,i){
    return d.vehicle
  })


var tempcolor;
var radius;

  var tl = new TimelineMax({paused: false});



$(".svg_container svg .circleclass").on({
  mouseenter: function(event){
    tempcolor = $(this).css("fill");
    radius = $(this).css("r");
    $(this).css({fill: "rgb(67, 152, 240)"});
    $(this).css({r: "10"});
    // $(this).css({transition: "0.2s"});
    $(".infobox").css({"display": 'flex'});
    $(".infobox").css({"left": event.pageX, "top": event.pageY})
    $(".infobox").html(`
      <div class = "infoline">Gender : ${$(this).attr("gender")}</div>
      <div class = "infoline">State : ${$(this).attr("state")}</div>
      <div class = "infoline">Vehicle : ${$(this).attr("vehicle")}</div>
      <div class = "infoline">Speed Limit : ${$(this).attr("speed")}</div>
      `)

  },
  mouseleave: function(){
    $(this).css({fill: tempcolor});
    $(this).css({r: radius});
    $(".infobox").css({"display": 'none'});
}


})

// Variables for counter - Qty per state

var total=0;
var qld=0;
var vic=0;
var nt=0;
var nsw=0;
var wa=0;
var tas=0;
var act=0;
var sa=0;

for (i=0;i<$(".svg_container svg .circleclass").length;i++){
total++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='QLD']").length;i++){
qld++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='VIC']").length;i++){
vic++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='NT']").length;i++){
nt++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='NSW']").length;i++){
nsw++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='WA']").length;i++){
wa++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='TAS']").length;i++){
tas++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='ACT']").length;i++){
act++;
}

for (i=0;i<$(".svg_container svg .circleclass[state='SA']").length;i++){
sa++;
}




$(".counterbox").html(`
  <div class = "line" id="a">Total of Deaths: ${total}</div>
  <div class = "line">QLD: ${qld}</div>
  <div class = "line">VIC: ${vic}</div>
  <div class = "line">NT: ${nt}</div>
  <div class = "line">NSW: ${nsw}</div>
  <div class = "line">WA: ${wa}</div>
  <div class = "line">TAS: ${tas}</div>
  <div class = "line">ACT: ${act}</div>
  <div class = "line">SA: ${sa}</div>
  `)




},1000);
