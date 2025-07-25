const nodemailer = require("nodemailer");
require("dotenv").config(); // Add this at the top if not present

// ✅ Debug: Log loaded environment variables (REMOVE later)
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `StudyNotion Team <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent: ", info.response);
    return info;
  } catch (error) {
    console.error("❌ Error while sending email:", error.message);
    console.error("❌ Full error:", error);
    throw error;
  }
};

module.exports = mailSender;




















// OLD CODE


// const nodemailer = require("nodemailer")
// require("dotenv").config();

// console.log("MAIL_USER:",process.env.MAIL_USER);
// console.log("MAIL_PASS:",process.env.MAIL_PASS);

// const mailSender = async (email, title, body) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//       secure: false,
//     })

//     let info = await transporter.sendMail({
//       from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // list of receivers
//       subject: `${title}`, // Subject line
//       html: `${body}`, // html body
//     })
//     console.log(info.response)
//     return info
//   } catch (error) {
//     console.log(error.message)
//     return error.message
//   }
// }

// module.exports = mailSender
