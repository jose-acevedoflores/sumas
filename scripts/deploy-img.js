const {validateSasToken, runCmd} = require('./common.js');

const token = validateSasToken();

runCmd('media/', token)( url => [
        'copy',
        './build/media/img',
        url,
        "--from-to=LocalBlob",
        "--blob-type", "Detect", "--put-md5", "--follow-symlinks", "--recursive"
]);