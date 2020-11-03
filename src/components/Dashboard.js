import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph from './Graph';
const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 300, pv: 2000, amt: 400},
  {name: 'Page C', uv: 200, pv: 1600, amt: 1200},
  {name: 'Page D', uv: 100, pv: 3000, amt: 6500},
];
const useStyles = makeStyles((theme) => ({
  dashboard: {
    width: '100%',
    height: '90%',
  },
  head: {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '10%',
  },
  selected: {
    backgroundColor: '#FFB600',
    height: '5px',
  },
  button: {
    cursor: 'pointer',
  },
}));
export default function Dashboard() {
  const classes = useStyles();
  const [graph, setGraph] = React.useState(0);
  const handleSelectGraph = (index) => {
    switch(index){
      case 0:
        setGraph(0);
        return
      case 1:
        setGraph(1);
        return
      case 2:
        setGraph(2);
        return
      default:
        setGraph(0);
    }
    
  }
  return (
    <div className={classes.dashboard}>
      <div className={classes.head}>
        {['Total Subscriber Count', 'Orders Processed', 'Total Laundry Processed'].map((text, index)=>(
          <div key={text} className={classes.button} onClick={() => handleSelectGraph(index)}>
            {text}
            <div className={index === graph ? classes.selected : ""} />
          </div>
        ))}
      </div>
       <Graph graph={graph}/>
    </div>
  );
}
