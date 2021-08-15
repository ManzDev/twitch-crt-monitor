const powerLed = document.querySelector(".power-led");
const powerButton = document.querySelector(".power-switch .button");
const eyes = document.querySelector(".eyes");
const screen = document.querySelector(".screen");

const timers = [];

powerButton.addEventListener("click", () => {
  powerLed.classList.toggle("on");

  if (powerLed.classList.contains("on")) {
    timers.splice(0);
    screen.classList.remove("off");
    startTyping(["cd manz.dev", "npm install", "npm run dev"]);
  } else {
    eyes.classList.add("off");
    screen.innerHTML = "";
    timers.forEach(timer => clearTimeout(timer));
    timers.splice(0);
  }
});

const startTyping = (texts) => {
  let wait = 750;

  screen.innerHTML = "$ ";
  texts.forEach(text => {
    wait += 750;
    for (let i = 0; i < text.length; i++) {
      const timer = setTimeout(() => {
        screen.innerHTML += text[i];
      }, wait);
      timers.push(timer);
      wait += 50 + ~~(Math.random() * 50);
    }

    wait += 750;

    const timer = setTimeout(() => (screen.innerHTML += "<br>$ "), wait);
    timers.push(timer);
  });

  wait += 500;

  const timer = setTimeout(() => {
    const timer = setTimeout(() => eyes.classList.remove("off"), 500);
    timers.push(timer);
    screen.classList.add("off");
  }, wait);
  timers.push(timer);
};
