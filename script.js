// Getting canvas
canvas = document.getElementById("target-id");
context = canvas.getContext("2d");
unsorted = 'orange';
sorted = 'cyan';
context.fillStyle = unsorted;
color = [];
arr = [];
intervalRunning = true;

var slider = document.getElementById("myRange");
draw(getArray(slider.value), slider.value);

// utility
function clrInterval() {
    if (intervalRunning) {
        intervalRunning = false;
        clearInterval(itvl);
    }
}

slider.oninput = function () {
    clrInterval();
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
    arr_random = new Array();
    for (var i = 0; i < length; i++)
        arr_random.push(false);
    color = arr_random;
}

// Event Listeners defined here
function draw() {
    context.clearRect(0, 0, 1100, 550);
    var wid = 1100 / arr.length - 1;
    var srt = 0;
    if (color[0])
        context.fillStyle = sorted;
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) {
            if (color[i - 1] != color[i]) {
                if (color[i]) context.fillStyle = sorted;
                else context.fillStyle = unsorted;
            }
        }
        context.fillRect(srt, 0, wid, arr[i]);
        srt += wid;
        srt++;
    }
    context.fillStyle = unsorted;
}

function mergeSort() {

}

function bubbleSort() {
    if (arr[j] > arr[j + 1]) {
        var k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
    }
    j++;
    if (j >= color.length - i - 1) {
        j = 0;
        color[color.length - i - 1] = true;
        i++;
        if (i >= arr.length) {
            clrInterval();
        }
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
    clrInterval();
    draw();
    document.getElementById("myRange").value = 50;
}

document.getElementById("quickSort").onclick = function () {
    quickSort();
}

document.getElementById("bubbleSort").onclick = function () {
    i = 0;
    j = 0;
    intervalRunning = true;
    itvl = setInterval(bubbleSort, 1);
}

document.getElementById("mergeSort").onclick = function () {
    mergeSort();
}

document.getElementById("heapSort").onclick = function () {
    mergeSort();
}