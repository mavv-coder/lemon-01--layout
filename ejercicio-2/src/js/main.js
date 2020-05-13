document.addEventListener("DOMContentLoaded", () => {
  const btnTheme = document.querySelector(".btn-theme");
  const container = document.querySelector(".container");

  btnTheme.addEventListener("click", () => {
    const classContainer = container.className;

    if (classContainer === "container container--red") {
      container.className = "container container--blue";
    }
    if (classContainer === "container container--blue") {
      container.className = "container container--red";
    }
  });
});
