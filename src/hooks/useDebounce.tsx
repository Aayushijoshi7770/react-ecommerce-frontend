import { useState ,useEffect} from "react";

export default function useDebounce(value:string, delay:number){
    const [debounceValue, setDebounceValue]=useState<String>(value);
   useEffect(()=>{
    const timer=setTimeout(()=>{
       setDebounceValue(debounceValue);
    }, delay)
    return()=>{
      clearTimeout(timer);
    }
   },[debounceValue])
    return debounceValue;
}