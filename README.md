# stacker.js
Stacker.js is a very light-weight and standalone libary for visualizing fixed height area charts.

![Screenshot](/screenshot.png?raw=true "Screenshot of Stacker.js")

## Example

```
var data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    layerCount = 5,
    yRange = 100;
var chart = new RenderChart(data, document.getElementById("#name-of-svg"), layerCount, yRange);
```

## Next steps

* Add proper CSS file with default styling
* Create proper Javascript-packages
* Add more responsive tooltip
