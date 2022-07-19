# Voxy Wordsy
Voxy Wordsy is an all purpose word counter, counting words since 2022!
## Technologies Used
* Javascript
*	Angular 12
* Node.js
* Express.js
## How to Run
This repository encompasses, for practical reasons, both front and back-end of the project. Therefore, two applications must be run. 
Ahead there will be instructions to how to do it:
### Prerequisites
* Node version 16.13.1 or later
* Angular version 12.2.16 or later
* Angular CLI 16.13.1 or later
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
The server was tested running on Node version ***16.13.1***.  
### Front-end
The front-end of this project is built using Angular.  
To run it, some version of Angular and Angular CLI should be installed, preferably ***Angular CLI: 12.2.17*** and ***Angular: 12.2.16*** or later, which were used on this project.
Node is also necessary as NPM is used as package manager. Although not fully supported, version ***16.13.1*** of Node (also tested on the backend) was tested and should work for this application. 
Much older versions should cause more severe problems.   
Also, the application was tested running on Ubuntu, changing operational system can cause some weird problems on Angular, but should not be an issue on a small project like this one.   
To run it open the directory ***"/voxy-test-frontend"*** and run the commands:  
```
npm install
```
```
ng serve
```
The web app should now be running on [http://localhost:4200/](http://localhost:4200/)

## Limitations, known issues and TODOs
Take a look at the [Issues tab](https://github.com/JLucas5/voxy-test/issues) here on the Github repository! You can also submit a new issue if you find necessary! =]
    
    
    
    
Any questions can be sent to joaolucaspachecoab@gmail.com or added tho the Issues.
