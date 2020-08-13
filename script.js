// Global Variables
canvas = document.getElementById("target-id");
context = canvas.getContext("2d");
col = ['#fcba03', '#d60909', '#fc03f4', '#03f4fc', '#9dfc03']; //['yellow','red','pink','cyan','green']
arr_col = [];
arr = [];
intervalRunning = false;
sliderSize = document.getElementById("sizeId");
sliderSpeed = document.getElementById("speedId");
speed = sliderSpeed.value;
changed = false;

getArray(sliderSize.value);
draw();

// Utility
function clrInterval() {
    if (intervalRunning) {
        intervalRunning = false;
        clearInterval(itvl);
    }
}

sliderSize.oninput = function () {
    clrInterval();
    getArray(this.value);
    draw();
}

sliderSpeed.oninput = function () {
    speed = 2000 - this.value;
    changed = intervalRunning;
    clrInterval();
    document.getElementById("bubbleSort").onclick();
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
        arr_random.push(col[0]);
    arr_col = arr_random;
}

// Event Listeners defined here
function draw() {
    context.clearRect(0, 0, 1100, 550);
    var wid = 1100 / arr.length - 1;
    var srt = 0;
    for (var i = 0; i < arr.length; i++) {
        context.fillStyle = arr_col[i];
        context.fillRect(srt, 0, wid, arr[i]);
        srt += wid;
        srt++;
    }
}

function mergeSort() {

}

function bubbleSort() {
    var kk = j + 1;
    if (arr[j] > arr[j + 1]) {
        var k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
        arr_col[kk] = col[1];
        arr_col[kk + 1] = col[2];
    }
    else {
        arr_col[kk] = col[2];
        arr_col[kk + 1] = col[1];
    }
    j++;
    var b = false;
    if (j >= arr.length - i - 1) {
        arr_col[j + 1] = col[3];
        j = 0;
        b = true;
        arr_col[arr.length - i - 1] = col[3];
        i++;
        if (i >= arr.length) {
            clrInterval();
            for (i = 0; i < arr.length; i++)
                arr_col[i] = col[4];
        }
    }
    draw();
    if (!b) {
        arr_col[kk] = col[0];
        arr_col[kk + 1] = col[0];
    }
}

function quickSort() {

}

function heapSort() {

}

// Event Listeners declared here
document.getElementById("reset").onclick = function () {
    getArray(sliderSize.value);
    clrInterval();
    draw();
}

document.getElementById("quickSort").onclick = function () {
    quickSort();
}

document.getElementById("bubbleSort").onclick = function () {
    if (!changed) {
        i = 0;
        j = 0;
    }
    intervalRunning = true;
    changed = false;
    itvl = setInterval(bubbleSort, speed);
}

document.getElementById("mergeSort").onclick = function () {
    mergeSort();
}

document.getElementById("heapSort").onclick = function () {
    heapSort();
}