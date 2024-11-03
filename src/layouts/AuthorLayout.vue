<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import AuthorSection from '@/components/AuthorSection.vue';


</script>

<template>
  <HeaderContent/>
  <main>
    <AuthorSection/>

    <slot></slot>
  </main>
  <FooterContent/>
</template>
