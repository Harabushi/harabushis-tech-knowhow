const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This post is awesome!",
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: "This post is great!",
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: "This post is okay!",
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: "This post is terrible!",
    user_id: 4,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;