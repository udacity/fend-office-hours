# Sublime Text Editor Tips and Tricks
A lot of people use Sublime Text simply as a text editor, when in fact it is so much more! Sublime not only has a whole host of extremely poweful hotkeys but it also has a fantastic suite of tools that come pre-installed with sublime. 

One thing to note in this Documentation I am using a Mac and Sublime Text 3, so if a particular hotkey doesn't work for you don't fret. To see a list of hotkey commands, you can open sublime go to preferences and see your hotkey bindings there. You can also change hotkey bindings if you find something more preferable than the defaults.

If you want to follow feel free to clone this repository and open the sublime.html document to try out these hotkeys

## Word Selection
In sublime you can quickly select words by using command + D, if you continue to hit command + D you will continue to select instances of this same word. If you want to select all words that match the given word in a document you can use the hotkey command + ctrl + G. 

Command + L is useful for selecting lines and Command + A is useful for selecting everything

## Multiline Selection 
You can command click to select multiple lines to edit in sublime. This is extremely useful for when you need to make several lines of code that are identical (Trust me its more common than you'd expect!)

## The Command Pallette
To open the command pallette you can use the hotkey command + shift + P. The command pallette has a whole host of tools which allow you to quickly rename files, copy files, etc... Also a feature that I really like about it, is the ability to quickly set the syntax for what you are working on. Sublime support syntax highlighting for a ton of languages and its great to be able to quickly add syntax highligting to anything I work on. 

## The Package Manager 
Now something that typically doesn't come pre-packaged with Sublime is the package manager. You can find the package manager here: https://packagecontrol.io/

This tool gives you access to thousands of user created packages for hundreds of different languages, and they are all used within sublime text. 

To install a package you can use command + shift + P to open the command pallette and and begin searching for "install package". You can run this and then search for whatever package you want to install. I highly suggest at the minimum these packages.

 - Sidebar Enhancements
 - A Linter, like JSLint
 - Emmet (An HTML generator tool!) 

# Emmet, speedy HTML & CSS Coding
Emmet is an amazing HTML and CSS generator tool, which will allow you to write HTML & CSS really quickly and easily. One thing to note though is you shouldn't try and get too complicated with Emmet it's built to help you code with speed, if you are spending more than a few seconds figuring out how to write something your going about it in too complex of a manner. Try to keep your Emmet Command short and sweet! 

If you want to see what Emmet can do be sure to install the package on sublime and download the Emmet.html file included in this repository. Follow along and see if you can decipher what the code is going to get generated into before it happens. Also be sure to support the project and check out further documentation here: http://emmet.io/

# Q&A
#### Q: Wondering how to continue lines? Seems like the carriage return and tabs are included when I look at the saved code in devTools.
A: Line continuation is dependent on the language you are working with, the syntax of the lanugage determines what the line continuation character is. The carriage return and tabs are not usually visible, but on Windows this may be a different case. A line continuation character tells the compiler (syntax dependent) to ignore the carriage return.

#### Q: Also, Chrome is my default browser but IE opens when I right click and select open in browser.
A: Here is the best solution we can find [on the Sublime Text Forums](http://www.sublimetext.com/forum/viewtopic.php?f=3&p=62893). In Windows, "Open in Browser" refers to the default program that opens all HTML files on your computer (not your default browser). 

#### Q: Can you configure those short keys? A lot of hotkeys are not working with non-US keyboards.
A: To change your keyboard hotkeys in Sublime, go to Sublime Text > Preferences > Key Bindings [this is a known issue and discussed on the Sublime Text forums](https://www.sublimetext.com/forum/viewtopic.php?f=3&t=597) I also found [some additional guidance for configuring these settings](http://www.sublimetext.com/docs/key-bindings). 

#### Q: Sublime2 has an irritating message about a slow plugin that pops-up. Is There a way to fix it?
A: Under Sublime Text > Preferences > Settings - User you can turn off detect_slow_plugins. Check out [this Sublime Text forum post](http://www.sublimetext.com/forum/viewtopic.php?f=3&t=5527) for additional guidance on adjusting this setting. 

#### Q: This may have been mentioned, but is there a git link to this file?
A: How meta. To find this answer, you found the git link. Check out this office hours repo for code shared via Code Cast.
