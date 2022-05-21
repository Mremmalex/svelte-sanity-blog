<script lang="ts">
    import type { Blog } from "../../types/blog";

    export let blog : Blog[];

    
</script>


{#each blog as item }
    <div>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
    </div>
{/each}