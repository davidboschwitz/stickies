<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json;');


$id = $_GET['id'];

if(!ctype_alnum($id))
    die('{"error":{"message":"invalid id", "code":400}}');

echo file_get_contents('data/' . $id . '.json');
?>
