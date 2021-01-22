const {validateSasToken, runCmd} = require('./common.js');

const token = validateSasToken();

runCmd('', token)( url => [
        'copy',
        './build/*',
        url,
        "--from-to=LocalBlob",
        "--blob-type", "Detect", "--put-md5", "--follow-symlinks", "--recursive"
]);