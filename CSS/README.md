# Everything you wanted to know about CSS

Well not *everything*, but here's a good place to start. 

You can get to the event page (with video) [here](https://plus.google.com/events/cdvpviipduv1senlapc62791d3o?authkey=CK3LgMf5-fr0xgE). 

This Webcast covers:

* [1:05] CSS Tricks: https://css-tricks.com/
  See also:
  * Learn to Code: [Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)
  * [Cool CSS Animations on Code Pen](http://webdesign.tutsplus.com/articles/15-inspiring-examples-of-css-animation-on-codepen--cms-23937)
  * [Other dazzling examples](http://tutorialzine.com/2014/07/20-impressive-css3-techniques-libraries-and-examples/)
  * http://daneden.github.io/animate.css/ (from Jonathan at [53:01])
* [2:24] [The Box Model](https://css-tricks.com/the-css-box-model/)
* [2:50] CSS Preprocessors
  * Coach JohnMav's [Overview of CSS Preprocessors](https://discussions.udacity.com/t/an-overview-of-css-preproccessors-beginner/22900)
  * [LESS](http://lesscss.org/) used in Bootstrap < 3
  * [SASS](http://sass-lang.com/) used in Bootstrap 4a. [Udacity Tutorial on SASS](https://discussions.udacity.com/t/sass-syntactically-awesome-style-sheets-intermediate/23737)
* [5:50] Organizing CSS
  * With mutliple CSS files (just CSS, see LESS or SASS for more structure). You can import other CSS files with [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), but more likely, you would merge (and minify) your CSS with task runners like Grunt and Gulp (not the focus of this webcast, but see this webcast for that: [Webcasts: Bower and Taskrunners (Grunt & Gulp)](https://plus.google.com/u/0/events/cqecguv492nm1uhmnqo3khr2bv4?authkey=CNG7rsiHksvtQg) instead)
  * [6:44] Inside a file
* *[8:20 - 10:40] Sorry, dead zone to make sure webcast was visible.*
* [13:22] Bootstrap vs. Flexbox
* [15:15] [ARIA - Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) as seen in
  [Bootstrap Modals](http://getbootstrap.com/javascript/#modals), note attribute: `aria-label`
* [16:00] Usability in Design
  * [Web Design for Color Blind People](http://webdesign.tutsplus.com/articles/designing-for-and-as-a-color-blind-person--webdesign-3408)
* [17:20] Quick recap on how CSS works
* [21:00] [Measurements in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
  * pixels (px) - "[picture elements](https://en.wikipedia.org/wiki/Pixel)", the dots
  * ems (em) - the width of ‘m’, relative to the font size
  * percentages (%) - relative to the parent container
  * vw - relative to width of viewport (the "viewport" is the visible part of the page)
  * vh - relative to height of viewport
  * vmax - whichever is bigger
  * vmin - whichever is smaller
* [25:15] [Block elements vs. Inline vs. Inline-Block](http://bit.ly/1NverG8)
* [28:30] widths in CSS are for content only, unless you use border-box so that widths will include borders and padding.
```css
* {
	box-sizing: border-box;
}
```
* [30:00] [Webcast on Chrome Devtools](https://plus.google.com/u/0/events/cnol83cpan170apb933pvmlts94?authkey=CJaD8fvjs_2OSg)
* [34:35] Toggling border-box
* [35:00] Overflow
* [37:00] List of blogs for advanced CSS: [CSS Tricks (Chris Coyier) AWESOME list of CSS Blogs](https://css-tricks.com/blogs-i-read/)
* [39:05] Centering elements
* [42:40] Pseudo-classes (`:hover`) and pseudo-elements (`::before`)
  Easily Confused!
  * So technically, Durant was talking about pseudo-*elements*
  `::before` and `::after` which you can see were easily confused with
  pseudo-*classes* so the W3C later gave them two colons instead of
  one. Pseudo-elements select a part of the DOM, so you can use them
  to place something relative to them, like before or after, see
  [MDN Pseudo-Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
  Since they decided to use double colons later, so you'll still see
  them with a single colon (and browsers will usually still render
  them correctly with one colon).
  * So what are psuedo-*classes* then? They describe the *state* of a
    element like `:checked`, `:hover`, or `:disabled`, see
    [MDN Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 
* [43:35] Floats
* [50:40] clear and "clearfix"
```css
.group::after {
  clear: both;
  overflow: hidden;
}
```
* [53:35] Media queries (with a learning-moment :) )
  * [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  * [Udacity's Responsive Images](https://www.udacity.com/course/responsive-images--ud882)
  * [Udacity's Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
