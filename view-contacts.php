<?php
// Include the configuration file to connect to the database
include 'config.php';

// Prepare an SQL statement to select all contacts from the database
$sql = "SELECT id, name, email, message, submitted_at FROM contacts ORDER BY submitted_at DESC";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Contacts | Website Pribadi by Christian Roeroe</title>
    <link rel="stylesheet" href="style_view_contacts.css">
</head>
<body>
    <h1>Submitted Contacts</h1>
    <?php
    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<div class='contact-entry'>";
            echo "<h2>Name: " . $row["name"] . "</h2>";
            echo "<p>Email: " . $row["email"] . "</p>";
            echo "<p>Message: " . $row["message"] . "</p>";
            echo "<p>Submitted At: " . $row["submitted_at"] . "</p>";
            echo "</div>";
        }
    } else {
        echo "0 results";
    }

    // Close the connection
    $conn->close();
    ?>
</body>
</html>
