<?php
    $servidor = "localhost";
    $usuario  = "bernardofd";
    $senha = "30052006bfdema";
    $base_dados = "mediateca";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $base_dados);
    if (mysqli_connect_errno()) {
        echo "Falha na conexão: " . mysqli_connect_error();
    }
    
?>