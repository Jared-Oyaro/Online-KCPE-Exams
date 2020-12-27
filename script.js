
 

document.addEventListener('DOMContentLoaded', () => {
  var index = 0;
  Array.from(document.querySelectorAll('.btn1')).forEach(btn => {
    btn.addEventListener('click', () => {
         var bars = Array.from(document.getElementsByClassName('edit'));
         if (index < 10) {
          bars[index].classList.add('bg-color');
          index++;
          reset()
          startTimer();
          loadQuzz(index)
         }
    });
    
  });

});


 
 


function reset() {
  var timer = document.getElementById('sec'),
      parent = timer.parentElement;
    if (timer) {
      parent.removeChild(timer);
      parent.insertAdjacentHTML('afterbegin', `<h1 id="sec">30</h1>`)
    }
  
}


function startTimer() {
  var timer = document.getElementById('sec');
  let c = 29;
  setInterval( () => {
   if (timer.innerHTML > 0) {
     timer.innerHTML = c;
     c--;
     c <= 5 && timer.classList.add('danger');
   } 
  }, 1000);

}




let data = [
  {
    question: 'When did Kenya gain independence?',
    answers: ['1992', '1990', '1963', '1920'],
    get corrAns () {
      return this.answers[2];
    }
  },

  {
    question: 'Which one of the following is not a branch of Computer Science?',
    answers: ['Data Collection', 'Data Science', 'Artificial Intelligence', 'Software Engineering'],
    get corrAns () {
      return this.answers[0];
    }
  },

  {
    question: 'Which one of the following is not a programming language?',
    answers: ['Python', 'HTML', 'C++', 'C#'],
    get corrAns () {
      return this.answers[3];
    }
  },

  {
    question: '(a = 53) === (a === "53")',
    answers: ['True', 'False', 'Undefined', 'Null'],
    get corrAns () {
      return this.answers[1];
    }
  },

  {
    question: 'Pick the odd one out?',
    answers: ['Raila', 'Uhuru', 'Obama', 'Trump'],
    get corrAns () {
      return this.answers[0];
    }
  },

  {
    question: 'What is the capital city of Kenya?',
    answers: ['Kisumu', 'Nairobi', 'Mombasa', 'Dodoma'],
    get corrAns () {
      return this.answers[1];
    }
  },

  {
    question: 'Pick the odd one out',
    answers: ['Python', 'CSS', 'C++', 'C#'],
    get corrAns () {
      return this.answers[1];
    }
  },

  {
    question: 'CSS stands for?',
    answers: ['Casscading Styles Sheets', 'Common Styles Sheets', 'Casscading Style Scripts', 'Common Styles Script'],
    get corrAns () {
      return this.answers[0];
    }
  },

  {
    question: 'Start a multiline JavaScript comment.',
    answers: ['/*', '*/', '/* */', '//'],
    get corrAns () {
      return this.answers[0];
    }
  },

  {
    question: 'Which one of the following  statement is false about JavaScript?',
    answers: ['Arrays are objects', 'functions are variables', 'constants cannot be reassigned', 'all of the above'],
    get corrAns () {
      return this.answers[3];
    }
  },


  {
    question: 'What is you favourite color?',
    answers: ['blue', 'black', 'white', 'red'],
    get corrAns () {
      return this.answers[0];
    }
  },

];

 

function loadQuzz() {
    
 let no = arguments[0];

  let quzz_answers = {
    quzzHolder: document.getElementById('quzz'),
    ansA : document.getElementById('a'),
    ansB : document.getElementById('b'),
    ansC : document.getElementById('c'),
    ansD : document.getElementById('d')
  };


  quzz_answers.quzzHolder.innerHTML = data[no].question;
  quzz_answers.ansA.innerHTML = data[no].answers[0];
  quzz_answers.ansB.innerHTML = data[no].answers[1];
  quzz_answers.ansC.innerHTML = data[no].answers[2];
  quzz_answers.ansD.innerHTML = data[no].answers[3];



}






















