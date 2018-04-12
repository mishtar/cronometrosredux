import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'semantic-ui-react';
import Chronomether from '../Chronomether';
import Form from '../Chronomether/form';
import './index.css';
import { creatingChronomether } from '../../actions/actions';

class Home extends PureComponent {
    render(){
        const { chronomethers, creating, creatingChronomether } = this.props;
        console.log(chronomethers);
        return(
            <div className="ui center aligned segment">
                {chronomethers && chronomethers.map(x => !x.editing ? <Chronomether key={x.id} {...x}/> : <Form key={x.id} {...x}/>)}
                {creating ? <Form title='' project='' creating/> : <a onClick={() => creatingChronomether(true)}><Icon name="plus" bordered color="black"/></a>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    chronomethers: state.chronomethers,
    creating: state.creating
});

const mapDispatchToProps = dispatch => bindActionCreators({
    creatingChronomether
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);