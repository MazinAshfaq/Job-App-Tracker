const scriptURL =
  "https://script.google.com/macros/s/AKfycby2ZD33Rk2GYOh-rCjtr97X5Gj8MFtBXYC3pzmgSrty7Q4axhXv6JFFbqqkkARaN-Jt/exec";

/*
const container = document.querySelector(".container"),
  form = container.querySelectorAll(".form1"),
  submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
  e.preventDefault();

  var formData = new FormData(form[0]);

  alert(
    formData.get("Cname") +
      " - " +
      formData.get("Ptitle") +
      " - " +
      formData.get("link") +
      " - " +
      formData.get("date") +
      " - " +
      formData.get("status") +
      " - " +
      formData.get("notes")
  );
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    submitInput.addEventListener("click", getDataForm, false);
  },
  false
);
*/

/*var form = document.getElementById("sheetdb-form");*/
const form = document.forms["form1"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: JSON.stringify(
      Object.fromEntries(new FormData(form))
    ) /*new FormData(document.getElementById("form1")),*/,
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      alert("success");
    });
});

/*
const form = document.forms["form1"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    redirect: "follow",
    body: new FormData(form),
  })
    .then((response) => alert("Submitted"))
    .catch((error) => console.error("Error!", error.message));
});
*/
