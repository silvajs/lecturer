(function () {

    var clockDom = document.getElementById('clock');
    if (!clockDom.getContext) {
        return;
    }

    var ctx = clockDom.getContext('2d');
    var r = 100;
    
    // var winRatio  = window.devicePixelRatio;
    // var width = ctx.canvas.width;
    // var height = ctx.canvas.height;
    // clockDom.style.width = width + 'px';
    // clockDom.style.height = height + 'px';
    // ctx.canvas.width = width * winRatio;
    // ctx.canvas.height = height * winRatio;

    function drawClockBackground() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(100, 100);

        ctx.lineWidth = 10;
        // var gradient = ctx.createLinearGradient(0, 0, 100, -100);
        // gradient.addColorStop(0, '#000');
        // gradient.addColorStop(1, 'gray');
        // ctx.strokeStyle = gradient;
        ctx.arc(0, 0, r - 5, 0, 2 * Math.PI, false);
        ctx.stroke();
    
        // draw the clock number
        var clockNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '18px Arial';
        clockNumbers.forEach(function (number, index) {
            var rad = (2 * Math.PI / 12) * index;
            var x = Math.cos(rad) * (r - 30);
            var y = Math.sin(rad) * (r - 30);
            ctx.fillText(number, x, y);
        });

        // draw the clock munites
        for (var i = 0; i < 60; i++) {
            var rad = (2 * Math.PI / 60) * i;
            var arcx = Math.cos(rad) * (r - 17);
            var arcy = Math.sin(rad) * (r - 17);
            ctx.beginPath();
            if (i % 5 === 0) {
                ctx.fillStyle = '#000';
            } else {
                ctx.fillStyle = '#ccc';
            }
            ctx.arc(arcx, arcy, 2, 0, 2 * Math.PI, false);
            ctx.fill();
        }
        
    }

    function drawHour(hour, minute) {
        ctx.save();
        var rad = (hour - 3) * 2 * Math.PI / 12;
        var mrad = (minute * 30 / 60) * Math.PI / 180;
        ctx.rotate(rad + mrad);
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        ctx.moveTo(-10, 0);
        ctx.lineTo(r - 55, 0);
        ctx.stroke();
        ctx.restore();
    }

    function drawMinute(minute) {
        ctx.save();
        var rad = (minute - 15) * 2 * Math.PI / 60;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.moveTo(-10, 0);
        ctx.lineTo(r - 30, 0);
        ctx.stroke();
        ctx.restore();
    }

    function drawSecond(second) {
        ctx.save();
        var rad = (second - 15) * 2 * Math.PI / 60;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.fillStyle = '#c14543';
        ctx.moveTo(-20, -2);
        ctx.lineTo(-20, 2);
        ctx.lineTo(r - 15, 1);
        ctx.lineTo(r - 15, -1);
        ctx.fill();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        var d = new Date();
        drawClockBackground();
        drawHour(d.getHours(), d.getMinutes());
        drawMinute(d.getMinutes())
        drawSecond(d.getSeconds());
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(0, 0, 3, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    }

    draw();
    setInterval(draw, 1000);
})();
