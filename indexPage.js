import {bioMainText, bioSubText} from './constants'
import React from 'react-dom'

export default class IndexPage extends React.Component {
    render() {
        return <div>
            <h1 style={{fontSize: 18}}>
                Hi there, I'm Robert Sanders
            </h1>
            <p style={{fontSize: 14}}>
                <div dangerouslySetInnerHTML={{__html: bioMainText}} />;
            </p>
            <h2 style={{fontSize: 16}}>
                <p>
                    <div dangerouslySetInnerHTML={{__html: bioSubText}} />;
                </p>
            </h2>
        </div>          
    }
}