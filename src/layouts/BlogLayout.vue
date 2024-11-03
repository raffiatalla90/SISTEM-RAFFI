<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import BlogSection from '@/components/BlogSection.vue'


</script>

<template>
  <HeaderContent/>
  <main>
    <BlogSection/>

    <slot></slot>
  </main>
  <FooterContent/>
</template>
