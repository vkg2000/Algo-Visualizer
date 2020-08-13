var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
draw(getarr(slider.value),slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  var arr = getarr(this.value);
  draw(arr,this.value);
}



function getarr(length)
{
	var arr_random = new Array();
	var arr_range = 500;
	for (var i=0; i<length; i++) {
    	arr_random.push(Math.round(Math.random() * arr_range));
    }
    return arr_random;
    
}

function draw(arr,size)
{
    var div = document.getElementById("target-id");
    
    var html = "";
    for (var i=0;i<size;i++) {
        html += "<div class= 'bar'style = 'height: "+arr[i] +"px; width: "+ 3*arr[i] +"px;'></div> "+ "<br>";

    div.innerHTML = html;
}
}





