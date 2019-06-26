import React from 'react';
import './EditCharacter.css';
import API from '../../../util/API';
import {
    Input,
    Button,
    Form,
    FormGroup,
    Jumbotron,
    Label,
    Col,
    Row,
    Container
} from 'reactstrap';

export default class EditCharacter extends React.Component {
    state = {
        name: '',
        imageUrl: '',
        house: '',
        class: '',
        STR: '10',
        DEX: '5',
        CON: '5',
        INT: '5',
        WIS: '5',
        CHA: '5'
    }

    handleInput = field => event => {
        const {value} = event.target;
        this.setState( {
            [field]: value
        })
    }

    submitCharacterCreation = () => {
        const newChar = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            house: this.state.house,
            class: this.state.class,
            STR: this.state.STR,
            DEX: this.state.DEX,
            CON: this.state.CON,
            INT: this.state.INT,
            WIS: this.state.WIS,
            CHA: this.state.CHA
        }
        API.createCharacter(newChar)
            .then(() => this.clearForm())
    }

    render () {
        return (
            this.props.new?
            <Container className='main'>
            <Jumbotron>
                <h1>Create a New Character</h1>
            </Jumbotron>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Character Name</Label>
                            <Input
                            name='name'
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Image URL</Label>
                            <Input
                            name='image'
                            value={this.state.imageUrl}
                            onChange={this.handleInput('imageUrl')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>House</Label>
                            <Input
                            name='house'
                            value={this.state.house}
                            onChange={this.handleInput('house')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Class</Label>
                            <Input
                            name='class'
                            value={this.state.class}
                            onChange={this.handleInput('class')}
                            ></Input>
                        </FormGroup>
                        <img alt='' src={this.state.imageUrl} className='img-fluid'/>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Strength</Label>
                            <Input
                            name='STR'
                            value={this.state.STR}
                            onChange={this.handleInput('STR')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Dexterity</Label>
                            <Input
                            name='DEX'
                            value={this.state.DEX}
                            onChange={this.handleInput('DEX')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Constitution</Label>
                            <Input
                            name='CON'
                            value={this.state.CON}
                            onChange={this.handleInput('CON')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Intelligence</Label>
                            <Input
                            name='INT'
                            value={this.state.INT}
                            onChange={this.handleInput('INT')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Wisdom</Label>
                            <Input
                            name='WIS'
                            value={this.state.WIS}
                            onChange={this.handleInput('WIS')}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Charisma</Label>
                            <Input
                            name='image'
                            value={this.state.CHA}
                            onChange={this.handleInput('CHA')}
                            ></Input>
                        </FormGroup>
                    </Col>
                </Row>
                    <Button onClick={this.submitCharacterCreation}>Submit</Button>
            </Container>
            :null
        )
    }
}