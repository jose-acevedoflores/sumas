const {validateSasToken, runCmd} = require('./common.js');

const token = validateSasToken();

runCmd('locales', token)( url => [
        'copy',
        './build/locales/*',
        url,
        "--from-to=LocalBlob",
        "--blob-type", "Detect", "--put-md5", "--follow-symlinks", "--recursive"
]);