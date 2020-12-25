var data = [
  {
    question: 'When did Kenya gain independence?',
    answers: [
      '1992',
      '1963',
      '1990'
    ],
    get corrAns () {
      return this.answers[1];
    }
  },

  {
    question: 'Which one of the following is not a programing language?',
    answers: [
      'C++',
      'C#',
      'HTML'
    ],
    get corrAns () {
      return this.answers[2];
    }
  },

  {
    question: 'Which one of the following is a branch of CS?',
    answers: [
      'Artificail Intelligence',
      'Data Science',
      'Data collection'
    ],
    get corrAns () {
      return this.answers[2];
    }
  },
]

var count = 0;
document.addEventListener('DOMContentLoaded', () => {
  generateQuzz();    
});

function generateQuzz() {
  var question = document.querySelector('.q');
   question.innerHTML = data[count].question;
   data[count].answers.forEach(ans => {
     const BTN = document.createElement('button');
     BTN.classList.add('btn');
     BTN.innerHTML = ans;
     document.querySelector('.answers').appendChild(BTN);
     BTN.addEventListener('click', () => {
        if (BTN.innerHTML == data[count].corrAns) {
          alert('Correct!');
        } else {
          alert('Wrong!');
        }
     })
   });
}