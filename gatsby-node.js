const path = require("path")

exports.createPages = ({ actions: { createPages } }) => {
	createPages({
		path: "/hello",
		component: path.resolve("./src/components/projectLayout.js"),
		context,
	})
}
