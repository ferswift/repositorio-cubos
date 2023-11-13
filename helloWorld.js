console.log("Hello World");

console.log("Adicionando mais uma linha de código");

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20,
];

const numerosFiltrados = numeros.filter((numeros) => {
  return numeros % 2 === 0;
});

console.log(numerosFiltrados);

console.log("Mais uma mensagem");

console.log("Adicionei uma License MIT");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const frutas = ["maçã", "banana", "laranja", "uva", "pera"];

for (const fruta of frutas) {
  console.log(fruta);
}

let count = 0;

while (count <= 10) {
  count++;
  console.log(count);
  console.log("looping");
}
