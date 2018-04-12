import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Form } from 'semantic-ui-react';
import { updateChronomether, updatingChronomether, creatingChronomether, createChronomether } from '../../actions/actions';

class FormChronomether extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            project: props.project
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    render(){
        const {
            id,
            time,
            updateChronomether,
            updatingChronomether,
            creatingChronomether,
            createChronomether,
            creating
        } = this.props;

        return(
            <Card centered>
                <Card.Content>
                    <Card.Description textAlign="center">
                        <Form onSubmit={null}>
                            <Form.Field>
                                <label>Title</label>
                                <Form.Input type="text" placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Project</label>
                                <Form.Input type="text" placeholder='Project' name='project' value={this.state.project} onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <div className='ui two buttons'>
                                    <Button 
                                        basic 
                                        onClick={() => 
                                            creating 
                                            ? createChronomether({title: this.state.title, project: this.state.project})
                                            : updateChronomether({id, title: this.state.title, project: this.state.project})} 
                                        color='blue'
                                    >
                                        {creating ? 'Create' : 'Update'}
                                    </Button>
                                    <Button 
                                        basic 
                                        onClick={() => 
                                            creating 
                                            ? creatingChronomether(false)
                                            : updatingChronomether(false, id, time)} 
                                        color='red'
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Form.Field>
                        </Form>                     
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    updateChronomether,
    updatingChronomether,
    creatingChronomether,
    createChronomether
}, dispatch);

export default connect(null, mapDispatchToProps) (FormChronomether);