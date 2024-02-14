export default {
	name: "testDocument",
	title: "Test Document",
	type: "document",
	fields: [
		{
			title: "Description",
			name: "description",
			type: "normal",
		}
	],
	preview: {
		prepare() {
			return {
				title: "Test Document",
			};
		},
	},
};
