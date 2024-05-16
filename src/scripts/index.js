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
const searchInput = document.getElementById('userInput');
const autocomplete = document.getElementById('autocomplete');

// Функция для обновления выпадающего списка
function updateAutocomplete() {
  // Очищаем текущие опции, если они есть
  autocomplete.innerHTML = '';
  
  // Фильтруем массив данных на основе введенного текста
  const filteredData = arrayStationsMetro.filter(item => {
    return item.toLowerCase().startsWith(searchInput.value.toLowerCase());
  });
  
  // Добавляем каждую опцию в выпадающий список
  filteredData.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item;
    autocomplete.appendChild(option);
  });
}

// Обработчик события на изменение текста в поле ввода
searchInput.addEventListener('input', updateAutocomplete);

// Инициализируем выпадающий список при загрузке страницы
updateAutocomplete();
const urlTemp =`https://api.open-meteo.com/v1/forecast?
latitude=52.52&longitude=13.41&current=temperature_2m`;
fetch(urlTemp)
.then((data) => {
    return data.json();
})
.then((info) => {
  renderTemp(info.current.temperature_2m);
});
function renderTemp(data){
  const tempValue = document.querySelector('#temp');
  tempValue.textContent = 'Погода в Москве' + " " + data;
};