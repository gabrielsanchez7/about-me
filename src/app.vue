<script setup lang="ts">
import headerBg from "~images/head-bg.png"
import Header from "./sections/header/header.vue"
import Hero from "./sections/hero/hero.vue"
</script>

<template>
  <Header :style="{backgroundImage: `url(${headerBg})`}"/>
  <Hero/>
</template>