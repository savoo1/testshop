var widthofwin = $(window).width();
var contwidth = $(".home_p_sec2 .container").width();
var forpaddleft = (widthofwin - contwidth) / 2 - 30;
$(".home_p_sec2 .scroll_products .items").css("padding-left", forpaddleft);

$( window ).resize(function() {
  var widthofwin = $(window).width();
  var contwidth = $(".home_p_sec2 .container").width();
  var forpaddleft = (widthofwin - contwidth) / 2 - 30;
  $(".home_p_sec2 .scroll_products .items").css("padding-left", forpaddleft);
});


$( ".home_p_sec2 .scroll_products .main .items" ).scroll(function() {
  var scrolldiv = $(".home_p_sec2 .scroll_products .main .items");
  var scrollleft = scrolldiv.scrollLeft();
  var n = $( ".home_p_sec2 .scroll_products .main .items .item" ).length;
  var widthofitems = n * 196 + forpaddleft;

  // var docHeight = scrolldiv.width();
  var winHeight = $(window).width();
  var scrollPercent = (scrollleft) / (widthofitems - winHeight);
  var scrollPercentRounded = Math.round(scrollPercent*100);
  var movescrollbar = "calc(" + scrollPercentRounded + "% - 128px)"
  $(".home_p_sec2 .custom_bar").css("left", movescrollbar);
});

$( window ).resize(function() {
  var scrolldiv = $(".home_p_sec2 .scroll_products .main .items");
  var scrollleft = scrolldiv.scrollLeft();
  var n = $( ".home_p_sec2 .scroll_products .main .items .item" ).length;
  var widthofitems = n * 196 + forpaddleft;
});






var noofc = 0;

$( ".shop_s2 .filters li" ).click(function() {
  if($(this).hasClass("allac")){
    noofc = 0;
    $(".activeli").removeClass("activeli");
    $(".allac").addClass("activeli");
    $(".shop_s2 .items h2").removeClass("disabledh2");
    $(".shop_s2 .items .bigcarda").removeClass("bigcarda_sm");
    $(".shop_s2 .items a").removeClass("disabledcard");
    $(".shop_s2 .filters").removeClass("filterspaddingb");
    $(".offart").removeClass("promactive");
    $(".preoart").removeClass("preoartactive");
    $(".newart").removeClass("newartactive");
  }else{
    if($(this).hasClass("activeli")){
      noofc = noofc - 1;
      var getatt = "." + $( this ).attr( "alt" );
      $(this).removeClass("activeli");
      if(noofc == 0){
        $(".allac").addClass("activeli");
        $(".shop_s2 .items h2").removeClass("disabledh2");
        $(".shop_s2 .items .bigcarda").removeClass("bigcarda_sm");
        $(".shop_s2 .items a").removeClass("disabledcard");
        $(".shop_s2 .filters").removeClass("filterspaddingb");
        $(".offart").removeClass("promactive");
        $(".preoart").removeClass("preoartactive");
        $(".newart").removeClass("newartactive");
      }else{
        if(getatt == ".offart"){
          $(getatt).removeClass("promactive");
        }
        else if(getatt == ".preoart"){
          $(getatt).removeClass("preoartactive");
        }
        else if(getatt == ".newart"){
          $(getatt).removeClass("newartactive");
        }else{
          $(getatt).addClass("disabledcard");
        }
      }
    }else{
      noofc++;
      $(".allac").removeClass("activeli");
      $(this).addClass("activeli");
      if(noofc == 1){
        $(".shop_s2 .items h2").addClass("disabledh2");
        $(".shop_s2 .items .bigcarda").addClass("bigcarda_sm");
        $(".shop_s2 .items a").addClass("disabledcard");
        $(".shop_s2 .filters").addClass("filterspaddingb");
      }
      var getatt = "." + $( this ).attr( "alt" );
      if(getatt == ".offart"){
        $(getatt).addClass("promactive");
      }
      else if(getatt == ".preoart"){
        $(getatt).addClass("preoartactive");
      }
      else if(getatt == ".newart"){
        $(getatt).addClass("newartactive");
      }else{
        $(getatt).removeClass("disabledcard");
      }

    }
    
  }
});


$( ".shop_s2 .filters" ).scroll(function() {
  var scrolldiv = $(".shop_s2 .filters");
  var scrollleft = scrolldiv.scrollLeft();
  // var n = $( ".shop_s2 .filters li" ).length;

  // var docHeight = scrolldiv.width();
  var winHeight = $(window).width();

  var forleftp = (winHeight / 2) - 154;
  var widthofitems = 1050 + forleftp + forleftp;

  var scrollPercent = (scrollleft) / (widthofitems - winHeight);
  var scrollPercentRounded = Math.round(scrollPercent*100);

  var changepos = "calc("+scrollPercentRounded+"% - 72px)";
  $(".shop_s2 .forscrollbar .scrollarea .areaformoving").css("left", changepos);
});





const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  setTimeout(function(){ $(".home_p_sec2 .scroll_products .item a").removeClass("thisone"); }, 500);
  
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  setTimeout(function(){ $(".home_p_sec2 .scroll_products .item a").removeClass("thisone"); }, 500);
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) / 1.5; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
  $(".home_p_sec2 .scroll_products .item a").addClass("thisone");
});

$( ".home_p_sec2 .scroll_products .item a" ).click(function(e) {
  if($(this).hasClass("thisone")){
    e.preventDefault();
  }
});









