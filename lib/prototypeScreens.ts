export type PrototypeScreen = {
  id: number;
  label: string;
  fileName: string;
  src: string;
};

/** 14 pantallas del prototipo KawsaqEco (orden de recorrido) */
export const PROTOTYPE_SCREENS: PrototypeScreen[] = [
  { id: 1, label: "Splash", fileName: "01-splash.jpeg", src: "/screenshots/prototype/01-splash.jpeg" },
  { id: 2, label: "Inicio de sesión", fileName: "02-login.jpeg", src: "/screenshots/prototype/02-login.jpeg" },
  { id: 3, label: "Registro", fileName: "03-register.jpeg", src: "/screenshots/prototype/03-register.jpeg" },
  { id: 4, label: "Onboarding · Bienvenida", fileName: "04-onboarding-1.jpeg", src: "/screenshots/prototype/04-onboarding-1.jpeg" },
  { id: 5, label: "Onboarding · Escanea", fileName: "05-onboarding-2.jpeg", src: "/screenshots/prototype/05-onboarding-2.jpeg" },
  { id: 6, label: "Onboarding · Recompensas", fileName: "06-onboarding-3.jpeg", src: "/screenshots/prototype/06-onboarding-3.jpeg" },
  { id: 7, label: "Inicio", fileName: "07-home.jpeg", src: "/screenshots/prototype/07-home.jpeg" },
  { id: 8, label: "Escanear", fileName: "08-scan.jpeg", src: "/screenshots/prototype/08-scan.jpeg" },
  { id: 9, label: "Kawsaq", fileName: "09-chat.jpeg", src: "/screenshots/prototype/09-chat.jpeg" },
  { id: 10, label: "Mapa de acopios", fileName: "10-mapa.jpeg", src: "/screenshots/prototype/10-mapa.jpeg" },
  { id: 11, label: "Canjear puntos", fileName: "11-recompensas.jpeg", src: "/screenshots/prototype/11-recompensas.jpeg" },
  { id: 12, label: "Resultado escaneo", fileName: "12-scan-result.jpeg", src: "/screenshots/prototype/12-scan-result.jpeg" },
  { id: 13, label: "Mis reciclajes", fileName: "13-mis-reciclajes.jpeg", src: "/screenshots/prototype/13-mis-reciclajes.jpeg" },
  { id: 14, label: "Mi impacto", fileName: "14-dashboard.jpeg", src: "/screenshots/prototype/14-dashboard.jpeg" },
];
