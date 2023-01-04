const input = document.querySelector('input');
const btn = document.querySelector('button');
const wynik = document.querySelector('.wynik');

const wylicz = () => {
  const puszka = input.value / 4;
  wynik.textContent = `Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: ${Math.ceil(puszka)}`;
};

btn.addEventListener('click', wylicz);
