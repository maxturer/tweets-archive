import Image from "next/image";
import { getLocalData } from "@/lib/getdata";
import Card from "./components/Card";

export default async function Home() {
  const posts = await getLocalData();
  const uniqueId = [];
  const image = [];

  return (
    <div className="outer-container bg-slate-100">
        <h1>hi page 1</h1>

        <div className="post bg-white divide-y border rounded w-2/3 m-4">
        <div className="p-2">
          <h2 className="text-lg font-semibold">Tweets</h2>
        </div>
          {posts.map((el) => {

            if (uniqueId.indexOf(el.tweet_id) === -1) {
              uniqueId.push(el.tweet_id);
              //console.log(el.tweet_id);
              return (
                // <div className="tweet p-3" key={el.tweet_id}>
                //   <div className="user-details p-1">
                //     <p><span className="pr-1">{el.author.nick}</span><span className="px-1">@{el.author.name}</span></p>
                //   </div>
                //   <div className="tweet-content p-1">
                //     <p>{el.content}</p>
                //   </div>
                //   <div className="tweet-details p-1">
                //     <p>
                //       <span className="pr-1">Favorites: {el.favorite_count}</span>
                //       <span className="px-1">Quote Retweets: {el.quote_count}</span>
                //       <span className="px-1">Replies: {el.reply_count}</span>
                //       <span className="px-1">Retweets: {el.retweet_count}</span>
                //     </p>
                //     <p><span>{el.date}</span></p>
                //   </div>
                // </div>

            <Card key={el.tweet_id}
              name={el.author.nick} 
              handle={el.author.name} 
              content={el.content} 
              favorites={el.favorite_count} 
              quotes={el.quote_count}
              replies={el.reply_count}
              retweets={el.retweet_count}
              date={el.date} />
              )
            }

          })}

        </div>
    </div>
  );
}
