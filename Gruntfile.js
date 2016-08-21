module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            options: {
                sourceMap: false,
                sourceComments: false
            },
            dist: {
                files: {
                    "public/css/site.css": "public/css/site.scss"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "public/css/site.min.css": "public/css/site.css"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-sass");

    grunt.registerTask("default", ["sass", "cssmin"]);
};
