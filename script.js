let login = document.getElementById("login");
let password = document.getElementById("password");
let form = document.getElementById("form");
let loginButton = document.getElementById("loginButton");

let err = document.getElementById("error");

let logOut = document.getElementById("logOut");

let obj = {
  name: "Miraziz",
  login: "12345",
  password: 2010,
  coin: 999,
  hp: 1000,
  group: "nF-2308",
};

function isUser() {
  if (
    !localStorage.getItem("user") &&
    window.location.href.includes("student.html")
  ) {
    window.location.href = "./index.html";
  } else if (
    localStorage.getItem("user") &&
    window.location.href.includes("index.html")
  ) {
    window.location.href = "./student.html";
  }
}

isUser();

if (form && login && password) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (obj.login == login.value && obj.password == password.value) {
      localStorage.setItem("user", JSON.stringify(obj));
      window.location.href = "./student.html";
    } else {
      err.textContent = "Login yoki parol xato";
    }
  });
}

if (logOut) {
  logOut.addEventListener("click", () => {
    localStorage.removeItem("user");
    console.log("salom");
    isUser();
  });
}

// fetch("https://68906502944bf437b595bdfe.mockapi.io/api/v1/students", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     firstName: "Ali",
//     age: 22,
//     lastName: "Valiyev",
//     isMarried: false,
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

// fetch("https://68906502944bf437b595bdfe.mockapi.io/api/v1/students")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));
