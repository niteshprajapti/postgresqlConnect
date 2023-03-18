const express = require("express")
const router = express.Router()
const blog = require("../controller/blog.controller");

// /api/blog: GET, POST, DELETE
// /api/blog/:id: GET, PUT, DELETE
// /api/blog/published: GET

  
// Retrieve all blog
router.get("/", blog.findAll);

// Retrieve all published blog
router.get("/published", blog.findAllPublished);

module.exports = router