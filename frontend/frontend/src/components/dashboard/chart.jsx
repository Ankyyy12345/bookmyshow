import Chart from 'react-google-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

let options = {
    title: 'Profit',
    pieHole: '0.1',
    slices: [
        {
            color: 'green'
        },
        {
            color: 'red'
        }
    ],
    legend: {
        position: 'top'
    }
}

function Pie() {
    const [profit, setProfit] = useState([
        ['Name', 'Profit'],
        ['pvr', 50000],
        ['inox', 65748],
        ['others', 748933]
    ]);

    async function getProfit() {
        let response = await axios.get('http://localhost:4000/profit')
     

        setProfit([
            ['Name', 'Profit'],
            ['pvr', response.data.pvr],
            ['inox', response.data.inox],
            ['others', response.data.others]
        ])

    }


    useEffect(() => {
        getProfit()
    }, [])


 return(
    <>
    <div>
       <center><h1 style={{color:"green"}}> Progress</h1></center>
    </div>

    <Chart
    chartType='BarChart'
    data={profit}
    options={options}
    width={"100%"}
    height={'400px'}
    >
    </Chart>





    </>
 )


}

export default Pie