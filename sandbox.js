const correctAnswers = ["A", "B", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
const username = document.querySelector(".username");
const feedbackText = document.querySelector(".feedback");
const badge = document.querySelector(".badge");

username.addEventListener("keyup", (e) => {
  //   console.log(feedbackText);
  //   console.log("5");
  //   console.log(username);
  //   console.log(form.username.value);
  //   console.log(e.target.value);
  if (usernamePattern.test(e.target.value)) {
    username.classList.add("border-success");
    username.classList.remove("border-danger");
    feedbackText.classList.add("text-success");
    feedbackText.classList.remove("text-danger");
    feedbackText.innerHTML = "<em>Valid username</em>";
  } else {
    username.classList.add("border-danger");
    username.classList.remove("border-success");
    feedbackText.classList.add("text-danger");
    feedbackText.classList.remove("text-success");
    feedbackText.innerHTML =
      "<em>A single word, having between 6-12 characters.</em>";
  }
});

// console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(username.value);
  if (usernamePattern.test(username.value)) {
    let score = 0;
    const userAnswers = [
      form.q1.value,
      form.q2.value,
      form.q3.value,
      form.q4.value,
      form.q5.value,
    ];
    userAnswers.forEach((answer, index) => {
      if (answer == correctAnswers[index]) {
        score += 20;
      }
    });
    badge.innerText = `Your score is ${score}`;
    // console.log(score);
    // console.log(badge.innerText);
  } else {
    badge.innerText = "";
    username.focus();
    username.classList.add("border-danger");
    feedbackText.classList.add("text-danger");
  }
  //   console.log(username);
});
