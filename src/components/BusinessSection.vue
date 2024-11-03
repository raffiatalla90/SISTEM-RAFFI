<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="flex flex-col items-center justify-center w-full h-[300px] bg-purple-50">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Business
      </h1>
      <p class="text-gray-600 max-w-lg text-center mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <div class="text-sm tracking-wide uppercase">
        BLOG <span class="mx-2">></span> BUSINESS
      </div>
    </div>

    <!-- Blog Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="flex gap-8">
        <!-- Main Content -->
        <div class="w-2/3">
          <div class="space-y-12">
            <article v-for="post in blogPosts" :key="post.id" class="flex gap-8">
              <div class="w-[260px] h-[200px]">
                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
              </div>
              <div class="flex-1">
                <span class="text-yellow-400 text-sm font-medium uppercase tracking-[2px] mb-2 block">{{ post.category }}</span>
                <h2 class="text-[32px] font-bold text-gray-900 mb-4 leading-tight">{{ post.title }}</h2>
                <p class="text-gray-600 leading-relaxed">{{ post.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="w-1/3">
          <!-- Categories -->
          <div class="mb-12">
            <h3 class="text-2xl font-bold mb-6">Categories</h3>
            <div class="space-y-3">
              <a v-for="category in categories" 
                 :key="category.name"
                 href="#" 
                 @click.prevent="setActiveCategory(category.name)"
                 :class="[
                   'flex items-center p-4 rounded border border-gray-200 transition duration-200',
                   category.active ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                 ]">
                <div :class="[
                  'w-8 h-8 rounded-lg flex items-center justify-center mr-3',
                  category.active ? 'bg-white' : 'bg-gray-50'
                ]">
                  <img :src="category.icon" :alt="category.name" class="w-10 h-10">
                </div>
                <span class="font-medium">{{ category.name }}</span>
              </a>
            </div>
          </div>

          <!-- Tags -->
          <div>
            <h3 class="text-2xl font-bold mb-6">All Tags</h3>
            <div class="flex flex-wrap gap-2">
              <a v-for="tag in tags" 
                 :key="tag"
                 href="#" 
                 class="px-6 py-2 rounded-full border border-gray-200 text-sm text-gray-700">
                {{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const blogPosts = [
  {
    id: 1,
    title: "Top 6 free website mockup tools 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    category: "BUSINESS",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f9984916c54024d21123d434b0df5be69556eb423f7e24ea69dc0a736ff8c96"
  },
  {
    id: 2,
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    category: "BUSINESS",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f9984916c54024d21123d434b0df5be69556eb423f7e24ea69dc0a736ff8c96"
  },
  {
    id: 3,
    title: "Ten free foogle fonts that you should use",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    category: "BUSINESS",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f9984916c54024d21123d434b0df5be69556eb423f7e24ea69dc0a736ff8c96"
  },
  {
    id: 4,
    title: "What did I learn from doing 50+ design sprints?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    category: "BUSINESS",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f9984916c54024d21123d434b0df5be69556eb423f7e24ea69dc0a736ff8c96"
  }
];

const categories = ref([
  {
    name: "Startup",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7df771aadd4f9da8e9b7795a5d662afd0ceaa8dd7d8efbd1720179de3b58cc5",
    active: true
  },
  {
    name: "Business",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b45fc0a8e19abf430b91b29ed9b33ebffeef0cd4e7ea1f993a5e0a5e0c64fbd",
    active: false
  },
  {
    name: "Economy",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09b39ead8f9245967435cf31740b9b9bc26d1fdf085e3b1db5c07d4adb4e5b6f",
    active: false
  },
  {
    name: "Technology",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3e270ec9d3ad7df8f10e593b0d1513bae583af88e23ff7da216f0181927ee42",
    active: false
  }
]);

const setActiveCategory = (categoryName: string) => {
  categories.value = categories.value.map(category => ({
    ...category,
    active: category.name === categoryName
  }));
};

const tags = ["Business", "Experience", "Screen", "Technology", "Marketing", "Life"];
</script>

<style scoped>
.text-yellow-400 {
  color: #FFB800;
}
</style>