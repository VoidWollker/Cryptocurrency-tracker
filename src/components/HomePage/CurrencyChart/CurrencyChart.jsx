import React, {useState, useEffect} from "react";
import {Chart, registerables } from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import {Line } from 'react-chartjs-2'
import axios from "axios";

Chart.register(...registerables);
Chart.register(CategoryScale);

export default function CurrencyChart({prices}){
    const [labels, setLabels] = useState([14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    const [dataSet, setDataset] = useState(prices.map(price =>  price[1]));

    useEffect(() =>{
        setDataset(prices)
    }, [prices])

    const data = {
        labels: labels,
        datasets: [{
            label: 'Price',
            data: dataSet,
            fill: false,
            borderColor: 'rgb(0, 192, 192)',
            tension: 0.1
        }]
    };


    return <Line data={data} />;

}