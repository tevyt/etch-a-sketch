(() =>{
		$(document).ready(setUp);

		const border = 1;
		const boardWidth = 550;
		var gridWidth = 16;

		function setUp(){

			createGrid();
			$('#reset-button').click(reset);


			function createGrid(){
				let squareSize = boardWidth/gridWidth - (border * 2);
				let numberOfSquares = gridWidth * gridWidth;
				let square = `<div class="grid-square" style="width: ${squareSize}px; height: ${squareSize}px"</div>`
				let gridArea = $('#main');


				gridArea.html('');
				for(let i = 0; i < numberOfSquares; i++){
					gridArea.append(square);
				}

				$('.grid-square').mouseover((event) => {
					$(event.currentTarget).addClass("highlighted");
				});
			}

			function reset(){
				gridWidth = prompt("Enter the width of the grid", 16);	
				if(gridWidth){
					createGrid();
				}
			}
			}
})();


