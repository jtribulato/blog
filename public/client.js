
var blogItemTemplate = (
    '<li class="js-blog-item">' +
      '<p><span class="blog-item js-blog-item-name"></span></p>' +
      
    '</li>'
  );
  
  var postTemplate = (
    '<div class="post js-post">' +
      '<h3 class="js-post-title"><h3>' +
      '<hr>' +
      '<li class="js-post-content">' +
      '</li>' +
      '<li class="js-post-author">' +
      '</li>' +
      '<li class="js-post-publishDate">' +
      '</li>' +
      '<div class="post-controls">' +
        '<button class="js-post-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</div>'
  );
  
  
  const BLOG_URL = './Blog';
  
  
  function getAndDisplayPosts() {
    console.log('Retrieving blog listings')
    $.getJSON(BLOG_URL, function(posts) {
      console.log('Rendering posts');
      var postsElement = posts.map(function(post) {
        var element = $(postTemplate);
        element.attr('id', post.id);
        element.find('.js-post-name').text(post.name);
        return element;
      });
      $('.js-posts').html(postsElement)
    });
  }
  
  function getAndDisplayBlogList() {
    console.log('Retrieving blog list');
    $.getJSON(BLOG_URL, function(items) {
      console.log('Rendering blog list');
      var itemElements = items.map(function(item) {
        var element = $(blogItemTemplate);
        element.attr('id', item.id);
        var itemName = element.find('.js-blog-item-name');
        itemName.text(item.name);
 
        return element
      });
      $('.js-blog-list').html(itemElements);
    });
  }
  
  function addPost(post) {
    console.log('Adding post: ' + post);
    $.ajax({
      method: 'POST',
      url: BLOG_URL,
      data: JSON.stringify(post),
      success: function(data) {
        getAndDisplayPosts();
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  }
  
  function addBlogItem(item) {
    console.log('Adding blog item: ' + item);
    $.ajax({
      method: 'POST',
      url: BLOG_LIST_URL,
      data: JSON.stringify(item),
      success: function(data) {
        getAndDisplayBlogList();
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  }
  
  function deletePost(postId) {
    console.log('Deleting post `' + postId + '`');
    $.ajax({
      url: BLOG_URL + '/' + postId,
      method: 'DELETE',
      success: getAndDisplayPosts
    });
  }
  
  function deleteBlogItem(itemId) {
    console.log('Deleting blog item `' + itemId + '`');
    $.ajax({
      url: BLOG_LIST_URL + '/' + itemId,
      method: 'DELETE',
      success: getAndDisplayBlogList
    });
  }
  
  function updatePost(post) {
    console.log('Updating post `' + post.id + '`');
    $.ajax({
      url: BLOG_URL + '/' + post.id,
      method: 'PUT',
      data: post,
      success: function(data) {
        getAndDisplayPosts();
      }
    });
  }
  
  function updateBlogListitem(item) {
    console.log('Updating blog list item `' + item.id + '`');
    $.ajax({
      url: BLOG_LIST_URL + '/' + item.id,
      method: 'PUT',
      data: JSON.stringify(item),
      success: function(data) {
        getAndDisplayBlogList()
      },
      dataType: 'json',
      contentType: 'application/json'
    });
  }
  
  
  function handlePostAdd() {
    $('#js-post-form').submit(function(e) {
      e.preventDefault();
      var ingredients = $(
        e.currentTarget).find(
        '#ingredients-list').val().split(',').map(
          function(ingredient) { return ingredient.trim() });
      addPost({
        name: $(e.currentTarget).find('#post-name').val(),
        ingredients: ingredients
      });
    });
  }
  
  function handleBlogListAdd() {
  
    $('#js-blog-list-form').submit(function(e) {
      e.preventDefault();
      addBlogItem({
        name: $(e.currentTarget).find('#js-new-item').val(),
        checked: false
      });
    });
  
  }
  
  function handlePostDelete() {
    $('.js-posts').on('click', '.js-post-delete', function(e) {
      e.preventDefault();
      deletePost(
        $(e.currentTarget).closest('.js-post').attr('id'));
    });
  }
  
  function handleBlogListDelete() {
    $('.js-blog-list').on('click', '.js-blog-item-delete', function(e) {
      e.preventDefault();
      deleteBlogItem(
        $(e.currentTarget).closest('.js-blog-item').attr('id'));
    });
  }
  
  
  
  $(function() {
    getAndDisplayBlogList();
    handleBlogListAdd();
    handleBlogListDelete();
    getAndDisplayPosts();
    handlePostAdd();
    handlePostDelete();
  });