const navAnchorTag = document.querySelector('nav > a');

const mediaQuery = '(min-width: 768px)';

function mediaQueryListener() {
  // matched or not
  const matched = this.matches;

  if (matched) {
    navAnchorTag.setAttribute('href', './index.html');
  } else {
    //   navAnchorTag.removeAttribute('href','./index.html')
    navAnchorTag.removeAttribute('href', './index.html');
    navAnchorTag.hasAttribute('');
  }
}

//   mediaQueryListener();
window.matchMedia(mediaQuery).addEventListener('change', mediaQueryListener);

function setHrefAttr() {
  const matched = this.matchMedia(mediaQuery).matches;
  const hasHref = navAnchorTag.hasAttribute('href');

  if (matched && !hasHref) {
    navAnchorTag.setAttribute('href', './index.html');
  } else {
    navAnchorTag.removeAttribute('href', './index.html');
  }
}

window.addEventListener('load', setHrefAttr);
