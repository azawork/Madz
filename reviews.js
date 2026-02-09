const reviewForm = document.getElementById("review-form");
const reviewsList = document.getElementById("reviews-list");

// Display existing reviews
function displayReviews() {
    db.collection("reviews").orderBy("timestamp", "desc").get()
      .then(snapshot => {
          reviewsList.innerHTML = "";
          snapshot.forEach(doc => {
              const data = doc.data();
              const div = document.createElement("div");
              div.classList.add("review-item");
              div.innerHTML = `
                  <strong>${data.name}</strong> - ${"⭐".repeat(data.rating)}<br>
                  <p>${data.comment}</p>
              `;
              reviewsList.appendChild(div);
          });
      })
      .catch(err => console.error("Error fetching reviews:", err));
}

// Submit new review
reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const rating = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value;

    db.collection("reviews").add({
        name,
        rating,
        comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        reviewForm.reset();
        displayReviews();
    })
    .catch(err => console.error("Error adding review:", err));
});

// Load reviews on page load
displayReviews();
