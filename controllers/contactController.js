import Contact from "../models/contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEntry = await Contact.create({ name, email, message });

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully!",
      data: newEntry,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error.message,
    });
  }
};
