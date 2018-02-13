//addition
var add=function(x,y) {
return x+y;
};

//subtract
var subtract= function(x,y){
  return x-y;
};
//multiply
var muliply=function(x,y){
  return x*y;
};
//divide
var divide= function(x,y){
  return x/y;
};

var x=parseInt(prompt("choose a number"));
var y=parseInt(prompt("choose another number"));

var results=divide(x,y);
alert(results);
