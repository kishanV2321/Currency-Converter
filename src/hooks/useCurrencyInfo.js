import { useEffect, useState } from "react";

//Custom hooks
function useCurrencyInfo(currency){

    //store data and setData
    const [data, setData] = useState({})

    //useEffect Hook
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then( (res) => res.json()) //Change API string data into json
        .then( (res) => {
            return setData(res[currency])    //setData -> store kr rhe hai data ko jo aaya  hai
        }).catch((error) => console.log('Error'))
    }, [currency])

    // console.log(data)
    return data
}

//default res.json() -> if we use curly braces{ return res.json }

export default useCurrencyInfo;