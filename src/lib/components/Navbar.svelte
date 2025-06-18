<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from './ui/button/index';
	import { page } from '$app/state';
</script>

<nav
	class="bg-primary flex w-full flex-row items-center justify-center p-2 text-white max-[860px]:justify-between"
>
	<div class="inline-flex w-1/2 items-center justify-start">
		<img src="/logo.png" alt="Casa Onda Logo" class="aspect-square w-[75px] max-[860px]:w-[60px]" />
		<h1 class="text-2xl font-light max-[860px]:text-lg">Casa Onda</h1>
	</div>
	<div class="inline-flex shrink-0 items-center">
		<Button
			variant="link"
			href="/"
			class={cn('text-white decoration-1 hover:decoration-2', {
				underline: page.url.pathname === '/'
			})}
		>
			Home
		</Button>
		<Button
			variant="link"
			href="/nearby"
			class={cn('text-white decoration-1 hover:decoration-2', {
				underline: page.url.pathname === '/nearby'
			})}
		>
			Nearby
		</Button>
	</div>
	<div class="inline-flex items-center justify-end min-[860px]:w-1/2"></div>
</nav>
