const { useState } = React;

const defaultText = `# Welcome to my Markdown Previewer!
## I'm Gracee
[Visit my FreeCodeCamp Account](https://www.freecodecamp.org/whitepony22)
\`console.log("Hey")\`
\`\`\`
function greet() {
  return "Smile! cuz I'ma waste ur time";
}
\`\`\`
Did you know?
- I love the colour blue
- I know chinese.. teehee
> Watch my vibe~
<img src="https://prettyoldbooks.com/cdn/shop/files/il_fullxfull.6309257085_p2uo_1500x.jpg?v=1725916855" width="300" height="200" />
[Like](https://i.pinimg.com/736x/7c/20/12/7c201288e39150590c09deb15a751a47.jpg)
**Au revoir**`;

function App() {
  const [text, setText] = useState(defaultText);
  marked.setOptions({ breaks: true });

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f6fc',
      minHeight: '100vh',
      padding: '2em',
      color: '#333'
    }}>
      <h1 style={{ textAlign: 'center', color: '#4c5377' }}>Markdown Previewer</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2em',
        marginTop: '2em'
      }}>
        <textarea
          id="editor"
          style={{
            width: '100%',
            height: '400px',
            padding: '1em',
            border: '2px solid #6975a7',
            borderRadius: '8px',
            backgroundColor: '#eef1fb',
            color: '#333',
            resize: 'vertical',
            fontSize: '1em'
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          id="preview"
          style={{
            border: '2px solid #6975a7',
            borderRadius: '8px',
            padding: '1em',
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            height: '400px',
            fontSize: '1em'
          }}
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
