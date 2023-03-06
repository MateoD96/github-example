export async function getData(url) {
   const result = {data: null, error: null};
   try {     
    const res = await fetch(url);
   } catch(err) {
     console.error(err);
   }
} 
