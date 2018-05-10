console.log(d3.version);


var datab = [
  {vehicle: 'bicycle', qty: 29},
	{vehicle: 'car', qty: 623},
	{vehicle: 'passenger', qty: 208},
	{vehicle: 'motorcycle', qty: 249},
	{vehicle: 'pedestrians', qty: 182}

];

d3.nest()
  .key(function(d) { return d.qty; })
  .entries(datab);

var dataset = [  29, 623, 208, 249, 182];

// 1. Select (and select nothing)
// 2. Add data
// 3. Enter
// 4. Append


var radiusScale = d3.scaleLinear()
  .domain([d3.min(dataset), d3.max(dataset)])  // Max and Min of the dataset
  .range([10, 50])  // You come up with the values for your SVG

var colourScale = d3.scaleLinear()
  .domain([d3.min(dataset), d3.max(dataset)])
  .range(["blue","red"])

var xScale = d3.scaleLinear()
  .domain([0, 5])
  .range([0,600])


console.log( radiusScale(500) );




var highscores = d3.select('.svg1')
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cy", 120)
  .attr("cx", function(d,i){
    return xScale(i)
  })
  .attr("r", function(d,i){
    return radiusScale(d)
  })
  .attr("fill", function(d,i){
    return colourScale(d)
  })


// var speed = [];
//
// d3.csv('BITRE_ARDD_Fatalities_March_2018.csv', function(data) {
//   console.log(data[0]);
//   for(i=0; i<data.length; i++) {
//     // console.log(data[i]);
//     speed.push(data[i].Speed_Limit);
//   }
//   console.log(speed);
//
// });




console.log(highscores);
