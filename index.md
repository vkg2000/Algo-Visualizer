<!DOCTYPE html>
<html>

<head>
	<title>Algo Visualizer</title>
	<link rel="icon" href="images/icon.jpg">
	<link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
		integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
		integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
		</script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
		integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
		</script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
		integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous">
		</script>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
	<div class="floatleft main">
		<img style="margin-top: 10px;margin-left: 20px;" src="images/icon.jpg" height="150px" width="180px">

		<h1 class="logo">Algorithm Visualizer</h1>

	</div>

	<div class="workingbar">

		<div class="sidebar">
			<ul class="list-group">
				<li class="list-group-item list-group-item-primary">
					<h3 class="size">Select Size and Speed </h3>
					<input type="range" min="10" max="200" value="50" class="slider" id="sizeId" name="myRange0">
					<input type="range" min="1" max="1000" value="100" class="slider" id="speedId" name="myRange1">
				</li>
				<li class="list-group-item list-group-item-secondary">
					<h3 class="size">Select Any Sorting Algorithm</h3>
					<a href="#"><button type="button" id="mergeSort" class="btn btn-dark">&nbspMerge
							Sort</button></a><br>
					<button type="button" id="quickSort" class="btn btn-dark">&nbspQuick Sort&nbsp
						</button><br>
					<a href="#"><button type="button" id="heapSort" class="btn btn-dark">&nbspHeap Sort
							&nbsp</button></a>
					<button type="button" id="bubbleSort" class="btn btn-dark">Bubble Sort</button>
				</li>
				<li class="list-group-item list-group-item-success">
					<button type="button" class="btn btn-danger btnreset" id="reset">Reset</button>
				</li>
				<a target="_blank" href="https://github.com/vkg2000/Algo-Visualizer">
					<li class="list-group-item list-group-item-light">For More Details</li>
				</a>
			</ul>
		</div>


		<div>
			<canvas class="figure" id="target-id" width=1100 height=550></canvas>
		</div>
		</div>

		<br>

		<div >
			<h1 class="develop">Designed and Developed by &nbsp <a target="_blank"
					href="https://www.linkedin.com/in/akarsh-rana/"> Akarsh Rana</a> &nbsp and &nbsp <a target="_blank"
					href="https://www.linkedin.com/in/vishal-kumar-gupta-165ba61a2/"> Vishal Gupta </a> </h1>
		</div>










</body>
<script type="text/javascript" src="script.js"></script>

</html>