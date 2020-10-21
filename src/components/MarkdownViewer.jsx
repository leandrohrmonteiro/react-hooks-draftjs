import React from "react";
import { stateToMarkdown } from "draft-js-export-markdown";

function MarkdownViewer(props) {
  const markdownViewer = () => {
    const markdown = stateToMarkdown(props.editorState.getCurrentContent());
    return <textarea readOnly value={markdown} />;
  };

  return <div id="markdown-viewer">{markdownViewer()}</div>;
}

export default MarkdownViewer;