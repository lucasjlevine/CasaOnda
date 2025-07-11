<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CasaCarousel from '$lib/components/CasaCarousel.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<div class="flex w-full flex-col items-center">
	<div
		style="background-image: url('/background/BeachBackground.JPG')"
		class="w-full bg-cover bg-center"
	>
		<Navbar />
		<div class="flex w-full flex-col items-center justify-center bg-transparent text-white">
			<div
				class="my-32 flex h-[200px] items-center justify-end rounded-4xl p-8 text-center text-7xl font-semibold max-[860px]:m-4 max-[860px]:flex-col max-[860px]:py-16 max-[860px]:text-5xl"
				style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);"
			>
				Welcome to&nbsp;<span class="italic">Casa Onda</span>
			</div>
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
		<div class="bg-accent flex w-full items-center justify-center">
			<div
				class="bg-accent w-full py-10 text-3xl/relaxed *:mb-4 max-[860px]:mx-8 max-[860px]:text-lg/normal"
			>
				<div
					class="flex w-full flex-row justify-around gap-x-8 gap-y-16 max-[1050px]:flex-col max-[1050px]:items-center"
				>
					<div class="bg-accent rounded-2xl">
						<div
							class="mb-4 flex flex-row items-center justify-center gap-x-2 max-[860px]:flex-col"
						>
							<h2 class="text-center text-4xl font-semibold">Main House</h2>
							<span class="text-center text-xl font-light">3 Beds | 2 Baths</span>
						</div>
						<p>Main Bedroom</p>
						<ul class="max-[860px]:text-md list-disc pl-8 text-xl">
							<li>King Bed</li>
							<li>Onsuite Bath</li>
							<li>His/Hers Closets</li>
						</ul>
						<p>Room 2</p>
						<ul class="max-[860px]:text-md list-disc pl-8 text-xl">
							<li>Queen Bed</li>
							<li>Shared Full Bath with Room 3</li>
						</ul>
						<p>Room 3</p>
						<ul class="list-disc pl-8 text-xl">
							<li>Two Twin Beds</li>
							<li>Shared Full Bath with Room 2</li>
						</ul>
						<p>And...</p>
						<ul class="list-disc pl-8 text-xl">
							<li>Full Size Pool</li>
							<li>Outdoor Covered BBQ and Seating Area</li>
						</ul>
					</div>
					<div class="bg-accent rounded-2xl">
						<div
							class="mb-4 flex flex-row items-center justify-center gap-x-2 max-[860px]:flex-col"
						>
							<h2 class="text-center text-4xl font-semibold">Casita</h2>
							<span class="text-center text-xl font-light">2 Beds | 1 Bath</span>
						</div>
						<p>Room 1</p>
						<ul class="list-disc pl-8 text-xl">
							<li>King Bed</li>
							<li>Shared Full Bath with Room 2</li>
						</ul>
						<p>Room 2</p>
						<ul class="list-disc pl-8 text-xl">
							<li>Double Bunk Beds</li>
							<li>Shared Full Bath with Room 1</li>
						</ul>
						<p>And...</p>
						<ul class="list-disc pl-8 text-xl">
							<li>Plunge Pool</li>
						</ul>
					</div>
					<div class="flex h-full flex-col items-center justify-center gap-y-4">
						<h1 class="text-4xl font-semibold">Amenities</h1>
						<ul class="w-fit list-disc text-xl">
							<li>WiFi</li>
							<li>Mini splits in each room</li>
							<li>Separate Parking for Main House and Casita</li>
							<li>Outdoor dining options</li>
							<li>Living area/eat in kitchen</li>
							<li>Entire lot gated and fenced in</li>
							<li>Quiet Residential Neighborhood</li>
							<li>Pelada Beach just a 1/2 mile away</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
<Contact />
