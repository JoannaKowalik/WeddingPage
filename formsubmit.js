const form = document.querySelector("#form");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxnCONg8WRj-RcJkcLlKOva2ljLz1oXloORyPF_9sVMn6b3ZUv3Ek9lBKWKNIhL9Rmc7A/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const responseBody = new FormData(form);
  const TrendBody = responseBody.getAll("TRENDS").join(" ");
  responseBody.set("TRENDS", TrendBody);
  fetch(scriptURL, { method: "POST", body: responseBody })
    .then((response) => {
      alert("Dziękujemy! Thank you!", response);
    })
    .catch((error) => alert("Error!", error.message));
});
