import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormTextArea, FormButton } from '../formFields';
import TextLink from '../textLink';

class NewNewsletterForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="new-newsletter-form">
                <FormTitle className="new-newsletter-form__title" text="New Newsletter" />
                <Field
                    className='new-newsletter-form__newsletter-title'
                    placeholder="Newsletter Title"
                    component={FormInput}
                    name="title"
                    title="Newsletter Title"
                    type="title"
                />
                <Field
                    className='new-newsletter-form__body'
                    placeholder="Newsletter Body"
                    component={FormTextArea}
                    name="body"
                    title="Body"
                    type="text"
                />
                <Field
                    className='new-newsletter-form__submit'
                    small={true}
                    danger={true}
                    component={FormButton}
                    name="submit"
                    title="Submit"
                    type="submit"
                />
                <Field
                    className='new-newsletter-form__cancel'
                    small={true}
                    component={FormButton}
                    type="button"
                    name="cancel"
                    title="Cancel"
                    onClick={this.props.onCancel}
                />
            </form>
        )
    }
}

NewNewsletterForm = reduxForm({
    form: 'newnewsletter'
})(NewNewsletterForm)

export default NewNewsletterForm;