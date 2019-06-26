import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap';
import CharacterCard from '../../CharacterCard';
import API from '../../../util/API';
import './ViewAllCharacters.css';


export default class ViewAllCharacters extends React.Component {
    state = {
        characters: []
    }

    fetchCharacters = () => (
        API.getAllCharacters().then( characters => this.setState({characters: characters}))
    )


    componentDidMount () {
        this.fetchCharacters();
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Jumbotron>
                            <h1>Welcome to the Magical World of Harry Potter</h1>
                            <p>Here are all the Characters</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Container>
                            {
                                this.state.characters.map((character,id) => (
                                    <CharacterCard character={character} key={id} />
                                    ))
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}