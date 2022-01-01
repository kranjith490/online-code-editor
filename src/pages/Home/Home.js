import React, { Fragment, useState, useEffect } from "react";
import Editor from "../../components/Editor/Editor";
const Home = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
              <html> 
                <body> ${html} </body>
                <style> ${css} </style>
                <script> ${js} </script>
              </html>
              `
      );
    }, 250);

    return() => clearTimeout(timeOut)
  }, [html, css, js]);
  return (
    <Fragment>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="Javscript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          srcDoc={srcDoc}
          security="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </Fragment>
  );
};

export default Home;
