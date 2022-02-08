<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['offer_form_name'];
$phone = $_POST['offer_form_phone'];
$email = $_POST['offer_form_email'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'peoplestories@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$PsdBMol'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('peoplestories@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('ramhas87@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта кспертПро';
$mail->Body    = '<b>Новый клиент оставил заявку на получение предварительной оценки ситуации.</b><br>
Его имя: <i>'.$name.'</i>.<br>
Его телефон: <i>'.$phone.'</i>.<br>
Его электронная почта: <i>'.$email.'</i>.';
$mail->AltBody = '';

if(!$mail->send()) {
  echo 'Error';
} 
else {
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  ); exit();
}
?>