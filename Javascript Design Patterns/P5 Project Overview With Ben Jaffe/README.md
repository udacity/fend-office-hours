# Project 5 Overview

## Office Hours Link

Link to the Office Hours: [P5 Office Hours](https://plus.google.com/events/cicd8td44vj9j0cfa9p6on5c81g?authkey=CPSAh8bu9NrJLg)

## Overview of the Rubric:

Here is the rubric for [reference](https://review.udacity.com/#!/rubrics/17/view)

Hear in Ben Jaffe's (The course developer) own words of what you need to do to satisfy the rubric.

####Interface Design

All application components render on-screen in a responsive manner, usable across modern desktop, tablet, and phone browsers
What do we mean by usable in a responsive manner? Make sure the app is viewable on different app sizes. That is the search bar isn't too small to use on a phone.

####App Functionality

Use multiple 3rd party API’s like the plane API that Ben mentioned. There are TONS of API’s try looking around google for interesting ideas. If you have problems with an API don’t hesitate to make a single HTML file to test out the API in it’s own self contained space. Don’t be afraid to just play with new API’s or Frameworks.

####App Architecture

Most of this is covered in JSDP, but don’t forget that google is your friend! Keep in mind though that what you find might not always be the best approach. If you aren’t sure whats good or bad Ben suggest opening several results and tries to find a common solution across multiple sources. Also KO’s documentation is great, don’t be afraid to read it.

####Asynchronous Data Usage

Failed data retrieval is handled gracefully
What do we mean by “gracefully”. We mean that you need to let the user know in a common language that an error occured and why it may have occured. Sometimes though it might be worthwhile to fail silently for example in Ben’s neighborhood map 2 of his locations include full addresses. One of his locations though is Paris, France. Here he lets the API fail silently since Paris, France does not include a full address.

####Geospatial/Map Functionality

Read the Google API, and try googling to see people integrate the Maps API into Knockout. Also in terms of making the markers clickable and change style pick one to work on at a time. Get clicking functionality working first then try to get the styling to work.

####Location/List View/Search

Your location and list view should always display the same data. Your search should filter these views.

It’s a long rubric definitely review it before you begin!

##Ben's Tips

Best way for students to get started. It can be daunting starting with a blank page.
Everyone gets some writers block when they open a new blank project. Definitely start by creating your basic html doc. Import your CSS files and you JS files. Don’t worry about style to begin with, figure out knockout and play around with a few of the examples from the knockout site.

Once you have a few things on the screen and your brain is kicking into gear you should then pick one feature you want to build and then build out that feature. Once you’ve built something it will be easier to move to the next step.

**Final thoughts from Ben:**

What you’re doing is hard! Not just software development but learning. Yeah learning is really hard. All of us spend a lot of time learning and we find ourselves saying “this is hard” a lot! It’s tough to sit down and confront any wall we hit in our learning. The way we learn though is by trying to climb those walls. It is really noble to be student and I am excited and proud of everyone for having come so far.

Parting Quote from Amanda (The Faceless Producer):
When you hit a roadblock or wall in your project, try to convince yourself it’s easy.

##Student Questions:

**Do students have to use knockout?**

Yes, we need to be able to grade these relatively quickly. Any of your own projects you are able to choose Knockout, Angular, etc.. but for this project we please ask that you use knockout.

**Why do we suggest students use Knockoutjs for this project?**

Knockout is fairly simple and doesn’t include a lot of the “magic” that a lot of other frameworks have. Knockout lets you build a foundational knowledge of what’s going on underneath the hood of a MVVM paradigm.

**Hints for getting started with google maps API? Or any API in general?**

API’s can be a pain, because they are a not like a programming languages as we know it. API’s are designed by engineers and they decide the rules for that API. These rules might not be entirely comprehensible. It’s usually not worthwhile to memorize API code unless you are working with API’s all the time. The best way to begin working with API’s is to review the documentation and look at example code.

**Some interesting projects you’ve seen?**

We see all of your projects. Great projects make the rounds around the office. Keep up the awesome submissions because we are excited to see them! There are alot of really cool API’s. Ben would be really excited if someone utilized an Airplane location API like the Flight Status API

**If I want to make a test condition where I'm making an AJAX request over the public internet that returns an error or no result, is unplugging my internet cable and clicking the link to make the request a suitable test? this triggers a timeout for wiki API**

Yes, that’s a great way to test that condition. Remember we need to test that both AJAX requests succeed and that when they fail our test knows that it fails. We can also test sub-optimal conditions using a web proxy (like Charles) to test what happens if someones connection is very limited.

**Where the google maps api code would lie, in KO Model-View-ViewModel structure ?**

Part of that is for you to figure out. Break down what you are doing with the API, you will have modelish things that will fit into the model. You will also have some content/presentation methods which could be included in your view.

**I had a reviewer comment that I need to ensure I'm making my google maps search asynchronously. But the function call looks like searchBox.getPlaces() and not a URL like jquery's get() expects. Can you comment on how to make the query async?**

We both decided to google get places. If you are ever unsure what to do dive into the documentation, google it, search around for it! Everyone does it, and unless you’re the person who wrote the API it’s really unlikely you’re going to memorize it. Some general comments on Async vs. Sync. Asynchronous requests will make a call and still execute other calls/code. Whereas synchronous requests will make the request and stall anything else from happening until the call completes. Without seeing more of Carols Code we can’t answer this question completely

**Is it okay to manually query a element to append the google map to? Right now I'm using a custom binding handler so I don't have to do that but that seems like overkill since I'm only using one google Map object.**

Yes! Querying a DOM element is synchronous so it’s a good idea to do this.

