import React, { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./toolbar";

type Props = {};

const Editor: FC<Props> = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="m-10">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
