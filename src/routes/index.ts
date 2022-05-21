import { sanity } from '../utils/sanity';

export async function get() {
	const query = '*[_type == "blog"]';
	const blogs = await sanity.fetch(query);

	return {
		body: {
			blogs
		}
	};
}
