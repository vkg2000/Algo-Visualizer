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

rst_state=true; //TELLS WHETHER WE ARE INSIDE ANY SORT FUNC ,IF SO THEN PAGE GET REFRESHES AND IF NOT THEN RESET WORKS AS USUAL (NO RELODING OF PAGE)

speed = maxTime - sliderSpeed.value;
if (speed <= 5) speed *= speed * 2;
if (speed <= 20) speed *= speed;

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

function sleepNow(ms) {
    var start = new Date().getTime(), expire = start + ms;
    let j = 0;
    while (new Date().getTime() < expire) { }
    return;
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
    // sleepNow(200);
}

function bubbleSort() {
    let kk = j + 1;
    if (arr[j] > arr[j + 1]) {
        let k = arr[j];
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

function heapSort() {

}

// Event Listeners declared here
document.getElementById("reset").onclick = function () {
    if(rst_state==true){
    getArray(sliderSize.value);
    clrInterval();
    runningAlgo = 0;
    draw();}
    else
        {
            window.location.reload();
            rst_state=false;
            
        }
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

// MergeSort
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("mergeSort").onclick = function () {
    runningAlgo = 1;
    rst_state=false;
    disable_all();
    mergeSort(0, arr.length - 1);
    draw();
}

async function waitcall(){
    await sleep(speed);
    draw();

}

async function mergeSort(i, j) {
    let mid = Math.floor((i + j) / 2);
    if (i != mid) {
        await Promise.all([mergeSort(i, mid),
        mergeSort(mid + 1, j)]);
    }
    await merge(i, mid + 1, j, j - i + 1);

}

async function merge(i, j, jf, len) {
    let j0 = 0;
    while (j0 <= len) {
        if (arr[i] > arr[j] && j <= jf) {
            let kk = arr[j];
            let k = j;
            while (k > i) {
                arr[k] = arr[k - 1];
                k--;
            }
            arr[k] = kk;
            await waitcall();
            j++;
        }
        i++;
        j0++;
        await waitcall();
        draw();
    }
}




//QuickSort
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(arr, a, b) {

    await sleep(speed);
    [arr[a],arr[b]]=[arr[b],arr[a]];
    draw();
}

//FUNCTION TO DISABLE ALL OTHER BUTTONS AND SLIDER WHILE RUNNING OF ANY SORTING FUNCTION

function disable_all(){
    document.getElementById("sizeId").disabled=true;
    if(runningAlgo==1)
    {
        document.getElementById("quickSort").disabled=true;
        document.getElementById("heapSort").disabled=true;
        document.getElementById("bubbleSort").disabled=true;
    }
    else if(runningAlgo==2)
    {
        document.getElementById("mergeSort").disabled=true;
        document.getElementById("heapSort").disabled=true;
        document.getElementById("bubbleSort").disabled=true;
    }
    else if(runningAlgo==3)
    {
        document.getElementById("mergeSort").disabled=true;
        document.getElementById("quickSort").disabled=true;
        document.getElementById("bubbleSort").disabled=true;
    }
    else{
        document.getElementById("mergeSort").disabled=true;
        document.getElementById("quickSort").disabled=true;
        document.getElementById("heapSort").disabled=true;
    }
    
}


document.getElementById("quickSort").onclick = function () {
    runningAlgo = 2;
    rst_state=false;
    disable_all();
    QuickSort(0, arr.length - 1);
    draw();

}

async function QuickSort(start,end)
{

    
    if(start<end)
    {

        var pindex =await Partition(start,end);
        await Promise.all([QuickSort(start,pindex-1), QuickSort(pindex+1,end)]);
    }
    else{
        if(start<arr.length)
            arr_col[start]=col[4];
        else if(end<arr.length)
            arr_col[end]=col[4];
        await sleep(100);
        draw();

    }

}

async function Partition(start,end)
{
    var pivot = arr[end];
    var inti_col=arr_col[end];
    arr_col[end]=col[2];

    var pindex = start;
    for(var i=start;i<end;i++)
    {
        if(arr[i]<=pivot)
        {
            await swap(arr, i, pindex);
            pindex++;
        }
    }
    arr_col[pindex]=col[4];
    if(pindex!=end)
         arr_col[end]=inti_col;

    await swap(arr, end, pindex);

    return pindex;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Heap Sort


//////////////////////////////
document.getElementById("heapSort").onclick = function () {
    heapSort();
}

