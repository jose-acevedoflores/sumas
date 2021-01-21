const { spawn } = require("child_process");
const fs = require('fs');

const sas_token_file_name = ".azure_sas_token";

if(!fs.existsSync(sas_token_file_name)){
    const path = require('path');

    //NOTE: goes back one level to exit the `scripts` folder back to the root project folder `sumas`
    const rootLevelForProject = path.join(__dirname, "..");
    const res = path.join(rootLevelForProject, sas_token_file_name);

    console.log(`Missing SAS token file at ${res}
 - Generate SAS token:
    1) Go to azure portal
    2) Got to 'uprmsumas' storage account
    3) Click on Settings > Shared access signature
    4) Check all resource types
    5) Click 'Generate SAS and connection string' button
    6) Copy the SAS token string (?sv=<sas key value>) to a file named '${sas_token_file_name}' and place it at '${rootLevelForProject}'
    `);
    return;
}

const token = fs.readFileSync(sas_token_file_name, "utf8");

const args = [
    'copy',
    './README.md', //TODO fix so it deploys the actual stuff from the build dir
    `https://uprmsumas.blob.core.windows.net/$web/README.md?sv=${token}`,
    "--from-to=LocalBlob",
    "--blob-type", "Detect", "--follow-symlinks", "--put-md5", "--follow-symlinks", "--recursive"
]

const proc = spawn("./scripts/bin/azcopy", args)

proc.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

proc.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

proc.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});

proc.on('error', function (code) {
    console.log("error: ", code)
});