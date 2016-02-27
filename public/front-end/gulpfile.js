var gulp          = require('gulp');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var uglifycss     = require('gulp-uglifycss');
var jshint        = require('gulp-jshint');
var stylish       = require('jshint-stylish');
var templateCache = require('gulp-angular-templatecache');
var translate     = require('gulp-angular-translate');
var sass          = require('gulp-sass');

gulp.task('default', ['watch']);
gulp.task('test', test);
gulp.task('build', ['jshint', 'build:vendor', 'build:source', 'build:theme', 'css:vendor', 'css:source']);

gulp.task('build:vendor', buildVendor);
gulp.task('build:source', ['templates', 'translate'], buildSource);
gulp.task('build:theme', buildThemeFunction);
gulp.task('css:vendor', buildCssVendor);
gulp.task('css:source', ['sass'], buildCssSource);
gulp.task('sass', buildSass);
gulp.task('jshint', jshintFunction);
gulp.task('watch', ['build'], watchFunction);
gulp.task('templates', templates);
gulp.task('translate', translateFunction);
// Estas tarefas devem ser executadas separadamente

/////////////////////////////////////////////////////
var baseDir = 'app/';
var paths = {
    baseDir: baseDir,
    source: [
        baseDir + 'app.module.js',
        baseDir + '**/*.module.js',
        baseDir + '**/*.js',
        '!' + baseDir + '**/*.spec.js',
    ],
    vendor: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-loading-bar/build/loading-bar.min.js',
        'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
        // Common vendor
        'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
        'node_modules/bootstrap-sweetalert/lib/sweet-alert.min.js',
        'node_modules/waves/dist/waves.min.js',
        'node_modules/bootstrap-growl/bootstrap-notify.min.js',
        'node_modules/moment/moment.js',
        'node_modules/nouislider-angular/nouislider.min.js',

    ],
    vendorCss: [
        'node_modules/animate.css/animate.min.css',
        'node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
        'node_modules/bootstrap-sweetalert/lib/sweet-alert.css',
        'node_modules/angular-loading-bar/build/loading-bar.min.css',
        'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
    ],
    sourceCss: [
        //'assets/vendor/**/*.css',
        //'assets/css/**/*.css',
    ],
    sassFiles: [
        baseDir + '**/*.sass',
        'assets/sass/**/*.sass',
    ],
    dist: './',
    themeSource: [
        'material/material-admin.module.js',
        'material/**/*.js',
    ]
};


function test() {
    console.log('karma...');
}

function buildVendor() {
    return gulp.src(paths.vendor)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(paths.dist + 'js/'));
}

function buildSource() {
    return gulp.src(paths.source.concat([
        'assets/js/templates.js',
        'assets/js/translations.js'
    ]))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist + 'js/'));
}

function buildCssVendor() {
    return gulp.src(paths.vendorCss)
        .pipe(concat('vendor.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(paths.dist + 'css/'));
}

function buildCssSource() {
    return gulp.src(paths.sourceCss)
        .pipe(concat('app.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(paths.dist + 'css/'));
}

function buildSass() {
    return gulp.src(paths.sassFiles)
        .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('assets/css/'));
}

function jshintFunction() {
    gulp.src(paths.source)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter("fail"));
}

function templates() {
    return gulp.src(paths.baseDir + 'components/**/*.html')
        .pipe(templateCache('templates.js', {
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest('assets/js/'));
}

function translateFunction() {
    gulp.src('./angular/**/*.json')
        .pipe(translate())
        .pipe(gulp.dest('assets/js/'));
}

function watchFunction() {
    gulp.watch([
        paths.baseDir + '**/*',
        paths.sassFiles
    ], ['build']);
}

function buildThemeFunction() {
    return gulp.src(paths.themeSource)
        .pipe(concat('material-admin.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist + 'js/'));
}