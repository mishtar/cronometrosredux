import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Icon } from 'semantic-ui-react';
import { startChronometherTimer, stopChronometherTimer, deleteChronomether, updatingChronomether } from '../../actions/actions';
import { millisecondsToHuman } from '../../utils/utils';
import './index.css';

class Chronomether extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            timeTranscurred : props.time
        }
        this.tick = this.tick.bind(this);
        this.startChronomether = this.startChronomether.bind(this);
        this.stopChronomether = this.stopChronomether.bind(this);
        this.intervalId = '';
    }
    componentDidMount(){
        if(this.props.started)
            this.startChronomether();
    }
    tick() {
        this.setState({timeTranscurred: (this.state.timeTranscurred + 1000)}); 
    }
    startChronomether(){
        this.intervalId = setInterval(this.tick, 1000);
    }
    stopChronomether(){
        console.log("paro");
        clearInterval(this.intervalId);
        
    }
    toggleInterval(){
        this.props.started ? this.stopChronomether() : this.startChronomether();
    }
    render(){
        const {
            id,
            title,
            project,
            started,
            startChronometherTimer,
            stopChronometherTimer,
            deleteChronomether,
            updatingChronomether
        } = this.props;

        return(
            <Card centered>
                <Card.Content>
                    <Card.Header textAlign="left">
                        {title}
                    </Card.Header>
                    <Card.Meta textAlign="left">
                        {project}
                    </Card.Meta>
                    <Card.Description textAlign="center">
                        {millisecondsToHuman(this.state.timeTranscurred)}
                        <div className="right aligned grid">
                            <a 
                                className="chronomether-link" 
                                onClick={() => deleteChronomether(id)}
                            >
                                <Icon name="trash" color="black"/>
                            </a>
                            <a 
                                className="chronomether-link" 
                                onClick={() => updatingChronomether(true, id, this.state.timeTranscurred)}
                            >
                                <Icon name="edit" color="black" />
                            </a>
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Button className="fluid" basic onClick={() => 
                        {this.toggleInterval();
                            started ? 
                            stopChronometherTimer(id, this.state.timeTranscurred) : 
                            startChronometherTimer(id)}} color={started ? 'red' : 'green'
                        }
                    >
                        {started ? 'stop': 'start'}
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    startChronometherTimer,
    stopChronometherTimer,
    deleteChronomether,
    updatingChronomether
}, dispatch);

export default connect(null, mapDispatchToProps) (Chronomether);