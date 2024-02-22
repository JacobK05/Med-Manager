
const nodemailer = require("nodemailer");


function sendMail(recipientEmail, subject, message ){


const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "systemmedication@gmail.com",
      pass: "uzwr bwst wipd gezw",
    },
  });
  const mailOptions = {
    from: "systemmedication@gmail.com",
    to: recipientEmail,
    subject: subject,
    text: message
    ,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
sendMail(recipientEmail, subject, message );
// sendMail('6513345038@tmomail.net', 'alert', 'This is alert message that for test  ' );
// sendMail('vicki.dunlop@gmail.com', 'alert', 'This is alert message that for test  ' );
