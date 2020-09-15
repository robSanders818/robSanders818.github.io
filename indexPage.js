class IndexPage extends React.Component {
    render() {
        return <div>
            <h1 style={{fontSize: 50}}>
                Hi there, I'm Robert Sanders!
            </h1>
            <div style={{fontSize: 25}} dangerouslySetInnerHTML={{__html: bioMainText}} />
            <h2 style={{fontSize: 40}}>
                Current Professional Objectives
            </h2>
            <div style={{fontSize: 25}}dangerouslySetInnerHTML={{__html: bioSubText}} />
        </div>          
    }
}

const bioMainText = 'I\'m a third year Computer Science Major attending Northeastern University. ' +
'Click <a href="/about">here</a> to read more about me!'

const bioSubText = 'I\'ve just finished up my first work experience with the Baltimore Orioles as ' +
'a Software Developer Co-Op (click <a href="/portfolio">here</a> to see more about this).  Now I am looking ' +
'for another Co-op for the January-June 2021 Cycle, and am really excited to explore my options!'