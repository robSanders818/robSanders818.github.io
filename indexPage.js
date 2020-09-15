class IndexPage extends react_import.Component {
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

const bioMainText = 'I\'m a third year Computer Science Major attending Northeastern University. ' +
'Click <a href="/about">here</a> to read more about me!'

const bioSubText = 'I\'ve just finished up my first work experience with the Baltimore Orioles as ' +
'a Software Developer Co-Op (click <a href="/portfolio">here</a> to see more about this).  Now I am looking ' +
'for another Co-op for the January-June 2021 Cycle, and am really excited to explore my options!'