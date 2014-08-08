/*
  #####################################################################
  ##                       ~~  HTML STREAM  ~~                       ##
  #####################################################################

Your program will get some html written to stdin. Convert all the inner html to
upper-case for elements with a class name of "loud".

You can use `trumpet` and `through` to solve this adventure.

With `trumpet` you can create a transform stream from a css selector:

    var trumpet = require('trumpet');
    var fs = require('fs');
    var tr = trumpet();
    fs.createReadStream('input.html').pipe(tr);

    var stream = tr.select('.beep').createStream();

Now `stream` outputs all the inner html content at `'.beep'` and the data you
write to `stream` will appear as the new inner html content.

Make sure to `npm install trumpet through` in the directory where your solution
file lives.

To verify your program, run: `stream-adventure verify program.js`.
*/
var trumpet = require('trumpet'),
    through = require('through'),
    tr = trumpet(),
    s;

s = tr.select('.loud').createStream();
s.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(s);


process.stdin
  .pipe(tr)
  .pipe(process.stdout);
