<template>
  <div class="flex overflow-hidden flex-col bg-white pb-[768px] max-md:pb-24">
    <header class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <section class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
            <h2 class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</h2>
            <h1 class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">Step-by-step guide to choosing great font pairs</h1>
            <p class="mt-4 text-sm leading-none text-amber-300">By <span class="text-amber-300">John Doe</span> l May 23, 2022</p>
            <p class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5" aria-label="Read More">Read More &gt;</button>
          </div>
        </section>
        <section class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/427f4447f89b3cbb377a38309987f9a7bc7be22d909e3c40c943d6ecbd854a05?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Featured post illustration" class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full" />
        </section>
      </div>
    </header>
    <main class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">All posts</h2>
      <hr class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full" />
      <div class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <section class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a27536e406190d27f807d39163bbc9fc67a6c2446742a0fa87ba54b77e64a012?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Blog post image 1" class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c68f1c350f8ae102d6c963e53611b02af83bda61b27dd85bc2f28f9317ea8f6?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Blog post image 2" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6221b40a0f5b3e1f6ba5d7490b1dbfa67fcb153611d68920d1b0adc4381861f8?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Blog post image 3" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccbac995e70949993351ec4e1109e34df6b3452e7555ab52a4ce4c7ac6ec24b9?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Blog post image 4" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a27536e406190d27f807d39163bbc9fc67a6c2446742a0fa87ba54b77e64a012?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Blog post image 5" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            </div>
          </section>
          <section class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
              <h3 class="self-start uppercase tracking-[3px]">Startup</h3>
              <h2 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">Design tips for designers that cover everything you need</h2>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <h3 class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">Business</h3>
              <h2 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">How to build rapport with your web design clients</h2>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <h3 class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">Startup</h3>
              <h2 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full">Logo design trends to avoid in 2022</h2>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <h3 class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">Technology</h3>
              <h2 class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">8 Figma design systems you can download for free today</h2>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <h3 class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">Economy</h3>
              <h2 class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">Font sizes in UI design: The complete guide to follow</h2>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </section>
        </div>
      </div>
      <nav class="flex gap-4 self-center mt-16 ml-3.5 max-w-full font-bold text-center w-[174px] max-md:mt-10" aria-label="Pagination">
        <button class="grow my-auto text-2xl leading-none text-zinc-500" aria-label="Previous page">&lt; Prev</button>
        <button class="text-3xl tracking-tighter leading-none text-gray-800" aria-label="Next page">Next &gt;</button>
      </nav>
    </main>
    <!-- All Categories Section -->
    <section class="flex flex-col items-center px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h1 class="self-center mt-32 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-20 justify-center">Choose A Category</h1>
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-3/12 max-md:w-full">
          <router-link to="/blog/business" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
            <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5305de9d9e170e8c91de03eb22dba944f5ef03ac5f3a3adb6ce52eb1ad20b4ae" alt="Business icon" class="w-10 h-10 scale-[1.2]">
            </div>
            <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Business</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>

        <article class="flex flex-col w-3/12 max-md:w-full">
          <router-link to="/blog/startup" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
            <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
              <img loading="lazy" src="/src/assets/images/shuttle.svg" alt="Startup icon" class="w-10 h-10 scale-[0.]">
            </div>
            <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Startup</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>

        <article class="flex flex-col w-3/12 max-md:w-full">
          <router-link to="/blog/economy" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
            <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9ea4d60ffc2ac2756619e99d7cecaf8ddaeb339932b51cb8ca04f00f6fe0e1" alt="Economy icon" class="w-10 h-10 scale-[1.2]">
            </div>
            <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Economy</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>

        <article class="flex flex-col w-3/12 max-md:w-full">
          <router-link to="/blog/technology" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
            <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7711bc8c130ae05319b5189f87b223bc1125099c826ebd163e20da8da19f8af" alt="Technology icon" class="w-10 h-10 scale-[1.2]">
            </div>
            <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Technology</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>
      </div>
    </section>

    <section class="flex flex-col items-center px-20 -mb-[640px] w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 class="mt-32 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-800 w-[414px] max-md:mt-10">Join our team to be a part of our story</h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500 w-[405px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <button class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5" aria-label="Join Now">Join Now</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogComponent'
}
</script>