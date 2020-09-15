import React from "react";

const Weather = props => {
 const {myData} = props;
 // console.log(myData);


return(
	<div className="weather__info">
	 {	
	 	myData.city && myData.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { myData.city }, { myData.country }</span>
	 	</p> 
	 }
	 { 	
	 	myData.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { myData.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	myData.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { myData.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	myData.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { myData.description } </span>
	 </p> 
	 }
	 { 
	 	myData.error && <p className="weather__error">{ myData.error }</p>  
	 }
	</div>
);
}
export default Weather;