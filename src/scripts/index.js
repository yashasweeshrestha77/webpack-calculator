import $ from "jquery";
import {seven,eight,nine,multiply,four,five,six,subtract,one,two,three,add,zero,decimal,divide,equal} from './calculator/calFunctions';

$("#seven").click(function(){
  const pv=$("#textbox").val();
   $("#textbox").val(pv+"7");
   
})

$("#eight").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"8");
})

$("#nine").click(function(){
const pv=$("#textbox").val();
$("#textbox").val(pv+"9");
})

$("#multiply").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"*");
})
   
$("#four").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"4");
})

$("#five").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"5");
})

$("#six").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"6");
})

$("#subtract").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"-");
})

$("#one").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"1");
})

$("#two").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"2");
})

$("#three").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"3");
})

$("#add").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"+");
})

$("#zero").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"0");
})

$("#decimal").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+".");
})

$("#divide").click(function(){
   const pv=$("#textbox").val();
   $("#textbox").val(pv+"/");
})

$("#equal").click(()=>equal()); 

 
$("#equal").click(function() {
   const a=$("#textbox").val();
   $("#textbox").val((eval(a)))

});  