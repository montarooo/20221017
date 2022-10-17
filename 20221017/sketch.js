function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fff3b0")
}

function draw() {
  rectMode(CENTER);//設定矩形以中心點為座標
  noFill();//圓是空心
  stroke(255);//框線要為白色(255)
  strokeWeight(5)

  for(var j=0;j<(windowHeight/50+1);j++)//往下重複數個橫排直到填滿
  {
    for(var i=0;i<(windowWidth/50);i++)//同個橫排重複數個圖形直到填滿
      {
        stroke("#9f86c0")
        rect(25+(50*i),25+(50*j),mouseY/4);//在座標(25,25)產生一個直徑50的矩形
        stroke("#5e548e")
        rect(50+(50*i),50+(50*j),mouseY/20);//右下角的小圓
        stroke("#fff3b0")
        rect(50+(50*i),50+(50*j),mouseX/8);
      }
  }
}