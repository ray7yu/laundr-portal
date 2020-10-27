import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chartjs from 'chart.js';
import Toggle from './Toggle';
const data = {
    // Labels should be Date objects
    labels: [new Date(2017, 8, 16, 15, 2, 5, 1), new Date(2017, 8, 17, 6, 11, 5, 2), new Date(2017, 8, 18)],
    datasets: [{
        fill: false,
        label: 'Subscribers',
        data: [280, 250, 340],
        borderColor: '#01C9E1',
        backgroundColor: '#01C9E1',
        lineTension: 0,
        borderWidth: 2
    }]
}
const chartConfig = {
    type: 'line',
    data: data,
    options: {
        fill: false,
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                // display: true,
                // offset: true,
                // scaleLabel: {
                //     display: true,
                //     // labelString: "Date",
                // },
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    drawBorder: false
                },
                display: true,
                scaleLabel: {
                    display: true,
                    // labelString: "Page Views",
                }
            }]
        }
    }
}
const useStyles = makeStyles((theme) => ({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        // flexShrink: 0,
        width: `calc(100% - 175px)`
    },
    graph: {
        width: '100%',
        // minWidth: '200px',
    },
    button: {
        cursor: 'pointer',
    },
    toggle: {
        marginTop: '10px',
    }
}));
export default function Graph(props) {
  const classes = useStyles();
  const chartContainer = React.useRef(null);
  const [chartInstance, setChartInstance] = React.useState(null);
  const [data, setData] = React.useState([]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  const handleSubscriber = (type) => {
    switch(type){
        case 'all':
            setData([1, 2, 3, 4, 5, 6]);
            break;
        case 'studentPlan':
            setData([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
            break;
        case 'standard':
            setData([1, 100, -4, 3, 234]);
            break;
        case 'plus':
            setData([1, 2, 3, 4, 5, 6]);
            break;
        case 'family':
            setData([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
            break;
        default:
            setData([1, 2, 3, 4, 5, 6]);
    }
  };
  const handleOrder = (type) => {
    switch(type){
        case 'today':
            setData([1, 2, 3, 4, 5, 6]);
            break;
        case 'seven':
            setData([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
            break;
        case 'thirty':
            setData([1, 100, -4, 3, 234]);
            break;
        case 'allTime':
            setData([1, 2, 3, 4, 5, 6]);
            break;
        default:
            setData([1, 2, 3, 4, 5, 6]);
    }
  };
  const handleWeight = (type) => {
    switch(type){
        case 'today':
            setData([50, 51, 52, 24, 23, 2]);
            break;
        case 'seven':
            setData([10, 11, 12, 17, 18, 19]);
            break;
        case 'thirty':
            setData([1, -2, -51, 234, 14, 12, 15]);
            break;
        case 'allTime':
            setData([0, 5, 92, 1, 1, 35]);
            break;
        default:
            setData([1, 2, 3, 4, 5, 6]);
    }
  };
  const handleToggle = () => {
    switch(props.graph){
        case 0:
            return <Toggle type={0} start={'all'} handleClick={handleSubscriber}/>
        case 1:
            return <Toggle type={1} start={'today'} handleClick={handleOrder}/>
        case 2:
            return <Toggle type={2} start={'today'} handleClick={handleWeight}/>
        default:
            return <Toggle type={0} start={'all'} handleClick={handleSubscriber}/>
    }
  };
  React.useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, props.graph]);
  React.useEffect(() => {
      console.log(data)
      if(chartInstance != null){
        updateDataset(0, data);
      }
  }, [data])
  return (
    <div className={classes.wrapper}>
        <canvas ref={chartContainer} className={classes.graph}/>
        {handleToggle()}
    </div>
  );
}