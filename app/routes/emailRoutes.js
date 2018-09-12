//******************* dependencies ***********************//
const express = require("express");
const Email = require("../models/email.js");
const emailRouter = express.Router();
const exphbs = require("express-handlebars");



// ================================== Routes =====================================//
// emailRouter.engine("handlebars", exphbs({ defaultLayout: "main" }));
// emailRouter.set("view engine", "handlebars");


// Get all email address
emailRouter.get("/api/email/all", function(req, res) {
    Email.findAll({}).then(function(results) {
      res.json(results);
    });
});

emailRouter.post('/api/email/new_account', function(req, res) {
    console.log('resuest.dody is: ', req.body.firstName + ", " + req.body.lastName + ", " + req.body.email_address);
    Email.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email_address: req.body.email_address,
    }).then(function(result) {
        res.json(result);  
    })
    .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
          res.json(err);
    });
});


emailRouter.get("/api/email/make", function(req, resp) {
    Email.findAll({
    where: {
        verified: false,
        opt_out: false
    }
    }).then(function(resp) {
        resp.render("emailMaker");
    })
    .catch(function(err) {
        resp.json(err);
    });
});

// // Get all books of a specific genre
// app.get("/api/genre/:genre", function(req, res) {
//     Book.findAll({
//     where: {
//         genre: req.params.genre
//     }
//     }).then(function(results) {
//     res.json(results);
//     });
// });

// // Get all books from a specific author
// app.get("/api/author/:author", function(req, res) {
//     Book.findAll({
//     where: {
//         author: req.params.author
//     }
//     }).then(function(results) {
//     res.json(results);
//     });
// });

// // Get all "long" books (books 150 pages or more)
// app.get("/api/books/long", function(req, res) {
//     Book.findAll({
//     where: {
//         pages: {
//         $gte: 150
//         }
//     },
//     order: [["pages", "DESC"]]
//     }).then(function(results) {
//     res.json(results);
//     });
// });

// // Get all "short" books (books 150 pages or less)
// app.get("/api/books/short", function(req, res) {
//     Book.findAll({
//     where: {
//         pages: {
//         $lte: 150
//         }
//     },
//     order: [["pages", "ASC"]]
//     }).then(function(results) {
//     res.json(results);
//     });
// });

// // Add a book
// app.post("/api/new", function(req, res) {
//     console.log("Book Data:");
//     console.log(req.body);
//     Book.create({
//     title: req.body.title,
//     author: req.body.author,
//     genre: req.body.genre,
//     pages: req.body.pages
//     });
// });

// // Delete a book
// app.post("/api/delete", function(req, res) {
//     console.log("Book Data:");
//     console.log(req.body);
//     Book.destroy({
//     where: {
//         id: req.body.id
//     }
//     });
// });
  
  

module.exports = emailRouter;