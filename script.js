document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < 64; i++) {
      let div = document.createElement('div');
      div.className = (Math.floor(i / 8) % 2 === i % 2) ? 'white' : 'black';
      document.querySelector('.chessboard').appendChild(div);
  }
});
