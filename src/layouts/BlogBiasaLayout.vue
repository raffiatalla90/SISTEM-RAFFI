<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import BlogBiasaLayout from '@/layouts/BlogBiasaLayout.vue';
import BlogBiasaSection from '@/components/BlogBiasaSection.vue';

</script>

<template>
  <HeaderContent/>
  <main>
    <BlogBiasaSection/>

    <slot></slot>
  </main>
  <FooterContent/>
</template>
