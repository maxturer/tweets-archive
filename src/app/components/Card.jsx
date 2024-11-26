import Image from 'next/image';

export default function Card({name, handle, content, photos, favorites, quotes, replies, retweets, date}) {

    function Render({imagesToRender}) {
        if (imagesToRender.length > 1) {
          const key = imagesToRender[0];
          const imgs = imagesToRender[1];
          for (let i = 0; i < imgs.length; i++) {
            return <Image key={`${key}-${i.toString()}`} src={imgs[i]} alt="img" width='0' height='0' sizes="100%" className="w-full h-auto" />
          }
        }
        return;
    }
        
    return (
          <div className="tweet p-3 bg-white">
            <div className="user-details p-1">
              <p><span className="pr-1 font-bold">{name}</span><span className="px-1 text-sm text-slate-400">@{handle}</span></p>
            </div>
            <div className="tweet-content p-1">
              <p>{content}</p>
              <div className="photo-wrap w-full max-w-90">
                <Render imagesToRender={photos} />
              </div>
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