(()=>{"use strict";var e=["Авиамоторная","Автозаводская","Академическая","Александровский сад","Алексеевская","Алма-Атинская","Алтуфьево","Аннино","Арбатская","Аэропорт","Бабушкинская","Багратионовская","Баррикадная","Бауманская","Беговая","Беломорская","Белорусская","Беляево","Бибирево","Библиотека имени Ленина","Битцевский парк","Борисово","Боровицкая","Ботанический сад","Братиславская","Бульвар Рокоссовского","Бутырская","Варшавская","ВДНХ","Верхние Лихоборы","Владыкино","Водный стадион","Войковская","Волгоградский проспект","Волжская","Воробьевы горы","Выставочная","Деловой центр","Динамо","Дмитровская","Добрынинская","Домодедовская","Достоевская","Дубровка","Зябликово","Измайловская","Калужская","Кантемировская","Каховская","Каширская","Киевская","Китай-город","Кожуховская","Коломенская","Комсомольская","Коньково","Косино","Красногвардейская","Краснопресненская","Красносельская","Красные ворота","Крестьянская застава","Кропоткинская","Крылатское","Кузнецкий мост","Кузьминки","Курская","Кутузовская","Ленинский проспект","Лесопарковая","Лефортово","Ломоносовский проспект","Лубянка","Люблино","Марксистская","Марьина роща","Марьино","Маяковская","Медведково","Международная","Менделеевская","Минская","Мичуринский проспект","Нагатинская","Нагорная","Нахимовский проспект","Нижегородская","Новогиреево","Новокузнецкая","Новослободская","Новоясеневская","Новые Черемушки","Озерная","Окружная","Окская","Октябрьская","Октябрьское поле","Орехово","Отрадное","Охотный ряд","Павелецкая","Парк культуры","Парк Победы","Партизанская","Первомайская","Перово","Петровский парк","Петровско-Разумовская","Печатники","Пионерская","Планерная","Площадь Ильича","Площадь Революции","Полежаевская","Полянка","Пражская","Преображенская площадь","Пролетарская","Проспект Вернадского","Проспект Мира","Проспект Мира (кольцевая)","Проспект Мира (радиальная)","Проспект Мира (радиальная)","Профсоюзная","Пушкинская","Раменки","Речной вокзал","Рижская","Римская","Рязанский проспект","Савеловская","Свиблово","Севастопольская","Селигерская","Семеновская","Серпуховская","Славянский бульвар","Смоленская","Сокол","Сокольники","Спартак","Спортивная","Сретенский бульвар","Стахановская","Строгино","Студенческая","Сухаревская","Сходненская","Таганская","Тверская","Театральная","Текстильщики","Теплый Стан","Технопарк","Тимирязевская","Третьяковская","Тропарево","Трубная","Тульская","Тургеневская","Тушинская","Улица 1905 года","Улица академика Янгеля","Университет","Филевский парк","Фили","Фонвизинская","Фрунзенская","Ховрино","Хорошевская","Царицыно","Цветной бульвар","ЦСКА","Черкизовская","Чертановская","Чеховская","Чистые пруды","Чкаловская","Шаболовская","Шелепиха","Шипиловская","Шоссе Энтузиастов","Щелковская","Щукинская","Электрозаводская","Юго-Восточная","Юго-Западная","Южная","Ясенево"];document.querySelector(".button").addEventListener("click",(function(){var t=e.map((function(e){return e.toLowerCase()})),n=document.getElementById("userInput").value;t.includes(n)||e.includes(n)?alert("Метро находиться в пределах Мкад ♥"):alert("Метро за мкадом =(")}));var t=document.getElementById("userInput"),n=document.getElementById("autocomplete");function r(){n.innerHTML="",e.filter((function(e){return e.toLowerCase().startsWith(t.value.toLowerCase())})).forEach((function(e){var t=document.createElement("option");t.textContent=e,n.appendChild(t)}))}t.addEventListener("input",r),r(),fetch("https://api.open-meteo.com/v1/forecast?\nlatitude=52.52&longitude=13.41&current=temperature_2m").then((function(e){return e.json()})).then((function(e){var t;t=e.current.temperature_2m,document.querySelector("#temp").textContent="Погода в Москве "+t}))})();