<template>
 <header class="flex overflow-hidden flex-col items-center bg-white pb-20 max-md:pb-24">
    <section class="flex relative flex-col self-stretch w-full text-base font-bold text-white min-h-[900px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c372a00f95418ea8a646978dbe7119f4ecb8845281b416d521df6055840023ff?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Hero background image showing a modern workspace" class="object-cover absolute inset-0 w-full h-full" />
      <div class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <p class="font-semibold leading-none uppercase tracking-[3px]">
          <span class="font-medium">Posted on</span>
          <span class="font-black">startup</span>
        </p>
        <h1 class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="mt-6 leading-7 text-blue-600">
          By <a href="#author" class="text-blue-600">James West</a> | <time datetime="2022-05-23">May 23, 2022</time>
        </p>
        <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <button class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 text-white rounded max-md:px-5 max-md:mt-10 max-md:mb-2.5" tabindex="0">
          Read More &gt;
        </button>
      </div>
    </section>

    <section class="flex flex-col max-md:flex-col px-20 w-3xl max-md:px-5 max-md:max-w-full mt-20">
  <div class="flex flex-row w-full">
    <!-- Kolom Featured Post -->
    <article class="flex flex-col w-[59%] max-md:w-full">
      <h2 data-layername="featuredPost" class="flex items-center text-4xl font-bold leading-none py-6 text-gray-800 max-md:mr-0.5 max-md:max-w-full tracking-tighter">Featured Post</h2>
      <div class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be3591a6d975ba91e7e8607e8b756becfeb5ea66cabdcabe3f7a441f131042f6?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
 alt="Featured post main image" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
        <div data-layername="byJohnDoeLMay232022" class="mt-8 text-sm font-medium leading-none text-amber-300">
          By <span class="text-amber-300">John Doe</span> l May 23, 2022
        </div>
        <h3 data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor" class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h3>
        <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <button data-layername="button" class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5">
          Read More &gt;
        </button>
      </div>
    </article>

    <!-- Kolom All Posts -->
<div class="flex w-[41%] max-md:w-full ml-5 max-md:ml-0">
  <div class="flex flex-col w-full">
    <div class="flex justify-between items-center py-6">
      <h2 data-layername="allPosts" class="tracking-tighter flex items-center text-4xl font-bold leading-none text-gray-800">All Posts</h2>
      <router-link to="/Blog" data-layername="viewAll" class="text-base leading-7 text-amber-300">View All</router-link>
    </div>

    <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
      <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-50 max-md:px-5 max-md:max-w-full">
        <time data-layername="byJohnDeoLAug232021" class="text-sm font-medium leading-none text-amber-300">
          By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
        </time>
        <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
          8 Figma design systems that you can download for free today.
        </h3>
      </article>

      <!-- Tambahkan artikel lain sesuai kebutuhan -->
      <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-50 max-md:px-5 max-md:max-w-full">
        <time data-layername="byJohnDoeAug232021" class="text-sm font-medium leading-none text-amber-300">
          By <span class="text-amber-300">John Doe</span> Aug 23, 2021
        </time>
        <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
          8 Figma design systems that you can download for free today.
        </h3>
      </article>

      <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-50 max-md:px-5 max-md:max-w-full">
        <time data-layername="byJohnDoeAug232021" class="text-sm font-medium leading-none text-amber-300">
          By <span class="text-amber-300">John Doe</span> Aug 23, 2021
        </time>
        <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
          8 Figma design systems that you can download for free today.
        </h3>
      </article>

      <article data-layername="shape" class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-50 max-md:px-5 max-md:max-w-full">
        <time data-layername="byJohnDoeAug232021" class="text-sm font-medium leading-none text-amber-300">
          By <span class="text-amber-300">John Doe</span> Aug 23, 2021
        </time>
        <h3 data-layername="8FigmaDesignSystemsThatYouCanDownloadForFreeToday" class="mt-2 text-2xl font-bold leading-8 text-gray-800">
          8 Figma design systems that you can download for free today.
        </h3>
      </article>

      
    </div>
  </div>
</div>
  </div>
