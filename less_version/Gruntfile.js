/* Created by sean olson on 10/24/2015. */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        concat: {
            //add concat task configurations
            options: {
                separator: '\n\n//------------------------------------------------\n\n',
                stripBanners: true
            },
            dist: {
                src: ['source/assets/js/plugins/*.js'],
                dest: 'www/assets/js/plugin.js'
            }

        },


        connect: {
            //add the connect middleware configurations
            server: {
                options: {
                    port: 3030,
                    hostname: 'localhost',
                    base: './www',
                    livereload: true,
                    open: true
                }
            }
        },
        copy: {

            //add copy task configurations
            options:{mode: true},
            root: {
                files:[
                    {expand: true, flatten: true, src: 'source/*.html', dest: 'www/', filter: 'isFile'},
                    {expand: true, flatten: true, src: 'source/*.ico', dest: 'www/', filter: 'isFile'}
                ]
            },
            images: {
                files:[
                    {expand: true, flatten: true, src: 'source/assets/img/*.*', dest: 'www/assets/img', filter: 'isFile'},
                ]
            },
            js: {
                files:[
                    {expand: true, flatten: true, src: 'source/assets/js/*.js', dest: 'www/assets/js/', filter: 'isFile'},
                ]
            },
            jslibs: {
                files:[
                    {expand: true, flatten: true, src: 'source/assets/js/libs/*.*', dest: 'www/assets/js/libs/', filter: 'isFile'},
                ]
            }

        },


        less: {

            development:{
                files:{
                    'www/assets/css/app.css': 'source/assets/css/app.less'
                }
            }
        },

        watch: {

            //add the watch task configurations
            options: {
                spawn: false,
                livereload: true
            } ,
            configFiles: {
                files: ['Gruntfile.js'],
                tasks: ['concat', 'copy', 'sass'],
            },
            copy:{
                files: ['source/*.*', 'source/assets/img/*.*', 'source/assets/js/libs/*.*', 'source/assets/js/*.*'],
                tasks: ['copy']
            },
            css: {
                files: ['source/assets/css/*.*'],
                tasks: ['less'],

            },
            concat:{
                files: [
                    'source/assets/js/plugins/*.*'
                ],
                tasks: ['concat']
            }

        }

    }); //initConfig section

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['less', 'concat', 'copy', 'connect', 'watch']);
    grunt.registerTask('no_connect', ['less', 'concat', 'copy',  'watch']);


}; //wrapper function

