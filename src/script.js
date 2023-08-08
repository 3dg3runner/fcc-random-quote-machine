// Quote object array
const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    text: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  {
    text: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    text: "Life is a long lesson in humility.",
    author: "James M. Barrie"
  },
  {
    text: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  }
]

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      quoteIndex: parseInt(Math.random() * 20)
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      quoteIndex: parseInt(Math.random() * 20)
    });
  }
  
  render() {    
    return (
      <div>
        <div id="text-container">
          <i className="fa fa-solid fa-quote-left"></i>
          <div id="text">
            <p>{quotes[this.state.quoteIndex].text}</p>
          </div>
        </div>
        <div id="author">
          <p>- {quotes[this.state.quoteIndex].author}</p>
        </div>
        <div id="buttons-container">
          <div id="twitter-button">
            <a id="tweet-quote" target="_blank" title="Post this quote!" href={"twitter.com/intent/tweet?hashtags=quotes&text=%22" + quotes[this.state.quoteIndex].text.replace(/\s/gi, "%20").replace(/(')/gi, "%E2%80%99") + "%22%20" + quotes[this.state.quoteIndex].author.replace(/\s/gi, "%20")} className="btn btn-default twitter-button"><i className="fab fa-brands fa-twitter"></i></a>
          </div>
          <div id="quote-button">
            <a href="#" id="new-quote" onClick={this.handleClick}>New Quote</a>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("quote-box"));