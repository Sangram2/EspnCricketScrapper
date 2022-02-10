const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require('request');
const cheerio = require('cheerio')
const fs= require('fs');
const path=require('path');
const allMatchObj=require('./AllMatch')

let iplPath=path.join(__dirname,"IPL");


dirCreator(iplPath);

request(url,cb);

function cb(error, response, html){
  if(error){
      console.log(error)
  }
  else{
    // console.log(response && response.statusCode);
    extractLink(html);
  }
};

function extractLink(html){
    let $ = cheerio.load(html)

    let ancherElem=$('a[data-hover="View All Results"]')

    
    let link = ancherElem.attr('href')

    let fullLink='https://www.espncricinfo.com'+link;
    console.log(fullLink)

    allMatchObj.getAllMatch(fullLink);
}




function dirCreator(filePath){
  if(fs.existsSync(filePath)==false){
    fs.mkdirSync(filePath)
  }
}





    
