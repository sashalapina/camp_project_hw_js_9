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
