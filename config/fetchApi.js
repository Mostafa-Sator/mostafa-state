import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url)=>{
    try {
        const {data} =await axios.get((url),
        { headers: {
            'X-RapidAPI-Key': 'bbca603a34msh190f82f94f77c2cp1e71bfjsn76e54ffd24d9',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }}
        )
        console.log('data from fetch',data)
        return data;
    } catch (error) {
        console.log('err from fetch ====================================',error)
    }

}