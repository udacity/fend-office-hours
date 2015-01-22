# Office Hangouts 1/16/15 Summary:

Hello everyone, today we talked about the rubric and the HTML/CSS style guide for Project 1: Mockup to Website.

Some of you may be asking, "If my code works, and it does what it's supposed to do, why is styling my code so important?".

We ask that you adhere to the style guide so that you can learn good practices in terms of formatting. What we mean is that styling your code in a specific format helps keep your code organized in an easy to read manner for both yourself and other developers. It also helps keep code universal and helps programmers work on large projects together while keeping the code format consistent.

### Project 1 Rubric:

Today in office hours, we briefly discussed the rubric and what we look for. The rubric is broken into three sections: Evaluator, Separation of Concerns, and Code Quality. Evaluator refers to whether the code passes the auto-evaluator with a mismatch of 8% or less. Separation of Concerns refers to whether the structure (HTML) has been kept completely separate from the styling (CSS). Basically we look to see if the style attribute has been used in the HTML file. If in doubt, anything that changes how something looks, width, height, color, etc. is considered styling and should be placed into the CSS file. Last, but not least, the Code Quality portion refers to whether the code passes the HTML validator, the CSS validator, and is formatted in the format and style as stated by the Udacity HTML/CSS Style Guide.

### Basic HTML formatting:

We talked about the Code Quality portion today as this is where students tend to not meet specifications.

When you go to the Project Coding Environment, we provide you with a little bit of starter HTML code. The HTML code that we provide you consist of:
	- The opening and closing tags for html
	- The opening and closing tags for head
	- The opening and closing tags for body
	- Necessary elements in the head, such as meta, title, and links to main.css and the bootstrap CSS file

The basic format has been provided for you. By basic format, I mean that you can see the head and body elements are on the same indentation level and indented into the html tag, and that all relevant opening tags have appropriate closing tags. Projects have been submitted with missing closing </html> tags, missing <title> tags, and incorrectly indented <head></head> and <body></body> tags.

On a side note, when submitting your files for evaluation, make sure that the CSS file is named main.css and is referenced in the HTML file as css/main.css. This makes grading a lot easier as it will pass the auto-evaluator.

### Indentation and Spacing:

Now that we have the basic format, one area that needs to be discussed are indentation and spacing. This is something that is often overlooked, but when you take a look at the starter code, you can see that the indentations are not quite consistent:

```
<!DOCTYPE html>
<html>
  <head>
      <meta charset="UTF-8">
      <title>Mockup Portfolio Page</title>
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/main.css">
  </head>
</html>
```

The number of spaces between <html> and <head> are 2 spaces, while the number of spaces from <head> and <meta> are 4 spaces. This is inconsistent and will keep your code from looking organized. The style guide does not specify the number of spaces that should be used, but if you choose to use 2 space indentations, use 2 spaces for all indentations or if you choose to use 4 space indentations, be sure to use 4 spaces for all indentations in your file.

A way to see how many spaces are present on Sublime Text is to highlight the portion of code. If you see a dot, that is considered a space. On Sublime Text, there's actually a nifty trick that you can use to keep your spacing consistent. If you go to the bottom where it says Tab Size: 4 or some other number and click on it, you'll see many different options for Tab Size. Because we used 2 spaces for the purposes of this demonstration, I went ahead and chose Tab Size: 2.

Another source of inconsistent indentation comes from the difference between spaces and tabs. When you hit the tab key instead of the space key, they leave two different marks. If I hit tab and then highlight the code, instead of a dot, I will see a line or a dash. This line/dash indicates that the tab key has been used.

When indenting, it is important to keep that consistent as well. Either use the space bar to create indents or the tab key, but not a mixture of both. In Sublime, this can be taken care of by going back down to where you see Tab Size. When you click, you'll see an option that says, "Indent Using Spaces". What this will do is use spaces rather than a tab when you hit the tab key.

If you're halfway through coding, and you've used a mix of the tab key and the space bar to indent, if you go down to the menu again, Sublime has the options, "Convert Indentation to Spaces" and "Convert Indentation to Tabs". If you choose the first choice, it will convert all tab indentations to spaces, and if you choose the second, Sublime will convert all space indentations to tabs causing your code to be consistent. I recommend using spaces instead of tabs.

### Trailing White Space:

While we're talking about spacing, another area that is often overlooked and an immediate does not meet specifications is trailing white spaces, aka, the silent killer. Trailing white spaces are the empty spaces left after a line of code or on a line break. This creates issues later with version control and often can cause a small witch hunt to find this white space, which is not immediately visible.

On Sublime, you can see those white spaces by highlighting the  code and looking for the dots at the end of lines and on line breaks. A nifty trick on Sublime to prevent white spaces is to go to User Settings in Preferences and add "trim_trailing_white_space_on_save": true, and what this will do is get rid of all white spaces every time you save your file.

