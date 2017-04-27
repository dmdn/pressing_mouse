var num = 0;
document.addEventListener('click', function () {
    var x = event.pageX;
    var y = event.pageY;
    num++;
    var span = document.createElement('span');
    span.className = "pressing";
    span.textContent = num;
    document.body.appendChild(span);

    span.style.cssText = "display: block; \
        background-color: #ffe766; \
        position: absolute; \
        width: 16px; \
        height: 16px; \
        border-radius: 50%; \
        text-align: center; \
        font-size: 14px; \
        border-radius: 2px solid #fff; \
    ";

    span.style.left = x + 'px';
    span.style.top = y + 'px';
})