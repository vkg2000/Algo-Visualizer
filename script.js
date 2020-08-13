// Getting canvas
canvas = document.getElementById("target-id");
context = canvas.getContext("2d");
context.fillStyle = 'orange';
// context.lineWidth = 2;
arr = [];

var slider = document.getElementById("myRange");
draw(getArray(slider.value), slider.value);



// Utility
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
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
    context.clearRect(0, 0, 1100, 550);
    var wid = 1100 / arr.length - 1;
    wid /= 3.5;
    // var html = "";
    var srt = 0;
    for (var i = 0; i < arr.length; i++) {
        // context.beginPath();
        context.fillRect(srt, 0, wid, arr[i] / 3.5);
        // context.fillRect();
        srt += wid;
        srt++;
    }
}

function mergeSort() {

}

function bubbleSort() {
    console.log("YES");
    if (arr[j] > arr[j + 1]) {
        var k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
    }
    j++;
    if (j >= arr.length - 1) {
        j = 0;
        i++;
        if (i >= arr.length) clearInterval(itvl);
    }
    draw();
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
    i = 0;
    j = 0;
    itvl = setInterval(bubbleSort, 1);
}

document.getElementById("mergeSort").onclick = function () {
    mergeSort();
}

document.getElementById("heapSort").onclick = function () {
    mergeSort();
}