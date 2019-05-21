const siteContent = {
    "main-content": {
        "workoutA-h4": "Workout A",
        "exercise-content": "Exercise",
        "amount-content": "Amount",
        "reps-content": "Reps",
        "bodytarget-content": "Body Target",
        "workoutB-h4": "Workout B",
        "exercise-content": "Exercise",
        "amount-content": "Amount",
        "reps-content": "Reps",
        "bodytarget-content": "Body Target",
        "workoutC-h4": "Workout C",
        "exercise-content": "Exercise",
        "amount-content": "Amount",
        "reps-content": "Reps",
        "bodytarget-content": "Body Target",
        "workoutD-h4": "Workout D",
        "exercise-content": "Exercise",
        "amount-content": "Amount",
        "reps-content": "Reps",
        "bodytarget-content": "Body Target",
    }
}

// MIDDLE CONTENT Workouts

let workoutA = document.querySelector('body > div > section > div:nth-child(1) > h4');
workoutA.textContent = siteContent["main-content"]["workoutA-h4"];

let excercise = document.querySelector('body > div > section > div:nth-child(1) > p:nth-child(2)');
excercise.textContent = siteContent["main-content"]["exercise-content"];

let amount = document.querySelector('body > div > section > div:nth-child(1) > p:nth-child(3)');
amount.textContent = siteContent["main-content"]["amount-content"];

let reps = document.querySelector('body > div > section > div:nth-child(1) > p:nth-child(4)');
reps.textContent = siteContent["main-content"]["reps-content"];

let bodyTarget = document.querySelector('body > div > section > div:nth-child(1) > p:nth-child(3)');
bodyTarget.textContent = siteContent["main-content"]["bodytarget-content"];










class Article {
    constructor(domElement) {
      // assign this.domElement to the passed in domElement
      this.domElement = domElement;
  
      // create a reference to the ".expandButton" class. 
      const expandButton = document.querySelectorAll('.expandButton');
     
      // Using your expandButton reference, update the text on your expandButton to say "expand"
      expandButton.textContent = "expand";
  
      // Set a click handler on the expandButton reference, calling the expandArticle method.
    //   expandButton.addEventListener('click', this.expandArticle.bind(this));
    }
  
    expandArticle(event) {
      // Using our reference to the domElement, toggle a class to expand or hide the article.
      this.domElement.classList.toggle('article-open');
    }  
  }


const articles = document.querySelectorAll('.articles');


articles.forEach(article => new Article(article));

