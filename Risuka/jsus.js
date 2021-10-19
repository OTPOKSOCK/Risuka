const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
const butt = document.getElementById('butt');

let myColor = null;

document.getElementById('color').oninput = function() {
    myColor = this.value;
    console.log(this.value);
}

butt.onclick = function() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
ctx.lineWidth = 10;

canvas.onmousedown = function(event) {
    ctx.lineCap = 'round';
    ctx.strokeStyle = myColor;
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y)
    canvas.onmousemove = function(event) {
        console.log('poop');
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = false;

    }
}