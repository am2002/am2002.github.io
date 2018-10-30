
//scripts.js code
(function(){
    
 var loadingdiv = document.getElementById("Loading");
 var loading = 0;
 var id = setInterval(frame, 64);

 function frame(){
  if(loading == 30) {
   clearInterval(id);
   window.open("index.html", "_self");
  }
  else {
   loading = loading + 1;
   if(loading == 20) {
    loadingdiv.style.animation = "fadeout 1s ease";
   }
  }
 }


})();
