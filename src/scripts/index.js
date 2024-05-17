import '../styles/index.css';
import {arrayStationsMetro} from './stationmetro';
const buttonSearch = document.querySelector('.button');
const metroYes = document.querySelector('.popup_section');
const buttonClose = metroYes.querySelector('.closeModal');
const resetInputValue = document.getElementById('userInput');
function closeModal(){
buttonClose.addEventListener('click', function(){
  metroYes.style.opacity = 0;
  resetInputValue.value = '';
})
}
function compareInputWithArray(evt) {
  evt.preventDefault();
  const arrayCopy = arrayStationsMetro.map((element) => element.toLowerCase());
  const inputValue = document.getElementById('userInput').value;
  if (arrayCopy.includes(inputValue) || arrayStationsMetro.includes(inputValue)) {
    metroYes.style.opacity = 1;
    closeModal();
  } else {
    alert('Метро за мкадом' + " " + '=(');
  }
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
  if(data > 15) {
  tempValue.textContent = '☀' + " " + data;
  }
  else{
    tempValue.textContent = '☁' + " " + data;
  }
};
