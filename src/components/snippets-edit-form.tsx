"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { act, startTransition, useState } from "react";
import * as action from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  // const handleClick = () => {
  //   startTransition(async () => {
  //     await action.editSnippet(snippet.id, code);
  //   });
  // };

  const editSnippetAction = action.editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height={"40vh"}
        language="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button
          // onClick={handleClick}
          type="submit"
          className="border rounded p-2 bg-gray-200 hover:bg-gray-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}
