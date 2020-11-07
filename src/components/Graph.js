import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chartjs from 'chart.js';
import Toggle from './Toggle';
import {orderRows, subscriptionRows} from './DummyData';

const data = {
    // Labels should be Date objects
    labels: [new Date(2017, 7, 16, 15, 2, 5, 1), new Date(2017, 8, 17, 6, 11, 5, 2), new Date(2017, 8, 18)],
    datasets: [{
        fill: false,
        label: 'Subscribers',
        data: [1, 2, 3],
        pointRadius: 1,
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
                distribution: 'linear',
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
const filterData = (type, data) => {
    switch(type){
        case 'studentPlan':
            return data.filter(e => e.subscriptionType === 'Student Plan');
        case 'standard':
            return data.filter(e => e.subscriptionType === 'Standard Plan');
        case 'plus':
            return data.filter(e => e.subscriptionType === 'Plus Plan');
        case 'family':
            return data.filter(e => e.subscriptionType === 'Family Plan');
        default:
            return data;
    }
};
const createData = (type, data, isWeight) => {
    const currDate = new Date()
    let labels = []
    let newData = []
    let currTime;
    switch(type){
        case 'today':
            currTime = new Date();
            currTime.setDate(currTime.getDate() - 1);
            for(let i = 0; i <= 24; i++){
                labels.push(currTime)    
                const value = data.reduce((accumulator, item) => {
                    if(item.startDate){
                        const itemDate = item.startDate;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth() &&
                        itemDate.getDate() === currTime.getDate() && itemDate.getHours() === currTime.getHours())
                        {
                            return accumulator + 1;
                        }
                    } else {
                        const itemDate = item.deliveryTime;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth() &&
                        itemDate.getDate() === currTime.getDate() && itemDate.getHours() === currTime.getHours())
                        {
                            if(isWeight) {
                                return ((accumulator + item.weight) * 100) / 100;
                            }
                            return accumulator + 1;
                        }
                    }
                    return accumulator;
                }, 0)
                newData.push({
                    t: new Date(currTime.getFullYear(), currTime.getMonth(), currTime.getDate(), currTime.getHours()),
                    y: value
                });
                currTime.setHours(currTime.getHours() + 1);
            }
            break;
        case 'seven':
            currTime = new Date();
            currTime.setDate(currTime.getDate() - 6);
            for(let i = 0; i <= 6; i++){
                labels.push(new Date(currTime.getFullYear(), currTime.getMonth(), currTime.getDate()));
                const value = data.reduce((accumulator, item) => {
                    if(item.startDate){
                        const itemDate = item.startDate;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth() &&
                        itemDate.getDate() === currTime.getDate())
                        {
                            return accumulator + 1;
                        }
                    } else {
                        const itemDate = item.deliveryTime;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth() &&
                        itemDate.getDate() === currTime.getDate())
                        {
                            if(isWeight){
                                return ((accumulator + item.weight) * 100) / 100;
                            }
                            return accumulator + 1;
                        }
                    }  
                    return accumulator;
                }, 0)
                newData.push({
                    t: new Date(currTime.getFullYear(), currTime.getMonth(), currTime.getDate()),
                    y: value
                });
                currTime.setDate(currTime.getDate() + 1);
            }
            break;
        case 'thirty':
            currTime = new Date();
            currTime.setDate(currTime.getDate() - 29);
            for(let i = 0; i <= 29; i++){
                labels.push(new Date(currTime.getFullYear(), currTime.getMonth(), currTime.getDate()))
                const value = data.reduce((accumulator, item) => {
                    if(item.startDate){
                        const itemDate = item.startDate;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth() &&
                        itemDate.getDate() === currTime.getDate())
                        {
                            return accumulator + 1;
                        }
                    } else {
                        const itemDate = item.deliveryTime;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth() &&
                        itemDate.getDate() === currTime.getDate())
                        {
                            if(isWeight){
                                return ((accumulator + item.weight) * 100) / 100;
                            }
                            return accumulator + 1;
                        }
                    }
                    return accumulator;
                }, 0)
                newData.push({
                    t: new Date(currTime.getFullYear(), currTime.getMonth(), currTime.getDate()),
                    y: value
                });
                currTime.setDate(currTime.getDate() + 1);
            }
            break;
        default:
            //earliest date
            if(data.length === 0){
                return null;
            }
            
            let earliestDate = data[0].startDate ? data[0].startDate : data[0].deliveryTime;
            for(let i = 0; i < data.length ; i++){
                let currentDate = data[i].startDate ? data[i].startDate : data[i].deliveryTime;
                if(currentDate < earliestDate){
                    earliestDate = currentDate;
                }
            }
            console.log(earliestDate)
            currTime = new Date(earliestDate.getTime())
            while(currTime.getFullYear() < currDate.getFullYear() || (currTime.getFullYear() === currDate.getFullYear() && currTime.getMonth() <= currDate.getMonth())){
                labels.push(new Date(currTime.getTime()))
                const value = data.reduce((accumulator, item) => {
                    if(item.startDate){
                        const itemDate = item.startDate;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth())
                        {
                            return accumulator + 1;
                        }
                    } else {
                        const itemDate = item.deliveryTime;
                        if(itemDate.getFullYear() === currTime.getFullYear() && itemDate.getMonth() === currTime.getMonth())
                        {
                            if(isWeight){
                                return ((accumulator + item.weight) * 100) / 100;
                            }
                            return accumulator + 1;
                        }
                    }
                    return accumulator;
                }, 0)
                newData.push({
                    t: new Date(currTime.getFullYear(), currTime.getMonth()),
                    y: value
                });
                currTime.setMonth(currTime.getMonth() + 1)
            }
    }
    console.log(newData);
    return [newData, labels];
}
export default function Graph(props) {
  const classes = useStyles();
  const chartContainer = React.useRef(null);
  const [chartInstance, setChartInstance] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [labels, setLabels] = React.useState([]);
  const [chartType, setChartType] = React.useState('Subscribers')

  const updateGraph = (datasetIndex, newData, newLabels, chartType) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.data.labels = newLabels;
    chartInstance.data.datasets[0].label = chartType;
    chartInstance.update();
  };
  const handleSubscriber = (type) => {
    setChartType('Subscribers');
    let newData;
    let newLabels;
    switch(type){
        case 'all':
            [newData, newLabels] = createData('all', subscriptionRows, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'studentPlan':
            newData = filterData('studentPlan', subscriptionRows);
            [newData, newLabels] = createData('studentPlan', newData, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'standard':
            newData = filterData('standard', subscriptionRows);
            [newData, newLabels] = createData('standard', newData, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'plus':
            newData = filterData('plus', subscriptionRows);
            [newData, newLabels] = createData('plus', newData, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'family':
            newData = filterData('family', subscriptionRows);
            [newData, newLabels] = createData('family', newData, false);
            setData(newData);
            setLabels(newLabels)
            break;
        default:
            return;
    }
  };
  const handleOrder = (type) => {
    setChartType('Orders');
    let newData;
    let newLabels;
    switch(type){
        case 'today':
            [newData, newLabels] = createData('today', orderRows, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'seven':
            [newData, newLabels] = createData('seven', orderRows, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'thirty':
            [newData, newLabels] = createData('thirty', orderRows, false);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'allTime':
            [newData, newLabels] = createData('allTime', orderRows, false);
            setData(newData);
            setLabels(newLabels)
            break;
        default:
            return;
    }
  };
  const handleWeight = (type) => {
    setChartType('Weight (lb)');
    let newData;
    let newLabels;
    switch(type){
        case 'today':
            [newData, newLabels] = createData('today', orderRows, true);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'seven':
            [newData, newLabels] = createData('seven', orderRows, true);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'thirty':
            [newData, newLabels] = createData('thirty', orderRows, true);
            setData(newData);
            setLabels(newLabels)
            break;
        case 'allTime':
            [newData, newLabels] = createData('allTime', orderRows, true);
            setData(newData);
            setLabels(newLabels)
            break;
        default:
            return;
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
    }, [chartContainer]);
    React.useEffect(() => {
        console.log(labels)
        if(chartInstance != null){
            updateGraph(0, data, labels, chartType);
        }
    }, [data, chartType, labels]) 
  return (
    <div className={classes.wrapper}>
        <canvas ref={chartContainer} className={classes.graph}/>
        {handleToggle()}
    </div>
  );
}