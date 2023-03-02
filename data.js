export async function getData(url) {
  let loading = false;
  let data = null;
  let error = null;
   try {     
    const res = await fetch(url);
   }catch(err) {
     console.error(err);
   }
} 