</section>

  <section data-layername="aboutUsOurMission" class="flex flex-col mt-30 px-20 w-full max-md:px-5 max-md:max-w-full mt-20">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="" class="object-contain self-end aspect-[45.45] max-w-[1061px] w-[1061px] max-md:max-w-full" />
    <section data-layername="background" class="px-20 py-24 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 data-layername="aboutUs" class="self-start font-semibold leading-none uppercase tracking-[3px]">
              ABOUT US
            </h2>
            <h3 data-layername="weAreACommunityOfContentWritersWhoShareTheirLearnings" class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
              We are a community of content writers who share their learnings
            </h3>
            <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua" class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" data-layername="readMore" class="self-start mt-7 text-lg leading-8 text-amber-300" tabindex="0">
              Read More &gt;
            </a>
          </div>
        </article>
        <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 data-layername="ourMision" class="font-semibold leading-none uppercase tracking-[3px]">
              Our mision
            </h2>
            <h3 data-layername="creatingValuableContentForCreativesAllAroundTheWorld" class="mt-6 text-3xl font-bold tracking-tighter leading-10">
              Creating valuable content for creatives all around the world
            </h3>
            <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat" class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
      </div>
    </section>
  </section>



      <main class="mb-20">
      <section class="flex flex-col self-stretch px-20 w-full max-md:px-5 max-md:mt-10">
    <h1 class="self-center mt-32 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-20 justify-center">
      Choose A Category
    </h1>
    <div class="flex gap-5 max-md:flex-col">
      
      <article class="flex flex-col w-3/12 max-md:w-full">
        <router-link to="/blog/business" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
          <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5305de9d9e170e8c91de03eb22dba944f5ef03ac5f3a3adb6ce52eb1ad20b4ae" alt="Business icon" class="w-10 h-10">
          </div>
          <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Business</h2>
          <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </router-link>
      </article>

      <article class="flex flex-col w-3/12 max-md:w-full">
        <router-link to="/blog/startup" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
          <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
            <img loading="lazy" src="/src/assets/images/shuttle.svg" alt="Startup icon" class="w-10 h-10 scale-[0.6]">
          </div>
          <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Startup</h2>
          <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </router-link>
      </article>

      <article class="flex flex-col w-3/12 max-md:w-full">
        <router-link to="/blog/economy" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
          <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9ea4d60ffc2ac2756619e99d7cecaf8ddaeb339932b51cb8ca04f00f6fe0e1" alt="Economy icon" class="w-10 h-10">
          </div>
          <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Economy</h2>
          <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </router-link>
      </article>

      <article class="flex flex-col w-3/12 max-md:w-full">
        <router-link to="/blog/technology" class="group flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600">
          <div class="bg-[#FBF6EA] p-2 rounded mb-4 w-12 h-12 flex items-center justify-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7711bc8c130ae05319b5189f87b223bc1125099c826ebd163e20da8da19f8af" alt="Technology icon" class="w-10 h-10">
          </div>
          <h2 class="text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Technology</h2>
          <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </router-link>
      </article>

    </div>
  </section>
  </main>


  <article class="relative w-[1280px] h-[705px] mx-auto">
  <!-- Image container - positioned to the left -->
  <div class="absolute left-0 bottom-0 w-[800px] h-[705px]">
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a787077d1aa9468909fc456928315aef6413f3fe1da57d6c1b9c2804b4b5490" 
      alt="Group of friends enjoying view"
      class="w-full h-full object-cover object-bottom" 
    />
  </div>

  <!-- White content box - overlapping from the right -->
  <div class="absolute right-0 bottom-0 bg-white w-[706px] h-[584px] p-20 shadow-lg z-10">
    <span class="block text-sm font-semibold uppercase tracking-[3px] text-gray-800">
      WHY WE STARTED
    </span>
    
    <h2 class="mt-6 text-5xl font-bold tracking-tighter leading-[64px] text-gray-800">
      It started out as a simple idea and evolved into our passion
    </h2>
    
    <p class="mt-6 text-base leading-7 text-gray-500 text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </p>
    
    <button class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg font-bold rounded">
      Discover our story >
    </button>
  </div>
</article>


