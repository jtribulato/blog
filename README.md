# Blog v1.0

[Github](https://github.com/blog) | [Glitch](https://glitch.com/edit/#!/blog-v1.0)

* Serves client that:
    + makes AJAX calls back to API endpoints to initially retrieve and display existing recipes and shopping list.
    + allows users to add, check/uncheck, and delete shopping list items
    + allows users to add and delete recipes
* Uses `express.Router` to route requests for `/blogRouter` to separate modules.
* CRUD (create, read, update, delete) operations for recipes and shopping list
* Note: uses volatile, in memory storage, since we haven't studied data persistence yet in the course.