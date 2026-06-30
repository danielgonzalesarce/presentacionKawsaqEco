import fs from "fs";
import path from "path";

const screens = [
  ["01-splash", "Splash"],
  ["02-login", "Inicio de sesión"],
  ["03-register", "Registro"],
  ["04-onboarding-1", "Onboarding · Bienvenida"],
  ["05-onboarding-2", "Onboarding · Escanea"],
  ["06-onboarding-3", "Onboarding · Recompensas"],
  ["07-home", "Inicio"],
  ["08-scan", "Escanear"],
  ["09-chat", "Kawsaq"],
  ["10-mapa", "Mapa de acopios"],
  ["11-recompensas", "Canjear puntos"],
  ["12-scan-result", "Resultado escaneo"],
  ["13-mis-reciclajes", "Mis reciclajes"],
  ["14-dashboard", "Mi impacto"],
];

const dir = path.join("public", "screenshots", "prototype");
fs.mkdirSync(dir, { recursive: true });

for (const [file, title] of screens) {
  const num = file.slice(0, 2);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 720" fill="none">
  <rect width="360" height="720" fill="#081C15"/>
  <rect width="360" height="100" fill="#1B4332"/>
  <text x="24" y="44" fill="#52B788" font-family="system-ui,sans-serif" font-size="13" font-weight="600">KawsaqEco</text>
  <text x="24" y="72" fill="#94A394" font-family="system-ui,sans-serif" font-size="11">Pantalla ${num}/14</text>
  <rect x="24" y="120" width="312" height="480" rx="16" fill="#1B4332"/>
  <text x="180" y="370" text-anchor="middle" fill="#D8F3DC" font-family="system-ui,sans-serif" font-size="20" font-weight="700">${title}</text>
  <rect y="660" width="360" height="60" fill="#1B4332"/>
</svg>`;
  fs.writeFileSync(path.join(dir, `${file}.svg`), svg);
}

console.log(`Created ${screens.length} prototype SVG placeholders`);
