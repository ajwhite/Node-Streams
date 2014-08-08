var through = require('through'),
    split = require('split'),
    i = 0,
    output;

process.stdin
  .pipe(split())
  .pipe(through(function (buf) {
    output = buf.toString();
    if (i % 2 === 0) {
      output = output.toLowerCase();
    } else {
      output = output.toUpperCase();
    }
    this.queue(output + '\n');
    i++;
  }))
  .pipe(process.stdout);
