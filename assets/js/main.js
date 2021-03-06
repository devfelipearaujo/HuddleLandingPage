var x = window.matchMedia("(max-width: 768px)")
const topSection1 = document.querySelector('[data-topSection]');
const bottomSection1 = document.querySelector('[data-bottomSection]');
const topSection2 = document.querySelector('[data-topSection2]');
const bottomSection2 = document.querySelector('[data-bottomSection2]');
const footerSection = document.querySelector('[data-footerSection]');

curvedSectionsChange(x) // Call listener function at run time
x.addListener(curvedSectionsChange) // Attach listener function on state changes

function curvedSectionsChange(x) {
    if (x.matches) { // If media query matches 
    topSection1.src = './assets/images/bg-section-top-mobile-1.svg';
    bottomSection1.src = './assets/images/bg-section-bottom-mobile-1.svg';
    topSection2.src = './assets/images/bg-section-top-mobile-2.svg';
    bottomSection2.src = './assets/images/bg-section-bottom-mobile-2.svg';
    footerSection.src = './assets/images/bg-footer-top-mobile.svg';
    } else {
        topSection1.src = './assets/images/bg-section-top-desktop-1.svg';
        bottomSection1.src = './assets/images/bg-section-bottom-desktop-1.svg';
        topSection2.src = './assets/images/bg-section-top-desktop-2.svg';
        bottomSection2.src = './assets/images/bg-section-bottom-desktop-2.svg';
        footerSection.src = './assets/images/bg-footer-top-desktop.svg';
    }
  }