( function IIFE () {
 
  var marks = new Set();
  let init = {
    radios : Array.from(document.getElementsByName('ans')),
    nav: document.querySelector('.navigation'),
    index : 0,
    score: 0,
  }


  let UI_obj = {
    next_btn: document.querySelector('.btn1'),
    progress_bar:  Array.from(document.getElementsByClassName('edit')),
    mainController: function () {
        init.index < 10 && 
        this.progress_bar[init.index].classList.add('bg-color');
        resetTimer();
        restartTimer();
        loadQueAns(init.index);
        init.index++;
        if (init.index >= 10) {
          this.next_btn.innerHTML = 'Finish';
        }
        init.index >= 11 && finishTest();
    }
  }


   UI_obj.next_btn.addEventListener('click', () => {
       let warning = document.getElementById('warn');
       if (warning) {
         init.nav.removeChild(warning)
       }
      init.index < 11 && UI_obj.mainController()
   })



   function resetTimer() {
    const NODES = {
      timer: document.getElementById('sec'),
      get new_h1 () {
        var h = document.createElement('h1');
        h.id = 'sec';
        h.innerHTML = 30;
        return h
      },
      get nodeparent () {
        return this.timer.parentElement
      }
    }

  NODES.timer && 
  NODES.nodeparent.replaceChild(NODES.new_h1,NODES.timer) 
}



function restartTimer() {
  let h1 = document.getElementById('sec'),
      c = 29;
  
    function  timer () {
      function decrement () { 
        h1.innerHTML = c;
        c--;
        c <= 4 && h1.classList.add('danger');
        let warn = `<h5 style="color: red" id="warn">Time lapsed. This question won't count!!!</h5>`;
        if (c == -1) {
          if (document.getElementById('warn')) {
            init.nav.removeChild(document.getElementById('warn'));
          } else {
            init.nav.insertAdjacentHTML('beforeend',warn);
          }
        }
       }
      h1.innerHTML > 0 && decrement();
    }

  setInterval(() => timer(), 1000);
}


function loadQueAns() {
  let no = arguments[0];
 
   let  que_ans = {
     que: document.getElementById('quzz'),
     answersHolder: document.querySelector('.answers-holder'),
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
 
   /* add image to the question*/
     if (data[no].image) {
       que_ans.answersHolder.insertAdjacentHTML('afterbegin', data[no].image);
       que_ans.answersHolder.insertAdjacentHTML('afterbegin', data[no].title);
     } else {
       let image = document.getElementById('img'),
           title = document.getElementById('imageTitle');
       
       image && que_ans.answersHolder.removeChild(image);
       title && que_ans.answersHolder.removeChild(title);
     }
 }

 /* increase score if the write radio button is clicked */
init.radios.forEach( rad => {
  rad.addEventListener( 'click', () => {
   if (Number(document.getElementById('sec').textContent) > 0) {
    data[ init.index - 1 ].corrAns == rad.value &&
        marks.add(data[ init.index - 1 ].corrAns);
   } 
  })  
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

  document.getElementById('totQue').placeholder = 'Total Questions: ' + parseInt(init.index -1);
  document.getElementById('corrScore').placeholder = 'Score: ' + marks.size;
  
   
  document.getElementById('per').placeholder = 'Percentage: ' +
  (parseInt(marks.size) * 100 ) / parseInt(init.index -1) + '%';
 
  var restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
   restartBtn.addEventListener('click', () => {
     document.location.reload();
   })
  }
   
}
  
 } () );












 







 