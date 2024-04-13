
  
function submit() {
    const userID = document.getElementById("userID").value;

    if (userID.trim() !== "") {
        localStorage.setItem("userID", userID)
        alert("Success")
    } else {
        alert("Please Enter Discord UserID")
    }


}

if (localStorage.getItem("userID") !== null) {

    discorduserID = localStorage.getItem("userID").value;
    fetch(`https://api.lanyard.rest/v1/users/${discorduserID}`) 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // assuming the API returns JSON
  })
}