<section class="flex flex-col items-center px-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <h2 data-layername="listOfAuthors" class="self-center mt-32 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10">
      List of Authors
    </h2>

    <div class="self-stretch mt-12 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div data-layername="background" class="flex flex-col grow items-center px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25dcaebd26c99ba574e792602c125418b358c847fe193a6a4168ed9d9e073c61?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Floyd Miles profile" class="object-contain w-32 max-w-full rounded-full aspect-square" />
            <h3 data-layername="floydMiles" class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Floyd Miles
            </h3>
            <p data-layername="contentWriterCompany" class="self-stretch text-sm text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8f1e9902c691411c652993f3f07db4bb3be13377d48c563e5ad995d262ecbc?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Social media links" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
          </div>
        </article>

        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div data-layername="background" class="flex flex-col grow px-14 py-10 w-full leading-none bg-orange-50 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1363fbb60df23ae1da891c86ca93797fecd29ab0b2632729a9e6d7ab63be652e?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Dianne Russell profile" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
            <h3 data-layername="dianneRussell" class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Dianne Russell
            </h3>
            <p data-layername="contentWriterCompany" class="text-sm text-center text-zinc-500 max-md:mx-1">
              Content Writer @Company
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/314f28c2413308b53e1de60b75b6761ab09bcb403e136d3cdc5a29b958952828?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Social media links" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
          </div>
        </article>

        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div data-layername="background" class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e63229fcc6bfb426ca3e92f016df76f902ef056554c10953cffa738b21e8beb2?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Jenny Wilson profile" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
            <h3 data-layername="jennyWilson" class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 max-md:mx-2">
              Jenny Wilson
            </h3>
            <p data-layername="contentWriterCompany" class="text-sm text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae47b548caa90605f670af32b966107b1a77f62233ab96e7781ebb5061200759?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Social media links" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
          </div>
        </article>

        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div data-layername="background" class="flex flex-col grow items-center px-11 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8194ac75c9713923f024d0d10883ef26a86fc10c5e0fd5140fd095344cacf84?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Leslie Alexander profile" class="object-contain w-32 max-w-full rounded-full aspect-square" />
            <h3 data-layername="leslieAlexander" class="self-stretch mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Leslie Alexander
            </h3>
            <p data-layername="contentWriterCompany" class="text-sm text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67e8fa30f63496b3761b497b5c4ef1e2174378d0e16c639cdf4afb86818cd27b?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Social media links" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
          </div>
        </article>
      </div>
    </div>
  </section>

  <section data-layername="logoComponent" class="flex flex-wrap gap-10 items-start text-zinc-500 pt-20" aria-labelledby="featured-section-title">
    <header class="flex flex-col self-start mt-0">
      <h2 id="featured-section-title">
        <span class="self-start text-sm leading-none opacity-60">We are</span>
        <span class="block text-2xl font-bold leading-none">Featured in</span>
      </h2>
    </header>
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/189e665adaffe7c8d7c80c03a6c7c04b7d5f4e277d657bed1f42a0e7d14b1127?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" 
      alt="Featured publications and partners logos"
      class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full" 
    />
  </section>

  <section data-layername="testimonials" class="w-full bg-white px-4 py-20 mt-20">
  <div class="max-w-6xl mx-auto grid grid-cols-2 gap-8 bg-[#FBF6EA] p-16 rounded-lg max-md:grid-cols-1">
    <!-- Left Column -->
    <article class="flex flex-col items-start text-base text-gray-800">
      <h2 data-layername="testimonials" class="font-semibold leading-none uppercase tracking-[3px] text-gray-600">
        TESTIMONIALS
      </h2>
      <h3 data-layername="whatPeopleSayAboutOurBlog" class="mt-2 text-3xl font-bold tracking-tight leading-10 text-gray-900">
        What people say about our blog
      </h3>
      <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor" class="mt-4 leading-7 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
    </article>

    <!-- Right Column -->
    <article class="flex flex-col">
      <blockquote data-layername="testimonialText" class="text-2xl font-bold leading-8 text-gray-800 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </blockquote>
      <footer class="flex justify-between items-center">
        <!-- Profile Info -->
        <div class="flex items-center gap-4">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8502709d3a0af87123ad5aa332ef32df31662e93ef6da6341b4c78d1f4451ea6?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Jonathan Vallem profile picture" class="w-12 h-12 rounded-full" />
          <div>
            <cite data-layername="jonathanVallem" class="text-lg font-semibold text-gray-800 not-italic">
              Jonathan Vallem
            </cite>
            <p data-layername="location" class="text-base leading-7 text-gray-500">
              New York, USA
            </p>
          </div>
        </div>
        <!-- Navigation Buttons -->
        <div class="flex gap-3">
          <button class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Previous testimonial" class="w-4 h-4" />
          </button>
          <button class="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=fe5d260a5f68477299ac6d1686c8df5e" alt="Next testimonial" class="w-4 h-4" />
          </button>
        </div>
      </footer>
    </article>
  </div>
</section>

<section class="flex flex-col items-center mt-32 mb-0 max-md:mt-10">
  <h2 data-layername="joinOurTeamToBeAPartOfOurStory" class="text-4xl font-bold tracking-tighter leading-10 text-center text-gray-800 w-[414px]">
    Join our team to be a part of our story
  </h2>
  <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididunt" class="mt-4 text-base leading-7 text-center text-zinc-500 w-[405px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
  </p>
  <button data-layername="button" class="px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5">
    Join Now
  </button>
</section>
  </header>
  
</template>
