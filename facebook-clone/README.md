## Deployed application
Link for deployed application: 
https://facebook-clone-cd09f.web.app

## ReactJs Facebook clone application
* This is a clone app of facebook
* Need to login first by google to see or add post
* Simple design of facebook homepage
* Hosted in Firebase  

## Stack and framework used
* ReactJs
* Context API
* HTML
* CSS
* JavaScript
* ES6
* Google login
* Firestore Database
* Firebase Hosting

### Install firebase tools and Deployment 
npm i -g firebase-tools
firebase login
firebase init

C:\Users\TS\CodeRepos\ReactProjects\facebook-clone>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\TS\CodeRepos\ReactProjects\facebook-clone

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: facebook-clone-cd09f (facebook-clone)
i  Using project facebook-clone-cd09f (facebook-clone)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
+  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!

C:\Users\TS\CodeRepos\ReactProjects\facebook-clone>npm run build
C:\Users\TS\CodeRepos\ReactProjects\facebook-clone>firebase deploy