//=========== To fetch data locally
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData() {
  // Get the path of the json file
 // const filePath = path.join(process.cwd(), 'src/lib/data/twitter_ixerfaded_1386643628575973377_1.jpg.json');
  let allData = [];


  const imgsInDir = fs.readdirSync('src/lib/data').filter(file => path.extname(file) === '.jpg');
//console.log(imgsInDir);
  const jsonsInDir = fs.readdirSync('src/lib/data').filter(file => path.extname(file) === '.json');
  
  //console.log(imgsInDir);

  for (let file of jsonsInDir) {
    file = 'src/lib/data/' + file;
    // const fileData = fs.readFileSync(file);
    const jsonData = await fsPromises.readFile(file);
    const objectData = JSON.parse(jsonData);
    allData.push(objectData);
  }

  // filtering posts to remove duplicates (hopefully not going to hurt later)

  const data = allData.filter((item, index, obj) =>
    obj.indexOf(item) && obj.lastIndexOf(item)
  );

  return data;
}