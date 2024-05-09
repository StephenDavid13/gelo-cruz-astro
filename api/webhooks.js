// webhook.js

module.exports = async (req, res) => {
    // Extract data from the webhook payload
    const eventData = req.body;
  
    // Process the payload (e.g., trigger rebuild, update data)
    console.log('Received webhook payload:', eventData);
  
    // Respond to the webhook request
    res.status(200).send('Webhook received successfully');
};
  