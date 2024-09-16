export function setMainColor(document) {
  const root = document.documentElement

  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      root.style.setProperty('--random-color', '#3D8168')
      root.style.setProperty('--hover-random-color', '#1A4032')
      break
    case 2:
      root.style.setProperty('--random-color', '#6C7289')
      root.style.setProperty('--hover-random-color', '#4C5463')
      break
    case 3:
      root.style.setProperty('--random-color', '#1C232B')
      root.style.setProperty('--hover-random-color', '#12181F')
      break
  }
}

export function setMainColorBtn(document, button1, button2, button3) {
  const root = document.documentElement

  const bgColor1Var = '#3D8168'
  const bgColor1HoverVar = '#1A4032'
  const bgColor2Var = '#6C7289'
  const bgColor2HoverVar = '#4C5463'
  const bgColor3Var = '#1C232B'
  const bgColor3HoverVar = '#12181F'

  document.addEventListener('DOMContentLoaded', () => {
    setActive(button1, bgColor1Var)
  })

  button1.addEventListener('click', (event) => {
    event.preventDefault()
    setActive(button1, bgColor1Var)
    clearActive(button2)
    clearActive(button3)
    changeColor(root, bgColor1Var, bgColor1HoverVar)
  })

  button2.addEventListener('click', (event) => {
    event.preventDefault()
    setActive(button2, bgColor2Var)
    clearActive(button1)
    clearActive(button3)
    changeColor(root, bgColor2Var, bgColor2HoverVar)
  })

  button3.addEventListener('click', (event) => {
    event.preventDefault()
    setActive(button3, bgColor3Var)
    clearActive(button1)
    clearActive(button2)
    changeColor(root, bgColor3Var, bgColor3HoverVar)
  })
}

function setActive(button, bgcolor) {
  button.style.width = '26px'
  button.style.height = '26px'
  button.style.borderRadius = '50%'
  button.style.boxShadow = `0 0 0 3px ${bgcolor}`
  button.style.border = '2px solid var(--cream-color)'
}

function clearActive(button) {
  button.style.width = '28px'
  button.style.height = '28px'
  button.style.borderRadius = '50%'
  button.style.boxShadow = 'none'
  button.style.border = 'none'
}

function changeColor(root, color, hoverColor) {
  root.style.setProperty('--main-active-color', color)
  root.style.setProperty('--hover-main-active-color', hoverColor)
}
