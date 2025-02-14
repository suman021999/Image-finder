import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
  const [responce, setResponce] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData=async(url) => {
    try {
        setIsLoding(true)
        const res=await axios(url)
        setResponce(res.data.results)
    } catch (error) {
        setError(error)
    }
    finally{
        setIsLoding(false)
    }
  }

  useEffect(()=>{
    fetchData(param)
  },[param])

  return {
    responce,
    isLoding,
    error,
    fetchData:url=>fetchData(url)
  };
};

export default useAxios