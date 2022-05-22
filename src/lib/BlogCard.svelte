<script lang="ts">
	export let image: unknown;
	export let title: string;
</script>

<div
	class="flex flex-row-reverse mt-4 justify-between px-10 gap-6 items-center bg-slate-800 h-[15em] w-[50em] text-white rounded-lg shadow-md hover:scale-105"
>
	<figure>
		<img class="w-[16em] h-[10em] rounded-md " src={image} alt={title} />
	</figure>
	<h2 class="text-center font-bold text-3xl">{title}</h2>
	<!-- <p>{content}</p> -->
</div>
