<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog | Website Pribadi by Christian Roeroe</title>
        <link rel="stylesheet" href="style_blog.css">
        <link rel="icon" href="iguana.png" type="image">
    </head>

    <body>
        <script src="JSblog.js"></script>

        <div class="container">
            <img src="iguana.png" alt="Personal logo" height="200" width="200">
            <h1>REASONLY PERSONAL HOMEPAGE</h1>      
        </div>

        <div class="horizontal-line"></div>

        <div class="button">
            <a href="index.html">Home</a>
            <a href="tutorial.html">Tutorial</a>
            <a href="Gallery.html">Gallery</a>
            <a href="Blog.html">Blog</a>
            <a href="Contact.html">Contact</a>
        </div>

        <h1>Blog</h1>

        <div class="blog-content">
            <?php
            include 'config.php';

            $sql = "SELECT id, title, content, created_at FROM articles ORDER BY created_at DESC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo '<div class="article">';
                    echo '<h2>' . $row["title"] . '</h2>';
                    echo '<p>' . substr($row["content"], 0, 50) . '...</p>';
                    echo '<a href="article.php?id=' . $row["id"] . '">Full Text</a>';
                    echo '</div>';
                }
            } else {
                echo "0 results";
            }

            $conn->close();
            ?>
        </div>

        <br><br>
    </body>

    <footer>
        <div class="horizontal-line"></div>
        <p>&copy; 2024 Reasonly Personal Homepage.com. All Rights Reserved.</p>
    </footer>
</html>
