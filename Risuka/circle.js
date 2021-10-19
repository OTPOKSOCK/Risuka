canvas = document.getElementById('c1');
ctx = canvas.getContext('2d');
pi = Math.PI
ctx.arc(100, 100, 75, 0, pi * 2, false);
ctx.stroke();