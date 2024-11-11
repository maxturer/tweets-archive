import Image from 'next/image'

export default function Card({name, handle, content, photos, favorites, quotes, replies, retweets, date}) {

    function Render({imagesToRender}) {
        if (imagesToRender[0] !== null) {
            imagesToRender.forEach((el) => {
                console.log(el);
                return <Image src={el} alt="img" />
            })
        }
    }
        
    return (
          <div className="tweet p-3 bg-white">
            <div className="user-details p-1">
              <p><span className="pr-1 font-bold">{name}</span><span className="px-1 text-sm text-slate-400">@{handle}</span></p>
            </div>
            <div className="tweet-content p-1">
              <p>{content}</p>
              <Render imagesToRender={photos} />
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