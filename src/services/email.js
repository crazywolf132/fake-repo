// Email service
const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendWelcomeEmail(user) {
    const mailOptions = {
      from: 'noreply@example.com',
      to: user.email,
      subject: 'Welcome to our platform!',
      html: `<h1>Welcome ${user.name}!</h1><p>Thank you for joining us.</p>`
    };
    
    return this.transporter.sendMail(mailOptions);
  }
  
  async sendPasswordReset(user, token) {
    const resetUrl = `https://example.com/reset-password?token=${token}`;
    const mailOptions = {
      from: 'noreply@example.com',
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`
    };
    
    return this.transporter.sendMail(mailOptions);
  }
}

module.exports = new EmailService();