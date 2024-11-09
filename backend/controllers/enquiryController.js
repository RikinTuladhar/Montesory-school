const asyncHandler = require('express-async-handler');
const Enquiry = require('../models/enquiryModel');
const nodemailer = require("nodemailer");

const submitEnquiry = asyncHandler(async (req, res) => {
    const { parentName, email, phone, comments } = req.body;
  
    if (!parentName || !email || !phone) {
      return res.status(400).json({ message: "Please fill all required fields!" });
    }
  
    const existingEnquiry = await Enquiry.findOne({ email, phone });
    if (existingEnquiry) {
      return res.status(409).json({ message: "An enquiry with this contact information already exists." });
    }

    const enquiry = new Enquiry({
      parentName,
      email,
      phone,
      comments,
    });
  
    await enquiry.save();
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'k.b.s.tobi@gmail.com',
        pass: 'awkj ykat bczk bply', // Use an App Password here
      },
    });
  
    const userMailOptions = {
      from: 'k.b.s.tobi@gmail.com',
      to: email,
      subject: 'Thank you for your enquiry!',
      text: 'Thank you for reaching out to us. We have received your enquiry and will get back to you shortly.',
    };
  
    const adminMailOptions = {
      from: 'k.b.s.tobi@gmail.com',
      to: 'admin@example.com', // Replace with admin notification email
      subject: 'New Enquiry Submitted',
      text: `A new enquiry has been submitted:\n\n
             Parent Name: ${parentName}\n
             Email: ${email}\n
             Phone: ${phone}\n
             Comments: ${comments || 'No comments provided.'}`,
    };
  
    try {
      await transporter.sendMail(userMailOptions);
      await transporter.sendMail(adminMailOptions);
      res.status(201).json({ message: "Enquiry submitted successfully", enquiry });
    } catch (error) {
      res.status(500).json({ message: "Error sending email notifications", error });
    }
  });

const getAllEnquiries = asyncHandler(async (req, res) => {
  try {
    const enquiries = await Enquiry.find({});
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving enquiries", error });
  }
});

const editEnquiryStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const enquiry = await Enquiry.findByIdAndUpdate(id, { status }, { new: true });
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json({ message: "Enquiry status updated", enquiry });
  } catch (error) {
    res.status(500).json({ message: "Error updating enquiry status", error });
  }
});
const getSingleEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json({ enquiry });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving single enquiry", error });
  }
});

const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const enquiry = await Enquiry.findByIdAndDelete(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting single enquiry", error });
  }
});

module.exports = { submitEnquiry, getAllEnquiries, editEnquiryStatus, getSingleEnquiry, deleteEnquiry};