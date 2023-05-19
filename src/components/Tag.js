import react, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useHook from "../hooks/useHook"

const Tag = () => {
    const [tag, settag] = useState('car');
    const {loading, gif, fetchApi} = useHook(tag);
    return (
        
        <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>  Random Gif</h1>
            {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }
            
            <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event)=> settag(event.target.value)}
        value={tag} 
      />
            <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]" onClick={() => fetchApi(tag)}>

                Generate

            </button>
        </div>
    );
}
export default Tag;