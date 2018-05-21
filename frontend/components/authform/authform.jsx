import React from 'react'

import { bindActionCreators } from 'redux'
import {Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { makeTestAction } from '../../actions/testaction'

import Button from 'arui-feather/button'
import Form from 'arui-feather/form'
import FormField from 'arui-feather/form-field'
import Input from 'arui-feather/input'
import Label from 'arui-feather/label'

import { inputField } from '../../utils/componentFactory'

let formConfig = {
    form: 'testForm'
};

let foundStatus = "";

const selector = formValueSelector('testForm');

function mapStateToProps(state) {
    return {
        phoneField: selector(state, 'phoneNumber'),
        statusResp: state.testRed.respResult,
        answer: state.testRed.answerReceived
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { makeTestAction }, dispatch )
}

@reduxForm(formConfig)
@connect(mapStateToProps, mapDispatchToProps)
class AuthForm extends React.Component {

    render() {
        return (
            <div>
                <Form noValidate={ true } onSubmit={ this.props.makeTestAction }>

                    <FormField key='phoneNumber'>
                        <Field name='phoneNumber' placeholder='Укажите номер телефона в формате 79001234567' component={ inputField } size='m' />
                    </FormField>

                    <FormField view='line'>
                        <Button width='available' view='extra' size='m' type='submit'>
                            Продолжить
                        </Button>
                    </FormField>

                    { this.renderFinalResult() }

                </Form>
            </div>
        );
    }

    renderFinalResult() {

        foundStatus = this.props.statusResp;

        return (this.props.answer === true ) &&
            <div>
                <FormField view='line' width='400px' label={ <Label size='m'>Статус проверки номера</Label> }>
                    <Input size='m' width='available' value={ foundStatus } />
                </FormField>
            </div>
    }
}

export default AuthForm;