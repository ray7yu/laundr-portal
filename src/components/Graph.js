import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chartjs from 'chart.js';
import Toggle from './Toggle';
const data = {
    // Labels should be Date objects
    labels: [new Date(2017, 8, 16, 15, 2, 5, 1), new Date(2017, 8, 17, 6, 11, 5, 2), new Date(2017, 8, 18)],
    datasets: [{
        fill: false,
        label: 'Page Views',
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

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  const handleSubscriber = (type) => {
    let data = [];
    switch(type){
        case 'all':
            data = [1, 2, 3, 4, 5, 6];
            break;
        case 'studentPlan':
            data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            break;
        case 'standard':
            data = [1, 100, -4, 3, 234];
            break;
        case 'plus':
            data = [1, 2, 3, 4, 5, 6];
            break;
        case 'family':
            data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            break;
        default:
            data = [1, 2, 3, 4, 5, 6];
    }
    updateDataset(0, data);
  };
  const handleOrder = (type) => {
    let data = [];
    switch(type){
        case 'today':
            data = [1, 2, 3, 4, 5, 6];
            break;
        case 'seven':
            data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            break;
        case 'thirty':
            data = [1, 100, -4, 3, 234];
            break;
        case 'allTime':
            data = [1, 2, 3, 4, 5, 6];
            break;
        default:
            data = [1, 2, 3, 4, 5, 6];
    }
    updateDataset(0, data);
  };
  const handleWeight = (type) => {
    let data = [];
    switch(type){
        case 'today':
            data = [1, 2, 3, 4, 5, 6];
            break;
        case 'seven':
            data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            break;
        case 'thirty':
            data = [1, 100, -4, 3, 234];
            break;
        case 'allTime':
            data = [1, 2, 3, 4, 5, 6];
            break;
        default:
            data = [1, 2, 3, 4, 5, 6];
    }
    updateDataset(0, data);
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
  }, [chartContainer]);
  return (
    <div className={classes.wrapper}>
        <canvas ref={chartContainer} className={classes.graph}/>
        {handleToggle()}
    </div>
  );
}