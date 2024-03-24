let tg = window.Telegram.WebApp;

console.log('тест1')

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      console.log('тест2')
      tg.sendData(data.ip)
      tg.sendData(user_ip)
      tg.close()
  })
})
