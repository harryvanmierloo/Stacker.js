# stacker.js
Stacker.js is a very light-weight and standalone libary for visualizing fixed height area charts. At this moment it consumes a simple array as input, and then renders that data as a fixed height area chart at the given SVG DOM-element, for a given amount of layers and y-range. Styling is currently still done manually, see the example file.

![Screenshot](/screenshot.png?raw=true "Screenshot of Stacker.js")

## Example

```javascript
var data       = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    layerCount = 5,
    yRange     = 100;
    
var chart = new RenderChart(data, document.getElementById("#name-of-svg"), layerCount, yRange);
```

## Next steps

* Add proper CSS file with default styling
* Create proper Javascript-packages
* Add more responsive tooltip
* Clean up event listeners
