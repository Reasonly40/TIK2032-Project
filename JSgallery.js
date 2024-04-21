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

    const navLinks2 = document.querySelectorAll('.button a');
    navLinks2.forEach(link => {
        link.classList.add('animate__animated', 'animate__fadeIn');
    });

    const typingText = document.querySelector('.typing-text');
    const text = typingText.textContent;
    typingText.textContent = '';
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.querySelector('h1');
    pageTitle.classList.add('animate__animated', 'animate__bounceInDown');

    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });

    const navLinks = document.querySelectorAll('.button a');
    navLinks.forEach(link => {
        link.classList.add('animate__animated', 'animate__fadeIn');
    });

    const typingText = document.querySelector('.typing-text');
    const text = typingText.textContent;
    typingText.textContent = '';
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

