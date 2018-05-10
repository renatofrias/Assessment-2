
//Greensock animation + message

var b=1;


var tl = new TimelineMax({paused: false});
var backgroundtl = new TimelineMax({paused: false});
var buttontl = new TimelineMax({paused: false});

// *** Message Button hover

tl.from($(".message"), 2, {x: -1000, opacity:0, delay:1, yoyo:true, ease: Power2.easeOut});

$(".button").on("mouseenter", function(){
buttontl.to($(".button"), 0.2, {scale:0.96});

});

$(".button").on("mouseleave", function(){
buttontl.to($(".button"), 0.2, {scale:1});

});

// Intro Message

$(".button").on("click", function(){
 if (b==1){
 tl.staggerTo($(".message"), 2, {x: 1000, opacity:0, delay:0.4, yoyo:true, ease: Power2.easeOut}, 0.2);
 setTimeout( function(){ $(".message").css('display','none');  },2000);
 setTimeout( function(){ $(".message2").css('display','flex');  },2000);
 tl.staggerFrom($(".message2"), 2, {x: -1000, opacity:0, delay:0, yoyo:true, ease: Power2.easeOut}, 0.2);
console.log(b);
}

if (b==2){
 tl.staggerTo($(".message2"), 2, {x: 1000, opacity:0, delay:0.4, yoyo:true, ease: Power2.easeOut}, 0.2);
 setTimeout( function(){ $(".message2").css('display','none');  },2000);
 setTimeout( function(){ $(".message3").css('display','flex');  },2000);
 tl.staggerFrom($(".message3"), 2, {x: -1000, opacity:0, delay:0, yoyo:true, ease: Power2.easeOut}, 0.2);
console.log(b);
}

  if (b==3){
  tl.staggerTo($(".message3"), 2, {x: 1000, opacity:0, delay:0.4, yoyo:true, ease: Power2.easeOut}, 0.2);
    backgroundtl.to($(".background"), 1, {backgroundColor:"rgba(255, 255, 255, 1)", delay:0.4});
    backgroundtl.to($(".button"), 1, {opacity:0});
    setTimeout( function(){ $(".message3").css('display','none');  },2000);
    setTimeout( function(){ $(".button").css('display','none');  },2000);
    setTimeout( function(){ $(".background").css('height','auto');  },2000);

// *** Display all content on the second page

    setTimeout( function(){ $(".menubar").css("display","flex")},2000);
    setTimeout( function(){ $(".header").css("display","flex")},2000);
    setTimeout( function(){ $(".graphicbox").css("display","flex")},2000);
    setTimeout( function(){ $(".contentarea").css("display","flex")},2000);
    setTimeout( function(){ $(".footermenu").css("display","flex")},2000);
    setTimeout( function(){ $(".footer").css("display","flex")},2000);
    tl.staggerFrom($(".svg_container svg .circleclass"), 2, {y: -400, scale:1.2, opacity:0, delay:0, ease: Power2.easeOut}, 0.002);


    setTimeout( function(){ $(".background").html(`<div class="header"><img src="Queensland logo.svg" alt="Queensland logo">
    </div>`)},2000);

    setTimeout( function(){ $(".contentarea").html(`<div class="contentheader"><h2>Road safety and vehicle maintenance for long trips</h2></div>

<div class="contentbox">
<p>Before you leave make sure your vehicle is safe for the road, and safe for you and your passengers. Make sure you get enough rest and plan ahead. You should always plan your trip before travelling the many highways through Queensland.<br>

Good preparation for your long trip includes:<br>
<ul>
    <li>Checking your vehicle is safe for the trip</li>
    <li>Know what to do if your vehicle breaks down</li>
    <li>Know what road conditions or obstacles you may encounter on your trip</li>
    <li>Decide what route you will take to get there and how long it will take</li>
    <li>Know what to do if you have an accident or breakdown</li>
    <li>Pack enough food and water and a little extra in case your trip takes longer.</li>
    <li>You should take a break every 2 hours and don’t drive for more than 8–10 hours per day. We recommend you plan which rest areas and driver reviver sites you will pull into on your journey.</li>
</ul></p>

</div>

    <div class="contentheader"><h2>Checking your vehicle</h2></div>

    <div class="contentbox">

<p>You should regularly maintain your vehicle to help keep your car in good condition.<br>

Before you go away on a long trip make sure you double check these essentials on your vehicle:<br>
<ul>

  <li>Tyres—check they are in good condition and at the right pressure including the spare<br></li>
  <li>Fluid levels—brake, coolant, oil, clutch, automatic transmission, power steering, water<br></li>
  <li>Lights—headlights, high-beams, reverse, indicators and brake<br></li>
  <li>Windscreen wipers are working in case of wet weather<br></li>
  <li>Battery<br></li>
  <li>Fan belt condition and tension<br></li>
  <li>Ecoolant hoses—ensure your coolant does not leak and the hoses are in good condition<br></li>
  <li>Tow bar and connections (if towing)<br></li>
  <li>Ensure you have enough fuel for the journey.</li>
  </ul></p>
  </div>`)},2000);



console.log(b);
 }

  b++;

});














//
// //A Jquery $(".mybox") is actually and arrayof items
//
// //      item   duration
// tl.staggerFrom($(".button"), 1, {y: -100, delay:0.4, ease: Bounce.easeOut}, 0.2);
//
// $(".menuicon").on("click", function(){
//   tl.play(0); //numerical value to indicate where playhead starts
// });
//
//
//
// $(".button").each(function(index, element){
//
//   var buttontl= new TimelineMax({paused:true});
//
// buttontl.from($(this), 1, {opacity:1, ease: Bounce.easeOut})
// element.animation= buttontl;
//
// });
//
//
//
// $(".menuicon").on("click", function(){
//
//   TweenMax.staggerFrom(".button", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
// });
//
// $(".button").click(function(){
//   TweenMax.staggerTo(".button", 0.1, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
// });
//
//
// // //trigger on functionat TimelineMax
// // $(".button").on("mouseenter",function(){
// //
// // };
//
// // Multiple actions
//
// $(".button").on({
// mouseenter:function(){
//
//
// $(this)[0].animation.play(0);
// }
// ,
// mouseleave:function(){
//
// $(this)[0].animation.reverse();
// }
//
//
// })
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // What an individual Jquery object is
//
// // $(".button")[3].RenatosProperty = "Awesome";
// //
// //
// // console.log($(".button")[3]); //Number of item on array
//
// // //Long hand way of looping through an arrayo
// //
// // for (i=0, i<$(".button").length; i++){
// //
// // $(".button")[i].RenatosProperty = "Awesome done";
// //   console.log(i);
// // }
//
//
// $(".button").each(function(index, element){
// console.log(index);
// element.RenatosProperty1= "Extra Awesome";
//
// $(".button")[index].FabiansProperty = "Really Amazing";
// console.log(this);
// console.log($(".button")[index]);
// console.log(element);
//
// })
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // Comment
