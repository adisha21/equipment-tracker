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

