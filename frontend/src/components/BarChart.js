import { useEffect, useState } from "react";
import { VegaLite } from "react-vega";
import axios from "axios";

const BarChart = () => {
    const [data , setData]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/data')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data :',error))
    },[])

    const spec = {
        description: 'A simple bar chart with embedded data.',
        mark: 'bar',
        encoding:{
            x:{field:'category',type:'nominal'},
            y:{field:'value', type: 'quantitative'}
        },
        data:{values:data}
    };
// examples for mark 
//     bar:
// mark: 'bar'

// point:
// mark: 'point'

// line:
// mark: 'line'

// area:
// mark: 'area'

// circle:
// mark: 'circle'

// square:
// mark: 'square'

// tick:
// mark: 'tick'

// rule:
// mark: 'rule'

// rect:
// mark: 'rect'

// geoshape:
// mark: 'geoshape'

// text:
// mark: 'text'

// trail:
// mark: 'trail'

  return (
    <>
        <VegaLite spec={spec} />
    </>
  )
}

export default BarChart
