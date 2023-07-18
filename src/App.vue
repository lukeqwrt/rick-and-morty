<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>

  <RouterView />
  <footer>
    <div class="name">
      <span>LUKE ADRIAN SILLANO ©2021</span>
      
    </div>
    <span class="line">|</span>
    <div class="api">
      <span>© <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a></span>

    </div>
  </footer>
</template>
<style>
  footer{
    padding: 40px 20px;
    background: rgb(38, 41, 44);
    color: #bababa;
    text-align: center;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  footer a{
    color: #bababa;
    transition: 0.3s ease;
  }
  footer a:hover{
    color: #8bf576;
  }

  @media screen and (max-width: 500px) {
    footer{
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }
    footer .line{
      transform: rotate(90deg);
    }
  }
</style>
