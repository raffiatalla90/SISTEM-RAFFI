<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import BusinessSection from '@/components/BusinessSection.vue'

</script>

<template>
  <HeaderContent/>
  <main>
    <BusinessSection/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
