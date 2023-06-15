#!/bin/bash

echo "Build step"

npm install

cd ./website

npm install

npm run build

cp -r build ../

exit 0