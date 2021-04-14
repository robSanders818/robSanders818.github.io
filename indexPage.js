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

const bioMainText = 'I\'m a Senior at Northeastern University studying Computer Science,' +
'Click <a href="/about">here</a> to read more about me!'

const bioSubText = 'I am a current Python Developer Co-op for Morse Corp. starting in January 2021,' +
    ' and in 2020, I was working with the Baltimore Orioles as ' +
'a Software Developer Co-Op (click <a href="/portfolio">here</a> to see more about this)'