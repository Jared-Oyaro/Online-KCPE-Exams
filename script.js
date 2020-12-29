
document.addEventListener('DOMContentLoaded', onNextBtnPress);
let init = {
  radios : Array.from(document.getElementsByName('ans')),
  index : 0,
  answersHolder: document.querySelector('.answers-holder'),
  score: 0,
  radios: Array.from(document.getElementsByName('ans'))
}


function onNextBtnPress() {
  const NEXT_BTN = document.querySelector('.btn1'),
        BARS = Array.from(document.getElementsByClassName('edit'));
        
        function loadFunctionalities () {
            (init.index < 10) && 
            BARS[init.index].classList.add('bg-color');
            resetTimer();
            restartTimer();
            loadQueAns(init.index)
            init.index++;
            init.index >= 10 && finishTest();
         }

    NEXT_BTN.addEventListener('click', () =>  init.index < 10 && loadFunctionalities());
}


function resetTimer() {
      const NODES = {
        timer: document.getElementById('sec'),
        get new_h1 () {
          var h = document.createElement('h1');
          h.id = 'sec';
          h.innerHTML = 30;
          return h;
        },
        get nodeparent () {
          return this.timer.parentElement;
        }
      }
     
    if (NODES.timer) 
    NODES.nodeparent.replaceChild(NODES.new_h1,NODES.timer);  
}


function restartTimer() {
  let h1 = document.getElementById('sec'),
      c = 29;

    function  timer () {
      function decrement () {
        h1.innerHTML = c;
        c--;
        c <= 5 && h1.classList.add('danger');
      }
      h1.innerHTML > 0 && decrement();
    }

  setInterval( () =>  timer(), 1000);
}



function loadQueAns() {
 let no = arguments[0];

  let  que_ans = {
    que: document.getElementById('quzz'),
    ansA : document.getElementById('a'),
    ansB : document.getElementById('b'),
    ansC : document.getElementById('c'),
    ansD : document.getElementById('d')
  };
  
   que_ans. que.innerHTML = 'No.' + (init.index + 1) + ' ' + data[no].question;
   que_ans.ansA.innerHTML = data[no].answers[0];
   que_ans.ansB.innerHTML = data[no].answers[1];
   que_ans.ansC.innerHTML = data[no].answers[2];
   que_ans.ansD.innerHTML = data[no].answers[3]; 

  init.radios[0].value = data[no].answers[0];
  init.radios[1].value = data[no].answers[1];
  init.radios[2].value = data[no].answers[2];
  init.radios[3].value = data[no].answers[3];

  /* add image in the question has one */
    if (data[no].image) {
      init.answersHolder.insertAdjacentHTML('afterbegin', data[no].image);
      init.answersHolder.insertAdjacentHTML('afterbegin', data[no].title);
    } else {
      let image = document.getElementById('img'),
          title = document.getElementById('imageTitle');
      
      image && init.answersHolder.removeChild(image);
      title && init.answersHolder.removeChild(title);

    }

}



/* determine score */
init.radios.forEach(rad => {
   rad.addEventListener('click', () => {
     if (rad.value == data[init.index - 1].corrAns) {
        init.score++;
     }
   });
   
});


 

/* finish Test */
function finishTest() {
  const OUTPUTS_DIVS = {
    ansWrapper: document.getElementById('examCard'),
    ansHolder: document.querySelector('.answers-holder'),
    controller: document.querySelector('#controller'),
  }
  
  // document.getElementsByTagName('body')[0].removeChild(OUTPUTS_DIVS.controller);
  OUTPUTS_DIVS.controller.textContent = '';
  OUTPUTS_DIVS.controller.insertAdjacentHTML("afterbegin", displayNotice());
  OUTPUTS_DIVS.ansWrapper.textContent = '';
  OUTPUTS_DIVS.ansWrapper.insertAdjacentHTML('afterbegin', insertResultDiv());

  document.getElementById('totQue').placeholder = 'Total Questions: ' + init.index;
  document.getElementById('corrScore').placeholder = 'Score: ' + init.score;
  
   
  document.getElementById('per').placeholder = 'Percentage: ' +
  parseInt(init.score * 100) / parseInt(init.index) + '%';
   

}







 