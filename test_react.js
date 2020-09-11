'use strict';

const e = React.createElement;

class TestReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return <h2>
            Hello World
        </h2>
          
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(TestReact), domContainer);