I have graded projects before where everything was wonderfully done except for the presence of one tiny white space, which means that the project does not pass.

We mentioned during office hours about posting more information pertaining to different text editors, particularly Atom and Brackets as they are both popular.

For Atom, there are packages that you can add to target whitespace and keep indentation consistent:
	- (https://github.com/atom/whitespace)
	- (https://discuss.atom.io/t/change-tabs-to-spaces/2682/5)

For Brackets:
	- (https://github.com/pockata/brackets-StripTrailingSpaces)
	- (http://stackoverflow.com/questions/22540956/adobe-brackets-write-spaces-instead-of-tabs)

Hopefully for those who are using these two editors, this will help get you started.

### More HTML Formatting:

Above we briefly talked about basic formatting for HTML. There were a couple of areas that we covered today that we found students regularly overlook. The first is missing closing div tags.

When writing code, always write the closing div when writing the opening. This prevents you from forgetting a closing tag (which fails the HTML validator) and when you do have to add a closing tag, you don't have to comb through lines and lines of code to figure out which div is the opening tag you're trying to close.

Something else that we see often is that the <img> tag is missing the alt attribute. The alt attribute is an alternate text view for the media that you have on your page and is useful for blind users (as it is read to them) and if your media fails to load on your page. Please make sure that when you write your image element to include an alt attribute.

```
<img src="images/mug.png" alt="Image Description">
```

On a side note, paragraph element tags are all on one line. Many students will write their paragraph element tags like this:

```
<p>
	Sample paragraph text.
</p>
```

Paragraph tags are all on the same page so it should be written like this:

```
<p>Sample paragraph text.</p>
```

There are other formatting examples on the Udacity HTML Style Guide under the formatting section. Please go and read through the style guide not just for other formatting exmaples, but also for small details that we did not cover today.

### CSS Format/Style:

After the HTML, we take a look at the CSS. The CSS formatting follows this format:

```
.example {
	font-size: 18px;
}


h2 {
	margin-left: 10px;
}
```

After the selector (element name or class name), there should be a space before the opening curly bracket. The property: value pair is then indented into the block and ends with a semicolon, the closing curly bracket is on the next line, and there are two line breaks in between each CSS rule as shown above.

Please be sure to folllow this format. We find that many students forget to include the space after the selector and before the opening curly bracket, and also forget to include the line breaks in between CSS rules.

Another formatting styling thing that we see are that students will sometimes style their website using two selectors in this manner:

```
h2 .example {
	font-size: 18px;
}
```

This is not good practice and should be avoided as it impacts performance and efficiency of your site. Instead of using a specific class name of an element, it would be best to give the particular element that you wish to style another unique class name instead.

As with the HTML file, your CSS file should have no trailing white spaces and should also follow consistent indentation practices. The same tricks taught to you above can be applied to the CSS file in Sublime Text.

Some other small stylistic things that we mentioned today are shorthand properties, case preferences, 0 values, and 3-character hexadecimal notation.

For shorthand properties, when you find that you are referencing three or four different margin properties, such as margin-left, margin-right, margin-top, margin-bottom, it is best to use shorthand properties.

What we mean by this is if we have an example like below, we could combine the three margins into one line.

```
.text-box {
	margin-top: 0;
	margin-bottom: 20px;
	margin-right: 10px;
}
```

This can be written as:

```
.text-box {
	margin: 0 10px 20px 0;
}
```

If you have any questions about which order to write the values, Google CSS margin (or the property you are searching for) shorthand. This will lead you to W3C and MDN resources on how to write the shorthand version.

Something I'd like to point in the example above is that the values of 0 have no units. Many students will write 0px, but it should be written as just 0.

By case preference, HTML and CSS both prefer lowercase over uppercase meaning that something like #F07C17 would be written as #f07c17, and when you have something like #CCCCCC or #aabbcc, they can be abbreviated to #ccc or #abc instead.

Again, there are some small details that we did not go over today so make sure that you go back and review the Udacity CSS style guide to make sure your code is aligned to our guide!

### Last Overview:

Besides our presentation on Project 1, we received several questions today, and I wanted to recap one of the answers.

One of our students asked if you are allowed to resubmit your project if you've modified your project after your project has met specifications. The answer to that is no. You are more than welcome to take as long as you need (within deadlines) to improve your project before submitting for evaluation, but if you've already submitted your project, we ask that you refrain from submitting again for a higher regrade.

To wrap up our Office Hangouts summary, I want to share one more nifty Sublime Text trick with you all today. When you create a new Sublime Text file, if you hit Command Shift P, you can type in the language that you would like and choose Set Syntax, which will automatically set your file to that language without having to search through the menu on the bottom right hand corner or without having to save your file with the appropriate extension.

That's all for today!