// ---------- Faces drawn on the 8-ball ----------
// One entry per person in people.js (same key).
// The drawings are SVG on a 100 x 100 grid: the ball is the circle centered at (50, 50),
// and the mouth (the answer window) covers roughly x 28-72, y 50-94.
//   skin:    the color of the ball
//   inside:  drawn on the ball and clipped to its round shape (hair, eyes, panels)
//   outside: drawn on top and allowed to stick out past the ball (hats, hair, mustache)
const FACES = {
  cartman: {
    skin: "#f6cfa8",
    inside: `
      <ellipse cx="43.5" cy="43" rx="7" ry="6.5" fill="#fff" stroke="#000" stroke-width="0.6"/>
      <ellipse cx="56.5" cy="43" rx="7" ry="6.5" fill="#fff" stroke="#000" stroke-width="0.6"/>
      <circle cx="45" cy="44" r="1.5" fill="#000"/>
      <circle cx="55" cy="44" r="1.5" fill="#000"/>`,
    outside: `
      <path d="M1,34 A50,50 0 0 1 99,34 Z" fill="#1aa3a8"/>
      <rect x="0" y="28" width="100" height="9" rx="4.5" fill="#f5c518"/>
      <circle cx="50" cy="-6" r="7" fill="#f5c518"/>`
  },
  r2d2: {
    skin: "#e5e8ed",
    inside: `
      <rect x="14" y="20" width="12" height="12" rx="1" fill="#1e4fd8"/>
      <rect x="38" y="6" width="24" height="9" rx="1" fill="#1e4fd8"/>
      <rect x="74" y="20" width="12" height="12" rx="1" fill="#1e4fd8"/>
      <rect x="30" y="38" width="40" height="4" fill="#1e4fd8"/>
      <rect x="0" y="45" width="100" height="3" fill="#8b95a5"/>
      <circle cx="50" cy="27" r="8" fill="#111" stroke="#9aa4b2" stroke-width="2"/>
      <circle cx="50" cy="27" r="2.5" fill="#ef4444"/>
      <circle cx="78" cy="39" r="2.2" fill="#ef4444"/>`,
    outside: ``
  },
  borat: {
    skin: "#d9a47a",
    inside: `
      <ellipse cx="50" cy="2" rx="56" ry="20" fill="#2a1a10"/>
      <rect x="27" y="27" width="18" height="5" rx="2.5" fill="#2a1a10" transform="rotate(-6 36 29.5)"/>
      <rect x="55" y="27" width="18" height="5" rx="2.5" fill="#2a1a10" transform="rotate(6 64 29.5)"/>
      <circle cx="37" cy="37" r="2.4" fill="#1a1a1a"/>
      <circle cx="63" cy="37" r="2.4" fill="#1a1a1a"/>
      <path d="M50,36 Q46,43 50,45" stroke="#a87552" stroke-width="1.5" fill="none"/>`,
    outside: `
      <path d="M24,54 Q30,44 50,48 Q70,44 76,54 Q66,51 50,53 Q34,51 24,54 Z" fill="#2a1a10"/>`
  },
  hulk: {
    skin: "#5fa83f",
    inside: `
      <path d="M0,0 H100 V20 Q75,14 50,18 Q25,14 0,20 Z" fill="#141414"/>
      <path d="M26,27 L46,34" stroke="#1f3a12" stroke-width="5" stroke-linecap="round"/>
      <path d="M74,27 L54,34" stroke="#1f3a12" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="37" cy="40" rx="4.5" ry="3" fill="#fff"/>
      <ellipse cx="63" cy="40" rx="4.5" ry="3" fill="#fff"/>
      <circle cx="38" cy="40" r="1.8" fill="#000"/>
      <circle cx="62" cy="40" r="1.8" fill="#000"/>`,
    outside: ``
  },
  voldemort: {
    skin: "#dfe4da",
    inside: `
      <ellipse cx="37" cy="35" rx="5" ry="3.2" fill="#dc2626"/>
      <ellipse cx="63" cy="35" rx="5" ry="3.2" fill="#dc2626"/>
      <ellipse cx="37" cy="35" rx="0.9" ry="2.8" fill="#111"/>
      <ellipse cx="63" cy="35" rx="0.9" ry="2.8" fill="#111"/>
      <path d="M46.5,41 l1.5,5" stroke="#6b7280" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M53.5,41 l-1.5,5" stroke="#6b7280" stroke-width="1.6" stroke-linecap="round"/>`,
    outside: ``
  },
  trump: {
    skin: "#eea25c",
    inside: `
      <ellipse cx="37" cy="37" rx="7" ry="4" fill="#f8d2a6"/>
      <ellipse cx="63" cy="37" rx="7" ry="4" fill="#f8d2a6"/>
      <ellipse cx="37" cy="37" rx="2.5" ry="1.3" fill="#2a1a10"/>
      <ellipse cx="63" cy="37" rx="2.5" ry="1.3" fill="#2a1a10"/>
      <path d="M30,31 Q37,28 44,31" stroke="#e2bf63" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M56,31 Q63,28 70,31" stroke="#e2bf63" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    outside: `
      <path d="M2,30 Q2,2 46,-2 Q84,-4 98,20 Q92,16 80,15 Q90,22 92,30 Q70,16 44,20 Q24,22 2,30 Z"
            fill="#f4d25a" stroke="#d4a62a" stroke-width="1"/>`
  },
  ronaldo: {
    skin: "#d9a074",
    inside: `
      <path d="M0,0 H100 V24 Q86,16 74,18 Q50,12 26,18 Q14,16 0,24 Z" fill="#1a1208"/>
      <path d="M30,32 L44,30" stroke="#1a1208" stroke-width="3" stroke-linecap="round"/>
      <path d="M56,30 L70,32" stroke="#1a1208" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="37" cy="37" rx="4" ry="2.6" fill="#fff"/>
      <ellipse cx="63" cy="37" rx="4" ry="2.6" fill="#fff"/>
      <circle cx="37.5" cy="37" r="1.6" fill="#3b2412"/>
      <circle cx="62.5" cy="37" r="1.6" fill="#3b2412"/>
      <path d="M50,38 Q47,45 50,46" stroke="#a8764f" stroke-width="1.5" fill="none"/>`,
    outside: `
      <path d="M26,14 Q30,-6 52,-6 Q72,-6 76,12 Q64,6 50,8 Q36,6 26,14 Z" fill="#1a1208"/>`
  }
};

// Used for a person that has no face yet: a plain black 8-ball
const DEFAULT_FACE = { skin: "#2a2a32", inside: "", outside: "" };
