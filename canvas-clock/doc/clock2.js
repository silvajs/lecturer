(function () {

    var clockDom = document.getElementById('clock2');
    if (!clockDom.getContext) {
        return;
    }

    var ctx = clockDom.getContext('2d');
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var r = width / 2;


    function drawClockBackground() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(r, r);

        ctx.lineWidth = width / 20;
        ctx.arc(0, 0, r - ctx.lineWidth/2, 0, 2 * Math.PI, false);
        ctx.stroke();
    
        // draw the clock number
        var clockNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 18/200*width + 'px Arial';
        clockNumbers.forEach(function (number, index) {
            var rad = (2 * Math.PI / 12) * index;
            var x = Math.cos(rad) * (r - 30/200*width);
            var y = Math.sin(rad) * (r - 30/200*width);
            ctx.fillText(number, x, y);
        });

        // draw the clock munite dot
        for (var i = 0; i < 60; i++) {
            var rad = (2 * Math.PI / 60) * i;
            var arcx = Math.cos(rad) * (r - 18/200*width);
            var arcy = Math.sin(rad) * (r - 18/200*width);
            var numr;
            ctx.beginPath();
            if (i % 5 === 0) {
                ctx.fillStyle = '#000';
                numr = 4/200*width;
            } else {
                ctx.fillStyle = '#ccc';
                numr = 2/200*width;
            }
            ctx.arc(arcx, arcy, 2/200*width, 0, 2 * Math.PI, false);
            ctx.fill();
        }

    }

    function drawHour(hour, minute) {
        ctx.save();
        var rad = (hour - 3) * 2 * Math.PI / 12;
        var mrad = (minute * 30 / 60) * Math.PI / 180;
        ctx.rotate(rad + mrad);
        ctx.beginPath();
        ctx.lineWidth = 6/200*width;
        ctx.lineCap = "round";
        ctx.moveTo(-10, 0);
        ctx.lineTo((r / 2), 0);
        ctx.stroke();
        ctx.restore();
    }

    function drawMinute(minute) {
        ctx.save();
        var rad = (minute - 15) * 2 * Math.PI / 60;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.lineWidth = 3/200*width;
        ctx.lineCap = "round";
        ctx.moveTo(-10, 0);
        ctx.lineTo(r - 30/200*width, 0);
        ctx.stroke();
        ctx.restore();
    }

    function drawSecond(second) {
        ctx.save();
        var rad = (second - 15) * 2 * Math.PI / 60;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.lineWidth = 1/200*width;
        ctx.lineCap = "round";
        ctx.fillStyle = '#c14543';
        ctx.moveTo(-20, -2);
        ctx.lineTo(-20, 2);
        ctx.lineTo(r - 18/200*width, 1);
        ctx.lineTo(r - 18/200*width, -1);
        ctx.fill();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        var d = new Date();
        drawClockBackground();
        drawHour(d.getHours(), d.getMinutes());
        drawMinute(d.getMinutes())
        drawSecond(d.getSeconds());
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(0, 0, 3/200*width, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    }

    function renderDate() {
        var d = new Date();
        var html = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日   ';
        if (d.getHours() > 12) {
            html += '下午';
        } else {
            html += '上午';
        }
        document.getElementById('time').innerHTML = html;
    }

    renderDate();
    draw();
    setInterval(draw, 1000);
})();
