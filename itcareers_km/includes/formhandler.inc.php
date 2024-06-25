<?php
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $name = htmlspecialchars($_POST["name"]);
    $phoneNumber = htmlspecialchars($_POST["phoneNumber"]);
    $address = htmlspecialchars($_POST["address"]);
    $email = htmlspecialchars($_POST["email"]);
    $zip = htmlspecialchars($_POST["zip"]);
    $city = htmlspecialchars($_POST["city"]);
    $state = htmlspecialchars($_POST["state"]);
    $comments = htmlspecialchars($_POST["comments"]);

    try {
        require_once "dbh.inc.php";

        $query = "INSERT INTO registration (name, phoneNumber, address, email, zip, city, state, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $pdo->prepare($query);
        $stmt->execute([$name, $phoneNumber, $address, $email, $zip, $city, $state, $comments]);

        $pdo = null;
        $stmt = null;

        header("Location: ../pages/2_register_km.html");
        exit();
    } catch (PDOException $e) {
        die("Connection lost: " . $e->getMessage());
    }
} else {
    header("Location: ../pages/2_register_km.html");
    exit();
}
?>
