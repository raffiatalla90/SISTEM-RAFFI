<template>
  <footer class="flex overflow-hidden flex-col justify-center px-20 py-14 bg-gray-800 max-md:px-5">
    <div class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa2d029eceaab91d963d6c4951fa809a2fa81a6fb505075634f755f2bd147808?apiKey=fe5d260a5f68477299ac6d1686c8df5e&" alt="Company Logo" class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" />
      <nav class="flex gap-6">
        <RouterLink to="/" class="grow">Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/about" class="my-auto leading-loose">About us</RouterLink>
        <RouterLink to="/contact">Contact us</RouterLink>
        <RouterLink to="/privacy" class="basis-auto">Privacy Policy</RouterLink>
      </nav>
    </div>
    <section class="px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
            Subscribe to our news letter to get latest updates and news
          </h2>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <form class="flex flex-wrap gap-6 mt-1 w-full max-md:mt-10 max-md:max-w-full">
            <label for="emailInput" class="sr-only">Enter Your Email</label>
            <input type="email" id="emailInput" placeholder="Enter Your Email" required aria-label="Enter Your Email" class="grow px-6 py-6 text-base leading-loose border border-solid border-neutral-600 text-zinc-500 w-fit max-md:px-5" />
            <button type="submit" class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 max-md:px-5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
    <div class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white max-md:mt-10 max-md:max-w-full">
      <address class="opacity-70 not-italic">Finstreet 118 2561 Fintown</address>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1481872b605863658b1b283408765fa47b1c531dfa993af928243157a6f787e?apiKey=fe5d260a5f68477299ac6d1686c8df5e&" alt="Social Media Icons" class="object-contain shrink-0 self-start mt-3 w-36 max-w-full aspect-[9.01]" />
    </div>
    <address class="self-start text-base leading-7 text-white opacity-70 not-italic">
      Hello@finsweet.com 020 7993 2905
    </address>
  </footer>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>