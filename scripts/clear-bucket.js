const {validateSasToken, runCmd} = require('./common.js');

const token = validateSasToken();

runCmd('', token)( url => ['remove', url, "--recursive"] );