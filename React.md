https://dev.to/webeleon/adding-react-to-a-ghost-blog-theme-4ecb
https://github.dev/Webeleon/casper-react-bulma
https://github.com/Webeleon/casper-react-bulma

npm install ghost-cli@latest -g
npm install gscan -g

# create a local copy and start

mkdir someLocalBlogFolder
cd someLocalBlogFolder
ghost install local
ghost start

# theme

git clone git@github.com:TryGhost/Casper.git customcasper
cd customcasper
mkdir react

yarn add -D bulma react react-dom webpack webpack-cli @babel/core babel-loader @babel/preset-env @babel/preset-react node-sass style-loader css-loader sass-loader webpack-stream

# scan

gscan .

# Scan a theme zip file for compatibility

gscan -z dist/customcasper.zip
