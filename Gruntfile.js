module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-ngmin');

	grunt.loadNpmTasks('grunt-recess');

	grunt.loadNpmTasks('grunt-html2js');

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	var userConfig = require( './build.config.js' );
	
	var taskConfig = {

		pkg: grunt.file.readJSON("package.json"),

		clean: {

			all: [

				'bin/assets'

			],
			
			templates: [

				'<%= compile_dir %>/templates.js'

			]

		},
		
		copy: {

			all: {

				files: [{

					src: [ '**' ],

					dest: '<%= compile_dir %>/assets',

					cwd: 'src/assets',

					expand: true

				}, {

					src: '<%= vendor_files.js %>',

					dest: '<%= compile_dir %>/assets/js',

					expand: true,

					flatten: true

				}, {

					src: '<%= vendor_files.css %>',

					dest: '<%= compile_dir %>/assets/css',

					expand: true,

					flatten: true

				}, {

					src: '<%= vendor_files.fonts %>',

					dest: '<%= compile_dir %>/assets/fonts',

					expand: true,

					flatten: true

				}, {

					src: '<%= vendor_files.css_images %>',

					dest: '<%= compile_dir %>/assets/css/images',

					expand: true,

					flatten: true
					
				}]

			},

			index: {

				files: [

					{

						src: 'src/index.html',

						dest: '<%= compile_dir %>/index.html'

					}

				]

			}

		},
		
		html2js: {

			main: {

				options: { base: 'src/app' },

				src: ['<%= app_files.tpl %>'],

				dest: '<%= compile_dir %>/templates.js'

			}

		},
		

		recess: {

			options: {

				compile: true,

				compress: true

			},
			
			main: {

				files: { '<%= compile_dir %>/assets/css/style.css': ['<%= app_files.less %>'] }

			}

		},

		concat: {

			main: {

				src: [

					'module.prefix',

					'<%= html2js.main.dest %>',

					'<%= app_files.js %>',

					'module.suffix'

				], dest: '<%= compile_dir %>/assets/js/app.js'

			}

		},

		ngmin: {

			main: {

				files: [

					{

						src: ['<%= compile_dir %>/assets/js/app.js'],

						dest: '<%= compile_dir %>/assets/js/app.js'

					}

				]

			}

		},

		uglify: {

			main: {

				files: [

					{

						'<%= concat.main.dest %>': ['<%= concat.main.dest %>']

					}

				]

			}

		},

		watch: {

			options: {

				livereload: true

			},

			js: {

				files: [

					'src/less/**/*.less',

					'<%= app_files.js %>',

					'<%= app_files.tpl %>',

					'src/index.html'

				],

				tasks: [

					'copy:index', 'html2js', 'concat', 'recess', 'clean:templates', 'ngmin', 'uglify'

				]

			}

		}

	};

	grunt.initConfig(grunt.util._.extend (taskConfig, userConfig));

	grunt.registerTask ('compile', ['clean:all', 'copy', 'html2js', 'concat', 'recess', 'clean:templates', 'ngmin', 'uglify']);

	grunt.registerTask ('default', ['compile']);

};