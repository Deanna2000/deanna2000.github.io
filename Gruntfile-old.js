module.exports = function(grunt) {
    
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
        
            eslint: {
                all: ['blog/scripts/*.js','resume/scripts/*.js']
            },
            watch: {
                scripts: {
                  files: ['scripts/*.js'],
                  tasks: ['uglify'],
                  options: {
                    spawn: false,
                  },
                }
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    files: [{
                        expand: true,
                        cwd: 'admin/scripts',
                        src: '*.js',
                        dest: 'admin/build',
                        ext: '.min.js'
                    },{
                        expand: true,
                        cwd: 'blog/scripts',
                        src: '*.js',
                        dest: 'blog/build',
                        ext: '.min.js'
                    },{
                        expand: true,
                        cwd: 'contact/scripts',
                        src: '*.js',
                        dest: 'contact/build',
                        ext: '.min.js'
                    },{
                        expand: true,
                        cwd: 'resume/scripts',
                        src: '*.js',
                        dest: 'resume/build',
                        ext: '.min.js'
                    },{
                        expand: true,
                        cwd: 'navigation/scripts',
                        src: '*.js',
                        dest: 'navigation/build',
                        ext: '.min.js'
                    },{
                        expand: true,
                        cwd: 'projects/scripts',
                        src: '*.js',
                        dest: 'projects/build',
                        ext: '.min.js'
                  }]
                }
            }
        });
    
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-eslint');
        
    
        // Default task(s).
        grunt.registerTask('default', ['uglify', 'eslint','watch' ]);
    
    };