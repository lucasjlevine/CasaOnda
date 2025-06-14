<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<main class="newsreader">
  {@render children()}
</main>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>
