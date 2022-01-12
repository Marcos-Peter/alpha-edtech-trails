document.querySelector('#btn-increment').addEventListener('click', () => fontSize.increment());
document.querySelector('#btn-decrement').addEventListener('click', () => fontSize.decrement());
const fontSize = changeSize();

function changeSize() {
  let fontSize = 1;

  return {
      increment: function () {
          fontSize += .1;
          document.querySelector('#story').style.fontSize = fontSize + 'vh';
          console.log(`${fontSize.toFixed(1)} vh`);
      },
      decrement: function () {
          fontSize -= .1;
          document.querySelector('#story').style.fontSize = fontSize + 'vh';
          console.log(`${fontSize.toFixed(1)} vh`);
      }
  };
};