# Employee Management System 

This is a simple employee management system, check the demo here https://gen2wind-emp-mgt.herokuapp.com/


## For Local Server
## ----------------------------------

====== For Laravel api endpoints  ========
Open Terminal/Cmd and go to PHP server root folder then enter "git clone https://github.com/gen2wind/employee-management", the put the emp-mgt-api in your server root folder eg. on xampp, xampp/htdocs/emp-mgt-api so api-request will work, (you can ignore this if you know what you are doing)

====== For React application ========
- Copy the folder "frontend" to any place probably C:\ directory
- In Terminal/Cmd go to "C:\frontend"
- Make sure npm or yarn is install on your system
- run npm install  or yarn install (Your choice)
- then run npm start or yarn start (Also your choice)
- Note that the CRUD operation might not work without setting up the Server API folder first (Used PHP/Laravel) 

If somehow the api request is not going through, it can be that the whole process wasn't as described above then

- Open the file "constants.js" from the folder "src" in the react folder and edit const "APP_URL" eg. const APP_URL = 'http://localhost/emp-mgt-api/' for the localhost;


My Pet project, I did it while I was bored


