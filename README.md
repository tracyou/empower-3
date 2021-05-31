# Installation Manual

First you need to download an editor that can compile and run the application. The most popular IDE's are:
* IntelliJ IDEA
* NetBeans
* Eclipse

## Backend
Mark src > main > java as the source root of the application

To run the backend, simply go to src > main > java > nl.hva.fdmci.nl > BackendApplication 
then click on the play button next to the main method and run 'BackendApplication.

## Frontend
To run the frontend of this application, you need to install all necessary dependencies. This can be done by a simple command. It may take a while to complete.
Node.js must be installed to do this. Here is how you can install node.js: https://www.npmjs.com/get-npm
    npm install    

Now you should build your application using this code
    ng serve    

**Only if** you want to run the application in a staging or production environment, you need to run these two codes instead of ng serve
    ng build    
    ng start    
