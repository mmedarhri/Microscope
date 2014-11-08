Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});

Template.postsList.helpers({ postsWithRank: function() {
  return this.posts.map(function(post, index, cursor) { post._rank = index;
    return post;
  }); }
});