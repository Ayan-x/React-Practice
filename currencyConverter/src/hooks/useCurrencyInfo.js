// use is general syntax to write hook
//  names ->ex-useCurrencyInfo
import {useEffect,useState} from "react"

function useCurrencyInfo(conversion_rates){
    const[data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/c7ff66b3299ed6c02acd4ec0/latest/${conversion_rates}`)
        .then((res)=>res.json())
        .then((res)=>console.log(res.json()))
        .then((res)=>setData(res[conversion_rates]))
        console.log(data);
    },[conversion_rates])
    console.log("CurrencyInfo data",data);
    return data
}

export default useCurrencyInfo; 