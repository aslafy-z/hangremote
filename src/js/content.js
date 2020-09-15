/*global document chrome*/

const GOOGLE_MEET_HOSTNAME = 'meet.google.com'
const JOIN_BUTTON_SELECTOR = 'div[role="button"][jsname="Qx7uuf"]'

function simulateClick(element) {
  element.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
  element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  element.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
  element.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
  element.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
  element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

function init() {
  const handle = setInterval(function () {
    const selector = document.querySelector(JOIN_BUTTON_SELECTOR)
    if (selector) {
      simulateClick(selector)
      clearInterval(handle)
    }
  }, 1000)
}

window.addEventListener('load', function () {
  const isMeet = document.location.hostname === GOOGLE_MEET_HOSTNAME

  if (isMeet) {
    init()
  }
}, false)
