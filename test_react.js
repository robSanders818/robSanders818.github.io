class TestReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return <div>
            Hello World
        </div>
          
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(TestReact), domContainer);