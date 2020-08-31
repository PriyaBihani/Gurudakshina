const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const gmailEmail = "ngoteacher123@gmail.com";
const gmailPassword = "ngo@12345";
const cors = require("cors");
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
admin.initializeApp();

//Subscriptions stuff
exports.sendEmailConfirmation = functions.firestore
  .document("SubList/{subId}")
  .onCreate(async (snap, context) => {
    const val = snap.data();
    const mailOptions = {
      from: '"NGO." <noreply@firebase.com>',
      to: val.email
    };

    mailOptions.subject = `Welcome ${val.name}`;
    mailOptions.text = `${val.name} you are now subscribed for Newsletter. We will send you a newsletter about NGO's work every month.`;

    try {
      await mailTransport.sendMail(mailOptions);
      console.log(
        `New ${subscribed ? "" : "un"}subscription confirmation email sent to:`,
        val.email
      );
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });

  // Approve and disapprove stuff
  exports.approveEmailVerification = functions.firestore
  .document("Needy/{needyId}")
  .onUpdate(async(change)=>{
    
    const before= change.before
    console.log(before._fieldsProto.teacherEmail)
    const val = before._fieldsProto
    const mailOptions={
      from: '"NGO." <noreply@firebase.com>',
      to: val.teacherEmail.stringValue
    }
    mailOptions.subject=`Hello ${val.name.stringValue}`;
    mailOptions.text=`${val.name.stringValue} you are approved by admin of NGO. We will contact you soon enough to help.`

    try{
      await mailTransport.sendMail(mailOptions)
      console.log(`${val.name.stringValue} has been approved`)
    }catch(error){
      console.error("There was an error while sending the email",error);
    }

  })

  exports.disapproveEmailVerification=functions.firestore
  .document("Needy/{needyId}")
  .onDelete(async (snap, context)=>{
    console.log(snap)
    const val = snap._fieldsProto
    const mailOptions={
      from: '"NGO." <noreply@firebase.com>',
      to: val.teacherEmail.stringValue
    }
    mailOptions.subject = `Hello ${val.name.stringValue}`;
    mailOptions.text= `${val.name.stringValue} you are rejected by admin of the ngo for help`

    try{
      await mailTransport.sendMail(mailOptions)
      console.log(`${val.name.stringValue} has been disapproved`)
    }catch(error){
      console.error("There was an error while sending the email",error);
    }
  })

//Razorpay Stuff
const Razorpay = require("razorpay");
var key_id = "rzp_test_QcN3xHV4OM2hYW";
var key_secret = "kqJ2zcxldM2y6FB2ZJaiTz0P";
const instance = new Razorpay({
  key_id: key_id,
  key_secret: key_secret
});
const express = require("express");
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get("/api/v1/rzp_capture/:payment_id/:amount", (req, res) => {
  const { payment_id } = req.params;
  const amount = Number(req.params.amount * 100);
  //  send the data to server of razorpay
  instance.payments
    .capture(payment_id, amount)
    .then(data => {
      res.json(data);
      return data;
    })
    .catch(error => {
      res.json(error);

    });
});
// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);