import gulp       from 'gulp';
import glob       from 'glob';
import file       from 'gulp-file';
import fileExists from 'file-exists';
import concat     from 'gulp-concat';
import uglify     from 'gulp-uglify';
import settings   from '../settings';
import vendor     from '../../package.json';

gulp.task('scripts-dependencies', () => {
    gulp.src(vendor.vendorScripts.path, {base: './src/bower_components/'})
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(settings.dist.scripts));
});