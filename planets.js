var threenames=["Swag","Yolo","Lol"]
var A1=function()
{
d3.select("#A1")
  .append("p")
  .text(threenames)}
A1()
 
var A2=function()
{
d3.select("#A2")
  .selectAll("span")
  .data(threenames)
  .enter()
  .append("span")
  .text(function(d){return d})
}
A2()


var pdata=d3.json("planets.json")
pdata.then
(function(planets) {
  console.log("planets",planets);
    B3(planets);
    B4(planets);
    C1(planets);
    C2(planets);
    C3(planets);
},
    function(err)
{console.log("fail",err)}
)

var B3= function(planets)
{ 
    d3.select("#B3")
    .selectAll("img")
    .data(planets)
    .enter()
    .append("img")
    .attr("src",function(d){return d.img;})
}

var B4= function(planets)
{
    d3.select("#B4")
    .append("ol")
    .selectAll("li")
    .data(planets)
    .enter()
    .append("li")
    .text(function(d)
          {return d.name;}) 
}

var C1=function(planets)
{
    d3.select("#C1")
    .append("table")
    .selectAll("tr")
    .data(planets)
    .enter()
    .append("tr")
}

var C2=function(planets)
{var r1=d3.select("#C2")
    .append("table")
    .selectAll("tr")
    .data(planets)
    .enter()
    .append("tr")
  r1.append("td")
    .text(function(d){return d.name;})
}

var C3=function(planets)
{ var r=d3.select("#C3")
    .append("table")
    .selectAll("tr")
    .data(planets)
    .enter()
    .append("tr")

   r.append("td")
    .text(function(d){return d.name;})
   r.append("td")
    .append("img")
    .attr("src",function(d){return d.img;})
   r.append("td")
    .text(function(d){return d.distance;})
   r.append("td")
    .text(function(d){return d.radius;})
   r.append("td")
    .text(function(d){return d.density;})
    r.append("td")
    .text(function(d){return d.moons;})
}