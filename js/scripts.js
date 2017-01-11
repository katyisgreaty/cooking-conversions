// NOTE: Business back end

var tblspn = function (number) {
  return number*16;
};

var oz = function (number) {
  return number*8;
};

var mili = function (number) {
  return number*240;
};

var pound = function (number) {
  return number*0.5;
};

// NOTE: Front end user interface

$(document).ready(function() {
 $("form#tblspn").submit(function(event1) {
   var number = parseFloat($("#num1").val());
   var result = tblspn(number);
   $("p.one").show();
   $(".tblspn").text(result);
   event1.preventDefault();
 });
 $("form#oz").submit(function(event2) {
   var number = parseFloat($("#num2").val());
   var result = oz(number);
   $("p.two").show();
   $(".oz").text(result);
   event2.preventDefault();
 });
 $("form#mili").submit(function(event3) {
   var number = parseFloat($("#num3").val());
   var result = mili(number);
   $("p.three").show();
   $(".mili").text(result);
   event3.preventDefault();
 });
 $("form#pound").submit(function(event4) {
   var number = parseFloat($("#num4").val());
   var result = pound(number);
   $("p.four").show();
   $(".pound").text(result);
   event4.preventDefault();
 });

});
