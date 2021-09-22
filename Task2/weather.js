//Search
let components = {
	apikey: '4a15963bdb100dd00ce96008c9e832b6',
	getWeather: function(city) {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apikey)
			.then((response) => response.json())
			.then((data) => this.display(data))
			.catch((err) => alert('City does not exist. Please check spelling and try again.'));
	},
	display: function(data) {
		const { name } = data;
		const { temp, humidity, temp_min, temp_max } = data.main;
		const { description, icon } = data.weather[0];
		const { speed } = data.wind;
		document.querySelector('.city').innerText = name;
		document.querySelector('.temperature').innerText = temp + '°C';
		document.querySelector('.weather-state').innerText = description;
		document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
		document.querySelector('.wind-speed').innerText = 'Wind speed: ' + speed + 'm/s';
		document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
		document.querySelector('.maxtemp').innerText = 'Min Temp: ' + temp_min + '°C';
		document.querySelector('.mintemp').innerText = 'Max Temp: ' + temp_max + '°C';
		document.querySelector('.card').classList.remove('load');
	},
	search: function() {
		this.getWeather(document.querySelector('#search').value);
	}
};

document.querySelector('#search').addEventListener('keyup', function(event) {
	if (event.key === 'Enter' || event.keyCode === 13) {
		components.search();
	}
});
//Mode

let myTheme = function() {
	var theme = document.getElementById('toggle');
	document.body.classList.toggle('dark');
	if (document.body.classList.contains('dark')) {
		theme.innerHTML = 'light_mode';
	} else {
		theme.innerHTML = 'dark_mode';
	}
};
//Date
let renderDate = function() {
	var date = new Date();
	var year = date.getFullYear();
	var day = date.getDay();
	var daym = date.getDate();
	var month = date.getMonth();
	var dayArr = new Array('Sun,', 'Mon,', 'Tue,', 'Wed,', 'Thu,', 'Fri,', 'Sat,');
	var monthArr = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

	var today = document.querySelector('.date');
	today.textContent = '' + dayArr[day] + ' ' + monthArr[month] + ' ' + daym + ', ' + year;
	today.innerHTML = '' + dayArr[day] + ' ' + monthArr[month] + ' ' + daym + ', ' + year;
	setTimeout('renderDate()', 1000);
};
renderDate();
