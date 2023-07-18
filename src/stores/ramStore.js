import { defineStore } from 'pinia'

export const useRamStore = defineStore('RamStore', {
    state: () => ({
      data:[],
      loading: false
    }),
    getters: {
      displayCharacter() {
        return this.data.map((character) => ({
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          location: character.location.name,
          type: character.type
        }))
      },
    
    },
    actions: {
      // character
      // location
      // episode
      async getApi() {
        this.loading = true
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const allres = await res.json()
        this.data = allres.results
        console.log(allres)
        this.loading = false
      }
    }
})