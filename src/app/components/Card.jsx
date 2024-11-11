export default function Card({name, handle, content, favorites, quotes, replies, retweets, date}) {
    return (
          <div className="tweet p-3 bg-white">
            <div className="user-details p-1">
              <p><span className="pr-1 font-bold">{name}</span><span className="px-1 text-sm text-slate-400">@{handle}</span></p>
            </div>
            <div className="tweet-content p-1">
              <p>{content}</p>
            </div>
            <div className="tweet-details p-1">
              <p>
                <span className="pr-1">Favorites: {favorites}</span>
                <span className="px-1">Quote Retweets: {quotes}</span>
                <span className="px-1">Replies: {replies}</span>
                <span className="px-1">Retweets: {retweets}</span>
              </p>
              <p><span>{date}</span></p>
            </div>
          </div>
    )
}