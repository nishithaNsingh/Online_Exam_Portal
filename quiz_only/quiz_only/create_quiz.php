<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Your database connection and logic
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $quizTitle = $_POST['quiz_title'];
    $quizDescription = $_POST['quiz_description'];

    // Debugging: Check if the form data is being received
    echo "Received Quiz Title: " . htmlspecialchars($quizTitle) . "<br>";
    echo "Received Quiz Description: " . htmlspecialchars($quizDescription) . "<br>";

    // Process the questions
    if (isset($_POST['questions'])) {
        foreach ($_POST['questions'] as $index => $question) {
            echo "Question " . ($index + 1) . ": " . htmlspecialchars($question['question']) . "<br>";

            foreach ($question['options'] as $optIndex => $option) {
                echo "Option " . ($optIndex + 1) . ": " . htmlspecialchars($option) . "<br>";
            }
            echo "Correct Option: " . htmlspecialchars($question['correct']) . "<br>";
        }
    }

    // Insert quiz data into the database (example)
    $sql = "INSERT INTO quizzes (quiz_title, quiz_description) VALUES ('$quizTitle', '$quizDescription')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Quiz '$quizTitle' created successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
