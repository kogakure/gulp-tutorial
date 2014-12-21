# Introduction to Gulp.js

## Tutorial
These are the files for my fourteen-part series *Introduction to Gulp.js* published on my website [stefanimhoff.de](http://stefanimhoff.de/).

## Tutorial Overview
1. [Intro and Setup](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup)
2. [Server with BrowserSync and Configuration](http://stefanimhoff.de/2014/gulp-tutorial-2-development-server-browsersync-configuration/)
3. [Build, Clean and Jekyll](http://stefanimhoff.de/2014/gulp-tutorial-3-build-clean-jekyll/)
4. [Creating CSS with Sass (and Compass)](http://stefanimhoff.de/2014/gulp-tutorial-4-css-generation-sass/)
5. [Bundling JavaScript with Browserify](http://stefanimhoff.de/2014/gulp-tutorial-5-javascripts-browserify/)
6. [Images and Vector Fonts](http://stefanimhoff.de/2014/gulp-tutorial-6-images-vector-fonts/)
7. [Base64 Encoded Images](http://stefanimhoff.de/2014/gulp-tutorial-7-base64/)
8. [Watch for Changes](http://stefanimhoff.de/2014/gulp-tutorial-8-watch/)
9. [Checking the Syntax of SCSS and JavaScript](http://stefanimhoff.de/2014/gulp-tutorial-9-linting-scss-and-javascript/)
10. [Generating CSS Image Sprites](http://stefanimhoff.de/2014/gulp-tutorial-10-generating-sprites/)
11. [Production Build, Server and Jekyll](http://stefanimhoff.de/2014/gulp-tutorial-11-production-build-server-and-jekyll/)
12. [Optimize CSS, JavaScript, Images and HTML](http://stefanimhoff.de/2014/gulp-tutorial-12-optimize-css-javascript-images-and-html/)
13. [Revisioning](http://stefanimhoff.de/2014/gulp-tutorial-13-revisioning/)
14. [Deploying the Website with Rsync](http://stefanimhoff.de/2014/gulp-tutorial-14-deploying-the-website/)
15. [Performance Improvements with WebP and Gzip](http://stefanimhoff.de/2014/gulp-tutorial-15-performance-tasks/)

## Installation
Clone the repository on your computer and change into the projects folder. Run:

```sh
$ bundle
$ bower install
$ npm install
```

**Hint**: If you get errors while installing `gulp-imagemin` it may help to execute this command before running `npm install`:

```sh
export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
```

To install  [Fontcustom](http://fontcustom.com/) you should have [Homebrew](http://brew.sh/) installed or use another package management tool to install the dependencies:

```sh
$ brew install fontforge --with-python
$ brew install eot-utils
```

## Setup

Open `gulp/config.js` and change settings if needed. Only the `rsync` settings need to be adjusted. Change the `destination` to a path on your webserver and change `hostname` and `username`.

## Running Gulp.js

Three tasks are available:

```sh
$ gulp
$ gulp publish
$ gulp deploy
```

- Running `gulp` will start a development server, build assets and the Jekyll site and start a `watch` task.
- Running `gulp publish` will copy and optimize assets and run a production build of Jekyll.
- Running `gulp deploy` will copy the generated files with Rsync to your server.

## Credits

This tutorial includes some files for demonstation purposes:

- The [Gulp.js logo](http://gulpjs.com/) used as image example
- The pattern [Light gray](http://subtlepatterns.com/light-fray/) by [Brenda Lay](http://poisones.tumblr.com/), published on [Subtle Patterns](http://subtlepatterns.com/)
- The SVGs and PNGs are take from the [IcoMoon Icon Pack](https://icomoon.io/#icons-icomoon).
