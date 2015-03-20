# OH: Sublime Text, Vim, and Text Editing

Hi everyone,

Thanks for attending office hours earlier today (Wednesday, January 14) about
Sublime Text, Vim, and text editing in general! We hope that you found it
helpful, whether you're into Sublime Text and wanted to learn a few tricks, are
considering choosing something else for your text editing needs, or don't quite
know where to begin.

If you missed it, you can get to it [here][hangout].

Here's what Poornima, Dimka, and I (Chrisna) covered:

## How to choose a text editor

We currently recommend [Sublime Text][subl]. Poornima and many of our coaches
use it and like it a lot. Chrisna and a couple of other coaches use [Vim][vim],
and a few others use [Emacs][emacs]. All three options are widely supported
across multiple operating systems, enjoy very strong support from the developer
community and have many complicated (and not-so-complicated) features that will
make you more efficient. Vim and Emacs tend to be more difficult for beginners
to learn.

## How to use a text editor effectively

### Sublime Text

Poornima demonstrated quite a few shortcuts!

| Action                    | Mac               | Windows/Linux         |
| ------------------------- | ----------------- | --------------------- |
| Insert line below         | Cmd+Enter         | Ctrl+Enter            |
| Insert line above         | Cmd+Shift+Enter   | Ctrl+Shift+Enter      |
| Select line (repeatable)  | Cmd+L             | Ctrl+L                |
| Indent line/selection     | Cmd+]             | Ctrl+]                |
| Unindent line/selection   | Cmd+[             | Ctrl+[                |
| Comment line/selection    | Cmd+/             | Ctrl+/                |
| Comment selection (block) | Cmd+Opt+/         | Ctrl+Shift+/          |
| Go to start of line       | Cmd+Left          | Ctrl+Left             |
| Go to end of line         | Cmd+Right         | Ctrl+Right            |
| Delete to start of line   | Cmd+K then Delete | Ctrl+K then Backspace |
| Delete to end of line     | Cmd+K then K      | Ctrl+K then K         |
| Sidebar (toggle)          | Cmd+K then Cmd+B  | Ctrl+K then Ctrl+B    |

### Vim

- Vim is a modal text editor. This means that inserting text happens in one
  mode, moving around your document happens in another mode, and selecting text
  happens in yet another mode. This can be confusing at first because Vim
  starts in normal mode, which is the "moving around your document" mode --
  typing characters doesn't actually insert text into the document. To switch
  from normal mode to insert mode, the simplest way is to type `i`. This will
  place the cursor where you can start typing where your normal mode's cursor
  currently is. There are other ways to switch into insert mode (where you can
  start at the beginning of a line, the end of a line, on a new line above or
  below your current line, and more).
- To switch from insert mode back to normal mode, you can press `Esc` or
  `Ctrl+[`. Both of these are inconvenient for different reasons, so a lot of
  Vim power users make a custom shortcut for this. I like `Ctrl+[` because it
  allows me to keep my hands on home row. To switch from normal mode to visual
  mode (selecting text), the simplest way is to type `v`. Then, you can
  navigate as you would in normal mode, except that everything from your start
  point to where your cursor currently is will be selected and you can do stuff
  to it (i.e. paste, cut, delete, indent, etc.). If you type `V` (uppercase) to
  transition into visual mode, it will work by line as opposed to by character.
- In general, you want to spend as little time in insert mode as possible. You
  can still move the cursor with the arrow keys in insert mode, but normal mode
  is much, much faster.
- In normal mode, you can do a lot of cool things!
  - `h`/`j`/`k`/`l` moves the cursor left/down/up/right
  - You can modify most actions with a number. `40j` will move the cursor down
    40 lines (as opposed to 1).
  - `w`/`e`/`b` moves the cursor to the beginning of the next word/end of the
    next word/start of the previous word
  - Capitalizing `w`, `e`, or `b` changes the definition of a "word." You
    should experiment with this and other commands!
  - `{` or `}` moves the cursor back one paragraph or forward one paragraph. In
    code, this essentially means "to the previous blank line" or "to the next
    blank line."
  - Go to a specific line number with `[line]G` (i.e. `30G`), the end of the
    file with just `G`, and the top of the file with `gg`. Navigate within a
    line with regex-like commands: `0` for the beginning, `^` for the start of
    text, and `$` for the end of the line.
- _Not shown in office hours_: You can combine any navigation command with an
  action, such as delete (`d`) or yank/copy (`y`)!
  - Delete to the end of the line: `d$`
  - Delete 40 lines: `40dd` (`dd` is a special command to delete 1 line; lots
    of actions in Vim, when repeated, will do the action to one line).
  - Copy word: `yw`
  - Copy the next 5 words: `5yw`
  - Delete 2 previous paragraphs: `2d{`
  - Indenting (`<` or `>`) and commenting (`gc`) work roughly the same as
    delete and yank/copy, because they are also actions. Note that commenting
    requires a plugin called [vim-commentary][vim-c].

## Getting started and getting help

### General

- All popular text editors will have plugins for most programming languages.
- The types of plugins you'll want to look for will check your code for syntax
  errors or oddities (linters), indent your file or otherwise reduce time spent
  doing menial tasks (i.e. converting tabs to spaces and vice-versa, handling
  trailing whitespace, etc.), or provide extra functionality such as code
  completion or running your code inside the text editor. Sublime Text has a
  lot of this functionality by default!

### Sublime Text

- [Package Control][pkg-ctrl] is your friend! Once you install it, you can
  bring it up by pressing `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P`
  (Windows/Linux).

### Vim

- Vim contains a built-in tutor. If you have it installed, typing `vimtutor`
  into your Terminal or command line application should start a very helpful
  tutorial that will walk you through the basics.
- The help command in Vim is `:help [command]` when you're in normal mode. For
  instance, `:help j` will show you something about how `j` in normal mode
  means "go down." Configuration for Vim happens in a `vimrc` file. An example
  of one can be found [here][vimrc].
- There are several plugin managers for Vim. The one I use is called
  [Vundle][vundle]. You can see traces of it in the vimrc file located above.

[hangout]: https://plus.google.com/events/c3437q1398s867a030o1fdkufs0?authkey=CILhoLjBpMHrDA
[subl]: http://www.sublimetext.com
[vim]: http://www.vim.org
[emacs]: http://www.gnu.org/software/emacs/
[vim-c]: https://github.com/tpope/vim-commentary
[pkg-ctrl]: https://packagecontrol.io
[vimrc]: https://gist.github.com/ccrazy88/9befd65c5af02366e18b
[vundle]: https://github.com/gmarik/Vundle.vim
