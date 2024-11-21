<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Your database connection and logic
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $className = $_POST['class_name'];

    // Debugging: Check if the form data is being received
    echo "Received Class Name: " . htmlspecialchars($className) . "<br>";

    $sql = "INSERT INTO classes (class_name) VALUES ('$className')";

    if ($conn->query($sql) === TRUE) {
        echo "Class '$className' added successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
