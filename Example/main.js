const yRange = 100;
const layerCount = 5;
const noise = 0.02 * yRange;

var data1 = generateRandomList(100, yRange);
var data2 = generateSineList(100, yRange, noise);

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    init();
  }
};

function init() {
  var chart1 = new Stacker(data1, document.getElementById("chart1"), layerCount, yRange);
  var chart2 = new Stacker(data2, document.getElementById("chart2"), layerCount, yRange);
  var chart3 = new Stacker(data2, document.getElementById("chart3"), layerCount, yRange);
}

function generateRandomList(amount, max) {
  let list = [];
  for (var i = 0; i < amount; i++) {
    list.push(Math.random() * max);
  }
  return list;
}

function generateSineList(amount, max, noise) {
  let list = [];
  for (var i = 0; i < amount; i++) {
    let noiseFactor = Math.random() * noise;
    // y(t) = amplitude * sin(2 * pi * frequency * t + phase) + OFFSET + NOISE
    let sineStep = (0.5 * max) * Math.sin(2 * Math.PI * (i / amount)) + 0.5 * max - noiseFactor;
    list.push(sineStep);
  }
  return list;
}