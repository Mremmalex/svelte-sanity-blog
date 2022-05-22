<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Container from '$lib/Container.svelte';
	import { urlFor } from '../../utils/sanity';
	import type { Blog } from '../../types/blog';

	export let blog: Blog[];
</script>

{#each blog as item}
	<Container>
		<Card>
			<figure>
				<img class="h-[10rem]" src={urlFor(item.blogImage)} alt="blog see" />
			</figure>
			<div>
				<h2 class="text-lg underline font-bold text-center">{item.title}</h2>
				<p class="px-3 mt-2">{item.content}</p>
			</div>
		</Card>
	</Container>
{/each}
