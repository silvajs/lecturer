(function () {

    var clockDom = document.getElementById('clock2');
    if (!clockDom.getContext) {
        return;
    }

    var ctx = clockDom.getContext('2d');
    var winRatio = window.devicePixelRatio;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    clockDom.style.width = width + 'px';
    clockDom.style.height = height + 'px';
    width = ctx.canvas.width = width * winRatio;
    height = ctx.canvas.height = height * winRatio;
    var r = width / 2;


    function drawClockBackground() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(r, r);

        ctx.lineWidth = 10 * winRatio;
        ctx.arc(0, 0, r - 5 * winRatio, 0, 2 * Math.PI, false);
        ctx.stroke();
    
        // draw the clock number
        var clockNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 18 * winRatio + 'px Arial';
        clockNumbers.forEach(function (number, index) {
            var rad = (2 * Math.PI / 12) * index;
            var x = Math.cos(rad) * (r - 30 * winRatio);
            var y = Math.sin(rad) * (r - 30 * winRatio);
            ctx.fillText(number, x, y);
        });

        // draw the clock munite dot
        for (var i = 0; i < 60; i++) {
            var rad = (2 * Math.PI / 60) * i;
            var arcx = Math.cos(rad) * (r - 17 * winRatio);
            var arcy = Math.sin(rad) * (r - 17 * winRatio);
            ctx.beginPath();
            if (i % 5 === 0) {
                ctx.fillStyle = '#000';
            } else {
                ctx.fillStyle = '#ccc';
            }
            ctx.arc(arcx, arcy, 2 * winRatio, 0, 2 * Math.PI, false);
            ctx.fill();
        }

    }

    function drawHour(hour, minute) {
        ctx.save();
        var rad = (hour - 3) * 2 * Math.PI / 12;
        var mrad = (minute * 30 / 60) * Math.PI / 180;
        ctx.rotate(rad + mrad);
        ctx.beginPath();
        ctx.lineWidth = 6 * winRatio;
        ctx.lineCap = "round";
        ctx.moveTo(-10 * winRatio, 0);
        ctx.lineTo(r - 55 * winRatio, 0);
        ctx.stroke();
        ctx.restore();
    }

    function drawMinute(minute) {
        ctx.save();
        var rad = (minute - 15) * 2 * Math.PI / 60;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.lineWidth = 3 * winRatio;
        ctx.lineCap = "round";
        ctx.moveTo(-10 * winRatio, 0);
        ctx.lineTo(r - 30 * winRatio, 0);
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
        ctx.moveTo(-20 * winRatio, -2 * winRatio);
        ctx.lineTo(-20 * winRatio, 2 * winRatio);
        ctx.lineTo(r - 15 * winRatio, 1 * winRatio);
        ctx.lineTo(r - 15 * winRatio, -1 * winRatio);
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
        ctx.arc(0, 0, 3 * winRatio, 0, 2 * Math.PI, false);
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
