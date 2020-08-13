var slider = document.getElementById("myRange");
draw(getArray(slider.value), slider.value);

arr = [];

slider.oninput = function () {
    getArray(this.value);
    draw();
}

// arr of random numbers of given size
function getArray(length) {
    var arr_random = new Array();
    var arr_range = 500;
    for (var i = 0; i < length; i++) {
        arr_random.push(Math.round(Math.random() * arr_range));
    }
    arr = arr_random;
}

// Event Listeners defined here
function draw() {
    var div = document.getElementById("target-id");
    var wid = 1100 / arr.length - 1;
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        html += "<div class= 'bar'style = 'height: " + arr[i] + "px; width: " + wid + "px;'></div> " + "<br>";
        div.innerHTML = html;
    }
}

function mergeSort() {

}

function bubbleSort() {
    var i = 0, j = 0;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                var k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k;
            }
            draw();
        }
        console.log("Running");
    }
}

function quickSort() {

}

function heapSort() {

}

// Event Listeners declared here
document.getElementById("reset").onclick = function () {
    getArray(50);
    draw();
    document.getElementById("myRange").value = 50;
}

document.getElementById("quickSort").onclick = function () {
    quickSort();
}

document.getElementById("bubbleSort").onclick = function () {
    bubbleSort();
}

document.getElementById("mergeSort").onclick = function () {
    mergeSort();
}

document.getElementById("heapSort").onclick = function () {
    mergeSort();
}