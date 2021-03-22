<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailFrom = $_POST['mail'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "panopticonism@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from ".$name.".\n\n".$message;

        // mail($mailTo, $subject, $txt, $headers);

        $secretKey = "6LcH590ZAAAAABT2FYcnBeBcYZodQEpSWcNdQnDt";
        $responseKey = $_POST['g-recaptcha-response'];
        $UserIP = $_SERVER['REMOTE_ADDR'];
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$UserIP";

        $response = file_get_contents($url);
        $response = json_decode($response);

        if ($response->success) {
            mail($mailTo, $subject, $txt, $headers);
            echo "Message sent successfully";
        } else {
            echo "Invalid Captcha. Please, try again.";
        }

        // header("Location: index.php?mailsend");
    }
?>