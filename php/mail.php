<?php

#ini_set('display_errors', 'On');
#error_reporting(E_ALL);

require __DIR__.'/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../');
$dotenv->load();
$username = $_ENV['USERNAME'];
$password = $_ENV['PASSWORD'];

use PHPMailer\PHPMailer\PHPMailer;

require_once __DIR__.'/../vendor/phpmailer/phpmailer/src/Exception.php';
require_once __DIR__.'/../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require_once __DIR__.'/../vendor/phpmailer/phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $username;
    $mail->Password = $password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = '587';
    $mail->setFrom($email);
    $mail->addAddress($username);
    $mail->isHTML(true);
    $mail->Subject = 'Message received from ' . $email;
    $mail->Body = 'Name: ' . $name . '<br>' . $message;
    $mail->send();

    echo "OK";

} catch (Exception $e) {
    echo "KO";
}

#return $alert;

?>
