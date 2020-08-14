// Global Variables
canvas = document.getElementById("target-id");
context = canvas.getContext("2d");
col = ['#fcba03', '#d60909', '#fc03f4', '#03f4fc', '#9dfc03']; //['yellow','red','pink','cyan','green']
arr_col = [];
arr = [];
intervalRunning = false;
sliderSize = document.getElementById("sizeId");
sliderSpeed = document.getElementById("speedId");
maxTime = 1000;
speed = maxTime - sliderSpeed.value;
if (speed <= 5) speed *= speed * 2;
if (speed <= 20) speed *= speed;
const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
});

// This variable should contain the number of running algorithm at all times
// 0 : no runningAlgo
// 1 : mergeSort
// 2 : quickSort
// 3 : heapSort
// 4 : bubbleSort
runningAlgo = 0;


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
    speed = maxTime - this.value;
    if (speed <= 20) speed *= speed;
    changed = intervalRunning;
    clrInterval();
    if (runningAlgo == 4)
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

async function mergeSort(i, j) {
    let mid = Math.floor((i + j) / 2);
    if (i != mid) {
        await setAsyncTimeout(() => {
            mergeSort(i, mid);
        }, 500);
        await setAsyncTimeout(() => {
            mergeSort(mid + 1, j);
        }, 500);
    }
    // await merge(i, mid, mid + 1, j);
    await setAsyncTimeout(() => {
        merge(i, mid, mid + 1, j);
        draw();
    }, 500);
}
// Utility for mergeSort
async function merge(i0, j0, i1, j1) {
    let i = i0, j = i1;
    let arr_temp = new Array();
    while (i <= j0 || j <= j1) {
        if (i <= j0 && j <= j1) {
            if (arr[i] < arr[j]) {
                arr_temp.push(arr[i]);
                i++;
            }
            else {
                arr_temp.push(arr[j]);
                j++;
            }
        }
        else if (i > j0) {
            while (j <= j1) {
                arr_temp.push(arr[j]);
                j++;
            }
        }
        else if (j > j1) {
            while (i <= j0) {
                arr_temp.push(arr[i]);
                i++;
            }
        }
    }
    for (i = 0; i < arr_temp.length; i++) {
        arr[i0 + i] = arr_temp[i];
    }
    // console.log(1);
    // await setAsyncTimeout(() => {
    //     draw();
    //     console.log(2);
    //     // Do more stuff
    // }, 10000);
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
            runningAlgo = 0;
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
    runningAlgo = 0;
    draw();
}


document.getElementById("bubbleSort").onclick = function () {
    if (intervalRunning)
        return;
    if (!changed) {
        i = 0;
        j = 0;
        arr_col[0] = col[0];
    }
    runningAlgo = 4;
    intervalRunning = true;
    changed = false;
    itvl = setInterval(bubbleSort, speed);
}

document.getElementById("mergeSort").onclick = function () {
    mergeSort(0, arr.length - 1);
    draw();
}

document.getElementById("heapSort").onclick = function () {
    heapSort();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swapp(arr, a, b) {

    await sleep(speed);
    [arr[a], arr[b]] = [arr[b], arr[a]];
    draw();
}


document.getElementById("quickSort").onclick = function () {
    runningAlgo =
        QuickSort(0, arr.length - 1);
    draw();

}

async function QuickSort(start, end) {

    if (start < end) {

        var pindex = await Partition(start, end);
        await Promise.all([QuickSort(start, pindex - 1), QuickSort(pindex + 1, end)]);


    }
    else {
        if (start < arr.length)
            arr_col[start] = col[4];
        else if (end < arr.length)
            arr_col[end] = col[4];
        await sleep(100);
        draw();

    }

}

async function Partition(start, end) {
    var pivot = arr[end];
    var inti_col = arr_col[end];
    arr_col[end] = col[2];

    var pindex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] <= pivot) {

            //   var inti_col_i=arr_col[i];
            //   var inti_col_pindex=arr_col[pindex];
            //   arr_col[i]=col[3];
            //   arr_col[pindex]=col[1];

            await swapp(arr, i, pindex);

            //   arr_col[i]=inti_col_i;
            //  arr_col[pindex]=inti_col_pindex;
            pindex++;
        }
    }
    arr_col[pindex] = col[4];
    if (pindex != end)
        arr_col[end] = inti_col;

    await swapp(arr, end, pindex);

    return pindex;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
