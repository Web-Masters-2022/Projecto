let ventas = require('./ventas.json');
let request = require('axios');

const ventasGet = () => {
    return ventas;
}

const ventasSet = (productos) => {
    ventas.push(...productos)
    return ventas;
}


module.exports.ventasGetExports = ventasGet;
module.exports.ventasSetExports = ventasSet;