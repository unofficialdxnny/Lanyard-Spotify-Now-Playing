
function submit() {
    const userID = document.getElementById("userID").value;

    if (userID.trim() !== "") {
        localStorage.setItem("userID", userID)
        alert("UserID Saved Successfully")
    } else {
        alert("Please Enter Discord UserID")
    }


}