import '../styles/index.css';
import {arrayStationsMetro} from './stationmetro';
const heartString = '♥'
const buttonSearch = document.querySelector('.button');
function compareInputWithArray(evt) {
  evt.preventDefault();
  const arrayCopy = arrayStationsMetro.map((element) => element.toLowerCase());
  const inputValue = document.getElementById('userInput');
  if (arrayCopy.includes(inputValue) || arrayStationsMetro.includes(inputValue)) {
    alert('Метро находиться в пределах Мкад' + " " + heartString);
  } else {
    alert('Метро за мкадом' + " " + '=(');
  }
  inputValue.value = '';
}
buttonSearch.addEventListener('click', compareInputWithArray);
const searchInput = document.getElementById('userInput');
const autocomplete = document.getElementById('autocomplete');
function updateAutocomplete() {
  autocomplete.innerHTML = '';
  const filteredData = arrayStationsMetro.filter(item => {
    return item.toLowerCase().startsWith(searchInput.value.toLowerCase());
  });
  filteredData.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item;
    autocomplete.appendChild(option);
  });
}
searchInput.addEventListener('input', updateAutocomplete);
updateAutocomplete();
const urlTemp =`https://api.open-meteo.com/v1/forecast?
latitude=55.751244&longitude=37.618423&current=temperature_2m`;
fetch(urlTemp)
.then((data) => {
    return data.json();
})
.then((info) => {
  renderTemp(info.current.temperature_2m);
});
function renderTemp(data){
  const tempValue = document.querySelector('#temp');
  if(data.length > 15) {
  tempValue.textContent = '☀' + " " + data;
  }
  else{
    tempValue.textContent = '☁' + " " + data;
  }
};