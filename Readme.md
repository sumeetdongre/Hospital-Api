# Hosptial-Api

Hospital api is a rest api built using Nodejs and Mongo Db.It register the doctor through JWT token Authentication.Helps the doctor to track Patients report.The design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

- There can be 2 types of Users 
- Doctors 
- Patients 
- Doctors can log in 
- Each time a patient visits, the doctor will follow 2 steps 
- Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API) 
- After the checkup, create a Report 
- Patient Report will have the following fields 
- Created by doctor 
- Status (You can use enums if you want to): 
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit] 
- Date


# Steps to Set project

1. clone the repository or download the project
2. Open in VS code
3. Open Terminal and use command "npm install" to install all libraries.
4. To start the project use command "npm start"
5. Use postman to use an api

# Steps to use Api

1. /doctors/register - pass parameter as username:name , password: password
2. /doctors/login- pass username and password.
3. /patients/register- register patient by passing parameter phone: phone_number.
4. /patients/:id/create_report- pass doctor Jwt token as access-token: JWT Token and status: required status
5. /patients/:id/all_reports- get all reports of  specific patient
6. /reports/:status- get all reports of patient by specific status

