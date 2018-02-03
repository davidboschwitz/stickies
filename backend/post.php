<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$id = $_GET['id'];

if(!ctype_alnum($id))
    die('{"error":{"message":"invalid id", "code":400}}');

//echo file_get_contents('data/' . $id . '.json');
$myfile = fopen('data/' . $id . '.json', "w") or die('{"error":{"message":"unable to open file!", "code":500}}');

$data = $_POST['data'];
//$data = json_decode(file_get_contents('php://input'),true);;

fwrite($myfile, $data);
fclose($myfile);
echo '{"success":true}';
