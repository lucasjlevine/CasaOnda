<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index";
  import { Button } from "$lib/components/ui/button/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Textarea } from "$lib/components/ui/textarea/index";
  import ArrowRight from "@lucide/svelte/icons/arrow-right";

  let contact = $state({
    email: "",
    message: "",
  });

  const handleContact = () => {
    console.log("Contact Submitted!");

    contact.email = "";
    contact.message = "";
  };
</script>

<div class="w-screen">
  <div class="w-full flex flex-col items-center">
    <header
      class="text-white bg-primary w-full flex flex-col items-center justify-center"
    >
      <div class="m-2 flex flex-row justify-center items-center">
        <h1 class="text-2xl font-light">Casa Onda</h1>
      </div>
      <div
        class="flex max-[860px]:flex-col items-center text-center justify-end text-7xl font-semibold m-8 py-28 max-[860px]:text-5xl max-[860px]:py-16 max-[860px]:m-4"
      >
        Welcome to&nbsp;<span class="italic">Casa Onda</span>
      </div>
    </header>
    <main class="flex flex-col items-center justify-center">
      <div class="max-w-[860px] text-3xl/relaxed mt-12 -mb-4 max-[860px]:mx-8">
        <p>
          &emsp;Onda in Spanish translates to a wave, a ripple or a vibe Nosara,
          Costa Rica is home to world-famous waves, stunning beaches, vibrant
          yoga culture, and incredible cuisine. It's a place where nature and
          soul connect—and where every sunrise feels like a fresh beginning.
          Casa Onda was born from a deep love for this magical corner of the
          world.
        </p>
      </div>
      <Carousel.Root class="m-16" opts={{ loop: true }}>
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
        <Carousel.Previous class="text-black" />
        <Carousel.Next class="text-black" />
      </Carousel.Root>
      <div class="max-w-[860px] text-3xl/relaxed max-[860px]:mx-8 *:mb-4">
        <p>
          &emsp;What began as a small ripple—a simple idea shared within our
          adventure-loving family of four—has grown into a heartfelt dream
          realized. Inspired by the rhythm of the ocean and the peaceful energy
          of Nosara, Casa Onda is our way of sharing that magic with others.
        </p>
        <p>
          &emsp;Nestled in the tranquil Nosara Springs and just minutes from the
          stunning beaches of Playa Pelada, Casa Onda is your perfect home away
          from home.
        </p>
        <p>
          &emsp;This unique compound features two private homes, each with its
          own pool, situated on one spacious property. Divided by lush gardens
          and vibrant jungle greenery, the homes offer both privacy and
          serenity. Whether you're traveling with a group or seeking a more
          intimate getaway, the houses can be rented together or separately to
          suit your needs.
        </p>
      </div>
    </main>
  </div>
  <div
    class="w-full flex flex-row items-center justify-between bg-accent p-4 py-24 mt-12 max-[860px]:flex-col max-[860px]:items-center max-[860px]:gap-y-8"
  >
    <div
      class="flex flex-col justify-center items-center gap-y-8 ml-8 mr-2 w-full"
    >
      <h2 class="text-4xl font-semibold text-center">
        Pricing and Availability
      </h2>
      <p class="text-xl/relaxed max-w-[860px] mx-8">
        &emsp;If you would like to take a quick peek at our calendar and
        pricing, you can see that info at a glance on our
        <Button
          variant="outline"
          class="cursor-pointer"
          size="sm"
          href="https://airbnb.com"
          target="_blank">Airbnb Listing</Button
        >
        . We offer the option to book Casa Onda directly with us, avoiding Airbnb
        fees and hassles. Use the form to the right to get in contact with us!
      </p>
    </div>
    <div
      class="flex flex-col justify-center items-center gap-y-8 mr-8 ml-2 w-full"
    >
      <h2 class="text-4xl font-semibold text-center">Contact Us</h2>
      <Input
        type="email"
        placeholder="email"
        class="bg-white w-full max-w-[400px]"
        bind:value={contact.email}
        required
      />
      <div
        class="flex flex-row items-center justify-between gap-[10px] w-full max-w-[400px]"
      >
        <Textarea
          placeholder="message"
          class="min-h-10 bg-white w-full max-w-[400px]"
          bind:value={contact.message}
          required
        />
        <Button class="cursor-pointer" onclick={handleContact}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  </div>
  <footer
    class="w-full flex flex-col items-center justify-center bg-primary text-white text-center p-8"
  >
    <p>Casa Onda</p>
    <Button
      class="text-white cursor-pointer"
      variant="link"
      href="mailto:example@gmail.com">example@gmail.com</Button
    >
    <p class="hover:underline">+1 (___) ___-____</p>
  </footer>
</div>
