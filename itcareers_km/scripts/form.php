<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phoneNumber = htmlspecialchars($_POST["phoneNumber"]);
    $address = htmlspecialchars($_POST["address"]);
    $zip = htmlspecialchars($_POST["zip"]);
    $email = htmlspecialchars($_POST["email"]);
    $city = htmlspecialchars($_POST["city"]);
    $state = htmlspecialchars($_POST["state"]);
    $message = htmlspecialchars($_POST["message"]);




    echo "Data is submitted by user:";
    echo "<br>";

    echo $name;
    echo "<br>";

    echo $phoneNumber;
    echo "<br>";

    echo $address;
    echo "<br>";

    echo $zip;
    echo "<br>";

    echo $city;
    echo "<br>";

    echo $state;
    echo "<br>";

    echo $message;

header("Location: ../pages/2_register_km.html");

}

?>