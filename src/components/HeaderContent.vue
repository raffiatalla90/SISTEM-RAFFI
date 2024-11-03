<!-- components/HeaderContent.vue -->
<template>
  <header class="flex flex-wrap items-center justify-between px-16 py-4 text-white bg-[#1E1B2C] max-md:px-5">
    <!-- Logo -->
    <div class="flex items-center">
      <img 
        src="@/assets/images/logo/logo-join-sistem.png"
        alt="Logo Join Sistem"
        class="h-6 w-auto object-contain"
      />
    </div>

    <!-- Navigation -->
    <nav class="flex items-center justify-center flex-1 gap-8 text-base leading-7 font-sen">
      <a 
        v-for="link in navLinks" 
        :key="link.path" 
        :href="link.path"
        class="hover:text-[#F5C34E] transition-colors duration-200"
      >
        {{ link.name }}
      </a>
    </nav>

    <!-- Contact Button -->
    <button 
      class="gap-3 px-8 py-3 text-lg font-bold leading-none bg-[#2F80ED] rounded-[63px] hover:bg-blue-700 transition-colors duration-200 font-sen"
      @click="handleContact"
    >
      Contact US
    </button>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact us', path: '/contact' }
]

const handleContact = () => {
  window.location.href = '/contact'
}
</script>