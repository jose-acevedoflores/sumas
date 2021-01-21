#/bin/bash

curl https://aka.ms/downloadazcopy-v10-mac -L -o azcopy.zip
mv azcopy.zip scripts/bin/azcopy.zip
unzip scripts/bin/azcopy.zip -d scripts/bin/azcopyzip
find scripts/bin/azcopyzip -mindepth 2 -type f  -iname azcopy -exec mv {} scripts/bin/azcopy \;

#clean up
rm -rf scripts/bin/azcopyzip
rm scripts/bin/azcopy.zip