const fs = require("fs"),
      gulp = require("gulp"),
      path = require("path"),
      rename = require("gulp-rename"),
      rimraf = require("rimraf"),
      swg = require("gulp-swg");

const templateExt = ".jinja",
      src = "src/templates/**/*" + templateExt;

gulp.task("build", function() {
    return gulp.src(src)
        .pipe(swg())
        .pipe(rename(function(path) {
            path.extname = ".html";
        }))
        .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
    if (fs.existsSync("./build")) {
        rimraf.sync("./build");
    }
});

gulp.task("copy", ["clean"], function() {
    return gulp.src("src/assets/**/*", { base: "src" })
        .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
    gulp.watch(["src/**/*"], ["clean", "copy", "build"]);
});


gulp.task("default", ["clean", "copy", "build"]);
