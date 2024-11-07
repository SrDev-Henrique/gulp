import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import sourceMaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import obfuscate from "gulp-obfuscate";
import imagemin from "gulp-imagemin";

const sassCompiler = gulpSass(sass);

export function compressImages() {
    return gulp
        .src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"));
}

export function compressJavaScript() {
    return gulp
        .src("./source/scripts/*.js")
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(sourceMaps.write("./maps"))
        .pipe(gulp.dest("./build/scripts"));
}

export function compileSass() {
    return gulp
        .src("./source/styles/style.scss")
        .pipe(sourceMaps.init())
        .pipe(
            sassCompiler({
                outputStyle: "compressed",
            }).on("error", sassCompiler.logError)
        )
        .pipe(sourceMaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"));
}

export default function () {
gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(compressImages)
);
gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(compressJavaScript)
);
gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compileSass)
);
};
