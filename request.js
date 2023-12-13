import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

console.log("Before");
request('https://www.worldometers.info/coronavirus/',cb);

console.log("After");

function cb(err,res,html){
    if(err){
        console.error('error:',err);
    }else{
        //console.log('html:',html);
        handlehtml(html);
    }
}
function handlehtml(html){
    let seltool = cheerio.load(html);
    let content = seltool("#maincounter-wrap span");
    // for(let i = 0;i<content.length;i++){
    //     let data = seltool(content[i]).text();
    //     console.log("data : ",data);
    // }

    let tot = seltool(content[0]).text();
    let death = seltool(content[1]).text();
    let rec = seltool(content[2]).text();

    console.log(chalk.grey("Total Cases "+tot));
    console.log(chalk.red("Total Deaths "+death));
    console.log(chalk.yellow("Total Recovered "+rec));
}

