var gulp = require("gulp"),
  nodemon = require("gulp-nodemon");

gulp.task("dev", function(){
  nodemon({
    script: 'server/server.js', 
    ext: 'js html css', 
    watch: "./",
    env: { 
        'NODE_ENV': 'dev' 
    }
  });
});
