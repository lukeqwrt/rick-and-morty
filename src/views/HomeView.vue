<script setup>


</script>

<template>
  <main class="landing-page">
      <div class="landing-wrapper">
        <img src="../assets/2294143541-RAMMobileHero.webp" alt="">
        <RouterLink :to="{ name: 'choose'}">
          <button>View Characters</button>
        </RouterLink>
      </div>
  </main>
</template>


<style scoped>
  .landing-page{
    height: 100vh;

    background-image: url('../assets/wallpaperflare.com_wallpaper.jpg');
    background-position:100% 100%;
    background-attachment: fixed;
    background-size: cover ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .landing-page .landing-wrapper {
    display: flex;
    flex-direction: column;
  }
  .landing-page .landing-wrapper button{
    width: 100%;
    height: 47px;
    color: rgb(52, 60, 47);
    border: 2px solid #8bf576;
    background: rgb(99, 220, 121);
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .landing-page .landing-wrapper button:hover{
    box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    -webkit-box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    -moz-box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    border: 2px solid #a8e9a3;
  }
  .landing-page .landing-wrapper img{
    height: auto;
    width: 600px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
  .landing-page{
  }
  .landing-page .landing-wrapper {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }
  .landing-page .landing-wrapper img{
    height: auto;
    width: 100%;
    margin-bottom: 30px;
  }

}
</style>