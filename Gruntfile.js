module.exports = function(grunt) {
    var webpack = require('webpack');
    grunt.initConfig({
        // Project configuration
        pkg: grunt.file.readJSON('package.json'),
        // Compile Sass
        sass: {
            options: {
                sourceMap: false,
                sourceComments: false
            },
            dist: {
                files: {
                    'public/css/site.css': 'public/css/site.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/css/site.min.css': 'public/css/site.css'
                }
            }
        },
        webpack: {
            reactjs: {
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.DedupePlugin(),
                    new webpack.DefinePlugin({
                        "process.env": {
                            // This has effect on the react lib size
                            "NODE_ENV": '"production"'
                        }
                    })
                ],
                entry: __dirname + '/public/js/react-client.js',
                output: {
                    path: __dirname + '/public/js',
                    filename: 'bundle.min.js'
                },
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader',
                            query: {
                                presets: ['react', 'es2015']
                            }
                        },
                        {
                            test: /\.json$/,
                            loader: 'json-loader'
                        }
                    ]
                },
                resolve: {
                    extensions: ['', '.js', '.jsx', '.json']
                }
            }
        }
    });
    // dependencies
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    // Run tasks
    grunt.registerTask('default', ['sass', 'cssmin', 'webpack']);
};