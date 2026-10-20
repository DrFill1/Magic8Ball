// ---------- Answer data ----------
// Each person has a name, a short tagline, a triangle color and a list of answers.
// Answers go from yes, through maybe/random, to no.
// To add a new person, add a new entry here; the buttons are created automatically.
// Keep answers short (under ~40 characters) so they fit inside the triangle.
const PEOPLE = {
  cartman: {
    name: "Eric Cartman", tagline: "from South Park", color: "#dc2626",
    answers: [
      "Sweeeet. Yes.",
      "Kewl. Totally yes.",
      "Yes, but I'm still mad about it.",
      "Whatever, I do what I want.",
      "Ask my mom. She says yes to everything.",
      "That's hella lame. No.",
      "Respect my authoritah! No.",
      "Screw you guys, I'm going home."
    ]
  },
  r2d2: {
    name: "R2-D2", tagline: "astromech droid", color: "#2563eb",
    answers: [
      "Beep boop! (Yes!)",
      "Bwee-oo-weep! (Definitely.)",
      "Boop? (Ask C-3PO.)",
      "Whirrr... click. (Maybe.)",
      "Beeeep. (Low battery. Ask later.)",
      "Bweeoop! (Help me, Obi-Wan.)",
      "Bzzt! (No.)",
      "BWAAAAAAH! (Absolutely not!)"
    ]
  },
  borat: {
    name: "Borat", tagline: "journalist from Kazakhstan", color: "#78716c",
    answers: [
      "Very nice! Great success!",
      "Wa-wa-wee-wa! Yes!",
      "Is nice. I like. High five!",
      "In my country we say: maybe.",
      "My neighbour Nursultan say yes.",
      "Is not nice.",
      "No... NOT! Yes. Not.",
      "Not! Very not."
    ]
  },
  hulk: {
    name: "The Hulk", tagline: "always angry", color: "#16a34a",
    answers: [
      "HULK SAY YES!",
      "YES! HULK HAPPY!",
      "Puny human. Fine. Yes.",
      "HULK NOT KNOW. HULK SMASH ANYWAY.",
      "HULK SMASH QUESTION!",
      "Ask Banner. Hulk busy.",
      "NO! HULK ANGRY!",
      "HULK SAY NO. HULK SAY LOUD NO."
    ]
  },
  voldemort: {
    name: "Lord Voldemort", tagline: "the Dark Lord", color: "#334155",
    answers: [
      "Yes... the Dark Lord approves.",
      "Yes. If it ruins Potter's day.",
      "My Death Eaters say yes.",
      "There is no yes or no. Only power.",
      "Ask Wormtail. I am busy.",
      "You dare ask Lord Voldemort?",
      "Not even if you paid me in Horcruxes.",
      "Avada Kedavra. That means no."
    ]
  },
  trump: {
    name: "Donald Trump", tagline: "US President, very tremendous", color: "#9f5612",
    answers: [
      "Yes. Tremendous. Believe me.",
      "Huge yes. The biggest.",
      "Many people are saying yes.",
      "We'll see what happens.",
      "Nobody asks better questions. Maybe.",
      "It's rigged. Ask again.",
      "Fake news. Total no.",
      "Wrong! Sad!"
    ]
  },
  ronaldo: {
    name: "Cristiano Ronaldo", tagline: "footballer, very humble", color: "#be123c",
    answers: [
      "SIUUUUU! Yes!",
      "Yes. I am the best. Simple.",
      "Calma, calma. Yes.",
      "Ask me after my 1000th goal.",
      "Maybe. After training.",
      "Not today. I'm doing my hair.",
      "Coca-Cola? No. Água!",
      "No. And I will still score."
    ]
  }
};

