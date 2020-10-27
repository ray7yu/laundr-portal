import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function Toggle(props) {
    const [toggle, setToggle] = React.useState(props.start)
    const handleToggle = (event, type) => {
        if(type != null){
            setToggle(type);
        }
        // console.log(type);
    };
    React.useEffect(() => {
        // console.log(props.start);
        setToggle(props.start);
    }, [props.type])
    React.useEffect(() => {
        if(toggle != null){
            props.handleClick(toggle);
        }
        // console.log(toggle);
    },[props.type, toggle])
    const chooseToggle = () => {
        switch(props.type){
            case 0:
                return (
                    <ToggleButtonGroup
                    value={toggle}
                    exclusive
                    onChange={handleToggle}
                    >
                    <ToggleButton value="all">
                        All
                    </ToggleButton>
                    <ToggleButton value="studentPlan">
                        Student Plan
                    </ToggleButton>
                    <ToggleButton value="standard">
                        Standard
                    </ToggleButton>
                    <ToggleButton value="plus">
                        Plus
                    </ToggleButton>
                    <ToggleButton value="family">
                        Family
                    </ToggleButton>
                    </ToggleButtonGroup>
                )
            case 1:
                return (
                    <ToggleButtonGroup
                    value={toggle}
                    exclusive
                    onChange={handleToggle}
                    >
                    <ToggleButton value="today">
                        Today
                    </ToggleButton>
                    <ToggleButton value="seven">
                        Last 7 Days
                    </ToggleButton>
                    <ToggleButton value="thirty">
                        Last 30 Days
                    </ToggleButton>
                    <ToggleButton value="allTime">
                        All Time
                    </ToggleButton>
                    </ToggleButtonGroup>
                )
            case 2:
                return (
                    <ToggleButtonGroup
                    value={toggle}
                    exclusive
                    onChange={handleToggle}
                    >
                    <ToggleButton value="today">
                        Today
                    </ToggleButton>
                    <ToggleButton value="seven">
                        Last 7 Days
                    </ToggleButton>
                    <ToggleButton value="thirty">
                        Last 30 Days
                    </ToggleButton>
                    <ToggleButton value="allTime">
                        All Time
                    </ToggleButton>
                    </ToggleButtonGroup>
                )
            default:
                return (
                    <ToggleButtonGroup
                    value={props.toggle}
                    exclusive
                    onChange={handleToggle}
                    >
                    <ToggleButton value="all">
                        All
                    </ToggleButton>
                    <ToggleButton value="studentPlan">
                        Student Plan
                    </ToggleButton>
                    <ToggleButton value="standard">
                        Standard
                    </ToggleButton>
                    <ToggleButton value="plus">
                        Plus
                    </ToggleButton>
                    </ToggleButtonGroup>
                )

        }
    }
    return (
        <div>
            {chooseToggle()}
        </div>
    );
}

