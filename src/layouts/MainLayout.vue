<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import HomeSection from '@/components/HomeSection.vue'

</script>

<template>
  <HeaderContent/>
  <main>
    <HomeSection/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
