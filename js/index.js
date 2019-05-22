// function Workout(workoutName,date){
//     this.workoutName = workoutName;
//     this.date = date;
// }

// function Exercise(workout, exercise, amount, reps, target){
//     this.workout = workout;
//     this.exercise = exercise;
//     this.amount = amount;
//     this.reps = reps;
//     this.target = target;
// }

// const deadlift = new Exercise("stronglifts","deadlift", "20kg", 5, "lower back");

const dropdown = document.querySelector(".dropdown-btn");


for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}