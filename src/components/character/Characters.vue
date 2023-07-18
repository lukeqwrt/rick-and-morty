<script setup>

import { onMounted, ref } from 'vue'
import SingleChar from './SingleChar.vue'

const props = defineProps({
  data:null
})
</script>


<template>

    <div 
      class="character" 
      v-for="char in data" 
      :key="char.id"
      @click="characterClicked"
    >
    <SingleChar :singleChar="char" />
    </div>

</template>

<style >
  .char-container .character{
    border-radius: 6px;
    background: #f2ffef;
    cursor: pointer;
    widows: 100%;
    transition: 0.3s ease;
  }
  .char-container .character:hover {
    box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    -webkit-box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
    -moz-box-shadow: 0px 0px 32px 5px rgba(179,255,155,0.75);
  }
  .char-container .character img{
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    
  }

  @keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
  }

</style>