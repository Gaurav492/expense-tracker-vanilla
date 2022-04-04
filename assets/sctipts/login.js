// LOGIN PAGE
let username = document.querySelector(".uname");
let password = document.querySelector(".pass");
let submit = document.querySelector(".submit");

console.log("hello");
submit.addEventListener("click", (e) => {
  if (username.value === "gaurav" && password.value === "gav") {
    console.log("Correct");
    window.location.href = "index.html";
  } else {
    alert("wrong credentials");
    // window.location.href = "login.html";
  }

  e.preventDefault();
});
