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
      return this.answers[1];
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
    },
    image: `<img src="images/sch-logo.png" id='img'>`,
    title: `<h5 id="imageTitle"> Use the following diagram to answer the questions that follows.</h5>`
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
    get csorrAns () {
      return this.answers[0];
    }
  },

];

/*
document.getElementById('examCard').insertAdjacentHTML('afterbegin', `<div class="answers-holder">
<h3 id="quzz">Click Next to start the test</h3>
 <div class="answers">
      <div class="ans1">
        <input type="radio" name="ans" id="firstAns">
        <label for="firstAns" id="a"></label>
      </div>
      <div class="ans2">
        <input type="radio" name="ans" id="secondAns">
        <label for="secondAns" id="b"></label>
      </div>
      <div class="ans3">
        <input type="radio" name="ans" id="thirdAns">
        <label for="thirdAns" id="c"></label>
      </div>
      <div class="ans4">
        <input type="radio" name="ans" id="fouthAns">
        <label for="fouthAns" id="d"></label>
      </div>
    

   <div class="navigation">
     <button class="next-btn btn1 btn">Next</button>
   </div>
   </div>`) */



   function insertResultDiv() {
     return `<div class="score-output card">
     <h3 class="center">RESULT</h3>
      <div class="total-quez">
        <input type="number" placeholder="Total Questions: " id ="totQue" readonly>
      </div>
      <div class="correct-score">
        <input type="number" placeholder="Score: "  id = "corrScore" readonly>
      </div>
      <div class="perc">
        <input type="number" placeholder="Percentage: "  id = "per" readonly>
      </div> 
      </div>`;
   }


   function displayNotice() {
     return `<div>
       <h5 class="center">Congraturation for finishing your test!</h5>
       <p id="font">
         Please note we're looking forward to adding full papers and other subjects.
         We'are also looking forward to adding more features to the app.
       </p>
     </div>`;
   }