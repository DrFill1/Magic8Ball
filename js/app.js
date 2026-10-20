// Uses PEOPLE from people.js and FACES from faces.js (loaded first in index.html)

// ---------- Elements & state ----------
const peopleEl  = document.getElementById("people");
const ball      = document.getElementById("ball");
const faceEl    = document.getElementById("face");
const mouth     = document.getElementById("mouth");
const triangle  = document.getElementById("triangle");
const answerEl  = document.getElementById("answer");
const form      = document.getElementById("ask-form");
const input     = document.getElementById("question");
const shakeBtn  = document.getElementById("shake-btn");
const hint      = document.getElementById("hint");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentPerson = "cartman";
let lastAnswer = "";
let busy = false;

// ---------- Person buttons ----------
const personButtons = [];
function addPersonButton(key, person) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "person";
  btn.textContent = person.name;
  btn.title = person.tagline;
  btn.setAttribute("aria-pressed", "false");
  btn.addEventListener("click", () => {
    selectPerson(key);
    hint.textContent = `${person.name}, ${person.tagline}, is ready for your question.`;
  });
  peopleEl.appendChild(btn);
  personButtons.push({ key, btn });
}
Object.entries(PEOPLE).forEach(([key, person]) => addPersonButton(key, person));

function setColor(color) {
  document.documentElement.style.setProperty("--accent", color);
}

function selectPerson(key) {
  currentPerson = key;
  personButtons.forEach(({ key: k, btn }) => btn.setAttribute("aria-pressed", String(k === key)));
  setColor(PEOPLE[key].color);
  renderFace(key);
}

// Draw the person's face on the ball (see faces.js)
function renderFace(key) {
  const face = FACES[key] || DEFAULT_FACE;
  ball.style.setProperty("--skin", face.skin);
  faceEl.innerHTML = `
    <svg viewBox="0 0 100 100">
      <defs><clipPath id="face-clip"><circle cx="50" cy="50" r="50"/></clipPath></defs>
      <g clip-path="url(#face-clip)">${face.inside}</g>
      ${face.outside}
    </svg>`;
}
selectPerson(currentPerson);

// ---------- Helpers ----------
function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Pick an answer, avoiding the same one twice in a row
function pickAnswer(answers) {
  let answer;
  do { answer = randomItem(answers); } while (answers.length > 1 && answer === lastAnswer);
  lastAnswer = answer;
  return answer;
}

// Shrink the text until it fits inside the triangle
function fitText() {
  let size = Math.max(10, ball.offsetWidth * 0.042);
  answerEl.style.fontSize = size + "px";
  while ((answerEl.scrollHeight > answerEl.clientHeight || answerEl.scrollWidth > answerEl.clientWidth) && size > 7) {
    size -= 0.5;
    answerEl.style.fontSize = size + "px";
  }
}

function restartAnimation(className) {
  ball.classList.remove("shaking", "nudge");
  void ball.offsetWidth; // forces the browser to restart the animation
  ball.classList.add(className);
}

// ---------- Main action ----------
function ask() {
  if (busy) return;

  const question = input.value.trim();
  if (!question) {
    hint.textContent = "You have to actually ask something. Even I have standards.";
    restartAnimation("nudge");
    input.focus();
    return;
  }

  busy = true;
  shakeBtn.disabled = true;

  const person = PEOPLE[currentPerson];

  triangle.classList.remove("show");
  hint.textContent = "Consulting the void...";
  restartAnimation("shaking");

  setTimeout(() => {
    setColor(person.color);
    answerEl.textContent = pickAnswer(person.answers);
    fitText();
    triangle.classList.add("show");
    mouth.classList.remove("talking");
    void mouth.offsetWidth; // restart the talking animation
    mouth.classList.add("talking");
    hint.textContent = `${person.name} (${person.tagline}) answered: “${question}”`;
    busy = false;
    shakeBtn.disabled = false;
  }, reducedMotion ? 200 : 950);
}

form.addEventListener("submit", (e) => { e.preventDefault(); ask(); });
ball.addEventListener("click", ask);
ball.addEventListener("animationend", () => ball.classList.remove("shaking", "nudge"));
mouth.addEventListener("animationend", () => mouth.classList.remove("talking"));
window.addEventListener("resize", fitText);
fitText();
