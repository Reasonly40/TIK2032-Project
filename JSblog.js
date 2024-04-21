document.addEventListener("DOMContentLoaded", function() {
    // Animasi judul halaman
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

    // Animasi tombol navigasi
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

    // Animasi artikel
    const articles = document.querySelectorAll('.article');

    articles.forEach((article, index) => {
        const title = article.querySelector(`#judul${index + 1}`);
        const description = article.querySelector(`#deskripsi${index + 1}`);
        
        article.addEventListener('mouseenter', () => {
            animateText(description);
            title.style.opacity = '1';
        });
        
        article.addEventListener('mouseleave', () => {
            description.textContent = '';
            title.style.opacity = '0.5';
        });
    });

    function animateText(element) {
        const text = element.textContent;
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                element.textContent += text[i];
            }, i * 50); 
        }
    }

    // Animasi judul dan paragraf pada artikel
    articles.forEach(article => {
        const title = article.querySelector('h2');
        const paragraph = article.querySelector('p');

        title.addEventListener('mouseenter', function() {
            title.style.fontSize = '2em';
        });

        title.addEventListener('mouseleave', function() {
            title.style.fontSize = '';
        });

        paragraph.addEventListener('mouseenter', function() {
            paragraph.style.fontSize = '1.2em';
        });

        paragraph.addEventListener('mouseleave', function() {
            paragraph.style.fontSize = '';
        });
    });
});
