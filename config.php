<?php
$servername = "localhost:3308";
$username = "root";
$password = "";
$dbname = "tian_pw_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>