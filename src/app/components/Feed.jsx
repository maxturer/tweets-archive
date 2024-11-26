import { getLocalData } from "@/lib/getdata";
import Card from "./Card";

export default async function Feed() {
    const posts = await getLocalData();
    let uniquePosts = [];

    // no wait what about a hash table

    class TweetTable {
      constructor() {
        this.table = Array(this.size);
        this.size = 0;
      }

      _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash+=key.charCodeAt(i);
        }
        return hash % this.table.length;
      }

      set(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
          for (let i = 0; i < this.table[index].length; i++) {
            // Find the key/value pair in the chain
            if (this.table[index][i][0] === key) {
              this.table[index][i][1] = value;
              return;
            }
          }
          // not found, push a new key/value pair
          this.table[index].push([key, value]);
        } else {
          this.table[index] = [];
          this.table[index].push([key, value]);
        }
        this.size++;
      }

      add(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
          for (let i = 0; i < this.table[index].length; i++) {
            // Find the key/value pair in the chain
            if (this.table[index][i][0] === key) {
              this.table[index][i][1].push(value);
              return;
            }
          }
          // not found, push a new key/value pair
          this.table[index].push([key, value]);
        } else {
          return;
        }
      }

      get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
          for (let i = 0; i < this.table[target].length; i++) {
            if (this.table[target][i][0] === key) {
              return this.table[target][i];
            }
          }
        } else {
          return undefined;
        }
      }

      contains(key, photo) {
        let doesContain = false;
        const index = this._hash(key);
      
        for (var i = 0, length = this.table[index][1].length; i < length; i++) {
          if (this.table[index][1][i] === photo) {
            doesContain = true;
            break;
          }
        }
      
        return doesContain;
      }
    }

    //yeah i'm onto something

    const allPhotos = new TweetTable();

    posts.forEach((el) => {
      //if the ID is NOT in allPhotos, and the post is NOT in uniquePosts, add ID to allPhotos, and add post to uniquePosts
      if (!allPhotos.get(el.tweet_id)) {
        // for some reason rn this is pushing every time
        uniquePosts.push(el);
        allPhotos.set(el.tweet_id, []);
        // if the type is photo, add the photo URL to the hash
        if(el.type == "photo") {
          allPhotos.add(el.tweet_id, `/img/twitter_${el.author.name}_${el.tweet_id}_${el.num}.jpg`);
        }
      // else if the id IS in allPhotos... 
      } else {
        // ...and the type is photo...
        if(el.type == "photo") {
          // ...and the hash entry does not contain the photo url...
          if(!allPhotos.contains(el.tweet_id, `/img/twitter_${el.author.name}_${el.tweet_id}_${el.num}.jpg`)) {
            // ...add the photo URL to hash
            allPhotos.add(el.tweet_id, `/img/twitter_${el.author.name}_${el.tweet_id}_${el.num}.jpg`);
          }
        }
      }
    })

    return (
      <div className="feed divide-y">
        {uniquePosts.map((el) => {
          return (
            <Card key={el.tweet_id}
              name={el.author.nick} 
              handle={el.author.name} 
              content={el.content} 
              favorites={el.favorite_count} 
              quotes={el.quote_count}
              photos={allPhotos.get(el.tweet_id)}
              replies={el.reply_count}
              retweets={el.retweet_count}
              date={el.date} />
              )})
            }
          )
      </div>
    )
}