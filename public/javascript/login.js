
function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const passsword = document.querySelector("#password-signup").value.trim();

  if (username && email && passsword) {
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        passsword,
      }),
      headers: { "Content-Typy": "application/json" },
    }).then((response) => {
      console.log(response);
    });
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
