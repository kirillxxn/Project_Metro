import '../styles/index.css';
import {arrayStationsMetro} from './stationmetro';
const heartString = '♥'
const buttonSearch = document.querySelector('.button');
function compareInputWithArray() {
  const arrayCopy = arrayStationsMetro.map((element) => element.toLowerCase());
  const inputValue = document.getElementById('userInput').value;
  if (arrayCopy.includes(inputValue) || arrayStationsMetro.includes(inputValue)) {
    alert('Метро находиться в пределах Мкад' + " " + heartString);
  } else {
    alert('Метро за мкадом' + " " + '=(');
  }
}
buttonSearch.addEventListener('click', compareInputWithArray);
