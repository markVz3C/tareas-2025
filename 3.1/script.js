const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("contador");

likeButton.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
});