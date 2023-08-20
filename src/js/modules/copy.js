const copy = (btnSel, inputSel) => {
  const btn = document.querySelector(btnSel)
  const input = document.querySelector(inputSel)

  btn.addEventListener('click', e => {
    e.preventDefault()
    input.disabled = false
    input.select()
    input.disabled = true
    navigator.clipboard.writeText(input.value)
  })
}

export default copy