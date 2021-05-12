yarn init
yarn add -D @babel/core @babel/preset-env babel-watch babel-plugin-import-graphql
yarn add graphql

"scripts": {
"start": "babel-watch ./src/index.js"
},

yarn start

git remote add origin https://github.com/Shelvadim/gql_backend.git
git branch -M main
git push -u origin main
