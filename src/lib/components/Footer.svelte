<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { Instagram } from '@lucide/svelte';
</script>

<footer
	class="flex w-full flex-col items-center justify-center bg-blue-400 p-8 text-center text-white"
>
	<p>Casa Onda</p>
	<Button class="cursor-pointer text-white" variant="link" href="mailto:casaondanosara@gmail.com"
		>casaondanosara@gmail.com</Button
	>
	<div class="flex items-center justify-center">
		<p>Visit our Instagram</p>
		<a href="https://www.instagram.com/casaonda_cr" target="_blank" rel="noopener noreferrer">
			<Instagram class="ml-2 h-8 w-8 rounded-md hover:outline-2" />
		</a>
	</div>
</footer>
