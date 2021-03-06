import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    componentDidMount() {
        this.props.fetchNewsletters();
    }

    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }

        return (
            <div className="newsletter-grid">
                <Button
                    className="newsletter-grid__button"
                    icon="fas fa-plus"
                    callback={() => this.handleAddNewsletter()}
                />
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive />
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}

export default connect(null, actions)(NewsletterGrid);