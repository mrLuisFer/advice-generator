const url = "https://api.adviceslip.com/advice"

const adviceNumber = document.querySelector("#advice-number")
const adviceIcon = document.querySelector("#advice-icon")
const adviceContent = document.querySelector("#advice-content")

const getRandomAdvice = async () => {
  const res = await fetch(url)
  const data = await res.json()
  const advice = data.slip
  adviceNumber.textContent = `#${advice.id}`
  adviceContent.textContent = `"${advice.advice}"`
}

window.addEventListener('load', () => getRandomAdvice())

adviceIcon.addEventListener('click', async () => getRandomAdvice())

