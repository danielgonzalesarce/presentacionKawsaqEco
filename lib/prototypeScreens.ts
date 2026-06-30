export type PrototypeScreen = {
  id: number;
  label: string;
  fileName: string;
  src: string;
};

/** 14 pantallas del prototipo KawsaqEco (orden de recorrido) */
export const PROTOTYPE_SCREENS: PrototypeScreen[] = [
  { id: 1, label: "Splash", fileName: "01-splash.png", src: "/screenshots/prototype/01-splash.png" },
  { id: 2, label: "Inicio de sesión", fileName: "02-login.png", src: "/screenshots/prototype/02-login.png" },
  { id: 3, label: "Registro", fileName: "03-register.png", src: "/screenshots/prototype/03-register.png" },
  { id: 4, label: "Onboarding · Bienvenida", fileName: "04-onboarding-1.png", src: "/screenshots/prototype/04-onboarding-1.png" },
  { id: 5, label: "Onboarding · Escanea", fileName: "05-onboarding-2.png", src: "/screenshots/prototype/05-onboarding-2.png" },
  { id: 6, label: "Onboarding · Recompensas", fileName: "06-onboarding-3.png", src: "/screenshots/prototype/06-onboarding-3.png" },
  { id: 7, label: "Inicio", fileName: "07-home.png", src: "/screenshots/prototype/07-home.png" },
  { id: 8, label: "Escanear", fileName: "08-scan.png", src: "/screenshots/prototype/08-scan.png" },
  { id: 9, label: "Kawsaq", fileName: "09-chat.png", src: "/screenshots/prototype/09-chat.png" },
  { id: 10, label: "Mapa de acopios", fileName: "10-mapa.png", src: "/screenshots/prototype/10-mapa.png" },
  { id: 11, label: "Canjear puntos", fileName: "11-recompensas.png", src: "/screenshots/prototype/11-recompensas.png" },
  { id: 12, label: "Resultado escaneo", fileName: "12-scan-result.png", src: "/screenshots/prototype/12-scan-result.png" },
  { id: 13, label: "Mis reciclajes", fileName: "13-mis-reciclajes.png", src: "/screenshots/prototype/13-mis-reciclajes.png" },
  { id: 14, label: "Mi impacto", fileName: "14-dashboard.png", src: "/screenshots/prototype/14-dashboard.png" },
];
