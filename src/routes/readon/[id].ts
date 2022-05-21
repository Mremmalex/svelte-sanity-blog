import { sanity } from '../../utils/sanity';

/** @type {import('./__types/[id]').RequestHandler} */

export async function get({ params }: { params: { id: string } }) {
	const query = `*[_type == "blog" && _id == "${params.id}"]`;
	const blog = await sanity.fetch(query);

	return {
		body: {
			blog
		}
	};
}
