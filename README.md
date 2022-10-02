# Getting Started

This app consists in two parts. The Backend, that simulates an API, in folder report-viewer-app-back. and the Front inside the AppFront folder.


## Starting the App

The first step is to set up the backend of the app. To do so, we should run the script npm run dev, this will run the app on [http://localhost:3002]. 

Once this step is done, we should set up the front running npm run start. 


### Backend

The backend has only two endpoints. 

The first one, which is set to be the root "/", will GET the information inside reports.json.

The second endpoint ("/reports"), will GET the list of files inside './api/reports'. It will also return a specific report in case the file is sent through a POST request.


### Front End

The front end was build in three pages (Home, Reports and NotFound).

#### HOME 
  - Will request a connection through Axios to http://localhost:3002/, and set the states columns and rows that are needed to build the table based on the reports found on reports.json.
  - The second request, 'http://localhost:3002/reports', is needed to get all the files available for these reports, so we can enter them inside the correponding select element of each row.
  - Once we´ve received the response, if rows and columns exists, this will render ReportList, which is the component that will build the table. This components will receive the states through the Context.
  - If there is an error, the app will render the Error component that will receive the error message as a state.


#### Reports
  - Inside Reports, loadSelectedReport is the function that will trigger a POST request to 'http://localhost:3002/reports/request' and send the specific requeste report. If the answer is correct, this will change the state of data and reportColumns which are needed to construct the report table.
  - Once we´ve received the response, if rows and columns exists, this will render ReportResults, which is the component that will build the table. This components will receive the states through the Context.
  - If there is an error, the app will render the Error component that will receive the error message as a state.


## Components

### HEADER
  - just a decoration component

### ReportList.jsx and ReportResults.jsx
  - These components renders the tables. They receive the states through Context.
  - They both share same kind of function to sort the table according to the selected column.

### Error
  -This component will render a danger type message. The content of the message will be received from the Context according to the response. 


