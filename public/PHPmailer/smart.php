<?php
// Остальные переменные оставляем такими же
$rm_name = isset($_POST['rm_name']) ? $_POST['rm_name'] : '';
$rm_text = isset($_POST['rm_text']) ? $_POST['rm_text'] : '';
$rm_phone = isset($_POST['rm_phone']) ? $_POST['rm_phone'] : '';
$rm_mail = isset($_POST['rm_mail']) ? $_POST['rm_mail'] : '';

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// Настройка SMTP
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'a.kolchanov@ntagil.2gis.ru';
$mail->Password = '9HEVuWrKigWq8rJDMCms';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// Отправитель письма
$mail->setFrom('a.kolchanov@ntagil.2gis.ru', $rm_name);

// Получатель письма
$mail->addAddress('mail@mp66.ru');

// Ставим обратный адрес (для ответов)
$mail->addReplyTo($rm_mail, $rm_name);

// Другие части письма остаются теми же
$mail->isHTML(true);

$mail->Subject = 'Новый лид с сайтаАлимет от пользователя ' . $rm_name;
$mail->Body    = '
    Сообщение от: ' . $rm_name . '<br /> 
    Телефон: ' . $rm_phone . '<br />
    ' . ($rm_mail != '' ? ('E-mail: ' . $rm_mail . '<br />') : '') . '
    ' . ($rm_text != '' ? ('Текст сообщения: ' . $rm_text . '<br />') : '') . '
';

$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo 'Ошибка';
} else {
    header('location: ../thank-you.html');
}

?>