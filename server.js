const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost/parakeet-communities", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to database.");
//   })
//   .catch((err) => {
//     console.log("Unable to connect to database.");
//     console.log(err);
//   });

// MAIL TRANSPORTER OBJECT(CONTACT FORM EMAIL)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "parakeet.communities.website@gmail.com",
    pass: "comeFlyHome753",
  },
});

// VERIFY CONTACT EMAIL CONNECTION
transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send.");
  }
});

// EMAIL TO SEND
app.post("/contact", (req, res) => {
  const name = req.body.mailerState.name;
  const email = req.body.mailerState.email;
  const phone = req.body.mailerState.phone;
  const message = req.body.mailerState.message;
  const mailOptions = {
    from: name,
    to: "parakeet.communities.website@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone Number: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.json({ status: "fail" });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
