# Voxy Wordsy Counter - Counting words since yesterday
Repository dedicated to the technical test for a backend developer position at Voxy.
## Technologies Used
* Javascript
*	Angular 12
* Node.js
* Express.js
## How to Run
This repository encompasses, for practical reasons, both front and back-end of the project. Therefore, two applications must be run. 
Ahead there will be instructions to how to do it:
### Back-end
The back-end of this project is built in Node.js, using Express.js framework to help building the API.   
To run it, open the directory ***"/voxy-test-backend"*** and run the commands:
```
npm install
```
then
```
npm run dev
```
You can also run some unit tests using the following command. Those tests cover some simple use cases as example.
```
npm test
```
The server should now be running on port 8080.
The server was tested running on Node versions ***10.24.0*** and ***16.13.1***.  
### Front-end
The front-end of this project is built using Angular.  
To run it, some version of Angular and Angular CLI should be installed, preferably ***Angular CLI: 12.2.17*** and ***Angular: 12.2.16*** or later, which were used on this project.
Node is also necessary as NPM is used as package manager. Although not fully supported, version ***16.13.1*** of Node (also tested on the backend) was tested and should work for this application. 
Much older versions should cause more severe problems.   
To run it open the directory ***"/voxy-test-frontend"*** and run the commands:  
```
npm install
```
```
ng serve
```
The web app should now be runnig on [http://localhost:4200/](http://localhost:4200/)

## Limitations, known issues and TODOs

* Isolated punctuation or other characters that should not be counted as a "word" are counted for. Although neatly formatted texts should not encounter much of a problem in this.
* Without response form the server after a request, the web app stays frozen waiting and the page needs to be reloaded.
* Due to time contrains, only the back-end contains unit tests implemented.
* The server url is hardcoded on a service in the frontend for practical reasons. Should be changed to a environment variable in the future.





Any questions can be sent to joaolucaspachecoab@gmail.com
