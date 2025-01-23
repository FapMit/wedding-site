function formFakeSubmit() {
  const btnSubmitNode = document.querySelector("button.js-form-btn");
  const fieldsNode = document.querySelectorAll("fieldset");

  btnSubmitNode.addEventListener("click", (e) => {
    e.preventDefault();
    btnSubmitNode.textContent = "Отправляем...";
    btnSubmitNode.classList.add("loading");
    setTimeout(() => {
      btnSubmitNode.classList.add("loading-end");
    }, 2000);
    setTimeout(() => {
      btnSubmitNode.textContent = "Отправлено";
      btnSubmitNode.classList.remove("loading");
      btnSubmitNode.classList.remove("loading-end");
      btnSubmitNode.disabled = true;
      fieldsNode.forEach((field) => {
        field.disabled = true;
      });
    }, 4000);
  });
}

export default formFakeSubmit;
