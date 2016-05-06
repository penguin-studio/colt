
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php

if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['phone'])) {$phone = $_POST['phone']; if ($phone == '') {unset($phone);}}
if (isset($_POST['sub'])) {$sub = $_POST['sub']; if ($sub == '') {unset($sub);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}

if (isset($name) && isset($phone)  && isset($sub) && isset($email)){

$address = "dennissber@gmail.com";
$mes = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $sub";
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$name");

if ($send == 'true')
{echo "Сообщение отправлено";}
else {echo "Ошибка, сообщение не отправлено!";}

}
else
{
echo "Вы заполнили не все поля, необходимо вернуться назад!";
}
?>