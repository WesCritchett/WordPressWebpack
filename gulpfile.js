var gulp = require("gulp")
var browserSync = require("browser-sync").create()

gulp.task("browser-sync", function () {
	browserSync.init({
		proxy: "http://webpackwithwordpress.local/",
	})

	gulp.watch("*").on("change", browserSync.reload)
})
