document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.querySelector('h1');
    let isBlue = false;
    
    pageTitle.addEventListener('mouseenter', function() {
        const blinkInterval = setInterval(() => {
            if (isBlue) {
                this.style.color = 'black';
                isBlue = false;
            } else {
                this.style.color = 'gray';
                isBlue = true;
            }
        }, 200);
    
        this.addEventListener('mouseleave', function() {
            clearInterval(blinkInterval);
            this.style.color = 'black';
        });
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

    const profilePhoto = document.querySelector('.profile-photo img');
    profilePhoto.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    profilePhoto.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    const profilePhotoClick = document.querySelector('.profile-photo img');
    profilePhotoClick.addEventListener('click', function() {
        alert('Hey hentikan, kamu meng-klik wajah saya :D');
    });

    const quoteText = document.querySelector('.quote p');
    const quote = quoteText.textContent;
    quoteText.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < quote.length) {
            quoteText.textContent += quote.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});
