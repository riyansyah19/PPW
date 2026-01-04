document.addEventListener("DOMContentLoaded", function () {
    fetch("/partials/sidebar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Sidebar gagal dimuat");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("sidebar").innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
