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
    <header>
      <img src="../assets/logo.png" alt="">
      <h3>API</h3>
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
  }
  header img{
    height: auto;
    width:340px;
    margin-right: 14px;
  }
  header h3 {
    color: #fff;
  }
  .home-container{
    background-image: url('../assets/wallpaperflare.com_wallpaper.jpg');
    min-height: 100vh;
    background-position:100% 100%;
    background-attachment: fixed;
    background-size: cover ;
  }
  .container{
    padding: 0 20px;
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
  }
  @media screen and (max-width: 768px) {
    .char{
        display: grid;
        grid-auto-flow: column;
        grid-template-rows:1fr auto;
        grid-template-columns: 1fr;
        position: relative;
        max-width: 296px;
        width: 100%;
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
