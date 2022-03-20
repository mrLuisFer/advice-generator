import './src/css/style.css'
import './src/css/loader.css'
import getRandomAdvice from './src/scripts/getRandomAdvice'

const adviceIcon = document.querySelector("#advice-icon")

window.addEventListener('load', () => getRandomAdvice())
adviceIcon.addEventListener('click', () => getRandomAdvice())
