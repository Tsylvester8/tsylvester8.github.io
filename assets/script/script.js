function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "mobileNavBar") {
        x.className += " responsive";
    } else {
        x.className = "mobileNavBar";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        const content = coll[i].nextElementSibling;

        // Expand default active year without scrolling
        if (coll[i].classList.contains("active-year")) {
            coll[i].classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }

        // Handle user click
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                // Collapse
                content.style.maxHeight = null;
            } else {
                // Expand
                content.style.maxHeight = content.scrollHeight + "px";
                // Smooth scroll ONLY when user clicks
                setTimeout(() => {
                    content.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);
            }
        });
    }
});

// Optional: highlight the active year button
document.querySelectorAll('.collapsible').forEach(btn => {
    if (btn.classList.contains('active-year')) {
        btn.style.backgroundColor = '#1565c0'; // darker shade
    }
});
