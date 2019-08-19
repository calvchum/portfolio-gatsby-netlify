const path = require("path")

exports.createPages = ({ actions: { createPage } }) => {
	createPages({
		path: "/hello",
		component: path.resolve("./src/components/projectLayout.js"),
		context,
	})
}
