import React, { Fragment, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const { displayName, onChange, value, language } = props;
  let [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Fragment>
      <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button onClick={() => setOpen(!open)}>I/O</button>
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          option={{
            lineWrapper: true,
            lint: true,
            mode: language,
            lineNumber: true,
            theme: "material",
          }}
        />
      </div>
    </Fragment>
  );
};

export default Editor;
