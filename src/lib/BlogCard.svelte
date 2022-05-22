<script lang="ts">
	export let image: unknown;
	export let title: string;
</script>

<div
	class="flex flex-row-reverse mt-4 justify-between gap-6 items-center bg-slate-800 h-[15em] w-[35em] md:w-[50em] text-gray-100 rounded-lg shadow-md hover:scale-105"
>
	<figure>
		<img class="w-full h-[15rem] object-cover rounded-md " src={image} alt={title} />
	</figure>
	<div class=" px-10">
		<h2 class="text-center font-bold text-3xl">{title}</h2>
	</div>
	<!-- <p>{content}</p> -->
</div>
