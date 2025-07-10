<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from './ui/button/index';
	import { page } from '$app/state';
	import { Instagram } from '@lucide/svelte';
</script>

<nav
	class="flex w-full flex-row items-center justify-center p-2 pb-8 text-white backdrop-blur-sm max-[860px]:justify-between"
	style="mask-image: linear-gradient(to bottom, black 75px, transparent 100%); mask-position: 0px 0px;"
>
	<div class="inline-flex w-1/2 items-center justify-start">
		<div class="m-4 aspect-square h-[40px] w-[40px] rounded-full bg-blue-700 opacity-50">
			<img
				src="/logo.png"
				alt="Casa Onda Logo"
				class="aspect-square w-[40px] max-[860px]:w-[60px]"
			/>
		</div>
		<h1
			class="text-2xl font-light max-[860px]:text-lg/tight"
			style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);"
		>
			Casa Onda
		</h1>
	</div>
	<div class="inline-flex shrink-0 items-center">
		<div class="flex items-center justify-center space-x-4 max-[860px]:space-x-[-8px]">
			<Button
				variant="link"
				href="/"
				class={cn('text-white decoration-1 hover:decoration-2', {
					underline: page.url.pathname === '/'
				})}
				style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);"
			>
				Home
			</Button>
			<Button
				variant="link"
				href="/nearby"
				class={cn('text-white decoration-1 hover:decoration-2', {
					underline: page.url.pathname === '/nearby'
				})}
				style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);"
			>
				Nearby
			</Button>
		</div>
	</div>
	<div class="inline-flex items-center justify-end min-[860px]:w-1/2">
		<a href="https://www.instagram.com/casaonda_cr" target="_blank" rel="noopener noreferrer">
			<Instagram
				class="mr-4 h-8 w-8 rounded-md outline-white hover:outline-1 max-[860px]:h-6 max-[860px]:w-6"
			/>
		</a>
	</div>
</nav>
