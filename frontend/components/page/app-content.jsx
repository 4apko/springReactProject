import React from 'react'
import AuthForm from "../authform/authform";
import Ip from "../services/ip";

class AppContent extends React.Component {

    render() {
        return (
            <div>
                <AuthForm />
                <Ip />
            </div>

        )
    }

}

export default AppContent;