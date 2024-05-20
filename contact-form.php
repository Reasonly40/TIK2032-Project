<?php
include 'Contact.html';
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : '';
    $email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : '';
    $message = isset($_POST['message']) ? mysqli_real_escape_string($conn, $_POST['message']) : '';
  
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $sql = "INSERT INTO contact_form (name, email, message) VALUES ('$name', '$email', '$message')";
      if (mysqli_query($conn, $sql)) {
        echo "Form submitted successfully.";
      } else {
        echo "Error submitting form: " . mysqli_error($conn);
      }
    } else {
      echo "Please fill in all fields correctly.";
    }
  }
  
  mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Submission | Website Pribadi by Christian Roeroe</title>
</head>
<body>
    <h1>Thank you for your message!</h1>
    <p><a href="contact.html">Go back to contact page</a></p>
</body>
</html>
