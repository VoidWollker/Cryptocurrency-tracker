import React, {useState, useEffect} from "react";
import {Chart, registerables } from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import { Bar, Line } from 'react-chartjs-2'
import axios from "axios";

Chart.register(...registerables);
Chart.register(CategoryScale);

export default function CureencyChart({currency}){
    const [labels, setLabels] = useState([14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    const [dataset, setDataset] = useState([]);

    const getPrices = async () =>{
        let prices = await axios.get('https://api.coingecko.com/api/v3/coins/' + currency.id +'/market_chart?vs_currency=usd&days=14')
        prices = prices.data.prices.map(item => {
            return item[1]
        })
        setDataset(prices)
    }

    useEffect(() => {
        getPrices();
    },);

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: dataset,
            fill: false,
            borderColor: 'rgb(0, 192, 192)',
            tension: 0.1
        }]
    };


    return <Line data={data} />;

}