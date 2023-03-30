const nodemailer = require("nodemailer");
const { USER_MAIL, USER_PASS } = require("../credentials.js");

const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
        user: USER_MAIL,
        pass: USER_PASS
    }
}
)

const sendMail = async () => {
    await transporter.sendMail({
        from: USER_MAIL,
        to: "girdharkartik66@gmail.com",
        cc: [],
        bcc: [],
        subject: "NODEMAILER",
        html: `<div>Happy Day</div>`
    }, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Mail sent, info: ${info}`);
        }
    })
}

module.exports = sendMail;