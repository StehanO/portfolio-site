module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: false,
        sourceComments: false
      },
      build: {
        files: {
          'src/public/css/site.css': 'src/public/css/site.scss'
        }
      }
    },
    cssmin: {
      build: {
        files: {
          'src/public/css/site.min.css': 'src/public/css/site.css'
        }
      }
    },
    babel: {
      options: {
        presets: ['es2015', 'react']
      },
      build: {
        files: [{ expand: true, cwd: 'src/', src: ['**/*.js'], dest: 'lib/' }]
      }
    },
    copy: {
      build: { files: [{ expand: true, cwd: 'src/public', src: ['**/*', '!js/*'], dest: 'lib/public' }] },
      package: { files: [{ expand: true, src: ['package.json', 'projects.json', 'webpack.config.js'], dest: 'lib/' }] }
    },
    mkdir: {
      all: { options: { create: ['lib/logs'] } }
    },
    compress: {
      build: {
        options: {
          archive: 'deploy.tar.gz'
        },
        files: [{ expand: true, cwd: 'lib/', src: ['**/*'], dest: '/' }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-compress')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-mkdir')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-babel')

  grunt.registerTask('default', ['sass', 'cssmin'])
  grunt.registerTask('build', ['babel', 'copy', 'mkdir'])
  grunt.registerTask('deploy', ['compress'])
}
