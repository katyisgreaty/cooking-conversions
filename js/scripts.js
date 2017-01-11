// NOTE: Business back end

var tblspn = function (number) {
  return number*16;
};

var ounce = function (number) {
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

});
