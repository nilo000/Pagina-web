<?php
    //el correo que lo va a recibir
    $destinatario ='nico2000@live.com.ar';

     $email = $_POST['email'];

     $mensaje =$_POST['mensaje'];

    $header = "Consulta desde la pagina";

    $mensajeCompleto = $mensaje ."\n el mensaje lo envio =". $email;

    mail($destinatario,$header,$mensajeCompleto);
    echo "<script>alert("Correo enviado")</script>";
?>