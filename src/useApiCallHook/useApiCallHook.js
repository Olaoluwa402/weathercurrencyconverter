import {useEffect, useState} from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


export default function useApiCallHook(city, country) {

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState({});

	useEffect(() => {
		setLoading(true);
		setError(false);

		let cancel;

		if(city && country){
			// console.log(city, country, API_KEY);
			axios({
			method:'GET',
			url:`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,
			CancelToken: new axios.CancelToken(c => cancel = c)
		})
		.then(res => {
			 // console.log(res.data);
			if(res.data.cod === 200){
				setData({
				temperature :res.data.main.temp,
                city :res.data.name,
                country :res.data.sys.country,
                humidity :res.data.main.humidity,
                description :res.data.weather[0].description,
                error:""
			});
				setLoading(false);
			}else{
				setData({
	              temperature : undefined,
	              city : undefined,
	              country : undefined,
	              humidity : undefined,
	              description : undefined,
	              error : `${res.data.message}, please enter city and country`,
		      })
			}
			
		}) 
		.catch(err => {
			setLoading(true);
			if(axios.isCancel(err)) return;
			console.log(err);
			setError(true);
			setLoading(false);
		})

		return () => cancel();
		}else{
			setLoading(true);
			setData({
              temperature : undefined,
              city : undefined,
              country : undefined,
              humidity : undefined,
              description : undefined,
              error : "please enter city and country",
          });
			setLoading(false);
		}
		

	}, [city, country]);

	return { loading, error, data};
}