window.onload=function(){
  var piece = document.querySelectorAll('.piece h2');
  console.log(piece);

  Array.from(piece).forEach(slideDiv => {
    slideDiv.addEventListener('click', function() {

      if(slideDiv.style.visibility == "visible"){
        slideDiv.slideUp();
      }else{
        slideDiv.slideDown();
      }
    });
  });
};
