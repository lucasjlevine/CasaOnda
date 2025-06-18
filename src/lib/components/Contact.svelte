<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { toast } from 'svelte-sonner';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let contact = $state({
		email: '',
		message: ''
	});

	const handleContact = () => {
		const emailValid =
			contact.email &&
			!!contact.email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);

		if (!emailValid) {
			toast.error('Please enter a valid email address.');
			return;
		}
		if (!contact.message) {
			toast.error('Please enter a message.');
			return;
		}

		const formData = new FormData();
		formData.append('email', contact.email);
		formData.append('message', contact.message);

		fetch('/contact', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error: ${response.statusText}`);
				}

				toast.success('Message has been sent!', {
					description: `We will get back to you at ${contact.email} as soon as possible.`
				});

				contact.email = '';
				contact.message = '';

				return response.json();
			})
			.catch((error) => {
				toast.error(`Error sending message: ${error.message}`);
			});
	};
</script>

<div
	class="bg-accent mt-12 flex w-full flex-row items-center justify-between p-4 py-24 max-[860px]:flex-col max-[860px]:gap-y-8"
>
	<div class="mr-2 ml-8 flex w-full flex-col items-center justify-center gap-y-8">
		<h2 class="text-center text-4xl font-semibold">Pricing and Availability</h2>
		<p class="mx-8 max-w-[860px] text-xl/relaxed">
			&emsp;If you would like to take a quick peek at our calendar and pricing, you can see that
			info at a glance on our
			<Button
				variant="outline"
				class="cursor-pointer"
				size="sm"
				href="https://airbnb.com"
				target="_blank">Airbnb Listing</Button
			>
			. We offer the option to book Casa Onda directly with us, avoiding Airbnb fees and hassles. Use
			the form to the right to get in contact with us!
		</p>
	</div>
	<div class="mr-8 ml-2 flex w-full flex-col items-center justify-center gap-y-8 px-4">
		<h2 class="text-center text-4xl font-semibold">Contact Us</h2>
		<Input
			type="email"
			placeholder="email"
			class="w-full max-w-[400px] bg-white"
			bind:value={contact.email}
			required
		/>
		<div class="flex w-full max-w-[400px] flex-row items-center justify-between gap-[10px]">
			<Textarea
				placeholder="message"
				class="min-h-10 w-full max-w-[400px] bg-white"
				bind:value={contact.message}
				required
			/>
			<Button class="cursor-pointer" onclick={handleContact}>
				<ArrowRight />
			</Button>
		</div>
	</div>
</div>
