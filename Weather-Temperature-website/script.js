const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '42bc620bc9454e53f9f5d1ff16b7c4ca'; // API anahtarını buraya ekleyin

// Klavyeden Enter tuşuna basıldığında çalışacak olan fonksiyon
function search(event) {
  if (event.keyCode === 13) {
    const cityName = document.getElementById('city-input').value;
    getResult(cityName);
  }
}

// Hava durumu bilgilerini API'den çeken ve sonucu görüntüleyen fonksiyon
function getResult(cityName) {
  const query = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;
  fetch(query)
    .then(response => response.json())
    .then(data => {
      displayResult(data);
    })
    .catch(error => {
      console.log(error);
      displayError();
    });
}

// Hava durumu bilgilerini HTML'e yazdıran fonksiyon
function displayResult(weather) {
  const cityElement = document.querySelector('.city');
  cityElement.innerText = `${weather.name}, ${weather.sys.country}`;

  const tempElement = document.querySelector('.temp');
  tempElement.innerText = `Sıcaklık: ${weather.main.temp}°C`;
}

// Hata durumunda hata mesajını görüntüleyen fonksiyon
function displayError() {
  const cityElement = document.querySelector('.city');
  cityElement.innerText = '';

  const tempElement = document.querySelector('.temp');
  tempElement.innerText = 'Hava durumu bilgileri alınamadı.';
}
