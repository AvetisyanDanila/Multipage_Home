<?php

$recepient = "aboriginnn@yandex.ru";
$sitename = "Сайт по продаже модульных домов";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$type = trim($_POST["type"]);
$variant = trim($_POST["variant"]);
$windows = trim($_POST["windows"]);
$installation = trim($_POST["installation"]);
$message = "Имя: $name \nТелефон: $phone \nТип дома: $type \nВариант утепления: $variant \nТип окон: $windows \nМонтаж: $installation";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");