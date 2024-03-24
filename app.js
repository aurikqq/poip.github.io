let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      tg.sendData(data.ip)
      tg.close()
  })
})
