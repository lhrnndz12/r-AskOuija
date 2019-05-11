var title;
var question;
var underscore = "_";
var string;
var value = 0;
var button1;
var button2;
var bg;
//var text = text("LIVE FEED Provided by the SubReddit AskOuija****", width/2, height - 800 );


function preload() {
  bg = loadImage("addons/woodgrain.jpg");
  myFont = loadFont("addons/Rye/Rye-Regular.ttf");
  qFont = loadFont("addons/Indie_Flower/IndieFlower.ttf");
}


function setup() {

  loadJSON("https://www.reddit.com/r/AskOuija/hot.json?limit=34", gotData);
  createCanvas(windowWidth, windowHeight);
  background(bg);
  createA("https://reddit.com/r/AskOuija", "LIVE FEED Provided by the SubReddit AskOuija****");
  button1 = createButton("GOOD BYE");
  button1.position(width / 1.5, height - 150);
  button1.mousePressed(mousePressed);
  button2 = createButton("HELLO");
  button2.position(width / 6, height - 150);
  button2.mousePressed(refresh);

  question = 1 + int(random(35));

}


  function gotData(data) {


    for (var i = 0; i < data.data.children[i].data.title.length; i++) {
      strokeWeight(5);
      textSize(50);
      textFont(myFont);
      fill(0);
      textAlign(CENTER);
      console.log(question);
      var t = data.data.children[question].data.title;
      text(t, width / 2, height / 2);

      for (var j = 0; j < t.length; j++) {
        if (t.charAt(j) == "_") {
          string = splitTokens(data.data.children[question].data.link_flair_text, ":,");

        }

      }


      console.log(data.data.children[question].data.link_flair_text);
    }

  }

  function mousePressed() {

    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }

    if (string[1] == null) {

      text("REPLY HAZY. TRY AGAIN LATER.", width / 2, height / 3);
    } else {

      text(string[1], width / 2, height - 300);
    }
  }

  function refresh() {
    gotData(data);
    redraw();
  }




  //link to website
  //arch answers
  //make clear that it is a live feed
