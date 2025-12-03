// Import the nodemailer module
let nodemailer = require('nodemailer');

// Create a transporter object using Gmail service and authentication details
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'medkarimslouma6@gmail.com', // Your Gmail address
    pass: 'Karim.2024' // Your Gmail password or app password
  }
});

// Set up email data with sender, receiver, subject, and message
let mailOptions = {
  from: 'medkarimslouma6@gmail.com', // Sender address
  to: 'medkarimslouma7@gmail.com',   // List of receivers
  subject: 'Sending Email using Node.js', // Subject line
  text: 'That was easy!' // Plain text body
};

// Send the email using the transporter
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error); // Log error if sending fails
  } else {
    console.log('Email sent: ' + info.response); // Log success message
  }
});