<script lang="ts">
	import { urlFor } from '../utils/sanity';
	import type { Blog } from '../types/blog';
	import BlogCard from '../lib/BlogCard.svelte';

	export let blogs: Blog[];
</script>

<section>
	<div class="flex flex-col container mx-auto items-center">
		{#each blogs as blog}
			<a href={'/readon/' + blog._id}>
				<BlogCard image={urlFor(blog.blogImage)} title={blog.title} />
			</a>
		{/each}
	</div>
</section>
