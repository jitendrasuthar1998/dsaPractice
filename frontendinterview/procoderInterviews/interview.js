const allContainers = document.getElementsByClassName("container");

console.log("allContainers",allContainers)


const allContainersThroughQuery = document.querySelectorAll(".container");

console.log("allContainersThroughQuery",allContainersThroughQuery);

/*

if there are some div with card class. so how can you access all cards? by getElementsByClassName("card") or querySelectorAll(".card")


getElementsByClassName("card") returns an HTML collection on which we can't run forEach.

but querySelectorAll(".card") returns an NodeList on which we can run forEach.

*/ 

