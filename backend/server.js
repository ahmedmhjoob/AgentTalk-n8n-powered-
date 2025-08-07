const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle messages from the frontend
app.post("/message", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    console.log("Message received from frontend:", message);

    // Forward the message to the n8n Webhook
    const n8nResponse = await axios.post(
      "https://ahmedmhjoob.app.n8n.cloud/webhook/chatbot",
      { message }
    );

    console.log("Response from n8n:", n8nResponse.data);

    // Extract the reply from n8n's response
    const reply = n8nResponse.data.reply;

    // Send the reply back to the frontend
    res.json({ reply });
  } catch (error) {
    console.error("Error communicating with n8n:", error.message);

    // Handle specific Axios errors
    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.data || "Error from n8n Webhook",
      });
    } else if (error.request) {
      return res.status(500).json({
        error: "No response received from n8n Webhook",
      });
    } else {
      return res.status(500).json({
        error: "Unexpected error occurred while communicating with n8n",
      });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
