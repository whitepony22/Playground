const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "FDR" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
];

const backgroundPairs = [
  {
    image: "url('https://marketplace.canva.com/EAGK_VGJ-wk/1/0/1600w/canva-purple-illustrative-lavender-desktop-wallpaper-IJjKe9JIOeM.jpg')",
    button: "#5e4c8a"
  },
  {
    image: "url('https://i.redd.it/1f61x40y1ehc1.jpeg')",
    button: "#4c588a"
  },
  {
    image: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeTCtBLXQ2Z8DAnf1zskyWk8hXHcmki2pfjoEGch-sugmyp9HsinJRuX0h7kI2wUCbP5XuxbxbULHc2yBfXJu6NlAuqgNbL1Kq94ps-6DaEZ_h7UMgFBnMdbphjcgF6sX61ap4GQwGK7JP/w7680-h3200-c/night-sky-city-stars-anime-scenery-uhdpaper.com-4K-135.jpg')",
    button: "#04124e"
  },
  {
    image: "url('https://cdna.artstation.com/p/assets/images/images/030/953/926/large/lunar-0001.jpg?1602150313')",
    button: "#316799"
  },
  {
    image: "url('https://images.playground.com/720e491c-5dd7-4d9a-be46-c8aab18c6e7f.jpeg')",
    button: "#2b9090"
  },
];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function QuoteBox() {
  const [quote, setQuote] = React.useState(quotes[0]);
  const [background, setBackground] = React.useState(backgroundPairs[0]);

  function handleNewQuote() {
    const quoteIdx = getRandomIndex(quotes);
    const bgIdx = getRandomIndex(backgroundPairs);
    setQuote(quotes[quoteIdx]);
    setBackground(backgroundPairs[bgIdx]);
  }

  React.useEffect(() => {
    document.body.style.backgroundImage = background.image;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    // optionally add a subtle overlay color if needed
    document.body.style.backgroundRepeat = "no-repeat";
  }, [background]);

  return (
    <div
      id="quote-box"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)", // slightly transparent so text stands out on image
        padding: "2rem",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        maxWidth: "600px",
        margin: "auto"
      }}
    >
      <div id="text" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        "{quote.text}"
      </div>
      <div id="author" style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>
        - {quote.author}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: background.button,
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
            backgroundColor: background.button,
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<QuoteBox />, document.getElementById("root"));
