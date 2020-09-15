import React from 'react';
import {Bar as BarChart} from 'react-chartjs-2';


const weatherChart = (props) => {

  const {chartjsData} = props;

   const chartData = {
        labels:['temperature', 'humidity'],
        datasets:[
          {
            data:[
                `${chartjsData.temperature}`, `${chartjsData.humidity}`
            ],
            backgroundColor:[
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)'
            ],
            borderColor:"rgba(0,99,255, 0.6)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(50,35,255, 0.6)",
            fillColor: "rgba(220,220,220, 0.5)",
            strokeColor:"rgba(220,220,220, 0.8)",
            highlightFill: "rgba(220,220,220, 0.75)",
            highlightStroke: "rgba(220,220,220, 1)"
          }
        ]
    };

     const chartCity = () => {
        if(chartjsData.city === undefined){
            return ' ';
        }else {
          return `Weather condition in  ${chartjsData.city} ,` ;
        }
     };

     const chartCountry = () => {
        if(chartjsData.country === undefined){
            return ' ';
        }else {
          return  chartjsData.country ;
        }
     };

     const chartOptions = {
            title:{
              display:true,
              text: `${chartCity()} ${chartCountry()}`,
              fontSize:25,
              fontFamily:'Roboto Slab',
              fontColor:'#000',
              padding:15
            },
            legend:{
              display:false,
              position:'right'
            }
    };


  return (
    <div>
      <BarChart data={chartData} options={chartOptions} height={250}/>
    </div>
);
};




export default weatherChart;