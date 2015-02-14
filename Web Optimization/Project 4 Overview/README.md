# Project 4 Overview

## Office Hours Link

Link to the Office Hours: [P4 Office Hours](https://plus.google.com/events/comnga3cdvrpkjm7dvb4l71ph2o?authkey=CPbhlNSdtpiEDg)

## Overview

Evaluators will evaluate two things:

* Time for initial page load in index.html
* Smooth browser animations and efficient code execution in main.js for the Pizzas page under /view/pizza.html

Here is the link to the rubric for the [class](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535)

Please make sure you understand the rubric before you move forward.

### Google Pagespeed Insights

The first step is to work on the page loading time for index.html. [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) will be used to evaluate the Pagespeed score of index.html.

The key to getting a higher score is to reduce the number of Critical Rendering Paths as well as the Critical Size of our files. Therefore we need to use a combination of:
* Create async script requests
* Use specific media types such as print and media to strategically load our CSS
* Inlining our CSS
* Minifying our CSS
* Use JavaScript to load resources after the DOM has completely loaded
* Base64 encode our resources such as fonts and images and embed the code inside the HTML

## Gain 60 FPS on Browser Scroll

The next step is to gain 60 FPS when a user scrolls through the website on the Pizzas page. We open up Chome Dev Tools and inspect the performance of our page using the timeline feature in Chrome Dev Tools. We record the timeline and proceed to scroll through the browser for a couple of seconds and then stop recording.

We then analyze the performance of our entire site and look try to find out what is causing the computation bottleneck that is preventing our site from performing at 60 FPS. To reach 60 FPS, the majority of the colored bars should be under the 60 FPS line such as this:

![image](http://i.imgur.com/cI6zwUo.jpg)

**Hint**: The main cause of the bottleneck is in the JavaScript and we should be analyzing the efficiency of our code in the For Loops. console.log() all of the variables being calculated inside the For Loops and figure out which variables need to be calculated inside the For Loops and which variables can be calculated outside of the For Loops.

### Change Pizza Sizes

The last optimization we need to accomplish is to make the Change Pizza Sizes function more efficient. If we open up Chrome Dev Tools and look at the console, whenever we change the sizes of the pizzas with the slider on the page, wwe get an average time to resize pizzas of over 100 milliseconds. The goal is to reduce this time to under 5 milliseconds.

We go into our HTML file and look at this line:

`<input id="sizeSlider" type="range" min="1" max="3" value="2" step="1" onchange="resizePizzas(this.value)">`

We see that whenever we change the slider, we tell the slider to call the JavaScript function `resizePizzas(this.value)`.

From there we then look into main.js and study the `resizePizzas()` function and proceed to look for bottle necks in the calculations. Again the main bottleneck is how everything is calculated in the For Loops.

