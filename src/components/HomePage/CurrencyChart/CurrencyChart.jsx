import React, {useState, useEffect} from "react";
import {Chart, registerables } from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import {Line } from 'react-chartjs-2'

Chart.register(...registerables);
Chart.register(CategoryScale);

export default function CurrencyChart({prices}){
    //[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    const [labels, setLabels] = useState(() =>{
        let res = []
        for (let i = 14; i >= 0; i--){
            let day = new Date(new Date().setDate(new Date().getDate()-i))
            res.push(day.toLocaleDateString("en-US"))
        }
        return (res);
    })
    const [dataSet, setDataset] = useState(prices.map(price =>  price[1]));

    useEffect(() =>{
        setDataset(prices)
    }, [prices])

    const data = {
        labels: labels,
        datasets: [{
            label: 'Price in USD',
            data: dataSet,
            fill: false,
            borderColor: 'rgb(0, 192, 192)',
            tension: 0.1
        }]
    };


    return <Line 
        data={data} 
        options={{
            plugins:{
                legend:{
                    labels:{
                        color: 'white',
                        font:{
                            size: 14
                        }
                    }
                },
                
            },
            scales:{
                yAxes:{
                    ticks:{
                        color: 'white',
                        font:{
                            size: 14
                        }
                    }
                },
                xAxes:{
                    ticks:{
                        color: 'white',
                        font:{
                            size: 14
                        }
                    }
                }
            }
        }}
        width={'4000'}
        height={'2000'}
    />;

}