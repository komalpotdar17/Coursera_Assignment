// Function to add new recommendation
function addRecommendation() {
    var newRecommendation = document.getElementById("new-recommendation").value;
    if (newRecommendation) {
        var recommendationList = document.querySelector(".recommendation-list");
        var newDiv = document.createElement("div");
        newDiv.classList.add("recommendation");
        newDiv.innerHTML = `<p>"${newRecommendation}"</p><p>- New Client</p>`;
        recommendationList.appendChild(newDiv);
        document.getElementById("new-recommendation").value = ''; // Clear the textarea
        alert("Your recommendation has been submitted!");
    } else {
        alert("Please enter a recommendation.");
    }
}
