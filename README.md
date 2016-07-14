# Pug Build Task

Build HTML from [pug](http://jade-lang.com) with gulp.

## API

### buildPug([options])

Returns a [stream](http://nodejs.org/api/stream.html) of [Vinyl files](https://github.com/wearefractal/vinyl-fs)
that can be [piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

#### Available options:
- **src** (String|Array) Glob or array of globs ([What's a glob?](https://github.com/isaacs/node-glob#glob-primer)) matching pug source files. Default: `'app/**/*.pug'`.
- **dest** (String) Output path for the HTML files. Default: `'www/build'`.

## Example

```
var buildPug = require('ionic-gulp-pug-copy');

gulp.task('pug', function(){
  return buildPug({ dest: 'www/my-custom-build-dir' });
});
```
