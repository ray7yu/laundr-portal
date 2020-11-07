import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph from './Graph';
const useStyles = makeStyles(() => ({
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
