const colorFlipper = selector => {
  const red = Math.floor(Math.random() * 255),
        green = Math.floor(Math.random() * 255),
        blue = Math.floor(Math.random() * 255),
        color = `rgb(${red}, ${green}, ${blue})`

  const elem = document.querySelector(selector)
  //for smooth changing
  if (!elem.style.transition) { 
    elem.style.transition = 'background-color 0.5s'
  }
  elem.style.backgroundColor = color
  elem.querySelector('input:first-child').value = color
}

export default colorFlipper
