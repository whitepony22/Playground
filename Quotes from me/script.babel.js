<!-- CodePen: Use this inside the JS pane (type="text/babel") -->
const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "FDR" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
];

// Matching light background and solid button color
const colorPairs = [
  { bg: "rgba(94, 76, 138, 0.3)", button: "#5e4c8a" },
  { bg: "rgba(76, 88, 138, 0.3)", button: "#4c588a" },
  { bg: "rgba(4, 18, 78, 0.3)", button: "#04124e" },
  { bg: "rgba(49, 103, 153, 0.3)", button: "#316799" },
  { bg: "rgba(43, 144, 144, 0.3)", button: "#2b9090" },
];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function QuoteBox() {
  const [quote, setQuote] = React.useState(quotes[0]);
  const [color, setColor] = React.useState(colorPairs[0]);

  function handleNewQuote() {
    const quoteIdx = getRandomIndex(quotes);
    const colorIdx = getRandomIndex(colorPairs);
    setQuote(quotes[quoteIdx]);
    setColor(colorPairs[colorIdx]);
  }

  // Set background color
  React.useEffect(() => {
    document.body.style.backgroundColor = color.bg;
  }, [color]);

  return (
    <div id="quote-box" style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", maxWidth: "600px" }}>
      <div id="text" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>"{quote.text}"</div>
      <div id="author" style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>- {quote.author}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: color.button,
            color: "#fff",
            padding: "0.5rem 1rem",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Tweet
        </a>
        <button
          id="new-quote"
          onClick={handleNewQuote}
          style={{
            backgroundColor: color.button,
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<QuoteBox />, document.getElementById("root"));
