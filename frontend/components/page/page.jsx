import React from 'react'
import AppContent from "./app-content";
import Header from "./header";
import Footer from '../page/footer'

class Page extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <AppContent/>
                <Footer/>
            </div>
        );
    }

}

export default Page;