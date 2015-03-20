Event link [here](https://plus.google.com/u/0/events/cqecguv492nm1uhmnqo3khr2bv4?authkey=CNG7rsiHksvtQg)

Gulp “The streaming build system”, with one command can minify files, concatenate files, trigger live reloads, lint your files, and plenty more. Gulp tasks are the gears that allow gulp to quickly execute all the repetitive work. For this tutorial you can follow along by downloading the starting project folder [here][1].

The folder should have the following directory structure:
```bash
gulp-start
├── css (contains our compiled CSS)
│   └── styl.css
├── index.html
├── js (contains our JavaScript)
│   └── app.js
└── styl (contains our Preprocessed CSS in Stylus)
    └── styl.styl
```

<h1><u> Installing and Getting Started with Gulp </u></h1>
Installing Gulp is extremely easy once you have [node.js][2] installed on your computer, simply use the command:

```bash
npm install -g gulp
```
 (If you are having trouble getting anything installed be sure to comment and I'm happy to help.)

This will install Gulp globally on your machine. All your gulp code should be contained in a file called gulpfile.js. This file will be the file that is run when you use gulp from the command line. You will also need a node_modules folder which will contain all the necessary modules that your gulpfile.js will use. An easy way to quickly create this folder is with the command in your projects directory:

```bash
npm install gulp --save-dev
```
Lets create a gulpfile.js file in our project directory. Our resulting directory structure should be:
```bash
gulp-start
├── css
│   └── styl.css
├── gulpfile.js (Where we will write our gulp code) 
├── index.html
├── js
│   └── app.js
├── node_modules (contains our node/gulp packages)
└── styl
    └── styl.styl
```
 Now lets add some code to our gulpfile.js file. Add this code inside:

```
var gulp = require('gulp') 

gulp.task('default', function() {
	//code will go in here 
}); 
```

The require command is similar to an import line. Require loads the gulp module and we assign it to the variable gulp for ease of use. (Note you can read a little bit more about how require works in [this blog post][3]). 

The 2nd line calls the task method on our gulp object and gives it the name ‘default’, then has a function that will perform that task’s operations. Within these gulp tasks is where a majority of our code will be written.

<h1><u>Running Gulp and differentiating tasks</u></h1>
Right now we have a simple default task. Lets make it do something. Update your code to: 
```
var gulp = require('gulp');
gulp.task('default', function(){
	console.log('Hello World');
});
```
Seems like a pretty simple function, now lets run it! To run our gulp task we simply type `gulp` into our console like so: 

```
|->  gulp
[16:35:15] Using gulpfile ~/Documents/learning/gulp/gulpfile.js
[16:35:15] Starting 'default'…
Hello, World 
[16:35:15] Finished 'default' after 113 μs
```
We can see that our the gulp command loaded our gulpfile.js, started the default task, and then finished. It also told us how much time in microseconds the operation took. So to run our default task we simply need to use the command gulp. What if we want to create another task and run that? Lets add on to our gulpfile.js. Lets include the following code below our default task:

```
gulp.task('robot', function(){
	console.log('I AM A ROBOT');
});
```

Now if we try to just use our `gulp` command again, we see that it only executes our default task. To run our robot task we need to use the command `gulp robot`:
```
|->  gulp robot
[16:47:21] Using gulpfile ~/Documents/learning/gulp/gulpfile.js
[16:47:21] Starting 'robot'...
I AM A ROBOT
[16:47:21] Finished 'robot' after 121 μs
```

Cool, now our robot task ran as well. But what if we want gulp to run both tasks at the same time? To do this we’re going refactor our code a bit:

```
var gulp = require('gulp');

gulp.task('robot', function(){
	console.log('I AM A ROBOT');
});

gulp.task('hello', function(){
	console.log('Hello World!')
});
```
So we’ve put what was originally in our default task into a task called hello. Now to run both of these tasks with a single command we are going to add our default task:

```
gulp.task('default', ['hello', 'robot']);
```
We simply changed our second argument to an array containing the names of the tasks we want to run. So now if we run `gulp` in our terminal we get: 

```
|->  gulp
[16:53:56] Using gulpfile ~/Documents/learning/gulp/gulpfile.js
[16:53:56] Starting 'hello'...
Hello World!
[16:53:56] Finished 'hello' after 105 μs
[16:53:56] Starting 'robot'...
I AM A ROBOT
[16:53:56] Finished 'robot' after 65 μs
[16:53:56] Starting 'default'...
[16:53:56] Finished 'default' after 26 μs
```
Now both of our tasks executed with one command. Now that we understand the basics of setting up gulp tasks lets begin exploring some of the great tasks we can create with Gulp.

<u>Pop-Quiz:</u>

 1. Make a new gulp task with a name of your choosing. Have this gulp
    task output something to the console. Run this gulp task from the
    command line. 
 2. Add this gulp task to your default gulp task.  
 3. Read the documentation for the .task() method at the [gulp API][4] 
      a. Can tasks be run asynchronously? How?  
      b. Do tasks run concurrently? If so, how do we get tasks to run in series?

<h1><u>Minifying files with Gulp</u></h1>
Minifying files is a task that is really common in day to day web development, especially when performance matters. Wouldn’t it be great if every time you saved the file you were working on it would minify as well? Gulp allows us to do just that. 

Lets remove our robot and hello tasks and create a new task called scripts. Now we are going to need to install a new gulp plugin. The best place to discover and find plugins from the gulp homepage’s [plugin repository][5]. We are going to search for gulp-uglify. When you’ve found it open up the link and you should be redirected to npmjs.com’s package documentation for uglify (i.e. [here][6]). The documentation gives us instructions on how to install and use this package. So let’s install our package. Go to your terminal and run the command:

```bash
npm install --save-dev gulp-uglify
```
This will put the gulp-uglify package in our node_modules folder in our project. Now if we want to use this package lets add to our script:
```
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
```
Now we’ve successfully imported our uglify package. Now lets get rid of our robot and hello tasks and create a new task which we will call scripts.

```
gulp.task('scripts', function(){
	//Uglify stuff will go in here
});
```
Looking at the documentation again we see that for uglify to work we designate a source file or [glob][7]. We are going to use a glob to target any files in our js folder that end with with the filetype ‘.js’. Next we’ll use a pipe method to “pipe” these files to the uglify method. (If you want to learn a little bit more about what pipe() is doing be sure to check out the [nodeJS Documentation][8]) Then we will pipe these files to a destination file called app.min.js. Our resulting code should look like:

```
var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('js/app.min.js'));
});

gulp.task('default', ['scripts']);
```
So now lets try this code out. Go to your console and run gulp. Now if you look into your project directory you should see that you have a app.min.js file which contains minified JavaScript! 

<u>Pop Quiz</u>

 1. Lets minify css, go to gulps plugin directory find and install the gulp-minify-css package.
 2. Now add the gulp-minify-css module to your project and create a new task called styles that executes the minification task.
 3. Read the gulpAPI for addtional info about [gulp.src()][9] and [gulp.dest()][10].

<h1><u>Watching files with Gulp</u></h1>
So far we’ve had to run a gulp command every time we want to execute our tasks. However we can set gulp to watch for files that change and then execute a task based on that change. Let’s add a gulp watch task to watch for file changes! 

We’re going to utilize gulps watch method which you can read about in the [gulpAPI][11]. My resulting code ended up looking like :

```
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('js/app.min.js'));
});

gulp.task('styles', function(){
	gulp.src('css/**/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('minCSS'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/**/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
```
Now if we go to our terminal and run `gulp watch` we should see 
```
|-> gulp watch
[09:50:25] Using gulpfile ~/Documents/learning/gulp/gulpfile.js
[09:50:25] Starting 'watch'...
[09:50:25] Finished 'watch' after 7.71 ms
[]
```
Doesn’t seem like much happened but when we make changes to a file. Let’s modify either a .css or .js file. Once we save our file if we check out our terminal again we should see that our scripts or styles task executed!

```
[09:50:25] Using gulpfile ~/Documents/learning/gulp/gulpfile.js
[09:50:25] Starting 'watch'...
[09:50:25] Finished 'watch' after 7.71 ms
[09:51:07] Starting 'scripts'...
[09:51:07] Finished 'scripts' after 8.9 ms
```
Now our tasks will automatically execute when changes occur! 

<u>Pop Quiz</u>

 1. Lets compile our Stylus files (Note: Stylus is a CSS Preprocessor, gulp will compile this code and convert it into standard CSS for us). Find the package gulp-stylus and install this file into your project.
 2. Modify your styles task to compile your stylus .styl files found in the styl/ directory. Make the destination our css/ directory.
 3. Run you styles task. Does it run correctly? Modify our watch task to automatically compile our stylus sheets. 

<h1><u>Other things you can do with Gulp</u></h1>
This document covered the bare basics of what you can do with gulp. Some other things you may be interested in doing include:

 - Livereload a page ([link][12]) 
 - Set up a test webserver ([link][13]) 
 - Lint your JavaScript files ([link][14]) 
 - Compress your images ([link][15])  
 - Automate your git workflow ([link][16])

I'm happy to take any questions you may have about Gulp! And if your interested here is a basic gulp file I've used in the past if you are looking for ideas! 

```
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	webserver = require('gulp-webserver'),
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	minifyhtml = require('gulp-minify-html');

// Paths to various files
var paths = {
	scripts: ['js/*.js','bower_components/jquery/dist/jquery.js'],
	styles: ['scss/style.scss','scss/styles/*.scss'],
	images: ['image/**/*'],
	content: ['index.html']
}

// Compiles scss files and outputs them to build/css/*.css
gulp.task('styles', function() {
	return sass(paths.styles[0])
				.pipe(gulp.dest('./build/css'))
});

// Concats & minifies js files and outputs them to build/js/app.js 
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('app.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/js/'));
});

// Minifies our HTML files and outputs them to build/*.html
gulp.task('content', function() {
	return gulp.src(paths.content)
		.pipe(minifyhtml({
			empty: true,
			quotes: true
		}))
		.pipe(gulp.dest('./build'))
});

// Optimizes our image files and outputs them to build/image/*
gulp.task('images', function() {
	return gulp.src(paths.images)
				.pipe(imagemin({
					optimizationLevel: 5
				}))
				.pipe(gulp.dest('./build/image'))
})

// Watches for changes to our files and executes required scripts
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.content, ['content']); 
	gulp.watch(paths.images, ['images']);
});

// Launches a test webserver
gulp.task('webserver', function() {
	gulp.src('build')
		.pipe(webserver({
			livereload: true,
			port: 1111
		}));
});

gulp.task('default', ['watch', 'webserver']);
```

  [1]: https://github.com/JohnUdacity/gulp-start
  [2]: https://nodejs.org/
  [3]: http://fredkschott.com/post/2014/06/require-and-the-module-system/
  [4]: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname-deps-fn
  [5]: http://gulpjs.com/plugins/
  [6]: https://www.npmjs.com/package/gulp-uglify/
  [7]: http://en.wikipedia.org/wiki/Glob_%28programming%29
  [8]: https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
  [9]: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options
  [10]: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options
  [11]: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb
  [12]: https://www.npmjs.com/package/gulp-livereload
  [13]: https://www.npmjs.com/package/gulp-webserver
  [14]: https://www.npmjs.com/package/gulp-jshint
  [15]: https://www.npmjs.com/package/gulp-imagemin
  [16]: https://www.npmjs.com/package/gulp-git
