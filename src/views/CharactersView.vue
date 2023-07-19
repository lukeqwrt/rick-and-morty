<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import Character from '../components/character/Characters.vue'

const loading = ref(false)
const data = ref([])
const nextpage = ref(1)
const btnDisable = ref('')
const pages = ref('')
const searchCharacter = ref('')
const error = ref('')
const getApi = async () => {
        loading.value = true
        const url = 'https://rickandmortyapi.com/api/character?' + pages.value 
   
        const res = await fetch(url)
        const allres = await res.json()
        // data.value = allres.results
        data.value = allres.results.map((character) => ({
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          location: character.location.name,
          type: character.type
        }))
        loading.value = false
}

const getApiSearch = async () => {
      error.value = ''
      data.value = []
      loading.value = true
      if(searchCharacter.value === ''){
        return
      }
      try{

        const url = 'https://rickandmortyapi.com/api/character?name=' + searchCharacter.value
        const res = await fetch(url)
        const allres = await res.json()
        // data.value = allres.results
        if(!res.ok){
          loading.value = false
          throw Error('There is nothing here')
        }
   
        data.value = allres.results.map((character) => ({
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          location: character.location.name,
          type: character.type
        }))
        loading.value = false
      

  
      }catch (err){
        error.value = err.message

      }


}


const nextPageClick = () => {
  if(nextpage.value === 42){
    return
  }

  data.value = []
  searchCharacter.value = ''
  btnDisable.value = ''
  nextpage.value ++
  pages.value = `page=${nextpage.value}`
  loading.value = true
  getApi()
}
const prevPageClick = () => {
  if(nextpage.value === 1){
    return
  }
  data.value = []
  searchCharacter.value = ''
  btnDisable.value = ''
  nextpage.value -= 1
  pages.value = `page=${nextpage.value}`
  loading.value = true
  getApi()

}


onMounted(() => {
  watchEffect(() => {
      if(searchCharacter.value.trim() === ''){
        error.value = ''
        getApi()
      }else{
        getApiSearch()
 
    }
  })
})

</script>

<template>
  <main class="home-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgb(38, 41, 44)" fill-opacity="1" d="M0,288L13.3,261.3C26.7,235,53,181,80,149.3C106.7,117,133,107,160,117.3C186.7,128,213,160,240,170.7C266.7,181,293,171,320,144C346.7,117,373,75,400,58.7C426.7,43,453,53,480,58.7C506.7,64,533,64,560,53.3C586.7,43,613,21,640,32C666.7,43,693,85,720,112C746.7,139,773,149,800,138.7C826.7,128,853,96,880,74.7C906.7,53,933,43,960,53.3C986.7,64,1013,96,1040,138.7C1066.7,181,1093,235,1120,229.3C1146.7,224,1173,160,1200,165.3C1226.7,171,1253,245,1280,229.3C1306.7,213,1333,107,1360,90.7C1386.7,75,1413,149,1427,186.7L1440,224L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path>
      </svg>
    <header>
      <div class="header-content">
        <div class="logoname">
          <img src="../assets/logo.png" alt="">
          <h3>API</h3>

        </div>
        <RouterLink :to="{name: 'home'}">Home</RouterLink>

      </div>
    </header>

    <div class="container">

      <div class="pages">
        <input type="text" placeholder="Search Character" v-model="searchCharacter">
        
        <button @click="prevPageClick" :class=" nextpage === 1 ? 'disable' : 'active' " >Prev</button>
        <button @click="nextPageClick" :class=" nextpage === 42 ? 'disable' : 'active' " >Next</button>
      </div>
      <div class="char-container">
        <div class="error" v-if="error">
          <img src="../assets/error.png" alt="error">
          <h2>{{ error }}...</h2>
        </div>
        <div class="loading" v-if="loading">
          <img src="../assets/loader.gif" alt="">
          <h3>Loading...</h3>
        </div>
        <Character v-if="data.length" :data="data" />
      </div>
    </div>

  </main>
</template>

