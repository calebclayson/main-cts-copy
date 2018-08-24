import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';


class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log('trying to submit');
    }

    onCancel = () => {
        console.log('trying to cancel');
    }

    render() {
        return (
            <div className="new-newsletter">
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;

//refactor the form input grid and sign in grid at 3:17 left