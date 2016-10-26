/// <binding BeforeBuild='clean' AfterBuild='rebuild-assets' ProjectOpened='on-open' />

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        clean: ["bundles/*"],

        concat: {
            options: {
                // Task-level options may go here, overriding task defaults.
            },
            jsBundles: {
                options: {
                    // target options may go here, overriding task-level options.
                    separator: ';\n',
                    sourceMap: true,
                    nonull: true,
                },
                files: {
                    'bundles/shared.js': [
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    ],
                    'bundles/HelloWorld.js': [
                        'features/HelloWorld/*.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            jsBundles: {
                files: [{
                    expand: true,
                    cwd: 'bundles/',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'bundles/',
                    ext: '.min.js',
                    extDot: 'first'
                }],
            }
        },

        watch: {
            files: ["features/**/*.js"],
            tasks: ["rebuild-assets"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("rebuild-assets", ['clean', 'concat', 'uglify']);
    grunt.registerTask("on-open", ['watch']);
};
