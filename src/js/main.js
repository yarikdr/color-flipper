import colorFlipper from './modules/colorFlipper'
import copy from './modules/copy'

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.change-color')
  btn.addEventListener('click', () => colorFlipper('.wrapper'))

  copy('.copy', '.background-color input')
})
