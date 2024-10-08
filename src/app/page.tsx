import Link from "next/link";
import { db } from "@/db";

//we can use anyof below line of code to disable cache
//export const revalidate=0
//export const dynamic = "force-dynamic";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnipppets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center border rounded p-2"
        key={snippet.id}
      >
        <div>{snippet.title} </div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex justify-between m-2 items-center">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link href={"/snippets/new"} className="border rounded p-2">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderSnipppets}</div>
    </div>
  );
}
