<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article | Website Pribadi by Christian Roeroe</title>
    <link rel="stylesheet" href="style_article.css">
    <link rel="icon" href="iguana.png" type="image">
</head>

<body>
    <script src="JSarticle.js"></script>

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

    <div class="article-content">
        <?php
        include 'config.php';

        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $sql = "SELECT title, content, created_at FROM articles WHERE id = $id";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo '<div class="article">';
                echo '<h2>' . $row["title"] . '</h2>';
                echo '<p>' . $row["content"] . '</p>';
                echo '<p><small>Posted on ' . $row["created_at"] . '</small></p>';
                echo '</div>';
            } else {
                echo "Article not found.";
            }
        } else {
            echo "Invalid article ID.";
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
