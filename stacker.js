/*!
 * stacker.js v0.1
 * https://github.com/hvanmierloo/stacker
 *
 * Copyright (c) 2019 Harry van Mierloo
 * Released under the MIT license
 */

function Stacker(data, sourceElement, layers, yMax) {

  // Add specific stacker class
  sourceElement.classList.add("stacker");

  // Init chart
  var width = sourceElement.clientWidth,
      height = sourceElement.clientHeight,
      xDomain = [0, data.length - 1],
      yDomain = [0, yMax];

  updateChart();

  // Create an SVGPoint for future math
  var pt = sourceElement.createSVGPoint();

  // Add event listener to detect screen resizing
  window.addEventListener("resize", redrawChart);
  // TODO: Add destroy method

  // Init line
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  sourceElement.appendChild(line);

  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  sourceElement.appendChild(text);  

  var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("r", 4);
  dot.setAttribute("visibility", "hidden");
  sourceElement.appendChild(dot);

  // Add event listener to detect mouseover events
  sourceElement.addEventListener("mousemove", redrawLine);
  // TODO: Add destroy method

  // PRIVATE FUNCTIONS

  function updateChart() {
    // (re)Draw all layers
    for (var i = 0; i < layers; i++) {
      // Calculate domain
      let domainMin = i * yMax / layers,
          domainMax = (i + 1) * yMax / layers;

      yDomain = [domainMin, domainMax];

      // Create a path in SVG's namespace
      var path = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 

      let points = "";
      for (var item = 0; item < data.length; item++) {
        points += "L " + xScale(item) + " " + yScale(data[item]) + " ";
      }

      let pathData = "M 0 " + height + " " + points + "L " + width + " " + height + " Z";

      path.setAttribute("d", pathData); //Set path's data
      path.style.opacity = 1 / layers + 0.05;
      sourceElement.appendChild(path);
    }
  }

  function redrawChart(event) {
    while (sourceElement.lastChild) {
      sourceElement.removeChild(sourceElement.lastChild);
    }
    width = sourceElement.clientWidth;
    height = sourceElement.clientHeight;
    updateChart();
    sourceElement.appendChild(line);
    sourceElement.appendChild(text);
  };

  function redrawLine(event) {
    var loc = cursorPoint(event);

    // Get correct value
    let xValue = Math.round(loc.x / width * (data.length - 1));
    let yValue = Math.round(data[xValue]*10) / 10;

    // Calculate dotY
    let dotY = 0;
    let singleLayer = yMax / layers;
    var dotOffset = 0;
    for (var i = 0; i < layers; i++) {
      if (yValue - i * singleLayer >= 0) {
        dotOffset = (i + 1) * singleLayer;
      }
    }
    dotY = (dotOffset - yValue) * height / singleLayer;

    // Update line
    line.setAttribute("x1", loc.x);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", loc.x);
    line.setAttribute("y2", "100%");

    // Update text
    text.setAttribute("x", loc.x - 5);
    text.setAttribute("y", 15);
    text.textContent = yValue;

    // Upddate dot
    dot.setAttribute("visibility", "visible");
    dot.setAttribute("cx", loc.x);
    dot.setAttribute("cy", dotY);
  }

  function xScale(x) {
    let scaledX = x / (xDomain[1] - xDomain[0]) * width;
    return scaledX;
  }

  function yScale(y) {
    let localDomain = yDomain[1] - yDomain[0];
    let layerOffset = yDomain[0];
    let scaledY = height - (y - layerOffset) / localDomain * height;
    return scaledY;
  }

  // Get point in global SVG space
  function cursorPoint(event){
    pt.x = event.clientX; pt.y = event.clientY;
    return pt.matrixTransform(sourceElement.getScreenCTM().inverse());
  }

  // PUBLIC FUNCTIONS

  this.debug = function debug() {
    let debugText = {
      width: width,
      height: height
    };
    console.log(debugText);
  }

  // Let users destroy this thing
  // TODO: this.destroy = 
}