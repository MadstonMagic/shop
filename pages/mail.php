<?php 

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$formcontent="From: $name \n Message: $message";
	$recipient = "madston.projects@gmail.com";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo "Thank you for your message, I'll get back to you as fast as possible!";
?>