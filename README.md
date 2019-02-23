# burger
**Eat-Da-Burger!** is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

The app stores every burger in a database, whether devoured or not.

The app uses npm packages **express, express-handlebars, mysql, and orm**.  
**Express-handlebars** and **Bootstrap** are used to format the page.
The app uses **ajax** to tell the server which route to use.
The **mysql** database **burgers_db** holds all the data.

Server.js requires all the needed packages and starts the server to listen for a request.
When the server receives the  **/** url it will display the home page using **express-handlebars** to access the **mysql** database.  The Home page will have a list of available burgers and a list of devoured burgers. There is also a button to create a burger.

If the user chooses to add a burger, they enter the burger name in the form and click on the **create a burger** button.
**Ajax** will then alert the server that a burger should be inserted in to the database and it will show up on the left side of the screen with a **devour it** button next to it.

If the user chooses to devour a burger, they click on the **devour it** button next to the burger they want to devour.
**Ajax** will then alert the server, that the burger record needs to be updated and the status of devoured is changed 
from false to true. The burger will be taken off the left side of the screen and moved to the right side of the screen.

The page is updated for inserts and updates.


Pictures were taken from images doing google search and come from many different websites.
Developed by Ilene Cohen.
email: ilene413@icloud.com

