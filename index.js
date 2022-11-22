#!/usr/bin/env node
const base64 = require('base64topdf');
const fs = require('fs');

if (process.argv.length <= 2) {
    console.log(new Error("Usage example:\n\tconvert-base64 base64-file-name.txt\n\tconvert-base64 base64-file-name.txt converted.pdf\n\tconvert-base64 JVBERi0xLjUKJYCBgoMKMSAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvRmlyc3QgMTQxL04gMjAvTGVuZ3RoIDg0OC9UeXBlL09ialN0bT4...\n\tconvert-base64 JVBERi0xLjUKJYCBgoMKMSAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvRmlyc3QgMTQxL04gMjAvTGVuZ3RoIDg0OC9UeXBlL09ialN0bT4... converted.pdf"));
}

var folder = process.cwd();
var thirdCommand = process.argv[2];
var fourthCommand = process.argv.length > 3 ? process.argv[3] : "converted.pdf";
var base64String = false;
var data = null;

if (thirdCommand.indexOf("JVBER") > -1) {
    base64String = true;
    data = thirdCommand;
}

if (!base64String) {
    data = fs.readFileSync(`${folder}/${thirdCommand}`, 'utf8');
}

base64.base64Decode(data, `${folder}/${fourthCommand}`);

console.log(`Base64 was successfully converted with name ${fourthCommand}`);
