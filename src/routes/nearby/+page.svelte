<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';

	const restaurants = [
		{ name: 'El Chivo', url: 'https://www.elchivo.co/', images: ['/ElChivo.png'] },
		{
			name: 'La Luna',
			url: 'https://lalunanosara.com/',
			images: ['/LaLuna.jpg', '/LaLuna2.jpg', '/LaLuna3.jpg']
		},
		{
			name: "Olga's Beach Bar",
			url: 'https://olgasbeachbarnosara.com/',
			images: ['/Olgas.jpg']
		},
		{
			name: 'Pulpo Pelada',
			url: 'https://www.instagram.com/pulpo_pelada/',
			images: ['/PulpoPelada.jpg']
		},
		{
			name: 'Restaurante IL Pepperoni',
			url: 'https://www.instagram.com/restaurante_il_pepperoni/',
			images: ['/RestauranteILPepperoni.jpg']
		},
		{
			name: "Rosi's Playa Pelada & Soda Tiki",
			url: 'https://www.instagram.com/rosissodatica/',
			images: ['/RosisPlayaPelada.jpeg']
		}
	];
</script>

<div class="bg-primary flex w-full flex-col items-center justify-center text-white">
	<div
		class="m-8 flex flex-col items-center justify-end py-16 text-center text-5xl/relaxed font-semibold max-[860px]:m-4 max-[860px]:py-8 max-[860px]:text-3xl"
	>
		Discover the wonderful&nbsp;<span class="italic">food, drink, and fun</span> Nosara has to offer.
	</div>
</div>
<main class="flex flex-row justify-center max-[860px]:flex-col">
	<div>
		{#each restaurants.splice(0, restaurants.length / 2) as restaurant}
			<Button
				variant="link"
				href={restaurant.url}
				target="_blank"
				class="m-4 flex h-min max-w-[860px] cursor-pointer flex-col items-center justify-center underline decoration-1 hover:decoration-2"
			>
				<h2 class="text-4xl max-[860px]:text-2xl">{restaurant.name}</h2>
				<img
					src={'/nearby' + restaurant.images[0]}
					alt={restaurant.name}
					class="rounded-2xl"
					width="500px"
				/>
			</Button>
		{/each}
	</div>
	<div>
		{#each restaurants.splice(restaurants.length / 2) as restaurant}
			<Button
				variant="link"
				href={restaurant.url}
				target="_blank"
				class="m-4 flex h-min max-w-[860px] cursor-pointer flex-col items-center justify-center underline decoration-1 hover:decoration-2"
			>
				<h2 class="text-4xl max-[860px]:text-2xl">{restaurant.name}</h2>
				<img
					src={'/nearby' + restaurant.images[0]}
					alt={restaurant.name}
					class="rounded-2xl"
					width="500px"
				/>
			</Button>
		{/each}
	</div>
</main>
