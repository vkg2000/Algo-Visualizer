var slider = document.getElementById("myRange");
draw(getArray(slider.value), slider.value);

arr = [];

slider.oninput = function () {
    getArray(this.value);
    draw();
}

function getArray(length) {
    var arr_random = new Array();
    var arr_range = 500;
    for (var i = 0; i < length; i++) {
        arr_random.push(Math.round(Math.random() * arr_range));
    }
    arr = arr_random;
}

function draw() {
    var div = document.getElementById("target-id");
    var wid = 1100 / arr.length - 1;
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        html += "<div class= 'bar'style = 'height: " + arr[i] + "px; width: " + wid + "px;'></div> " + "<br>";
        div.innerHTML = html;
    }
}

document.getElementById("reset").onclick = function () {
    getArray(50);
    draw();
}

document.getElementById("mergeSort").onclick = function () {
    mergeSort;
}