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
		{#each [1, 2, 3, 4, 5, 6] as imageIndex}
			<Carousel.Item class="flex h-[400px] items-center justify-center max-[860px]:h-[300px]">
				<img
					src={`/home/Home${imageIndex}.JPG`}
					alt={`Home ${imageIndex}`}
					class="object-fill object-center"
				/>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous
		class="max-[860px]:hover:bg-accent max-[860px]:hover:text-accent-foreground max-[860px]:dark:hover:bg-accent/50 text-black max-[860px]:ml-14 max-[860px]:h-6 max-[860px]:w-6 max-[860px]:border-2 max-[860px]:bg-transparent max-[860px]:text-white"
	/>
	<Carousel.Next
		class="max-[860px]:hover:bg-accent max-[860px]:hover:text-accent-foreground max-[860px]:dark:hover:bg-accent/50 text-black max-[860px]:mr-14 max-[860px]:h-6 max-[860px]:w-6 max-[860px]:border-2 max-[860px]:bg-transparent max-[860px]:text-white"
	/>
</Carousel.Root>
