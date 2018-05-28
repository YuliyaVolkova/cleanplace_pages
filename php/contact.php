<?php
if (htmlentities(strip_tags($_POST['phone']))!='' ) {
    echo 'false';
    }
else {

	$name = htmlentities(strip_tags($_POST['name']));
	$phone = htmlentities(strip_tags($_POST['lphone']));
 	$message = htmlentities(strip_tags($_POST['message']));
 	$txtorder= htmlentities(strip_tags($_POST['txtservice']));
 	$mail_message = '
    <html>
    <head>
        <title>Online enquiry</title>
    </head>
    <body>
        <h2>Order: ' . $txtorder . '</h2>
        <ul>
            <li>Name: ' . $name . '</li>
            <li>Phone number: ' . $phone . '</li>
            <li>Message: ' . $message . '</li>
        </ul>
    </body>
    </html>';
//вместо "https://www.ld63.ru/" укажите от кого  
    $headers = "From: <https://www.ld63.ru/>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

//* далее вместо "your_email" укажите свой почтовый ящик, на 
//* который будут пересылаться заявки от заказчиков с сайта
    $mail = mail('webportfolio2018@gmail.com', 'Online enquiry', $mail_message, $headers);

    if ($mail) {
        echo 'ok';
    }
    else
    {
        echo 'none';
    }
    }
?>