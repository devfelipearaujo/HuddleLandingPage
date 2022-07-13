var x = window.matchMedia("(max-width: 768px)")
const topSection1 = document.querySelector('[data-topSection]');
const bottomSection1 = document.querySelector('[data-bottomSection]');

curvedSectionsChange(x) // Call listener function at run time
x.addListener(curvedSectionsChange) // Attach listener function on state changes

function curvedSectionsChange(x) {
    if (x.matches) { // If media query matches 
    topSection1.src = 'file:///C:/Users/felip/OneDrive/Documentos/Alura%20HTML%20&%20CSS/Pr%C3%A1tica/Challenge/huddle-landing-page-with-curved-sections-master/assets/images/bg-section-top-mobile-1.svg';
    bottomSection1.src = 'file:///C:/Users/felip/OneDrive/Documentos/Alura%20HTML%20&%20CSS/Pr%C3%A1tica/Challenge/huddle-landing-page-with-curved-sections-master/assets/images/bg-section-bottom-mobile-1.svg';
    } else {
        topSection1.src = 'file:///C:/Users/felip/OneDrive/Documentos/Alura%20HTML%20&%20CSS/Pr%C3%A1tica/Challenge/huddle-landing-page-with-curved-sections-master/assets/images/bg-section-top-desktop-1.svg';
        bottomSection1.src = 'file:///C:/Users/felip/OneDrive/Documentos/Alura%20HTML%20&%20CSS/Pr%C3%A1tica/Challenge/huddle-landing-page-with-curved-sections-master/assets/images/bg-section-bottom-desktop-1.svg';
    }
  }