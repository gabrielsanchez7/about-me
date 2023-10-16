<script setup lang="ts">
import Logo from "~images/logo.png"
</script>

<template>
  <div class="header">
    <div class="container">
      <a class="header__logo" href="javascript:void(0)">
        <img :src=Logo alt="Logo">
      </a>
      <ul class="header__menu">
        <li class="header__menu-item"><a href="javascript:void(0)">Inicio</a></li>
        <li class="header__menu-item"><a href="javascript:void(0)">Sobre m&iacute;</a></li>
        <li class="header__menu-item"><a href="javascript:void(0)">Portafolio</a></li>
        <li class="header__menu-item"><a href="javascript:void(0)">Experiencia y estudios</a></li>
        <li class="header__menu-item"><a href="javascript:void(0)">Contacto</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
@import url("./header.css");
</style>