module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			dist: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['vendor/jquery-1.x/production/*'],
						dest: 'dist/js/'
					},
					{
						src: ['demo.html'],
						dest: 'dist/demo.html'
					}
				]
			}
		},
		uglify: {
			options: {
				mangle: false,
				sourceMap: true
			},
			dist: {
				files: {
					'dist/js/jquery.zipcode.min.js': [
						'js/jquery.zipcode.js'
					]
				}
			}
		},
		compress: {
			dist: {
				options: {
					archive: 'dist/jquery.zipcode.zip'
				},
				files: [
					{
						expand: true,
						cwd: 'dist/',
						src: ['js/*'],
						dest: ''
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dist', ['copy:dist', 'uglify:dist', 'compress:dist']);
};