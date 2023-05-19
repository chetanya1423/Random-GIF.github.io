import react from "react";
import { useState,useEffect } from "react";
import axios from "axios";





const useHook = (tag)=>{
    const apiKey = 'EXlq0nOBWwJSRtRz5CXbf2ekjRDK9GI7';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const [loading, setloading] = useState(false);
const [gif, setgif] = useState('');
async function fetchApi(tag){
    setloading(true);
    
    const {data} = await axios.get(tag ?`${url}&tag=${tag}`  : url);
    setgif(data.data.images.downsized_large.url);
    setloading(false);
}
useEffect(()=>{
      fetchApi("car");
},[])
return {gif,loading, fetchApi};
}
export default useHook;