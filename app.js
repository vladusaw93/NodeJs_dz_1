
const fs = require('fs');
const path = require('path');

function copyFileFunction(pathFrom, pathTo, dir){

    fs.readdirSync(`${dir}`).forEach(file => {
        fs.rename(path.join(`${pathFrom}`, `${file}`),path.join(`${pathTo}`, `${file}`), err => {
            console.log(err);
        })
    })
}

copyFileFunction(`./1800`, `./swap`,'./1800')
copyFileFunction(`./2000`, `./1800`,'./2000')
copyFileFunction(`./swap`, `./2000`,'./swap')