<style scoped>
  header{
    background: rgb(38, 41, 44);
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    margin-bottom: 40px;
  }
  header .header-content{
    max-width: 1100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  header .header-content a{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    text-decoration: none;
    outline: none;
    font-size: 20px;
    color: #fff;
    padding-right: 20px;
    transition: 0.4s ease;
  }
  .logoname{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  header .header-content a:hover{
    color: rgb(174, 255, 157);
  }
  header img{
    height: auto;
    width:340px;
    margin-right: 14px;
    z-index: 11;

  }
   svg{
    position: absolute;
    left: 0;
    top: 150px;
    height: auto;
    width: 100%;
  }
 svg path{
  
    width: 100%;
  }
  header h3 {
    color: #fff;
    z-index: 99;
  }
  .home-container{
    z-index: 99;
    background-image: url('../assets/wallpaperflare.com_wallpaper.jpg');
    /* background: #333333; */
    min-height: 100vh;
    background-position:100% 100%;
    background-attachment: fixed;
    background-size: cover ;
  }
  .container{
    position: relative;
    padding: 0 20px;
    z-index: 999;
  }
  .char-container{
    padding:40px 0;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    margin-top: 0px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 999;
  }

  input{
    margin-left: auto;
    height: 40px;
    border: none;
    /* padding: 0 20px; */
    width: 100%;
    max-width: 500px;
    border-radius: 6px;

    outline: none;
    font-family: 'Poppins', sans-serif;
    font-size: 19px;
    transition: 0.3s ease;
      
  }
  input::placeholder{
    padding: 0 20px;
  }
  input:focus{
    outline: rgb(189, 240, 189) solid 1px;
    box-shadow: 0px 0px 10 5px rgba(179,255,155,0.75);
    -webkit-box-shadow: 0px 0px 10px 5px rgba(179,255,155,0.75);
    -moz-box-shadow: 0px 0px 10 5px rgba(179,255,155,0.75);
  }

  .pages{
    padding: 20px 0;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;

    gap: 10px;  
  }
  .pages button{
    background: rgb(183, 253, 183);
    padding: 8px 30px;
    border-radius: 6px;
    font-size: 18px;
    border: 1px solid rgb(0, 255, 136);
    cursor: pointer;
    color: rgb(56, 56, 56);
    transition: 0.3s ease;
  }
  .pages button.disable{
    background: rgb(211, 211, 211);
     border: 1px solid rgb(55, 55, 55);
     pointer-events: none;
  }
  .pages button:hover{
    box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    -webkit-box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    -moz-box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
  }
  .loading{
    position: relative;
  }
  .loading img{
    height: auto;
    width: 300px;
    animation: rotating 2s linear infinite;

  }
  .loading h3{
    color: rgb(142, 227, 142);
     position: absolute;
     bottom: -10px;
     left: 50%;
     transform: translate(-50%,0);
    text-align: center;
  }
  .error{
    transform: translate(0, 100px);
  }
  .error img{
    height: auto;
    width: 250px;
  }
  .error h2{
    margin-top: 30px;
    color: rgb(142, 227, 142);
  }
  @media screen and (max-width: 768px) {
      .char-container{
        display: flex;
        max-width: 500px;
      }
      header{
      background: rgb(38, 41, 44);
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
      header img{
      height: auto;
      width:240px;
      margin-right: 14px;
    }
    header h3 {
      color: #fff;
    }
    .pages button{
      background: rgb(183, 253, 183);
      padding: 8px 20px;
      border-radius: 6px;
      font-size: 14px;
      border: 1px solid rgb(0, 255, 136);
      cursor: pointer;
      color: rgb(56, 56, 56);
    }

    header .header-content{
    max-width: 1100px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: relative;
  }
    header .header-content a{
      position: unset;
      right: 0;
      top: 50%;
      transform: translate(0,0);
      text-decoration: none;
      outline: none;
      font-size: 20px;
      color: #fff;
      padding-right: 20px;
      transition: 0.4s ease;
    }
  }

@media screen and (max-width: 568px) {
  .pages{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }
  .pages input{
    grid-column: 1/3;
    grid-row: 1/2;

  }
  .pages button:nth-child(2){
    grid-column: 1/2;
    grid-row:2/3;
  }
  .pages button:nth-child(3){
    grid-column: 2/3;
    grid-row:2/3;
  }
}
</style>
