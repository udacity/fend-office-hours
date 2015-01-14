#How to get started with Frogger

The demo today has 3 parts:

1. Talk about how to get started 
    (especially if you feel like you don’t know where to begin).
2. Describe in-depth how the game actually starts running
    (`init()` is called when all the images finish loading)
3. Describe how to make your project Udacious
    (add extras: gems, levels, etc. to engine.js)
    
Watch the office hours here: [Office hours link](https://plus.google.com/u/0/events/cupbs3pbne7qkuqok4g0ldhntic?authkey=COGW25b5jbv3-AE)

##How to get started

###Start with the Project Details



Following the steps, this demo will talk about downloading the art assets and game engine. We’ll see how to explore what we’ve downloaded with the intent to figure out where to begin.

1. Click the link in step 2 called: [art assets and provided game engine](https://github.com/udacity/frontend-nanodegree-arcade-game).
* This will take you to the github repo. There are many ways to download and clone it.
    One way is:
    * On the right, click the “Copy to clipboard” button.
    * In your terminal, cd to where you want your cloned git repo to exist.
    * Type `git clone` and then paste the git URL: https://github.com/udacity/frontend-nanodegree-arcade-game.git and type return.
    * Running that, the repo should start downloading
* Explore the files (index.html) and directories (css/ js/)
* Open the index.html in any way you want (on a mac, type “open index.html” and your default browser will open or double click the file from the finder).
* You’ll only see a blank page.
* Open the developer tools in Chrome.
* View the Console
    * Notice the error:  
    Uncaught ReferenceError: allEnemies is not defined
* Explore the files:
    * Click on Elements in the DevTools
    * Expand the `<head>` and `<body>`
    * You only have 4 files to look at. Check them all out (by clicking on each of the names, the files will open under the Sources tab). 
        * __css/style.css__ - only centers the body 
        * __js/resources.js__ - loads images (but importantly passes `init` to `Resources.onReady()` to start the game running when all the images are loaded) as explained in the next section.
        * __js/app.js__ - by reading the comments you see that this is where you need to write your code.
        * __js/engine.js__ - Understand that this code:
            * defines the `main()` loop that repeated calls `update()` and `render()`
            * loads the files, which will get the game running by calling `init()` when done.
            * can be modified for “udacious” additions by adding function calls to `update()` and `render()` which update your new objects and then renders them.

##How the Game Actually Starts Running



Of course, you don’t need to understand this as long as you know the first point below, since you can write the entire project without knowing how `main()` is first called. 

1. Start by noticing the `main()` function. It will call `update()` and `render()` and then call itself over and over again. As the name suggests, this is the main game loop.
* How does `main()` get called you might ask? It is called by itself and originally called by `init()`. So then how is `init()` called? We can see it is passed to `Resources.onReady()` but if we look at that code, we see that `init` is just added to an array `readyCallbacks` for later. It is not actually called there.
* So when *does* `init()` get called?
* By searching for `readyCallbacks` in resources.js we find our answer, it’s in `_load()`, but let’s understand this from the beginning, not the end as we’ve been exploring it.
* `load(urlOrArr)` is called on our array of images inside engine.js

```
Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
…
]);
```

* `load()` just calls `_load()` on each URL.
* `_load()` the first time through finds nothing in `resourceCache` so it hits the `else` branch every time for those 5 image URLs we defined.
* In the `else` clause:
    * The image is loaded
    * An `onload()` function is defined, and only then sets `resourceCache[url]` to something *truthy* — the loaded image.
    * `resourceCache[url]` is set to False.
    * The image is loaded which calls a check for `isReady()`
* The `isReady()` will return `false` until all the images have been loaded. 
* When the last image has loaded, `isReady()` will return `true` and then everything in `readyCallbacks` is executed. And *that* is when `init()` is run (and only run once). 

##How to Make your Project Udacious



Let us see what we can do make our arcade game UDACIOUS! To do so, we can add levels to our game, add gems that the player will have to pick up, add a start and stop feature in the game...the list is only limited by your own creativity.

In order to do so, we will have to make changes to both app.js and engine.js.

In engine.js, there are 2 main aspects of the game being taken care of, the updation of the elements in the game and the rendering of the game objects.

Firstly, let us talk about the `update()` and `updateEntities()` functions. These are responsible for updating all your game objects. Say you want to addl gems a good way to do it would be write an update function that takes care of that and all other extra entities you would like to include and let's say you call that `updateExtras()`.

Secondly, when it comes to rendering, you can write a function that handles the rendering of the extra elements that you have included in `updateExtras()`. Also you will have to update your `Resources.load()` with the references for all the new elements you have added.

Now let us come to app.js. In this file, you are expected to populate the `Enemy.protoptype..()` and `Player.protopype...()`. Now apart from these, in order to make your project udacious you can write code to substantiate the elements you are updating in `updateExtras()` of your engine.js file. For example if you are addings gems you will have the corresponding `Gem.prototype...()` to populate. 

Let's say you want to add levels to your game as well, one way of doing this is first writing a function that resets all the elements in the game. For example: let's call this `function reset(reason_for_reset)` and the argument will be the reason why you would want the game to restart. The reasons could be the player going a level up, the game ending because the player loses all lives or the game restarting because the user chooses to do so, among others. 

These are just a few ideas and there are numerous ways to acheive the same but hopefully this will give you an idea of how to start.





