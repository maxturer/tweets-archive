import { getLocalData } from "@/lib/getdata";
import Card from "./Card";

export default async function Feed() {
    const posts = await getLocalData();
    const uniqueId = [];
    let images = [];
    return (
        <div className="feed divide-y">
        {posts.map((el) => {

            if (uniqueId.indexOf(el.tweet_id) === -1) {
              uniqueId.push(el.tweet_id);
              //console.log(el);
              if (el.type === "photo") {
                images = [`src/lib/data/twitter_${el.author.name}_${el.tweet_id}_1.jpg`];
              }
              return (
            <Card key={el.tweet_id}
              name={el.author.nick} 
              handle={el.author.name} 
              content={el.content} 
              favorites={el.favorite_count} 
              quotes={el.quote_count}
              photos={images}
              replies={el.reply_count}
              retweets={el.retweet_count}
              date={el.date} />
              )
            }

          })}
          </div>
    )
}