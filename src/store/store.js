import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useImageStore =  defineStore('images', {
  state: () => {
    return {
       query : '',
   data : [],
   loading : true,
  error :null
    }
    
  },
  getters: {
    getImages: (state) => {
      state.data
    }
  },
 
  actions: {
    async fetchData() {
      this.loading = true
      try {
        const res = await fetch(`https://api.unsplash.com/search/photos/?query=${this.query}&per_page=20&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
        if (!res.ok) {
          this.error = new Error("Could not fetch resource")
        }
        const resp = await res.json();
   
        this.data = resp.results
     
        
      } catch (err) {
      
       
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    setQuery(_param) {
      if (!_param) {
        this.query='africa'
      this.fetchData()
    }
      else {
          this.query = _param;
      this.fetchData()
      }
    
    }
  
}
 
 

})