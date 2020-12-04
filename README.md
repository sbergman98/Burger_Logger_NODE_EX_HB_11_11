# Burger_Logger_NODE_EX_HB_11_11

The goal is to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.  
 - Node and MySQL to query and route data in the app 
 - Handlebars to generate the HTML.

* A user submits a burger's name, the app will display the burger -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will be deleted

* The app will store every burger in a database, whether devoured or not.

Created server.js file and installed express, express-handlebars, and mysql.

Created DB folder with schema and seeds file. Used msql - u -root to config schema and seeds

Created config folder with connection.js file. Connection Exported

Created Orm.js file in config folder

Created models folder with burger.js file

Created controllers folder with burger_controller. js file

Created folder named views, added handlebars folders

Added html to handlebars and CSS to create burger logger front end.

Ran through several tests to make sure app add and then delteted burgers.
