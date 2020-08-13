var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
draw(getarr(slider.value), slider.value);

slider.oninput = function () {
    output.innerHTML = this.value;
    var arr = getArray(this.value);
    draw(arr, this.value);
}



function getArray(length) {
    var arr_random = new Array();
    var arr_range = 500;
    for (var i = 0; i < length; i++) {
        arr_random.push(Math.round(Math.random() * arr_range));
    }
    return arr_random;

}

function draw(arr, size) {
    var div = document.getElementById("target-id");
    var wid = 1100 / arr.length - 1;
    var html = "";
    for (var i = 0; i < size; i++) {
        html += "<div class= 'bar'style = 'height: " + arr[i] + "px; width: " + wid + "px;'></div> " + "<br>";

        div.innerHTML = html;
    }
}
