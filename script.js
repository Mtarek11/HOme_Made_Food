document.getElementById('navbarToggler').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbarLinks');
    var remainingContent = document.querySelector('.container-opening');
    
    if (navbarLinks.classList.contains('active')) {
      remainingContent.style.paddingTop = '0';
    } else {
      remainingContent.style.paddingTop = '220px';
      navbarLinks.style.zIndex ="200"
    }
    
    navbarLinks.classList.toggle('active');
  });