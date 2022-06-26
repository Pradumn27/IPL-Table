
# IPL Table

This project displays the matches and points table of the current IPL season.

## Deployed Site Link

The website is deployed on https://ipl-table.netlify.app/

## API Used

As provided the API used for data generation is : https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json

## Technologies Used

- NextJs : NextJs is the Framework used.
- Typescript : Typescript is the main Language used in developing this project.
- Javascript : A small use case for writing the table generation function is done using JS.
- Redux-Toolkit : It is used for passing data within the elements.
- React-Select : It is an open source tool which is used here for the multiselect searchbar functionality.
- CSS : Plain CSS is written for styling this project.

## Approach Used

- Tables are used majorly in designing the UI.
- I've used plain css for designing thus media queries to make the site responsive.
- The searchbar helps the user to filter to see only the matches of the teams they searched for.
- The website is made static using the static site rendering functionality of nextjs.

## File Structure

- Public Folder
    - This folder contains all the publicly available assets used within the project
- Pages Folder
    - It contains all the pages that are publicly shown
    - This folder helps in using the folder structure routing functionality of nextjs
- Styles Folder
    - This folder contains all the styles modules
- Components Folder
    - It contains all the components used inside the different pages
- Data Folder
    - This folder contains some data used for mapping team names to their titles
- Utils Folder
    - This folder contains the utility functions used in displaying the points table
- Redux Folder
    - This Folder contains the redux store and reducers used within the project

## Nomenclature Used

- The css files are named on basis of the element type.
    - For eg : styling of a div is based on its number that means if it's the third div to occur it's class is name as div3.
- The main entrance page is Matches page, both the pages are named as per their functionality.
- Components and utility functions are also named as per their functionality.
