<!DOCTYPE html>
<html>

<head>
	<title>Algo Visualizer</title>
	<link rel="icon" href="images/icon.png">
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
	<div class="container-fluid ">
		
	<div class="row justify-content-md-center">
		  



		<div class="col-md-auto">
			<img style="margin-top: 10px;" src="images/icon.png" height="100px" width="120px">
		</div>

		<div class="col-md-auto">
			<h1 class="logo">Algorithm Visualizer</h1>
		</div>
	</div>
	</div>


	
		<div class=" col-md-auto sidebar" id="canvasFigureSidebar">
			<ul class="list-group list-group-horizontal-xl optionSize">

				<li class="list-group-item list-group-item-primary xx">
					<h3 class="size">Select Size  </h3>
					<input type="range" min="10" max="200" value="30" class="slider" id="sizeId" name="myRange0">
				</li>

				<li class="list-group-item list-group-item-primary xx">
					<h3 class="size">Select Speed </h3>
					<input type="range" min="300" max="1000" value="100" class="slider" id="speedId" name="myRange1">
				</li>

				<li class="list-group-item list-group-item-secondary">
					<h3 class="size">Select Any Sorting Algorithm</h3>

					<button type="button" id="mergeSort" class="btn btn-dark">&nbspMerge
							Sort</button>

					<button type="button" id="quickSort" class="btn btn-dark">&nbspQuick Sort&nbsp
					</button>

					<button type="button" id="heapSort" class="btn btn-dark">&nbspHeap Sort
							&nbsp</button>

					<button type="button" id="bubbleSort" class="btn btn-dark">Bubble Sort</button>
				</li>

				<li class="list-group-item list-group-item-success xx">
					<button type="button" class="btn btn-danger btnreset " id="reset">Reset</button>
				</li>
				<li class="list-group-item list-group-item-light xx " >
				<a target="_blank" href="https://github.com/vkg2000/Algo-Visualizer">More Details</a>
				</li>

			</ul>
		</div>

		<div class="col-md-auto" id="canvasFigure" >
			<canvas class="figure" id="target-id"  width=0 height=550></canvas>
		</div>


	<br>

	<div class="container-fluid ">
		
		<div class="row justify-content-md-center">
		<p class="develop">Designed and Developed by &nbsp <a target="_blank"
				href="https://www.linkedin.com/in/akarsh-rana/"> Akarsh Rana</a> &nbsp and &nbsp <a target="_blank"
				href="https://www.linkedin.com/in/vishal-kumar-gupta-165ba61a2/"> Vishal Gupta </a> </p>
	</div>
	</div>


</body>
<script type="text/javascript" src="script.js"></script>

</html>
