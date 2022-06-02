var colors = "ccd5ae-e9edc9-fefae0-faedcd-d4a373".split("-").map(a=>"#"+a)
class Ball{
	constructor(){ //預設值
		this.p = {x:random(width),y:random(height)}//物件的位置
		this.v = {x:random(-1,1),y:random(-1,1)}//物件的移動速率
		this.r = random(200)
		this.color = random(colors)
 }
}

var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i =0;i<200;i++){
	ball= new Ball()
	balls.push(ball)
	}
	//ball={ 
	//宣告一個圓的屬性，p：位置，v：速度，r：直徑
		//p:{x:50,y:50},				
		//v:{x:0,y:1},
		//r:100,
		//color: color(252,68,68)
	//}
}

function draw() {
	background(0)
	 for(var i=0;i<balls.length;i++){
	 ball=balls[i]
	 fill(ball.color)
	 circle(ball.p.x, ball.p.y, ball.r);
	 ball.p.x = ball.p.x + ball.v.x
	 ball.p.y = ball.p.y + ball.v.y
	}
}