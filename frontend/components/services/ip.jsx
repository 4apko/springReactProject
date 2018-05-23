import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getIp} from "../../actions/getIp";
import {Field, formValueSelector, reduxForm } from 'redux-form'
import Button from 'arui-feather/button'
import Form from 'arui-feather/form'
import Input from 'arui-feather/input'

let foundStatus = "";

let formConfig = {
    form: 'ipForm'
};

formValueSelector('ipForm');

function mapStateToProps(state) {
    return {
        ip: state.ipRed.respResult,
        answerReceived: state.ipRed.answerReceived
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { getIp }, dispatch )
}

@reduxForm(formConfig)
@connect(mapStateToProps, mapDispatchToProps)
class Ip extends React.Component {

    render() {
        foundStatus = this.props.answerReceived;
        return (
            <div className="block">
                <p>Получение IP адреса REST сервисом</p>
            <Form noValidate={ true } onSubmit={ this.props.getIp }>
                <FormField view='line'>
                    <Input disabled name='ipLabel' size='m'  width='available' className="ip-label" placeholder='Тут будет ваш IP' value={foundStatus ? this.props.ip : ""}  />
                </FormField>
                <FormField view='line'>
                    <Button width='available' view='extra' type='submit'>
                        Получить!
                    </Button>
                </FormField>
            </Form>
           </div>);
    }

}

export default Ip;