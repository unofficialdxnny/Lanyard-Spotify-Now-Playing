const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for handling Discord user ID
app.get('/discord_user_id/:userId', (req, res) => {
    const userId = req.params.userId;
    // Redirect to spotify.html
    res.redirect(`/spotify.html?discord_user_id=${userId}`);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
