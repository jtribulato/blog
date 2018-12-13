# Blog v1.0

[Github](https://github.com/jtribulato/blog) | 
[Glitch](https://glitch.com/edit/#!/blog-v1.0)

* Serves client that:
    + makes AJAX calls back to API endpoints to initially retrieve and display existing blog posts.
    + allows users to add, delete and edit post items
* Uses `express.Router` to route requests for `/blogRouter` to separate modules.
* CRUD (create, read, update, delete) operations for blog posts
* Note: uses volatile, in memory storage 