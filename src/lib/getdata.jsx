//=========== To fetch data locally
import fs from 'fs';
import fsPromises from 'fs/promises';

export async function getLocalData() {
  // Get the path of the json file
  let allData = [];

  const jsonsInDir = fs.readdirSync('src/lib/data');

  for (let file of jsonsInDir) {
    file = 'src/lib/data/' + file;

    const jsonData = await fsPromises.readFile(file);

    // the ids here are numbers that are too large and get rounded, turning all instances to strings for file name matching purposes
    const objectData = JSON.parse(jsonData, (key, value, context) => {
      if (key === 'tweet_id' ||
          key === 'conversation_id' ||
          key === 'id'
      ) {
        return context.source.toString();
      }
      return value;
    });
    allData.push(objectData);
  }
  
  // remove duplicates (metadata files, etc)
  const data = Array.from([...(new Set(allData.map(e => JSON.stringify(e))))].map(e => JSON.parse(e)));

  return data;
}