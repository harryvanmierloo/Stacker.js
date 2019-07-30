# stacker.js
Stacker.js is a very light-weight and standalone libary for visualizing fix-height area charts.

![Screenshot](/screenshot.png?raw=true "Screenshot of Stacker.js")

## Example

```
var data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    layerCount = 5,
    yRange = 100;
var chart = new RenderChart(data, document.getElementById("svg"), layerCount, yRange);
```
