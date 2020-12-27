document.addEventListener('DOMContentLoaded', init);

function init () {
  var h_1 = document.getElementById('sec');
  var time = 60;
  setInterval( () => {
     if (time > -1) {
       h_1.textContent = time;
       time--;
     }
  }, 1000)
}

Array.from(document.querySelectorAll('.btn')).forEach(btn => {
  btn.addEventListener('click', () => {
     init();
  })
})