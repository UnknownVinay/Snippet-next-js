"use client";

import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function CreateSnippetPage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code">Code</label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        {formState.message ? (
          <div className="my-2 p-2  bg-red-200 border border-red-500 rounded ">
            {formState.message}
          </div>
        ) : null}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
