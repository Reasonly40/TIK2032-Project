document.addEventListener('DOMContentLoaded', function() {
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
    
    var tutorialVideos = document.querySelectorAll('.tutorial-video iframe');

    tutorialVideos.forEach(function(video) {
        video.addEventListener('mouseover', function() {
            video.style.border = '3px solid #4CAF50';
        });

        video.addEventListener('mouseout', function() {
            video.style.border = '';
        });
    });

    var toggleButton = document.getElementById('toggle-videos');
    var videoList = document.querySelector('.tutorial-video ul');

    toggleButton.addEventListener('click', function() {
        if (videoList.style.display === 'none' || videoList.style.display === '') {
            videoList.style.display = 'block';
            toggleButton.textContent = 'Collapse Videos';
        } else {
            videoList.style.display = 'none';
            toggleButton.textContent = 'Expand Videos';
        }
    });
});