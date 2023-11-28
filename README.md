# Introduction of Database using the MVC pattern

The Model-View-Controller (MVC) pattern is a software architectural design 
that separates an application into three interconnected components.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)

## Introduction

The Model-View-Controller (MVC) pattern is a software architectural design 
that separates an application into three interconnected components: Model, View, and Controller. 
This separation aims to achieve modularity, maintainability, and scalability in software development. 
When applied to a Node.js application using the Mongoose library for MongoDB, it provides an organized and efficient structure for managing data, 
user interfaces, and application logic

## Technologies Used

- Node.js
- dotenv (.env)
- Express.js
- Mongoose (MongoDB)
- Github

## Project Structure

The MVC pattern:

- **Models**: Define Mongoose Schemas to represent data structures.
Use Schemas to create Models, which interact with the MongoDB database.
- **Views**: In a Node.js application, the View is often represented by the client-side code
  (HTML, CSS, JavaScript) responsible for rendering the user interface.
- **Controllers**: Controllers interact with the Model to perform CRUD operations and manage application logic.
- **Routes**: Individual routes needed for api usage.

## Installation

Provide instructions on how to install your project locally.

```bash
git remote https://github.com/Robid-Phantom007/Student_Database
