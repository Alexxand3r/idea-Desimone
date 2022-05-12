const { src, dest, watch, series } = require("gulp");

// CSS y SASS
const sass = require("gulp-sass")(require("sass"));

// imagenes
const imagemin = require("gulp-imagemin");

function css(done) {
  src("src/scss/style.scss") //pasos 1-identificar archivo
    .pipe(sass()) // compílar sass
    .pipe(dest("build/css")); //exportarlo y guardarlo

  done();
}

function dev() {
  watch("src/scss/**/*.scss", css);
}

function imagenes(done) {
  src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));
  done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev);
