import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanity = SanityClient({
	apiVersion: 'v2022-05-21',
	projectId: 'wpk2zljf',
	dataset: 'production',
	useCdn: false
});

const builder = imageUrlBuilder(sanity);

const urlFor = (src: object) => {
	return builder.image(src);
};
export { sanity, urlFor };
