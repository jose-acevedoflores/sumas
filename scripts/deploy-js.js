const {validateSasToken, runCmd} = require('./common.js');

const token = validateSasToken();

runCmd('static', token)( url => [
        'copy',
        './build/static/*',
        url,
        "--from-to=LocalBlob",
        "--blob-type", "Detect", "--put-md5", "--follow-symlinks", "--recursive"
]);

//NOTE: this one is NOT RECURSIVE. will just update files like the index.html, asset-manifest.json, etc.
runCmd('', token)( url => [
    'copy',
    './build/*',
    url,
    "--from-to=LocalBlob",
    "--blob-type", "Detect", "--put-md5", "--follow-symlinks"
]);