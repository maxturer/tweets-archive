# Make your own private twitter profile
This will help you grab all of your tweets from twitter/x and store them locally on your computer in a format that looks nice. Useful if you'd like to delete your x account, but you'll miss anything you've posted there.
## Getting Started

### Get this project
Clone this repo to any folder/directory you'd like, and open a terminal in the new tweets-archive folder (or in VS code)

Make sure you have folders inside tweets-archive with these relative paths: `src/lib/data` and `public/img`

If you don't, create one (it should be empty)

### Get your data with gallery-dl:
To get your data, you can follow [this guide](https://www.reddit.com/r/DataHoarder/comments/yy8o9w/for_everyone_using_gallerydl_to_backup_twitter/). After installing python and gallery-dl as the guide instructs, find your gallery-dl.conf (mine, on mac, was at file path /etc/gallery-dl.conf) and fill it out just like the guide says.

Then, open a terminal in your `src/lib/data` folder, and run this command (replace YOUR_HANDLE with your twitter handle): 
`gallery-dl https://www.twitter.com/YOUR_HANDLE --write-metadata -o skip=true && gallery-dl https://www.twitter.com/YOUR_HANDLE/media --write-metadata -o skip=true && gallery-dl https://www.twitter.com/YOUR_HANDLE/search?q=from:YOUR_HANDLE --write-metadata -o skip=true`

That will dump all of your tweets and photos into the `src/lib/data` folder. Once you confirm that worked, while you're still using the terminal in the `src/lib/data` folder, move your photos to `public/img` with this command: 
`mv ./*.jpg ../../../public/img`

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
