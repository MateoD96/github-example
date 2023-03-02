export const saludar = (saludo) => saludo;

const messageAle = (arrMessages = []) =>
  arrMessages[Math.floor(Math.random() * arrMessages.length)] ||
  "No hay mensajes";
