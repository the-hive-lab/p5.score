function setup() {
  createCanvas(800, 800);
  
  let dur = [500, 1000];
  let pos1 = [200, 200, 400, 200];
  let pos2 = [200, 300, 400, 300];
  let shape1 = 50;
  let shape2 = 65;
  
  dancer1 = new Dancer(center().x, center().y, dur, pos1, "yellow", shape1);
  dancer1.moves();

  dancer2 = new Dancer(center().x, center().y, dur, pos2, "magenta", shape2);
  dancer2.moves();

  dancer3 = new Dancer(cr().x, cr().y, dur, pos2, "green", shape2/1.5);
  dancer3.moves();


  dancer1.addPartner(dancer2);
  dancer1.addPartner(dancer3);
  console.log(dancer1.partners.length)
  for (let i = 0; i < dancer1.partners.length; i++){
    console.log(i);
    console.log("Partner: " + dancer1.partners[i].x + ", " + dancer1.partners[i].y);
  }

}

function draw() {
  background(0);

  //the stage
  grid();
  stageNames();

  dancer1.show();
  dancer2.show();
  dancer3.show();

}
