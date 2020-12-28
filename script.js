
document.addEventListener('DOMContentLoaded', onNextBtnPress);


let init = {
  score : 0,
  radios : Array.from(document.getElementsByName('ans')),
  index : 0
}


function onNextBtnPress() {
  const NEXT_BTN = document.querySelector('.btn1'),
        BARS = Array.from(document.getElementsByClassName('edit'));

        function loadFunctionalities () {
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

}



/* determine score */
init.radios.forEach(rad => {
   rad.addEventListener('click', () => {
     if (rad.value == data[init.index].corrAns) {
       init.score++;
       // remove click eventListener
     }
   });
   
});


/* finish Test */
function finishTest() {
  const OUTPUTS_DIVS = {
    ansWrapper: document.getElementById('examCard'),
    ansHolder: document.querySelector('.answers-holder'),
  }
  
  OUTPUTS_DIVS.ansWrapper.textContent = '';
  OUTPUTS_DIVS.ansWrapper.insertAdjacentHTML('afterbegin', insertResultDiv());

  document.getElementById('totQue').value = init.index;
  document.getElementById('corrScore').value = init.score;

  var per = parseInt(init.score * 100) / parseInt(init.index);
  console.log(per)

}







 