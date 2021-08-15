const powerLed = document.querySelector(".power-led");
const powerButton = document.querySelector(".power-switch .button");
const eyes = document.querySelector(".eyes");
const screen = document.querySelector(".screen");

powerButton.addEventListener("click", () => {
  powerLed.classList.toggle("on");

  if (powerLed.classList.contains("on")) {
    startTyping(["cd manz.dev", "npm install", "npm run dev"]);
  } else {
    eyes.classList.add("off");
    screen.innerHTML = "";
  }
});

// document.addEventListener("keydown", (ev) => {
//   if (ev.key.toLowerCase() === "e") {
//     eyes.classList.toggle("off");
//   }
// });

const startTyping = (texts) => {
  let wait = 750;

  screen.innerHTML = "$ ";
  texts.forEach(text => {
    wait += 750;
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        screen.innerHTML += text[i];
      }, wait);
      wait += 50 + ~~(Math.random() * 50);
    }

    wait += 750;

    setTimeout(() => (screen.innerHTML += "<br>$ "), wait);
  });

  wait += 500;

  setTimeout(() => {
    setTimeout(() => eyes.classList.remove("off"), 500);
    screen.classList.add("off");
  }, wait);
};
