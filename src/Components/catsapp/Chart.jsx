import { Bar } from 'react-chartjs-2'
import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {Link} from 'react-router-dom';




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

const Chart = () => {

  const [items, setItems] = useState([]);



  const search = async () => {

    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }



    let api_key = "a8b77da5e489ae2ae6c426dd117803e4";

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${element[0].value}&units=imperial&appid=${api_key}`;



    fetch(url)
      .then(response => response.json())
      .then(result => {
        setItems(result.list);
      });

  };



  useEffect(() => {
    search();
  }, []);

  let temp = [];
  let dtx = [];
  let humidity = [];
  let humi = [];
  
  
  if (items && items.length > 0) {
    items.forEach((item, index) => {
      if(index % 8===0){
      temp.push(item.main.temp);
      dtx.push(item.dt_txt);
      humidity.push(item.main.humidity);
      humi.push(item.dt_txt);
      }
    });
  
  }
  
  const data = {
    labels: dtx,
    datasets: [
      {
        label: 'Temperature',
        fill: true,
        backgroundColor: 'rgb(175, 69, 100)',
        borderColor: 'rgba(0,0,0,6)',
        borderWidth: 1,
        data: temp
      },
      {
        label: 'Humidity',
        fill: true,
        backgroundColor: 'rgba(0, 0, 255, 1)',
        borderColor: 'rgba(0, 0, 132, 1)',
        borderWidth: 1,
        data: humidity
      }]
    }

return(
  <div className='d-flex justify-content-center align-items-center text-center'>
    <div className='bg-white p-3 rounded w-100'>
      <div>
      <h1>CATS App 5-Day Forecast Chart</h1>
      <input type="text" className="cityInput" placeholder='Enter City Name'></input>
      <button type='sumbit' className='btn btn-success w-3 rounded-10' onClick={()=>{search()}}><strong>Search</strong></button>
      <div className="label-container">

<label style={{border: '1px solid blue', backgroundColor: 'blue', color: 'white', padding: '5px'}}>Humidity</label>

<label style={{border: '1px solid red', backgroundColor: 'red', color: 'white', padding: '5px'}}>Temperature</label>

</div>
      <Bar data={data}
      options={{
      title:{
      display:true,
      fontSize:20
      },
      legend: {
      display:true,
      position:'right'
      },
      scales:{
        x:{
          ticks:{
            font:{
              size:14
            }
          }
        },
        y:{
          ticks:{
            font:{
              size:20
            }
          }
        }
      }
      }}
      />
    </div>
    <Link to='/catsapp' className='btn btn-default border w-100 bg-blue rounded-10 text-decoration-none'>Back to CATS Weather Application</Link>
    </div>
    </div>
)}


  export default Chart;