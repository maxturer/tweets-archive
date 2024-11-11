import Image from "next/image";
import Feed from "./components/Feed";

export default async function Home() {

  return (
    <div className="outer-container bg-slate-100">
        <h1>hi page 1</h1>

        <div className="post bg-white divide-y border rounded w-2/3 m-4">
          <div className="p-2">
            <h2 className="text-lg font-semibold">Tweets</h2>
          </div>
          <Feed />
        </div>
    </div>
  );
}
