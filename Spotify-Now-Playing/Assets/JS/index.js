// Function to redirect to spotify.html if Discord user ID exists
function redirectToSpotifyPage(userId) {
  if (userId !== null) {
      window.location.href = `spotify.html?discord_user_id=${userId}`; // Redirect to spotify.html
  }
}

// Function to handle form submission
function submit() {
  const userId = document.getElementById("userID").value;

  if (userId.trim() !== "") {
      localStorage.setItem("userID", userId);
      redirectToSpotifyPage(userId);
  } else {
      alert("Please Enter Discord UserID");
  }
}
