const fs = require('fs');
const path = require('path');

function copyFileFunction(pathFrom, pathTo, dir) {
    fs.readdir(path.join(`${dir}`), (err, files) => {
        files.forEach(file => {
            fs.rename(path.join(`${pathFrom}`, `${file}`), path.join(`${pathTo}`, `${file}`), err => {
                console.log(err);
            })
        })
    })
}


const delay = () => {
    return new Promise((resolve, reject) => setTimeout(resolve));
}
delay()
    .then(() => {
        copyFileFunction(`1800`, `./swap`, './1800');
        return delay()
    })
    .then(() => {
        copyFileFunction(`./2000`, `./1800`, './2000');
        return delay()
    })
    .then(() => {
        copyFileFunction(`./swap`, `./2000`, './swap');
    })

