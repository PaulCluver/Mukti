/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

gulp.task ['test'], ->
   runSequence start_server, run_protractor, end_server.