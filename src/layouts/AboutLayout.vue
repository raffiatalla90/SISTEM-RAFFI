<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import BlogSection from '@/components/BlogSection.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>

<template>
  <HeaderContent/>
  <main>
    <AboutSection/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>