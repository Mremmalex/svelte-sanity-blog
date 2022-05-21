export default {
	title: 'Blog',
	name: 'blog',
	type: 'document',
	fields: [
		{ title: 'Title', name: 'title', type: 'string' },
		{ title: 'Blog Image', name: 'blogImage', type: 'image' },
		{ title: 'Content', name: 'content', type: 'text' },
		{ title: 'Date Posted', name: 'datePosted', type: 'date' }
	]
};
