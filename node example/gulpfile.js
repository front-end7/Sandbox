var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

var paths = {
	styles: {
		src: 'src/scss/**/*.scss',
		dest: 'dist/css/'
	},
	html: {
		src: 'src/pug/**/*.pug',
		dest: 'dist/'
	},
	scripts: {
	  src: 'src/js/**/*.js',
	  dest: 'dist/js/'
	}
};

function styles() {
	return gulp.src(paths.styles.src)
	  .pipe(sass())
	  .pipe(rename(function (path) {
		path.basename += ".min";
		path.extname = ".css";
	  }))
	  // pass in options to the stream
	  .pipe(gulp.dest(paths.styles.dest));
}
 
function html() {
  return gulp.src(paths.html.src)
  .pipe(pug())
  .pipe(gulp.dest(paths.html.dest))
}

function scripts() {
	return gulp.src(paths.scripts.src)
	  .pipe(concat('script.min.js'))
	  .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.html.src, html);
  }

var build = gulp.series(gulp.parallel(styles, scripts, html));

exports.styles = styles;
exports.html = html;
exports.scripts = scripts;

exports.build = build;
exports.watch = watch;