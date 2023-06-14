function init() {
		var canvas=document.getElementById('mycanvas');
		W=canvas.width=548;
		H=canvas.height=483;
		pen=canvas.getContext("2d")
		food_img= new Image()
		food_img.src="frog.png"
		gameover=false
		count=0
		cellSize=30;
		food=getRandomFood();
		snake={init_len:5,
			color:"blue",
			cells:[],
			face:"right",
			createSnake:function(){for(var i=this.init_len;i>0;i--){this.cells.push({x:i,y:0})}},
			drawSnake:function(){for(var i=0;i<this.cells.length;i++)
                                {pen.fillStyle=this.color;
				pen.fillRect(this.cells[i].x*cellSize,this.cells[i].y*cellSize,
                                                                        cellSize-3,cellSize-3)}},
			updateSnake: function(){this.cells.pop(), headX=this.cells[0].x, headY=this.cells[0].y; 
						if((headX==foodX)&&(headY==foodY)){snake.cells.push({x:headX,y:headY})
						getRandomFood()
						count+=1}
 
                                    		if(this.face=="right"){X=headX+1, Y=headY}
						else if(this.face=="down"){X=headX,Y=headY+1}
						else if(this.face=="left"){X=headX-1,Y=headY}
						else if(this.face=="up"){X=headX,Y=headY-1}
						this.cells.unshift({x:X,y:Y});
						lastX=Math.round(W/cellSize);
						lastY=Math.round(H/cellSize);
						if((this.cells[0].x>=lastX)||(this.cells[0].x<0)||(this.cells[0].y>=lastY)||(this.cells[0].y<0)){gameover=true
								console.log("GAME OVER")}}}
			
		snake.createSnake();
		function keyPressed(e){if(e.key=="ArrowRight"){snake.face="right"}
					else if(e.key=="ArrowLeft"){snake.face="left"}
					else if(e.key=="ArrowUp"){snake.face="up"}
					else if(e.key=="ArrowDown"){snake.face="down"}
					console.log(snake.face)}
		
		document.addEventListener("keydown", keyPressed)}
		


function draw() {
		pen.clearRect(0,0,W,H)
		snake.drawSnake()
		pen.fillStyle=food.color
		pen.drawImage(food_img,foodX*cellSize,foodY*cellSize,cellSize,cellSize)
		pen.font="25px Roboto"
		pen.fillText(count,50,50)}


function update(){
		snake.updateSnake()

console.log(count)		}

function getRandomFood(){ foodX=Math.round(Math.random()*(W-cellSize)/cellSize)
			foodY=Math.round(Math.random()*(H-cellSize)/cellSize)
			var food={x:foodX,y:foodY,color:"yellow"
				}
			return food
}



function gameloop(){if(gameover==true){clearInterval(f); alert("GAME OVER")};
		
		draw();
		update();}
init()
getRandomFood()
var f=setInterval(gameloop,100)	
f


