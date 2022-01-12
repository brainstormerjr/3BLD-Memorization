const letters = 'ABCDEFGHIJKLMNOPQRSTUVWX';
let edgesP, cornersP, edgesBox, cornersBox, edgeLabel, cornerLabel, hideButton, newButton;
let visible = true;

function setup() {
  //createCanvas(400, 400);
  edgesP = createP();
  edgesP.style('font-size', '80px');
  edgesP.style('font-family', 'monospace');
  edgesP.style('font-weight', '1000');
  edgesP.position(80, 10);

  cornersP = createP();
  cornersP.style('font-size', '80px');
  cornersP.style('font-weight', '1000');
  cornersP.style('font-family', 'monospace');
  cornersP.position(80, 120);

  edgeLabel = createP('EDGES');
  edgeLabel.style('font-size', '30px');
  edgeLabel.style('font-weight', '1000');
  edgeLabel.style('font-family', 'monospace');
  edgeLabel.position(80, 325);

  edgesBox = createInput('');
  edgesBox.position(80, 400);
  edgesBox.size(700);
  edgesBox.style('font-size', '50px');
  edgesBox.style('font-family', 'monospace');
  edgesBox.style('font-weight', '1000');
  edgesBox.style('background-color', '#EEEEEE');

  cornerLabel = createP('CORNERS');
  cornerLabel.style('font-size', '30px');
  cornerLabel.style('font-weight', '1000');
  cornerLabel.style('font-family', 'monospace');
  cornerLabel.position(80, 475);

  cornersBox = createInput('');
  cornersBox.position(80, 550);
  cornersBox.size(700);
  cornersBox.style('font-size', '50px');
  cornersBox.style('font-family', 'monospace');
  cornersBox.style('font-weight', '1000');
  cornersBox.style('background-color', '#EEEEEE');

  hideButton = createButton('HIDE MEMORIZATION');
  hideButton.position(900, 375);
  hideButton.style('font-size', '30px');
  hideButton.style('font-family', 'monospace');
  hideButton.style('font-weight', '1000');
  hideButton.style('background-color', '#EEEEEE');
  hideButton.style('padding', '30px');
  hideButton.size(500, 100);
  hideButton.mousePressed(toggleMemorization);

  newButton = createButton('NEW MEMORIZATION');
  newButton.position(900, 525);
  newButton.style('font-size', '30px');
  newButton.style('font-family', 'monospace');
  newButton.style('font-weight', '1000');
  newButton.style('background-color', '#EEEEEE');
  newButton.style('padding', '30px');
  newButton.size(500, 100);
  newButton.mousePressed(newMemorization);

  newMemorization();
}

function toggleMemorization() {
  visible = !visible;
  if (visible) {
    edgesP.show();
    cornersP.show();
    hideButton.html('HIDE MEMORIZATION');
  } else {
    edgesP.hide();
    cornersP.hide();
    hideButton.html('SHOW MEMORIZATION');
  }
}

function newMemorization() {
  let edges = '';
  let corners = '';
  let chosenIndices = [-1];
  for (let i = 0; i < Math.floor(Math.random() * 4 + 11); i++) {
    let index = -1;
    do {
      index = Math.floor(Math.random() * letters.length);
    }
    while (chosenIndices.includes(index));
    edges += letters[index];
    chosenIndices.push(index);
    if (i % 2 == 1) edges += ' ';
  }

  chosenIndices = [-1];
  let cornerLength = 2 * Math.floor(Math.random() + 3.5);
  if (edges[edges.length - 1] != ' ') cornerLength += 1;

  for (let i = 0; i < cornerLength; i++) {
    let index = -1;
    do {
      index = Math.floor(Math.random() * letters.length);
    }
    while (chosenIndices.includes(index));
    corners += letters[index];
    chosenIndices.push(index);
    if (i % 2 == 1) corners += ' ';
  }
  edgesP.html(edges);
  cornersP.html(corners);
}

function draw() {
}
