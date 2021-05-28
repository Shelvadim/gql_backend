/_"dev": "ts-node-dev --respawn --transpile-only src/index.ts"_/

/on aws ec2 instance
//connect to instance
chmod 400 .pem
ssh -i ec2-user@<public_ip_v4>

// Install node version manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
//Activate nvm
. ~/.nvm/nvm.sh
//Use nvm to install the latest version of Node.js
nvm install node
//Test that Node.js is installed and running correctly
node -e "console.log('Running Node.js ' + process.version)"
//install git
sudo apt-get install git
//clone project
git clone https://github.com/Shelvadim/graphql-schema.git
// navigate project folder and install Node dependencies
cd graphql-schema
npm install
//run application from build folder
node server.js
//Keep App running using PM2
sudo npm install pm2 -g
or
npm install -g pm2
//start app
pm2 start server.js
