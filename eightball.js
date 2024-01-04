const answers = [
    { msg: "It is certain", color: "green" },
    { msg: "It is decidedly so", color: "green" },
    { msg: "Without a doubt", color: "green" },
    { msg: "Yes definitely", color: "green" },
    { msg: "You may rely on it", color: "green" },
    { msg: "As I see it, yes", color: "green" },
    { msg: "Most likely", color: "green" },
    { msg: "Outlook good", color: "green" },
    { msg: "Yes", color: "green" },
    { msg: "Signs point to yes", color: "green" },
    { msg: "Reply hazy try again", color: "yellow" },
    { msg: "Ask again later", color: "yellow" },
    { msg: "Better not tell you now", color: "yellow" },
    { msg: "Cannot predict now", color: "yellow" },
    { msg: "Concentrate and ask again", color: "yellow" },
    { msg: "Don't count on it", color: "red" },
    { msg: "My reply is no", color: "red" },
    { msg: "My sources say no", color: "red" },
    { msg: "Outlook not so good", color: "red" },
    { msg: "Very doubtful", color: "red" }
  ];
  
  
  class EightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "Think of a Question",
        color: "black"
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      this.setState({
        message: randomAnswer.msg,
        color: randomAnswer.color
      });
    }
  
    render() {
      return (
        <div
          className="eight-ball"
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.color }}
        >
          <p className="message">{this.state.message}</p>
        </div>
      );
    }
  }
  
 
  function App() {
    return (
      <div className="app">
        <EightBall />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));