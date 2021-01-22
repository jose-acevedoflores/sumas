const { spawn } = require("child_process");
const path = require('path');
const fs = require('fs');

const sas_token_file_name = ".azure_sas_token";

//NOTE: goes back one level to exit the `scripts` folder back to the root project folder `sumas`
const rootLevelForProject = path.join(__dirname, "..");
const res = path.join(rootLevelForProject, sas_token_file_name);
const generateSasInstructions = ` - Generate SAS token:
    1) Go to azure portal
    2) Got to 'uprmsumas' storage account
    3) Click on Settings > Shared access signature
    4) Check all resource types
    5) Click 'Generate SAS and connection string' button
    6) Copy the SAS token string (?sv=<sas key value>) to a file named '${sas_token_file_name}' and place it at '${rootLevelForProject}'`

if(!fs.existsSync(sas_token_file_name)){
    console.log(`Missing SAS token file at ${res}\n${generateSasInstructions}`);
    return;
}

const token = fs.readFileSync(sas_token_file_name, "utf8");

//Check token expiration date
const endDateToken = token.split("&").find(e=> e.startsWith("se="));
if(endDateToken){
    const dateStr = endDateToken.split("=")[1];
    const date = Date.parse(dateStr);
    const curDate = new Date();
    if(curDate > date){
        console.log(`SAS token has expired.\n${generateSasInstructions}`);
        return;
    }
} else {
    console.error("No end date found in SAS token", token);
    return;
}

//After successful validation, setup args for azcopy
const args = [
    'copy',
    './build/*',
    `https://uprmsumas.blob.core.windows.net/$web/?sv=${token}`,
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