import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <>
            <Header titleForHeader={'New header'}/>
            <Body titleForBody={'New body'}/>
            <Footer titleForFooter={'New footer'}/>
        </>
    );
}

export default App;
