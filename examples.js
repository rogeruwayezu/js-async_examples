
// function secondTask(){
//   console.log("Second task done!");
// }
// function thirdTask(){
//   console.log("third task done!");
// }

// setTimeout(function firstTask(){
//   console.log("First task done!");
// }, 2000);
// setTimeout(secondTask, 4000);
// setTimeout(thirdTask, 6000);


function changeColor() {
  setTimeout(function() {
    document.getElementById("title").style.background = "yellow";
    setTimeout(function() {
      document.getElementById("title").style.color = "red";
      setTimeout(function() {
        document.getElementById("title").style["border"] = "5px solid black";
      }, 1000);

    }, 1000);
  }, 1000);
}