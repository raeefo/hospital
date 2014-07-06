module.exports = {

    compile_dir: 'bin',

    app_files: {

        js: ['src/**/*.js'],

        tpl: ['src/**/*.tpl.html'],

        less: ['src/less/main.less']

    },

    vendor_files: {

        js: [

            'vendor/lodash/dist/lodash.min.js',

            'vendor/jquery/dist/jquery.min.js',

            'vendor/jquery/dist/jquery.min.map',

            'vendor/jquery-ui/jquery-ui.min.js',

            'vendor/bootstrap/dist/js/bootstrap.min.js',

            'vendor/angular/angular.min.js',

            'vendor/angular/angular.min.js.map',

            'vendor/angular-cookies/angular-cookies.min.js',

            'vendor/angular-cookies/angular-cookies.min.js.map',

            'vendor/angular-ui-router/release/angular-ui-router.min.js',

            'vendor/restangular/dist/restangular.min.js',

            'vendor/angular-ui-date/src/date.js',

            'vendor/angular-translate/angular-translate.min.js',
            
            'vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',

            'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js'

        ],

        css: [

            'vendor/bootstrap/dist/css/bootstrap.min.css',

            'vendor/bootstrap/dist/css/bootstrap-theme.min.css',

            'vendor/jquery-ui/themes/flick/jquery-ui.min.css',

            'vendor/jquery-ui/themes/flick/jquery-ui.theme.css',

            'vendor/Font-Awesome/css/font-awesome.min.css'

        ],

        css_images: [

            'vendor/jquery-ui/themes/flick/images/*'

        ],

        fonts: [

            'vendor/bootstrap/fonts/*',

            'vendor/Font-Awesome/fonts/*'

        ]

    }

};