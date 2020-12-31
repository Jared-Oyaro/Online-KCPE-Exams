let data = [
  {
    question: 'Which one of the following pairs of human body parts is used in breathing?',
    answers: [
      'Lungs and Aesophagus',
       'Nose and Trachea', 
       'Diaphragm and Stomach', 
       'Nose and Aesophagus'
      ],
    get corrAns () {
      return this.answers[1];
    },
    kcpe_year: 2019,
   questionNo: 1
  },
  
  {
    question: '',
    answers: [
      'Salt',
      'Stones',
      'Saw dust', 
      'Wax'
      ],
    get corrAns () {
      return this.answers[0];
    },
    image: `<img src="images/ex.png" id="img">`,
    title: `<h5 id="imageTitle">  
    The diagram below shows a set-up that can be used to investigate heat transfer in a liquid.
     what should be added to the water for the pupils to observe heat transfer?
    </h5>`
  },

  {
    question: 'Which one of the following waste products is excreted by the lungs?',
    answers: [
      'Excess salts',
      'Urine',
      'Sweat',
      'Excess water'
    ],
    get corrAns () {
      return this.answers[3];
    }
  },

  {
    question: 'Which one of the following pairs of diseases only consists of sexually transmitted infection?',
    answers: [
      'Gonorrhoea and Malaria',
      'HIV/AIDS and Measles',
      'Syphilis and Chancriod', 
      'Bilharzia and Gonorrhoea'
      ],
    get corrAns () {
      return this.answers[2];
    }
     
  },

  {
    question: 'Which one of the following is the third stage of HIV/AIDS infections?',
    answers: [
      'Symptomatic',
      'Window', 
      'Full blown',
       'Incubation'
      ],
    get corrAns () {
      return this.answers[0];
    }
  },

  {
    question: 'Which one of the following components of the environment is the main source of energy for living things?',
    answers: [
      'Plants',
       'Air', 
       'Water', 
       'Soil'
      ],
    get corrAns () {
      return this.answers[2];
    }
  },

  

  {
    question: 'Which one of the following least pollutes the soil?',
    answers: [
      'Excess fertilizers', 
      'Oil spillage', 
      'Kitchen leftovers', 
      'Mining'
    ],
    get corrAns () {
      return this.answers[2];
    }
  },

  {
    question: 'The soil cracks easily when dry has',
    answers: [
      'A rough texture', 
      'Small particles', 
      'Large airspace', 
      'Low capillarity'
    ],
    get corrAns () {
      return this.answers[1];
    }
  },

  {
    question: 'Which one of the following pairs of types of soil erosion forms V-shaped ditches?',
    answers: [
      'Gulley and rill', 
      'Sheet and rill', 
      'Rill and Splash', 
      'Splash and Sheet'
    ],
    get corrAns () {
      return this.answers[0];
    }
  },

  {
    question: 'Which one of the following nutritional deficiency diseases is more likely to be suffered by mothers or newly born babies?',
    answers: [
      'Kwashioko', 
      'Marasmus', 
      'Anaemia', 
      'Rickets'
    ],
    get corrAns () {
      return this.answers[2];
    }
  },

  {
    question: 'Which one of the following  foods is more rich in both protains and fats?',
    answers: [
      'Avocado', 
      'Milk', 
      'Sunflower', 
      'Beans'
    ],
    get corrAns () {
      return this.answers[2];
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
       <div class="mgb">
        <button id ="restart-btn" class="btn" style="margin-top: 20px">Restart</button>
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