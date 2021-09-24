 i = 0;

var slideImg =["1.jpg" , "2.jpg" , "3.jpg","4.jpg"] ;

  var slideShow = function(){

document.slideshow.src = slideImg[i]
  if (i < slideImg.length -1){
      i++
  } else {
      i = 0 
  }

 setTimeout ("slideShow()" , 2000 )


  }

  slideShow();