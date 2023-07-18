
<template>
  <div class="main">
    <div class="content">
      <div class="t"><h1>4</h1> <img src="../assets/rick-and-morty-31013.png" alt=""><h1>4</h1></div>
        <div class="text">
          <h4>This page you are trying to search has been moved to another universe.</h4>
          <RouterLink :to="{name: 'home'}">
            <button>GET ME HOME</button>
          </RouterLink>
        </div>
    </div>
  </div>
</template>


<style scoped>
    .main{
        height: 100vh;
        background: url('../assets/wallpaperflare.com_wallpaper.jpg');
        background-attachment: fixed;
        background-size: cover;
        background-position: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
    }
    .content .t{
      display: flex;
      justify-content: center;
    align-items: center;    }
    .main h1{
      font-family: 'Poppins', sans-serif;
      font-size: 280px;
      letter-spacing: -20px;
    }
    .main h1:nth-child(1){
      margin-right: -70px;
    }
    .main h1:nth-child(3){
      margin-left: -40px;
    }
    .main .text{
      transform: translate(0, -40px);
    }
    .main h4{
      margin: 0 auto  ;
      font-style: italic;
      max-width: 400px;
    }
    .main button{
      margin-top: 20px;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 700;
      background: rgb(183, 253, 183);
      padding: 8px 30px;
      border-radius: 6px;
      font-size: 18px;
      border: 1px solid rgb(0, 255, 136);
      cursor: pointer;
      color: rgb(56, 56, 56);
    }
    .main .content img{
      height: auto;
      width: 300px;
      transform: translate(20px, 0px);

    }

    @media screen and (max-width: 768px) {
      .main h1{
        font-size: 100px;
      }
      .main .content .t{
        transform: translate(-10px, 0);
        gap: 20px;
        /* width: 300px; */
        margin: 0 auto;
      }
      .main .content img{
        height: auto;
        width: 100px;
        transform:translate(-10px,0 );

      }
      .main h1:nth-child(1){
        margin-right: 0;
      }
      .main h1:nth-child(3){
        margin-left: -40px;
      }
      .main .text{
        margin-top: 30px;
      transform: translate(0, 0);
    }
      .main h4{
        margin: 0 auto  ;
        font-style: italic;
        max-width: 400px;
        font-size: 14px;
    }
    }
</style>