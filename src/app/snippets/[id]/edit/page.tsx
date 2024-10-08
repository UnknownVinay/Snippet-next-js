import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippets-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage({
  params: { id },
}: SnippetEditPageProps) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

  if (!snippet) return notFound();
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
