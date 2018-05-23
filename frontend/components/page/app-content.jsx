import React from 'react'
import PhoneValidate from "../services/phoneValidate";
import Ip from "../services/ip";

class AppContent extends React.Component {

    render() {
        return (
            <div>
                <PhoneValidate />
                <Ip />
            </div>

        )
    }

}

export default AppContent;