<script lang="ts">
    import { urlFor } from "../utils/sanity";

    import type { Blog } from "../types/blog";

    export let blogs: Blog[]
    
   
</script>


{#each blogs as blog }
   <a href={'/readon/'+ blog._id}>
        <div class="container mx-auto inline-flex flex-col justify-center items-center">
        <img class="w-10 h-10" src={urlFor(blog.blogImage)} alt={blog.title}>
        <h3 class="font-bold text-3xl">{blog.title}</h3>
    </div>
   </a>
{/each}
