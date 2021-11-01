var firstsec = document.getElementById('home');
var secondsec = document.getElementById('about');
document.onscroll = function scroll() {
  secondsec.scrollIntoView({behavior: "smooth"});
 }
