<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'customer@mariajalmeida.com';
    $email_subject = 'New Message From Portfolio';
    $email_body = "Name: $name.\n".
                  "Email: $email.\n".
                  "Message: $message.\n";

     $to ="contact@mariajalmeida.com";
     $headers = "From: $email_from \r\n";
     $headers .= "Reply-To: $email \r\n";

     mail($to,$email_subject,$email_body,$headers);

     header("location: success.html");

?>