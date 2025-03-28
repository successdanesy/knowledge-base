document.getElementById("searchBar").addEventListener("keyup", function() {
    let searchQuery = this.value.toLowerCase();
    let topics = document.querySelectorAll("main h2, main p");

    topics.forEach(topic => {
        if (topic.textContent.toLowerCase().includes(searchQuery)) {
            topic.style.display = "block";
        } else {
            topic.style.display = "none";
        }
    });
});
