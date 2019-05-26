/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

require('@fortawesome/fontawesome-free/css/all.min.css');

// any CSS you require will output into a single css file (app.css in this case)
require('../vendor/style-guide/src/sass/styles.scss');
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

require('../vendor/style-guide/src/js/common');
require('../vendor/style-guide/src/js/table');
require('../vendor/style-guide/src/js/tablist');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
