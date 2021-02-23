<?php
header('Content-Type: application/json');
$url = 'https://lk.selectyre.ru/export/json-assortment/?uuid=3afda70c-fcbc-11ea-b5f8-5254007c46fd';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
$output = curl_exec($ch);
curl_close($ch);
echo $output;
?>