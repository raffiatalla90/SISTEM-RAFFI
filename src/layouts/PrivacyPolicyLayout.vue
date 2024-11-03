<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import PrivacyPolicySecton from '@/components/PrivacyPolicySecton.vue';
</script>

<template>
  <HeaderContent/>
  <main>
    <PrivacyPolicySecton/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
