<template>
  <main data-layername="contact" class="flex overflow-hidden flex-col items-center px-20 pt-20 bg-white pb-[688px] max-md:px-5 max-md:py-24">
    <section class="flex flex-col max-w-full w-[768px]">
      <header>
        <h2 data-layername="contactUs" class="self-center text-base font-black leading-none text-center text-gray-800 uppercase tracking-[3px]">Contact us</h2>
        <h1 data-layername="letsStartAConversation" class="self-center mt-3 text-5xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full max-md:text-4xl">Let's Start a Conversation</h1>
        <p data-layername="description" class="self-center mt-6 text-base leading-7 text-center text-zinc-500 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </header>

      <article data-layername="background" class="px-16 py-12 mt-16 bg-amber-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <section class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
              <h3 data-layername="workingHours" class="text-sm leading-none opacity-60">Working hours</h3>
              <hr data-layername="line" class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
              <p data-layername="mondayToFriday" class="mt-4 font-bold">Monday To Friday</p>
              <p data-layername="900AmTo800Pm" class="font-bold">9:00 AM to 8:00 PM</p>
              <p data-layername="ourSupportTeamIsAvailable247" class="text-base leading-7 opacity-60">Our Support Team is available 24/7</p>
            </div>
          </section>

          <section class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
              <h3 data-layername="contactUs" class="text-sm leading-none opacity-60">Contact Us</h3>
              <hr data-layername="line" class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
              <a href="tel:02079932905" data-layername="phone" class="mt-4 text-xl font-bold leading-relaxed">020 7993 2905</a>
              <a href="mailto:hello@finsweet.com" data-layername="email" class="text-base leading-7 opacity-60">hello@finsweet.com</a>
            </div>
          </section>
        </div>
      </article>

      <form class="w-full">
        <label for="fullName" class="sr-only">Full Name</label>
        <input type="text" id="fullName" name="fullName" placeholder="Full Name" class="gap-2.5 self-stretch p-6 mt-8 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 w-full" required />

        <label for="email" class="sr-only">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" class="gap-2.5 self-stretch p-6 mt-4 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 w-full" required />

        <div class="flex flex-wrap gap-4 items-center mt-3.5 w-full text-base leading-7 text-gray-800 whitespace-nowrap max-md:max-w-full">
          <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
            <label for="province" class="sr-only">Province</label>
            <select id="province" name="province" class="w-full bg-transparent">
              <option value="">Province</option>
            </select>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
          </div>

          <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
            <label for="city" class="sr-only">City</label>
            <select id="city" name="city" class="w-full bg-transparent">
              <option value="">City</option>
            </select>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
          </div>
        </div>

        <label for="message" class="sr-only">Message</label>
        <textarea id="message" name="message" placeholder="Message" class="gap-2.5 px-6 pt-6 pb-24 mt-5 text-base leading-7 text-gray-800 whitespace-nowrap rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] max-md:px-5 w-full" required></textarea>

        <button type="submit" class="w-full px-16 py-4 mt-4 text-2xl font-bold leading-none text-white bg-blue-600 max-md:px-5 max-md:max-w-full">Send Message</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>
