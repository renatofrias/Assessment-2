
// Toggle States -- Greensock ON/OFF states
  var tl = new TimelineMax({paused: false});



$("#qldon").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='QLD']"), 2, {y: 0, opacity:1, ease: Power2.easeOut}, 0.005);
  // tl.to($(".svg_container svg .circleclass[state='QLD']"), 2, {y: 0, scale:1, delay:0.4, yoyo:true, ease: Power2.easeOut});
  $("#qldon").css("background-color","rgb(31, 176, 84)");
  $("#qldoff").css("background-color","rgb(124, 124, 124)");
})

$("#qldoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='QLD']"), 2, {y: -400, opacity:0, ease: Power2.easeOut}, 0.005);
  $("#qldon").css("background-color","rgb(124, 124, 124)");
  $("#qldoff").css("background-color","rgb(233, 89, 89)");
  })


$("#vicon").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='VIC']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#vicon").css("background-color","rgb(31, 176, 84)");
  $("#vicoff").css("background-color","rgb(124, 124, 124)");
})

$("#vicoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='VIC']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#vicon").css("background-color","rgb(124, 124, 124)");
  $("#vicoff").css("background-color","rgb(233, 89, 89)");
  })

$("#nton").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='NT']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#nton").css("background-color","rgb(31, 176, 84)");
  $("#ntoff").css("background-color","rgb(124, 124, 124)");
})

$("#ntoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='NT']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#nton").css("background-color","rgb(124, 124, 124)");
  $("#ntoff").css("background-color","rgb(233, 89, 89)");
  })

$("#nswon").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='NSW']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#nswon").css("background-color","rgb(31, 176, 84)");
  $("#nswoff").css("background-color","rgb(124, 124, 124)");
})

$("#nswoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='NSW']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#nswon").css("background-color","rgb(124, 124, 124)");
  $("#nswoff").css("background-color","rgb(233, 89, 89)");
  })

$("#waon").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='WA']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#waon").css("background-color","rgb(31, 176, 84)");
  $("#waoff").css("background-color","rgb(124, 124, 124)");
})

$("#waoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='WA']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#waon").css("background-color","rgb(124, 124, 124)");
  $("#waoff").css("background-color","rgb(233, 89, 89)");
  })

  $("#tason").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='TAS']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#tason").css("background-color","rgb(31, 176, 84)");
  $("#tasoff").css("background-color","rgb(124, 124, 124)");
})

$("#tasoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='TAS']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#tason").css("background-color","rgb(124, 124, 124)");
  $("#tasoff").css("background-color","rgb(233, 89, 89)");
  })

  $("#acton").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='ACT']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#acton").css("background-color","rgb(31, 176, 84)");
  $("#actoff").css("background-color","rgb(124, 124, 124)");
})

$("#actoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='ACT']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#acton").css("background-color","rgb(124, 124, 124)");
  $("#actoff").css("background-color","rgb(233, 89, 89)");
  })


  $("#saon").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='SA']"), 2, {y: 0, scale:1, ease: Power2.easeOut}, 0.005);
  $("#saon").css("background-color","rgb(31, 176, 84)");
  $("#saoff").css("background-color","rgb(124, 124, 124)");
})

$("#saoff").on("click", function(){
  tl.staggerTo($(".svg_container svg .circleclass[state='SA']"), 2, {y: -400, scale:0, ease: Power2.easeOut}, 0.005);
  $("#saon").css("background-color","rgb(124, 124, 124)");
  $("#saoff").css("background-color","rgb(233, 89, 89)");
  })
