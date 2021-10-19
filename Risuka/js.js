const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
const butt = document.getElementById('butt');

let myColor = null;

document.getElementById('color').oninput = function() {
    myColor = this.value;
    console.log(this.value);
}
butt.onclick = function() {
    ctx.clearRect(0, 0, 400, 200);
}
canvas.onmousedown = function(event) {
    canvas.onmousemove = function(event) {
        console.log('poop');
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x - 5, y - 5, 10, 10);
        ctx.fillStyle = myColor;
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = false;
    }
}