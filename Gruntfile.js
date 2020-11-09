module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: 'build',
                    // open a browser
                    open : true,
                    // inject livereload.js into the pages
                    livereload : true
                }
            }
        },

        watch: {
            options: {
                livereload: {
                  hostname: 'localhost',
                  port: 35730
                },
            },
            files: ['src/**/*'],
            tasks: ['build']
        },

        clean: {
            build: ['build/**']
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: false
                },
                files: {
                    'build/assets/css/styles.css': 'src/assets/sass/styles.scss'
                }
            }
        },

        assemble: {
            options: {
                layoutdir: 'src/layouts',
                layout: 'base.hbs',
                partials: 'src/partials/**/*.hbs',
                flatten: true
            },
            pages: {
                files: {
                    'build/index': ['src/pages/000-dtc-home.hbs'],
                    'build/new-borns': ['src/pages/001-new-borns.hbs'],
                    'build/infant-toddlers': ['src/pages/002-infant-toddlers.hbs'],
                    'build/primary-school-children': ['src/pages/003-primary-school-children.hbs'],
                    'build/teens': ['src/pages/004-teens.hbs'],
                    'build/adults': ['src/pages/005-adults.hbs'],
                    'build/diet': ['src/pages/006-diet.hbs'],
                    'build/science': ['src/pages/007-science.hbs'],
                    'build/resources': ['src/pages/008-resources.hbs'],
                    'build/hcp-home': ['src/pages/009-hcp-home.hbs'],
                    'build/mod': ['src/pages/010-mod.hbs'],
                    'build/disease-scc': ['src/pages/011-disease-scc.hbs'],
                    'build/clinical-guidelines': ['src/pages/012-clinical-guidelines.hbs'],
                    'build/dtc-signup': ['src/pages/013-dtc-signup.hbs'],
                    'build/hcp-signup': ['src/pages/014-hcp-signup.hbs'],
                    'build/search-results': ['src/pages/015-search-results.hbs'],
                    'build/unsubscribe': ['src/pages/016-unsubscribe.hbs'],
                    'build/sitemap': ['src/pages/017-sitemap.hbs'],
                    'build/error': ['src/pages/018-error-broken-link.hbs'],
                    'build/404': ['src/pages/019-error-404.hbs'],
                    'build/500': ['src/pages/020-error-500.hbs'],
                }
            }
        },

        copy: {
            target: {
                files: [
                    {expand: true, cwd: "src/assets/img/", src: ["**/*"], dest: "build/assets/img/"},
                    {expand: true, cwd: "src/assets/js/", src: ["**/*"], dest: "build/assets/js/"},
                    {expand: true, cwd: "src/assets/pdfs/", src: ["**/*"], dest: "build/assets/pdfs/"},
                    {expand: true, cwd: "src/assets/sass/fonts/", src: ["**/*"], dest: "build/assets/fonts/"},
                    {expand: true, cwd: "src/assets/videos/", src: ["**/*"], dest: "build/assets/videos/"},
                    {expand: true, cwd: "src/", src: ["*.txt"], dest: "build/"},
                    {expand: true, cwd: "src/", src: ["*.xml"], dest: "build/"}
                ]
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'build/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/assets/css',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'build/index.html'
                }
            }
        },

        uglify: {
            dev: {
                options: {
                    mangle: {
                        reserved: ['jQuery']
                    }
                },
                files: [{
                    expand: true,
                    src: ['**/*.js', '!*.min.js'],
                    dest: 'build/assets',
                    cwd: 'src/assets/',
                    production: function (dst, src) {
                        // To keep the source js files and make new files as `*.min.js`:
                        // return dst + '/' + src.replace('.js', '.min.js');
                        // Or to override to src:
                        return src;
                    }
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', ['clean','sass','assemble', 'copy']);
    grunt.registerTask('prod', ['build', 'cssmin', 'htmlmin', 'uglify']);

};


