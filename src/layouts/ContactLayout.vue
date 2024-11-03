<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import ContactSection from '@/components/ContactSection.vue'

</script>

<template>
  <HeaderContent/>
  <main>
    <ContactSection/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
