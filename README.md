# stacker.js
Stacker.js is a very light-weight and standalone libary for visualizing fixed height area charts. At this moment it consumes a simple array as input, and then renders that data as a fixed height area chart at the given SVG DOM-element, for a given amount of layers and y-range. Default styling can be overridden by styling the `.stacker` class, see the example file.

![Screenshot](/screenshot.png?raw=true "Screenshot of Stacker.js")

## Usage

Include the `stacker.css` and `stacker.js` files in the `<head>`-section of your HTML as usual and add a SVG-element to the desired location of your website. Then from your Javascript, initiate a chart using a reference to the SVG source element, in line with the example below:

```javascript
var data       = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    layerCount = 5,
    yRange     = 100;
    
var chart = new Stacker(data, document.getElementById("#id-of-svg"), layerCount, yRange);
```

## Next steps

* Create proper Javascript-packages
* Add more responsive tooltip
* Clean up event listeners
