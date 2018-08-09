﻿/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '../node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'startup',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'lodash':'node_modules/lodash',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'moment': 'npm:moment',
            // ag libraries
            'ag-grid-ng2': '../node_modules/ag-grid-ng2',
            'ag-grid': '../node_modules/ag-grid',
            'ng2-auto-complete': '../node_modules/ng2-auto-complete/dist'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: '../Startup/Startup.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'lodash': { main: './index.js', defaultExtension: 'js' },
            moment: {
                defaultExtension: 'js'
            },
            'ag-grid-ng2': {
                defaultExtension: "js"
            },
            'ag-grid': {
                defaultExtension: "js"
            },
            'ng2-auto-complete': {
                main: 'ng2-auto-complete.umd.js', defaultExtension: 'js'
            }

        }
    });
})(this);
