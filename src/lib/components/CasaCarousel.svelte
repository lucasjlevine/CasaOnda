<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index';
	import Autoplay from 'embla-carousel-autoplay';
</script>

<Carousel.Root
	class="m-16 max-[860px]:mx-2 max-[860px]:my-8"
	opts={{ loop: true }}
	plugins={[
		Autoplay({
			delay: 4000,
			stopOnInteraction: true
		})
	]}
>
	<Carousel.Content class="*:basis-1/2 *:max-[860px]:basis-full">
		<Carousel.Item class="flex items-center justify-center">
			<img
				src="https://images.squarespace-cdn.com/content/v1/644055d6e55667599544ca8d/93c98e7a-22cc-4a52-93ea-226cd545cbfe/JON_6689.jpg"
				alt=""
			/>
		</Carousel.Item>
		<Carousel.Item class="flex items-center justify-center">
			<img
				src="https://images.squarespace-cdn.com/content/v1/644055d6e55667599544ca8d/57bea59d-bde0-4005-b76e-3a5a72381b5d/JON_6829.jpg"
				alt=""
			/>
		</Carousel.Item>
		<Carousel.Item class="flex items-center justify-center">
			<img
				src="https://images.squarespace-cdn.com/content/v1/644055d6e55667599544ca8d/6e223fa0-4ce7-4f46-9028-99099267b4b9/JON_6679.jpg"
				alt=""
			/>
		</Carousel.Item>
		<Carousel.Item class="flex items-center justify-center">
			<img
				src="https://images.squarespace-cdn.com/content/v1/644055d6e55667599544ca8d/0627a31f-d026-4521-bb09-9135f387e3e1/JON_6735.jpg?format=2500w"
				alt=""
			/>
		</Carousel.Item>
	</Carousel.Content>
	<Carousel.Previous
		class="max-[860px]:hover:bg-accent max-[860px]:hover:text-accent-foreground max-[860px]:dark:hover:bg-accent/50 text-black max-[860px]:ml-14 max-[860px]:h-6 max-[860px]:w-6 max-[860px]:border-2 max-[860px]:bg-transparent max-[860px]:text-white"
	/>
	<Carousel.Next
		class="max-[860px]:hover:bg-accent max-[860px]:hover:text-accent-foreground max-[860px]:dark:hover:bg-accent/50 text-black max-[860px]:mr-14 max-[860px]:h-6 max-[860px]:w-6 max-[860px]:border-2 max-[860px]:bg-transparent max-[860px]:text-white"
	/>
</Carousel.Root>
