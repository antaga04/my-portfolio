/* const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
let interval = null;
let isAnimating = false;

document.querySelector('h1').addEventListener('mouseenter', (event) => {
  if (!isAnimating) {
    isAnimating = true;
    let iteration = 0;
    let currentValue = event.target.dataset.value;

    interval = setInterval(() => {
      const newText = Array.from(currentValue)
        .map((letter, index) => {
          if (index < iteration && letter !== ' ') {
            return event.target.dataset.value[index];
          } else if (letter === ' ') {
            return ' ';
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      event.target.innerText = newText;
      iteration += 1 / 3;

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
        isAnimating = false;
      }
    }, 35);
  }
});

document.querySelector('h1').addEventListener('mouseleave', (event) => {
  if (isAnimating) {
    return;
  }

  clearInterval(interval);
  event.target.innerText = event.target.dataset.value;
});
 */