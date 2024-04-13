// Function to extract Discord user ID from URL
function getDiscordUserIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('discord_user_id');
    return userId;
}

// // Example usage
// const discordUserId = getDiscordUserIdFromUrl();
// console.log("Discord User ID:", discordUserId); // Output: Discord User ID: 898937224895270972

// Function to make API call to Lanyard API
function fetchLanyardData(userId) {
    const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the data received from the API
            console.log(`Lanyard Data for user ${userId}:`, data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Example usage
const discordUserId = getDiscordUserIdFromUrl();
if (discordUserId) {
    fetchLanyardData(discordUserId);
} else {
    console.error("Discord user ID not found in the URL");
}
