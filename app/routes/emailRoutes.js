//******************* dependencies ***********************//
const express = require("express");
const db = require("../../models");
const emailRouter = express.Router();
const nodemailer = require('nodemailer');
// const exphbs = require("express-handlebars");
// const app = express();



// ================================== Routes =====================================//
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// Get all email address
emailRouter.get("/email/all", function(req, res) {
    db.Email.findAll({}).then(function(results) {
      res.json(results);
    });
});

emailRouter.post('/email/new_account', function(req, res) {
    console.log(req.body);
    console.log('resuest.dody is: ', req.body.firstName + ", " + req.body.lastName + ", " + req.body.email);
    db.Email.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email_address: req.body.email,
        verified: req.body.verified,
        opt_out: req.body.opt_out
    }).then(function(data) {
        console.log('results', data);
        res.json({ id: result.insertId });  
        console.log('the data is stored');
    })
    .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
          res.json(err);
    });
});

// app.post('/api/new_email', function(req, res) {
//     console.log('resuest: ', req.body);
//     console.log('resuest: ', req.body);
//     res.json(req.body);
// })


emailRouter.get("/email/make", function(req, res) {
    db.Email.findAll({
    where: {
        verified: false,
        opt_out: false
    }
    }).then(function(results) {
        // console.log('its before render handlebars!')
        res.render("emailMaker", results);
    })
    .catch(function(err) {
        res.json(err);
    });
});


emailRouter.post("/email/send_email", function(req, res) {
    console.log("The email request is: ", req.body);

    db.Email.findAll({
        where: {
            verified: true,
            opt_out: false
        }
    }).then(function(results) {
        console.log("Verified and NOT opt out emails are found.", results[0].dataValues);
        console.log("Verified and NOT opt out emails are found.", results[1].dataValues);
        // res.json(results);
        // let emailInfo = {
        //     address: emailAddress,
        //     subject: req.body.subject,
        //     text: req.body.text,
        // }
        const length = results.length;
        let i = 0;
        while (i < length) {
            let emailInfo = {
                firstName: results[i].dataValues.firstName,
                lastName: results[i].dataValues.lastName,
                address: results[i].dataValues.email_address,
            }
            sendEmail(emailInfo.firstName, emailInfo.lastName, emailInfo.address, req.body.subject, req.body.text);

            i++;
        } 

        res.status(200).json({
            message: 'Emails have sent'
        });
    }).catch(function(err) {
        res.json(err);
        console.log("There\'s error on sending email.", err);
    });
});


const sendEmail = (firstName, lastName, emailAddress, subject, text) => {
    try {
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            ssl: true,
            auth: {
                user: 'bandwagon.ucbx@gmail.com', // generated ethereal user
                pass: 'bandwagon2018' // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Bandwagon👻" <bandwagon.ucbx@gmail.com>', 
            to: emailAddress, 
            subject: subject,
            text: text,
            html: '<b>' + text + '</b>' // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("this is what\'s returned: ", info);

        });
    })}
    catch(err) {
        throw err;
    }
}

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

  
  

module.exports = emailRouter;