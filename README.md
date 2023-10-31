# Progressive Web Applications (PWA) Text Editor
Assignment for Week 19 - Progressive Web Applications (PWA) for bootcamp.
![TextEditor](https://github.com/srwesley/progressive-web-applications-text-editor/assets/5975345/8252fffb-176e-414e-b75c-50d36fbd5462)

## Task
Creating a single-page application that runs in the browser as a text-editor that meets PWA criteria (as mentioned below). This application uses a few data persistence techniques that serve as a redundancy in case one of the options is not supported by the browser. Additionally, this application also has a feature that makes it able to be installed and used outside of the browser, offline.

As an additional note, in the package.json file in the client folder, I added an additional devDependency, `@babel/plugin-transform-object-rest-spread` as the devDependency preceding it in the list of them, `@babel/plugin-proposal-object-rest-spread` had been deprecated, according to the npmjs site - https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread - which said to use the plugin-transform dependency instead. So not sure what would happen if I outright removed the plugin-proposal, I kept it and just added the other on top of it as a backup.

## Tables of content:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
    1. Install node.js to run this application
2. Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
3. Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.
4. Run command npm i express to create Express.js API 
5. Run command npm i --save-dev webpack (Webpack) 
6. Run command npm i webpack-dev-server --save-dev (webpack-dev-server)
7. Run command npm i --save-dev webpack-pwa-manifest (WebpackPwaManifest)
8. Run command npm i babel (Babel)
9. Run command npm i --save-dev css-loader (CSS-loader)
10. Run command npm i concurrently --save (run multiple commands concurrently.) (Concurrently)
11. Run command npm npm install idb (IndexedDB)
12. This text editor require a number of methods and store data to an IndexedDB database to be builded up.
13. The application will be invoked by using the following command: npm i,npm run start, npm run build and then, npm run start:dev.This will start localhost server on PORT 3000.
14. Open browser and type http://localhost:3000 to run this application on your local machine.
15. This application is also deployed in heroku and can be accesed using following url.

## Usage 
        GIVEN a text editor web application
1. WHEN I open my application in my editor, THEN I should see a client server folder structure
2. WHEN I run `npm run start` from the root directory, THEN I find that my application should start up the backend and serve the client
3. WHEN I run the text editor application from my terminal, THEN I find that my JavaScript files have been bundled using webpack
4. WHEN I run my webpack plugins, THEN I find that I have a generated HTML file, service worker, and a manifest file
5. WHEN I use next-gen JavaScript in my application, THEN I find that the text editor still functions in the browser without errors
6. WHEN I open the text editor, THEN I find that IndexedDB has immediately created a database storage
7. WHEN I enter content and subsequently click off of the DOM window, THEN I find that the content in the text editor has been saved with IndexedDB
8. WHEN I reopen the text editor after closing it, THEN I find that the content in the text editor has been retrieved from our IndexedDB
9. WHEN I click on the Install button, THEN I download my web application as an icon on my desktop
10. WHEN I load my web application, THEN I should have a registered service worker using workbox
11. WHEN I register a service worker, THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
12. WHEN I deploy to Heroku, THEN I should have proper build scripts for a webpack application

## Test
npm test

## Questions
  * GitHub Username : srwesley
  * Email: srwesley722@gmail.com
  * GitHub profile : https://github.com/srwesley

## Deployed Application: https://pwa-text-editor722-3cc2d346f1fb.herokuapp.com/
