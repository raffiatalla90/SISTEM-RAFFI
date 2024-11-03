```vue
<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Featured Post Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
        <!-- Left Content -->
        <div class="space-y-4">
          <div class="uppercase text-sm font-medium text-[#1E1B2C]">
            FEATURED POST
          </div>
          
          <h2 class="text-[32px] leading-[64px] font-bold text-[#1E1B2C] font-sen">
            Step-by-step guide to choosing great font pairs
          </h2>
          
          <div class="flex items-center space-x-2 text-sm">
            <span class="text-[#1E1B2C]">By</span>
            <span class="text-[#F5C34E]">John Doe</span>
            <span class="text-[#1E1B2C]">|</span>
            <span class="text-[#1E1B2C]">May 23, 2022</span>
          </div>
          
          <p class="text-[14px] leading-[28px] text-[#1E1B2C]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          
          <button class="inline-flex items-center px-6 py-2 bg-[#2F80ED] text-white font-sen hover:bg-opacity-90 transition-colors rounded">
            Read More &gt;
          </button>
        </div>
        
        <!-- Right Image -->
        <div class="relative h-[400px]">
          <img 
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg"
            alt="Man in white shirt working on computer" 
            class="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <!-- All Posts Section -->
      <div class="mb-20">
        <h2 class="text-2xl font-bold text-[#1E1B2C] font-sen mb-8">All posts</h2>
        
        <!-- Posts Grid -->
        <div class="space-y-8">
          <div v-for="(post, index) in posts" :key="index" class="flex flex-col sm:flex-row gap-6 group cursor-pointer">
            <div class="w-full sm:w-[280px] h-[200px] relative">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover rounded-lg"
              />
              <div class="absolute inset-0 border-2 border-[#F5C34E] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
            </div>
            
            <div class="flex-1 space-y-2">
              <div class="text-[#F5C34E] uppercase text-sm font-medium font-sen">
                {{ post.category }}
              </div>
              
              <h3 class="text-xl font-bold text-[#1E1B2C] font-sen">
                {{ post.title }}
              </h3>
              
              <p class="text-[14px] leading-[28px] text-[#1E1B2C]">
                {{ post.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center items-center space-x-4 mt-12">
          <button class="text-[#1E1B2C] font-sen hover:text-[#F5C34E]">
            &lt; Prev
          </button>
          <button class="text-[#1E1B2C] font-sen hover:text-[#F5C34E]">
            Next &gt;
          </button>
        </div>
      </div>

       <!-- Categories Section -->
      <section class="mb-20">
        <h2 class="text-2xl font-bold text-[#232536] mb-8 font-sen">All Categories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="category in categories" :key="category.name" 
            :class="[
              'p-8 rounded-sm',
              category.name === 'Startup' ? 'bg-[#2F80ED]' : 'border border-gray-200 hover:shadow-lg transition-shadow'
            ]">
            <div :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center',
              category.name === 'Business' ? 'bg-[#FDF7F2]' : ''
            ]">
              <img 
                :src="category.iconSrc"
                :alt="`${category.name} category icon`"
                :class="[
                  'object-contain',
                  category.name === 'Business' ? 'w-10 h-10' : 'w-12 h-12'
                ]"
              />
            </div>
            <h3 :class="[
              'mt-4 text-2xl font-bold',
              category.name === 'Startup' ? 'text-white' : 'text-[#232536]'
            ]">
              {{ category.name }}
            </h3>
            <p :class="[
              'mt-2 text-base leading-7',
              category.name === 'Startup' ? 'text-white/80' : 'text-gray-500'
            ]">
              {{ category.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- Join Team Section -->
      <div class="text-center max-w-xl mx-auto">
        <h2 class="text-4xl font-bold mb-4 font-sen">Join our team to be a part of our story</h2>
        <p class="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button class="bg-[#2F80ED] text-white px-12 py-4 font-bold hover:bg-blue-600 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    category: 'STARTUP',
    title: 'Design tips for designers that cover everything you need',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg'
  },
  {
    category: 'BUSINESS',
    title: 'How to build rapport with your web design clients',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
  },
  {
    category: 'STARTUP',
    title: 'Logo design trends to avoid in 2022',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg'
  },
  {
    category: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg'
  },
  {
    category: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg'
  }
]

const categories = [
  {
    name: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce335824448cbad56f38896330200d6bf9ede337a7a65aedb9c940df72afce49',
    iconBgColor: '#FDF7F2',
    bgClass: 'bg-white/90 backdrop-blur-sm',
    textColorClass: 'text-[#232536]',
    textClass: 'text-gray-500'
  },
  {
    name: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf6a31370e7ce18ac8e5299140bd28680e90da11a8d59cb17265ab3511851b5b',
    iconBgColor: '#2F80ED',
    bgClass: 'bg-blue-600',
    textColorClass: 'text-white',
    textClass: 'text-white/90'
  },
  {
    name: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4228a714ef839a3258d4aff01815e4c8b1d8520895f66f4f74880791d4d26662',
    iconBgColor: '#FFFFFF',
    bgClass: 'bg-white/90 backdrop-blur-sm',
    textColorClass: 'text-[#232536]',
    textClass: 'text-gray-500'
  },
  {
    name: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e138a1cc0b0e0935543a0ce23200efa33772c26c03bcca58686fb500b587c9a',
    iconBgColor: '#FFFFFF',
    bgClass: 'bg-white/90 backdrop-blur-sm',
    textColorClass: 'text-[#232536]',
    textClass: 'text-gray-500'
  }
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap');

.font-sen {
  font-family: 'Sen', sans-serif;
}
</style>
```