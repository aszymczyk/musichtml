module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'main/style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif,jpeg,JPEG}'],
  				dest: 'images/'
  			}]
  		}
  	},

    watch: {
    scripts: {
        files: ['main/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    } 
}

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};