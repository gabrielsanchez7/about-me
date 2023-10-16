<script setup lang="ts">
import HeaderBg from "~images/head-bg.png"
import Header from "./sections/header/Header.vue"
</script>

<template>
  <Header :style="{backgroundImage: `url(${HeaderBg})`}"/>
</template>