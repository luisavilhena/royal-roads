<?php

$para = "luisavilhena@gmail.com";

$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];

$mensagem = "<strong>Nome:  </strong>".$nome;
$mensagem .= "<br>  <strong>E-mail: </strong>"
.$_POST['email'];
$mensagem = "<strong>Área:  </strong>".$area;

$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From:  dominio.com.br<luisavilhena@gmail.com>\n";
$headers .= "X-Sender:  <luisavilhena@gmail.com>\n";

$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "Return-Path:  <sistema@dominio.com.br>\n";

$headers .= "MIME-Version: 1.0\n";

mail($para, $assunto, $mensagem, $headers);  
?>