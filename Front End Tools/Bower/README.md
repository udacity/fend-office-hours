
Event link [here](https://plus.google.com/u/0/events/cqecguv492nm1uhmnqo3khr2bv4?authkey=CNG7rsiHksvtQg)
<h1><u>Let’s Learn! Bower</u></h1>
<img src="http://bower.io/img/bower-logo.png" width="100">
 <p>Bower is a package manager for the web that allows you to quickly search, download, and update all of the dependencies  you use in your site development. </p>

<p>Browsing all the library websites, downloading and unpacking the archives, copying files into the projects — all of this is replaced with a few commands in the terminal.</p>

<h2>Why Should you use Bower?</h2>
<ul>
<li>Bower will help you save time! Finding client side libraries can take a lot of time. For example, to get jQuery you must go to the jQuery homepage, find the version of jQuery you want to download. Download the package (or use the CDN version). On top of this you’ll have to always remember the version number of jQuery you used. Bower does all this quickly from the command line of your project. </li>
<li>Bower works offline. Bower creates a .bower folder in the users home directory, which will keep local copies of any package you install via bower.</li>
<li>Makes update easy : Suppose a new version of a library is released with an important security fix, in order to install the new version you just have to run a command and bower will update all of your dependencies with the new version.</li>
<li>It’s extremely popular! There are already over 16,000+ bower packages! </li>
</ul>

<h2>Installing Bower</h2>

Bower first requires that you have git and github so please make sure you have these. 

Also required is node and the node package manager (npm). Fortunately you can get both quickly from the [node.js website][1]. Install node and in your terminal/command prompt to confirm installation `npm --version`.

Once you’ve confirmed that you have npm you can quickly install bower with the command: `npm install -g bower`. This will install bower globally so that you can use it's command from any directory
*(note: you may need to run the command with sudo i.e. sudo npm install -g bower)*
*(note: on Windows if you get the error “Git not in the PATH”, please reinstall git and be sure to check the box that says Run Git from the Windows Command Prompt. This will properly modify you PATH so that you can use Git commands from the Command Prompt.)* 

Now lets navigate to a project folder where we want to utilize bower. I’m going to use a new folder titled ‘bower’ for the rest of the example. 

<h2>Installing Packages with Bower</h2>
Installing packages can be done simply by using the command `bower install <package>` 

Where `<package>` can be replaced with any of the following:

 - registered package (i.e. jquery, bootstrap, angular) 
 - GitHub shorthand (i.e. Polymer/polymer) 
 - Git endpoint  (i.e. git://github.com/user/package.git) 
 - URL (i.e. http://examle.com/script.js)

Lets install jQuery to our project:

```
bower install jquery
bower cached        git://github.com/jquery/jquery.git#2.1.3
bower validate      2.1.3 against git://github.com/jquery/jquery.git#*
bower install       jquery#2.1.3
jquery#2.1.3 bower_components/jquery
```
Once our command completes we should now have a bower_components folder in our directory and in this folder you should now see jquery. See how easy that was! 

Keeping your packages up to date is also very easy! Running bower update will update all packages to their latest version. You can also target specific packages by saying `bower update <package>`. 
To see what packages are contained in your bower_components folder you can use the command `bower list`
You should end up with a tree like structure like this. 
```
bower list
bower check-new     Checking for new versions of the project dependencies..
angular /Users/johnmav/Documents/learning/angular
└── jquery#2.1.3 extraneous
```
You can also install packages offline if they are stored in bower’s cache. You can check what files are in your bower cache by simply using the command `bower cache list`
If you want to completely clear your cache you can use the command `bower cache clean`. 

<h2>Searching for Packages</h2>

Searching for packages is a piece of cake as well, all we have to do is use the command `bower search <package>`
For example if we wanted to find packages related to the popular framework angular we would say 
```
bower search angular
Search results:

    angular git://github.com/angular/bower-angular.git
    angular-mocks git://github.com/angular/bower-angular-mocks.git
    angular-resource git://github.com/angular/bower-angular-resource.git
    angular-sanitize git://github.com/angular/bower-angular-sanitize.git
    angular-route git://github.com/angular/bower-angular-route.git
    angular-cookies git://github.com/angular/bower-angular-cookies.git
    angular-animate git://github.com/angular/bower-angular-animate.git
    angular-bootstrap git://github.com/angular-ui/bootstrap-bower.git
    angular-ui-router git://github.com/angular-ui/ui-router
    angular-scenario git://github.com/angular/bower-angular-scen
    …
```
Simple enough! 

Once you find a package you’re interested in (or one you think you are interested in) you can use the command `bower home <package>` to open the homepage for that package in your browser. 
Try out: ` bower home bootstrap`

<h2>Creating, Saving, & Registering Packages</h2>
Packages in bower are defined by a bower.json file. The bower.json file is defined as follows: 
```
{
   "name" : "my-project",
   "version": "1.0.0",
   "main": "path/to/main.css",
   "ignore": [
        ".jshintrc",
        "**/*.txt"
    ],
   "dependencies": {
        "<name>": "<version>",
        "<name>": "<folder>",
        "<name>": "<package>"
    },
    "devDependencies": {
        "<test-framework-name>": "<version>"
    }
}
```
- name (required): The name of your package; more about choosing names below.
- version: A semantic version number (check out [semver][2] for version naming rules).
- main (string or array): the primary acting files necessary to use your package. 
- ignore (array): An array of paths not needed in production that you want Bower to ignore when installing your package. 
- keywords (array of strings (recommended)): helps make your package easier to search for when registered
- dependencies (hash): Packages your package depends upon in production. Note that you specify [ranges][3] of versions of dependencies
- devDependencies (hash): Development dependencies
- private (boolean): Set to true if you want to keep the package private and do not want to register the package in the future. 
*(note: for more details around building the bower.json file you should read the [bower.json specification][4])*

We can quickly and easily make a bower.json file by using the command `bower init`.
```
bower init
? name: bower
? version: 0.0.0
? description: 
? main file: 
? what types of modules does this package expose? 
? keywords: 
? authors: JohnMav <email@email.com> 
? license: MIT
? homepage: 
? set currently installed components as dependencies?: Yes
? add commonly ignored files to ignore list?: Yes
? would you like to mark this package as private which prevents it from being accidentally published to the registry: No/N)

{
    name: 'bower',
    version: '0.0.0',
    authors: [
          'JohnUdacity <email@email.com>’
    ],
    license: 'MIT', 
    ignore: [
         '**/.*',
         'node_modules',
         'bower_components',
         'test',
         'tests'
    ],
    dependencies: {
        jquery: '~2.1.3'
    }
}

? Looks good?: Yes
```
Once you complete the dialog you will have a new bower.json file in your directory!
You can automatically add dependencies and developer dependencies by adding either --save or --save-dev, respectively, when installing a package. 

For example my current bower.json in this example is
```
{
    "name": 'bower',
    "version": '0.0.0',
    "authors": [
          'JohnMav <email@email.com>'
    ],
    "license": 'MIT', 
    "ignore": [
         '**/.*',
         'node_modules',
         'bower_components',
         'test',
         'tests'
    ],
    "dependencies": {
        "jquery": '~2.1.3'
    }
}
```
after installing bootstrap
```
bower install --save-dev bootstrap
bower cached        git://github.com/twbs/bootstrap.git#3.3.1
bower validate      3.3.1 against git://github.com/twbs/bootstrap.git#*
bower new           version for git://github.com/twbs/bootstrap.git#*
bower resolve       git://github.com/twbs/bootstrap.git#*
bower download      https://github.com/twbs/bootstrap/archive/v3.3.2.tar.gz
bower extract       bootstrap#* archive.tar.gz
bower resolved      git://github.com/twbs/bootstrap.git#3.3.2
bower install       bootstrap#3.3.2

bootstrap#3.3.2 bower_components/bootstrap
└── jquery#2.1.3
```
we can see that our bower.json now includes devDependencies for bootstrap
```
{
    "name": 'bower',
    "version": '0.0.0',
    "authors": [
          'JohnMav <email@email.com>'
    ],
    "license": 'MIT', 
    "ignore": [
         '**/.*',
         'node_modules',
         'bower_components',
         'test',
         'tests'
    ],
    "dependencies": {
        "jquery": '~2.1.3'
    },
    "devDependencies": {
        "bootstrap": '~3.3.1'
    }
}
```
Quick note on the difference between devDependencies and dependencies

devDependencies are for the development-related scripts, e.g. unit testing, packaging scripts, documentation generation, etc. d

Dependencies are required for production use, and are assumed to be required for dev as well.

Including devDependencies within dependencies won't be harmful; the module will just bundle more files (bytes) during the install - consuming more (unnecessary) resources. 

Once you have a proper bower.json file you can register your package and begin allowing other bower users to install the package. However before you register your package you must make sure that
 1. The package name must adhere to the [bower.json spec][5] 
2. There must be a valid manifest JSON in the current working directory 
3. Your package should use [semver][6] Github tags.  
4. Your package must be publicly available at a github endpoint (e.g. Github). *Remember to push your Git tags!*  
5. For private packages consider setting up a private [Bower Registry][7].

Once all these criteria are met you can register your package using the command `bower register <my-package-name> <git-endpoint>`
 
Now anyone can get your package by using the command `bower install <package>`! 
If you wish to unregister a package you can also do so by saying: `curl -X DELETE "https://bower.herokuapp.com/packages/<package>?access_token=<token>”`
Replace `<package>` with your package name and `<token>` with GitHub’s Personal Access Token that you can fetch from [here][8]. 
<h2>Further Learning</h2> 
While this document covers the basics, be sure to browse [Bower’s API][9] for full details on how to utilize all of its command.


  [1]: http://nodejs.org/
  [2]: http://semver.org/
  [3]: https://github.com/npm/node-semver#ranges
  [4]: https://github.com/bower/bower.json-spec#name
  [5]: https://github.com/bower/bower.json-spec#name
  [6]: http://semver.org/
  [7]: https://github.com/bower/registry
  [8]: https://github.com/settings/applications
  [9]: http://bower.io/docs/api/
