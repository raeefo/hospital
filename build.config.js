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

            'vendor/angular-ui-router/release/angular-ui-router.min.js',

            'vendor/restangular/dist/restangular.min.js',

            'vendor/angular-ui-date/src/date.js',

        ],

        css: [

            'vendor/bootstrap/dist/css/bootstrap.min.css',

            'vendor/bootstrap/dist/css/bootstrap-theme.min.css',

            'vendor/jquery-ui/themes/flick/jquery-ui.min.css',

            'vendor/jquery-ui/themes/flick/jquery-ui.theme.css'

        ],

        css_images: [

            'vendor/jquery-ui/themes/flick/images/*'

        ],

        fonts: [

            'vendor/bootstrap/fonts/*'

        ]

    }

};