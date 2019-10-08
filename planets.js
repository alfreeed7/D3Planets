var names=["Swag","Yolo","Lol"]
var A1=function()
{
d3.select("#A1")
  .append("p")
  .text(names)}
A1()
 
var A2=function()
{
d3.select("#A2")
  .selectAll("span")
  .data(names)
  .enter()
  .append("span")
  .text(function(d){return d})
}
A2()

var B1 = d3.json("planets.json")
B1.then(function(wut)
       {
    console.log("wut", wut)
    
    
},
  function(err)
{
    console.log("fail",err;)
    
})

B1()