console.log("Hello World");

console.log("Adicionando mais uma linha de código");

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20,
];

const numerosFiltrados = numeros.filter((numeros) => {
  return numeros % 2 === 0;
});

console.log(numerosFiltrados);
