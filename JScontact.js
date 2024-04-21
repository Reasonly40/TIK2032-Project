document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.querySelector('h1');
    let isBlinking = false;
    let blinkInterval;

    pageTitle.addEventListener('mouseenter', function() {
        if (!isBlinking) {
            blinkInterval = setInterval(() => {
                this.style.color = isBlinking ? 'black' : 'gray';
                isBlinking = !isBlinking;
            }, 200);
        }
    });

    pageTitle.addEventListener('mouseleave', function() {
        clearInterval(blinkInterval);
        this.style.color = 'black';
    });

    const navLinks = document.querySelectorAll('.button a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'darkgreen';
            this.style.color = 'white';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = 'black';
        });
    });

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        form.reset();

        alert("Thank you! Your message has been sent.");
    });
});
