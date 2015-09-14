
module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: '**/*'
    }

  });

  grunt.registerTask('default', [
      'gh-pages'
    ]);

};