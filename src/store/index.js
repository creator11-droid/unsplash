import { onMounted, onUpdated, reactive, watch } from "vue";
export function findImage() {
  const state = reactive({
    
      query: "african",
      data: [],
      loading: true,
      error: null,
    
  })

  async function fetchData() {

      try {
        const res = await fetch(`https://api.unsplash.com/search/photos/?query=${state.query}&per_page=20&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
        if (!res.ok) {
          state.error = new Error("Could not fetch resource")
        }
        const resp = await res.json();
   
        state.data = resp.results
     
        
      } catch (err) {
      
       
        state.error = err;
      } finally {
        state.loading = false;
      }

  }


  function setQuery(x) {
    state.query = x;
    
   fetchData()
  }
 
 
 
 
  
  onMounted(fetchData)
  // onUpdated(updateData)

  return { state, fetchData, setQuery};
}



  






