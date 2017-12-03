<?php

$recepient = "punisher-corp@yandex.ua";
$sitename = "nazvanie";

$id = trim($_GET["id"]);
$login = trim($_GET["login"]);
$email = trim($_GET["email"]);
$n_passwd = trim($_GET["n-passwd"]);
$cat = trim($_GET["cat"]);
$message = "hello!";

$pagetitle = "$sitename";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");