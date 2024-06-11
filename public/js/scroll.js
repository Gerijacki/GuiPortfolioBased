(function() {
    let lastScrollTop = 0;
    let languageContainer = document.querySelector('.language-select-container');
  
    window.addEventListener("scroll", function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll > 100){
        languageContainer.style.visibility = "hidden";
      } else {
        languageContainer.style.visibility = "visible";
      }
      lastScrollTop = currentScroll;
    });
  })();
  