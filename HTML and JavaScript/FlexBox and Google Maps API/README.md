#FlexBox and Google Maps API!

##Office Hours Link

Here is the Office Hours link to the recorded [event] (https://plus.google.com/events/c27q2s82euhubo51bufac02en04?authkey=CM_Ol6KQhpXUXA)

##Part 1: Flexbox

In this demo we will go over how to use Flexbox and coloring to visually layout your design. Here is the basic outline of how we would rapidly develop a layout for our Web site using Flexbox:

* We use divs to intelligently layout your design
* We use color and display: flex to rapidly develop our prototype
* We use media queries to test for responsiveness

What is Flexbox?

It's a CSS3 display style that easily creates smooth layouts without having to use floats.

Remember the basic types of displays in HTML:

Block
Inline
List-type
Table

Flex is a CSS3 implementation that avoids having to use float properties to layout our elements on the page. It’s a very efficient and a fast way to create dynamic layouts.

More information can be found here on [Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)

For further information on creating responsive layouts with Flexbox, please check out our Responsive Web Page [course](http://www.udacity.com/course/ud893)

Here is the link to the demo code that was [used](


##Part 2: Google Maps API In Project 2

In this demo we will go over the map for project 2:

General Outline:

Making the Map show up<br>
How it actually works.The code for displaying the map is in helper.js<br>
initializeMap<br>
locationFinder<br>
createMapMarker<br>
callback<br>
pinPoster<br>

###Making the Map Show Up:

You can make the map show up by following the steps in our JS Basics [class](
https://www.udacity.com/course/viewer#!/c-ud804/l-2239648539/m-2760768538)


Add this line to your ResumeBuilder.js:
	$("#mapDiv").append(googleMap);
	
Uncomment the code at the end of the file helper.js

Uncomment the `<script>` tag for Google Maps API in the `<head>` of index.html.

Doing this will make a map with placemarkers appear on your resume, and you get the basic map functionality.


###How it Actually Works:

We’re using GoogleMaps api to make the map show up. Most of the code that does this is in helper.js, specifically there are several functions that make this happen:
initializeMap -called when the page gets loaded (in the code you had to uncomment)
Inside initializeMap several helper functions are defined and called within 

* initializeMap
* locationFinder
* createMapMarker
* callback
* pinPoster

Here’s a rough sketch of what happens in helper.js

initializeMap() is called when the page loads. Then the script collects all the locations from the objects in the resume (this happens in locationFinder() function) and  sends off those locations to the Google Place Search service. From there, the place search service results are turned into location pins on the map itself.

###In more detail:

**initializeMap():**
 
Inside initializeMap we make a new map object and attach it to `<div id="map">` in the index.html file. We call this line to create a new google maps api object:
`new google.maps.Map(document.querySelector('#map'), mapOptions);`
		
The Map class is the JS class that represents a map. Objects of this class represent one map object on a page.

The two parameters passed are the div in the html file to which the map attaches, and the map-options variable we initialized earlier in initializeMap.

You can read here more about google [maps](https://developers.google.com/maps/documentation/javascript/maptypes)

Then we call `locationFinder()` to create an array of all the locations in the resume: This function loops over our education and job entries and pushes those addresses into an array, and also takes the address from our bio. This returns that array.

We call `pinPoster(locations)` that takes those locations and makes them into pins on the map.

pinPoster(locations): takes all the locations we collected from the resume (the location array that was created in locationFinder()) and adds each one on the map.

We open a new service:	`var service = new google.maps.places.PlacesService(map);`

This service is separate from the main google maps api service, here’s more about how it [works](https://developers.google.com/maps/documentation/javascript/places)

Remember that script line you had to uncomment in index.html? It’s the line that calls this service.

As you can see, there are several different types of searches that you can do with this service. The one we’re using in helper.js is the Text Search.
 
This line initializes a service object:
    
    var service = new google.maps.places.PlacesService(map)
	
This is the line that calls the search:
`service.textSearch(request, callback);`

As you can see in pinPoster we loop over all the locations in the location array (that we got as an argument to this function) and make a new textSearch for each one.

**Parameters for textSearch():**

The `textSearch` variable receives two parameters: a request and a callback. The request is defined above in the pinPoster but the callback is actually a callback function we have defined above. request is just a simple json object, that contains a query key. 

This key contains the location we would like converted into long/lat coordinates (so in our case the location of the current item we are looping over). There are additional optional parameters that we’re not passing on.

The callback function is the second parameter we’re passing on, and this function handles the results object (that gets returned) as well as the status.
callback(results, status) is the callback function that we passed on when we did the textSearch. 

If the status returned was OK, It calls `createMapMarker(placeData)` with one location (the location returned from the textSearch)

`createMapMarker(placeData)` is the function that adds an individual pin to the map, based on this object `placeData` (which contains that location, this is the result we got from using the textSearch method).


Google's API proceeds to make a new map marker object that shows up on our screen. See the Marker API reference [here](https://developers.google.com/maps/documentation/javascript/markers)
