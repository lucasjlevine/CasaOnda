<script lang="ts">
	import CasaCarousel from '$lib/components/CasaCarousel.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<div class="flex w-full flex-col items-center">
	<div class="bg-primary flex w-full flex-col items-center justify-center text-white">
		<div
			class="m-8 flex items-center justify-end py-24 text-center text-7xl font-semibold max-[860px]:m-4 max-[860px]:flex-col max-[860px]:py-16 max-[860px]:text-5xl"
		>
			Welcome to&nbsp;<span class="italic">Casa Onda</span>
		</div>
	</div>
	<main class="flex flex-col items-center justify-center">
		<div
			class="mt-12 -mb-4 max-w-[860px] text-3xl/relaxed max-[860px]:mx-8 max-[860px]:text-xl/normal"
		>
			<p>
				&emsp;Onda in Spanish translates to a wave, a ripple or a vibe. Nosara, Costa Rica is home
				to world-famous waves, stunning beaches, vibrant yoga culture, and incredible cuisine. It's
				a place where nature and soul connect—and where every sunrise feels like a fresh beginning.
				Casa Onda was born from a deep love for this magical corner of the world.
			</p>
		</div>
		<CasaCarousel />
		<div class="max-w-[860px] text-3xl/relaxed *:mb-4 max-[860px]:mx-8 max-[860px]:text-lg/normal">
			<p>
				&emsp;What began as a small ripple—a simple idea shared within our adventure-loving family
				of four—has grown into a heartfelt dream realized. Inspired by the rhythm of the ocean and
				the peaceful energy of Nosara, Casa Onda is our way of sharing that magic with others.
			</p>
			<p>
				&emsp;Nestled in the tranquil Nosara Springs and just minutes from the stunning beaches of
				Playa Pelada, Casa Onda is your perfect home away from home.
			</p>
			<p>
				&emsp;This unique compound features two private homes, each with its own pool, situated on
				one spacious property. Divided by lush gardens and vibrant jungle greenery, the homes offer
				both privacy and serenity. Whether you're traveling with a group or seeking a more intimate
				getaway, the houses can be rented together or separately to suit your needs.
			</p>
		</div>
	</main>
</div>
<Contact />
