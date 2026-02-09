import { db, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from './firebase.js';

const reviewForm = document.getElementById("review-form");
const reviewsList = document.getElementById("reviews-list");

// Submit Review
reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value.trim();

    if (!name || !rating || !comment) return;

    try {
        await addDoc(collection(db, "reviews"), {
            name,
            rating,
            comment,
            timestamp: serverTimestamp()
        });
        reviewForm.reset();
        alert("Thank you for your review!");
    } catch (err) {
        console.error("Error submitting review:", err);
        alert("Failed to submit review. Try again.");
    }
});

// Display Reviews
const reviewsQuery = query(collection(db, "reviews"), orderBy("timestamp", "desc"));

onSnapshot(reviewsQuery, (snapshot) => {
    reviewsList.innerHTML = "";
    snapshot.forEach((doc) => {
        const data = doc.data();
        reviewsList.innerHTML += `
            <div class="review-item">
                <strong>${data.name}</strong> - ${"⭐".repeat(data.rating)}<br>
                <p>${data.comment}</p>
            </div>
        `;
    });
});
