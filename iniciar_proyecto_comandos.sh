npm init -y
npm install eslint -D
npm install jest -D
sed -i '/"scripts": {/ a "lint": "eslint",' package.json
sed -i '/"test"/c\"test": "jest","test:watch": "jest --watchAll","test:ES6": "node --experimental-vm-modules node_modules/jest/bin/jest.js","test:ES6:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll"' package.json
sed -i '/"name"/ i "type": "module",' package.json
git init
echo "node_modules/" > .gitignore
npm run lint -- --init


