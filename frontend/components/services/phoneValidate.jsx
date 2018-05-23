import React from 'react'

import { bindActionCreators } from 'redux'
import {Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { phoneValidateAction } from '../../actions/phoneValidateAction'

import Button from 'arui-feather/button'
import Form from 'arui-feather/form'
import FormField from 'arui-feather/form-field'
import Input from 'arui-feather/input'
import Label from 'arui-feather/label'

import { inputField } from '../../utils/componentFactory'

let formConfig = {
    form: 'phoneValidateForm'
};

let foundStatus = "";

const selector = formValueSelector('phoneValidateForm');

function mapStateToProps(state) {
    return {
        phoneField: selector(state, 'phoneNumber'),
        statusResp: state.phoneRed.respResult,
        answer: state.phoneRed.answerReceived
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { phoneValidateAction: phoneValidateAction }, dispatch )
}

@reduxForm(formConfig)
@connect(mapStateToProps, mapDispatchToProps)
class PhoneValidate extends React.Component {

    render() {
        return (
            <div className="block">
                <p>Валидация номера через REST</p>
                <Form noValidate={ true } onSubmit={ this.props.phoneValidateAction }>

                    <FormField key='phoneNumber'>
                        <Field name='phoneNumber' placeholder='Укажите номер телефона в формате 79999999999' component={ inputField } size='m' />
                    </FormField>

                    { this.renderFinalResult() }

                    <FormField view='line'>
                        <Button width='available' view='extra' size='m' type='submit'>
                            Продолжить
                        </Button>
                    </FormField>

                </Form>
            </div>
        );
    }

    renderFinalResult() {

        foundStatus = this.props.statusResp;

        return (this.props.answer === true ) &&
            <div>
                <FormField label={ <Label width='available' size='m' className="inline-label">Статус проверки номера</Label> }>
                    <Input width='available' size='m'  value={ foundStatus } />
                </FormField>
            </div>
    }
}

export default PhoneValidate;