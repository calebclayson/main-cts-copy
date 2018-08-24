import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    color: '',
    pluralNoun: '',
    adjectiveOne: '',
    adjectiveTwo: '',
    adjectiveThree: '',
    adjectiveFour: '',
    adjectiveFive: '',
    celebOne: '',
    celebTwo: '',
    celebThree: '',
    celebFour: '',
    nounOne: '',
    nounTwo: '',
    nounThree: '',
    numbOne: '',
    numbTwo: '',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super();

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleForumSubmit = this.handleForumSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleForumSubmit(event) {
        event.preventDefault();

        if(this.state.contentVisible) {
            this.setState (INITIAL_STATE)
        } else {
                this.setState({ contentVisible: true })
            }
    }

    render() {

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
            {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number', state: this.state.numbOne, name: 'numbOne'},
            {title: 'Number', state: this.state.numbTwo, name: 'numbTwo'},
            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},
            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'},
        ]

        return (
            <form onSubmit={this.handleForumSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => {
                        return Input((data), this.handleInputChange, index);
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate Madlib' : 'Clear Madlib'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;