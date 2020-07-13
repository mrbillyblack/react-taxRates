import React, { useState, useEffect } from 'react';
import TaxRates from './taxRates.json';
import { Line } from 'react-chartjs-2';

function Rates() {

    const [chData, setData] = useState({});

    const chart = () => {
        setData({
            labels: TaxRates.year,
            datasets:[ {
                label: 'Tax Rates',
                data: TaxRates.taxRate,
                backgroundColor: [
                    'rgba(125, 186, 105, 1.0)'
                ]
            }],
            borderWidth: 6

        }         
        );
    }
    useEffect(() => {chart()}, []);

    return (
        <div style={{width: '500px', height:'300px'}}> 
            <Line data={chData} options={{
                responsive: true
            }}></Line>
        </div>
    )
       
} 

export default Rates;