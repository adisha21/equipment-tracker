Equipment Management System

About the Project

This project is a simple Equipment Management System built as a single-page application.
It allows a user to manage equipment by adding, viewing, editing, and deleting records.

The focus of this project is functionality rather than complex design.

Technologies Used

Frontend: React (Create React App)

Backend: Node.js with Express

Data Storage: JSON file

Equipment Details

Each equipment record contains:

Name

Type (Machine, Vessel, Tank, Mixer)

Status (Active, Inactive, Under Maintenance)

Last Cleaned Date

Features

Displays all equipment in a table

Add new equipment using a form

Edit existing equipment

Delete equipment

Basic form validation (all fields are required)

API Endpoints

GET /api/equipment – Fetch all equipment

POST /api/equipment – Add new equipment

PUT /api/equipment/:id – Update equipment

DELETE /api/equipment/:id – Delete equipment


How to Run the Project Locally
Prerequisites

Make sure you have the following installed:

Node.js (v16 or above)

npm

Step 1: Clone the repository
git clone https://github.com/adisha21/equipment-tracker.git
cd equipment-tracker

Step 2: Start the backend server
cd backend
npm install
npm start


The backend will run at:

http://localhost:5000

Step 3: Start the frontend application

Open a new terminal window and run:

cd frontend
npm install
npm start


The frontend will run at:

http://localhost:3000

Step 4: Use the application

Open your browser and go to:

http://localhost:3000


You can now:

View the equipment list

Add new equipment

Edit existing equipment

Delete equipment


Assumptions

Single user system

Equipment name is unique

JSON file used instead of database for simplicity

Future Improvements

Add search and filtering

Add sorting

Move to database (MongoDB / SQL)

Improve UI responsiveness
