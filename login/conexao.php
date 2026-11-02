<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conexao = new mysqli("localhost", "bernardofd", "NOVA_SENHA_FORTE", "mediateca");
    $conexao->set_charset("utf8mb4"); // acentos corretos
} catch (mysqli_sql_exception $e) {
    error_log($e->getMessage());       // fica no log, não no ecrã
    http_response_code(500);
    exit("Erro interno. Tenta novamente mais tarde.");
}