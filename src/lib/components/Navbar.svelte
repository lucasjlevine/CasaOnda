<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from './ui/button/index';

	let path = $state('');
	$effect(() => {
		path = window.location.pathname;
	});
</script>

<nav class="m-2 flex w-full flex-row items-center justify-center max-[860px]:justify-between">
	<div class="inline-flex w-1/2 items-center justify-start">
		<img src="/logo.png" alt="Casa Onda Logo" class="aspect-square w-[75px] max-[860px]:w-[60px]" />
		<h1 class="text-2xl font-light max-[860px]:text-lg">Casa Onda</h1>
	</div>
	<div class="inline-flex shrink-0 items-center">
		<Button
			variant="link"
			href="/"
			class={cn('text-white max-[860px]:underline', { underline: path === '/' })}>Home</Button
		>
		<Button
			variant="link"
			href="/nearby"
			class={cn('text-white max-[860px]:underline', { underline: path === '/nearby' })}
			>Nearby</Button
		>
	</div>
	<div class="inline-flex items-center justify-end min-[860px]:w-1/2"></div>
</nav>
