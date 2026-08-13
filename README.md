**Node To Do**

A To Do List app built to optimize code structure and add more features using the **MVC** architecture. It uses custom routing and structured data handling to keep the codebase clean, organized, and scalable.


The project starts with `db` to set up the database integration, using Sequelize wrapped in a `try...catch` block (Promise) to catch and log any connection errors right away.

Following the MVC architecture to keep the code clean and organized, the project includes:

* **Model:** Defines the database table structure and data types (String, Boolean, or Number).
* **Routes:** Manages all application URLs required for the app to function:
  * `/tasks` – Displays all registered tasks.
  * `/add` – Displays the task creation form, receives input data, and saves the new task to the database.
  * `/edit/:id` – Fetches a task by its ID and displays the edit form.
  * `/edit` – Updates the edited task.
  * `/remove` – Deletes a task.
  * `/updatestatus` – Toggles task status between completed and pending using the `done` boolean field.
* **Controller:** Handles data retrieval and application logic, utilizing static methods to easily target and manage specific tasks by their ID.


**Features**

* Add new tasks with descriptions
* Mark tasks as completed or pending

**Tech Stack**

* Node.js
* Express, Sequelize
* MySQL

**How to Run**

Before running the project, make sure you have MySQL and XAMPP installed on your machine. Start the server using `npm start` (or `npm dev`) and open `localhost` in your browser.
