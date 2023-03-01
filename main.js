export const saludar = (saludo) => saludo;

function messageAle(messages) {
  return messages[Math.floor(Math.random() * messages.length)]; 
}
