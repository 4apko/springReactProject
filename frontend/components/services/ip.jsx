import React from 'react'
import {inputField} from "../../utils/componentFactory";

class Ip extends React.Component {

    render() {
        return (<div className="block">
            <form /*onSubmit={ this.props.getIp }*/>
             <input name='ipLabel' className="ip-label" disabled placeholder='Тут будет ваш IP'  />
              <button type='submit'>
                        Получить!
                    </button>

            </form>
                </div>);
    }

}

export default Ip;