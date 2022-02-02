const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
// const cors = require("cors");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "langascar7@gmail.com",
    pass: "aaaaa",
  },
});

exports.sendMail = functions.firestore.document("/sales/{documentId}")
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Firestore.
      const original = snap.data();

      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log("Uppercasing", context.params.documentId, original);
      console.log("llegooo", original);

      // send mail with defined transport object
      const mailOptions = {
        from: "\"LicoresADomicilio 👻\" <langascar7@example.com>",
        to: "aaaa@gmail.com,aa@gmail.com,"+
        "aa@hotmail.com",
        subject: "Nuevo Pedido ✔", // Subject line
        html: "<b>Nuevo Pedido</b>", // html body
      };
      return transporter.sendMail(mailOptions, (erro, info) => {
        if (erro) {
          console.log("error send: %s", erro);
          return false;
        }
        return true;
      });
    });
