const { Post } = require('../models');

const postData = [
  {
    title: "Runbuddy reaches 1 million subscribers",
    content: "I love Runbuddy and use it all the time",
    user_id: 1
  },
  {
    title: "Taskmaster reaches 1 million subscribers",
    content: "I love Taskmaster and use it all the time",
    user_id: 2
  },
  {
    title: "Jest-Another-RPG reaches 1 million subscribers",
    content: "I love Jest-Another-RPG and play it all the time",
    user_id: 3
  },
  {
    title: "Zookeepr reaches 1 million subscribers",
    content: "I love Zookeepr and visit it all the time",
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;