const adviceNumber = document.querySelector('#advice-number');
const adviceContent = document.querySelector('#advice-content');
const loaderDiv = document.querySelector('#loader');

const url = 'https://api.adviceslip.com/advice';

const getRandomAdvice = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const advice = data.slip;

  if (data) {
    loaderDiv.textContent = '';
    loaderDiv.style.display = 'none';
    adviceContent.textContent = `"${advice.advice}"`;
    adviceNumber.textContent = `#${advice.id}`;
  }
};

export default getRandomAdvice;
