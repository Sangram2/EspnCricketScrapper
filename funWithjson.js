const fs= require('fs')


// let buffer = fs.readFileSync('./example.json')//Reading the JSON file

// // console.log(buffer)

// let data= JSON.parse(buffer);  //converts the buffer data into JSON format

// console.log(data)

let data=require('./example.json')


data.push({
        "name":"Thor",
        "last name": "Odinson",
        "isAvenger": true,
        "Age": 10000,
        "friends":["Bruce","Steve","Peter"],
        "adress":{
            "planet":"Asgard"
        }
})

// console.log(data)

const xlsx=require('xlsx')
//Inorder to update example.json first you need to convert data to string
let stringData =JSON.stringify(data)

fs.writeFileSync('./example.json',stringData)


function excelWriter(filepath,jaonData,sheetName){
    let newWB = xlsx.utils.book_new();
    //Add new WorkBook
    let newWS = xlsx.utils.json_to_sheet(jaonData);
    //This will take JSON and convert into Exel format
    xlsx.utils.book_append_sheet(newWB, newWS,sheetName);
    xlsx.writeFile(newWB,filepath);
}



function excelReader(filePath,sheetName){

    if(fs.existsSync(filePath)==false){
        return []
    }
    //which exel  file to read
    let wb = xlsx.readFile(filePath);
    //pass the sheet name 
    let excelData = wb.Sheets[sheetName];
    //conversion from sheet to JSON
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)
}



