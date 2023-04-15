<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $file = $_FILES['file'];
  $tmpName = $file['tmp_name'];
  $handle = fopen($tmpName, 'r');

  $header = true;
  $results = [];

  while (($data = fgetcsv($handle)) !== false) {
    if ($header) {
      $header = false;
      continue;
    }

    $result = [
      'storeId' => $data[0],
      'sku' => $data[1],
      'productName' => $data[2],
      'price' => $data[3],
      'date' => date('Y-m-d',strtotime($data[4]))
    ];

    $results[] = $result;
  }

  fclose($handle);

  $connection = mysqli_connect('localhost', 'root', '', 'test');
  
  foreach ($results as $result) {
    $storeId = mysqli_real_escape_string($connection, $result['storeId']);
    $sku = mysqli_real_escape_string($connection, $result['sku']);
    $productName = mysqli_real_escape_string($connection, $result['productName']);
    $price = mysqli_real_escape_string($connection, $result['price']);
    $date = mysqli_real_escape_string($connection, $result['date']);

    $query = "INSERT INTO pricing (store_id, sku, product_name, price, date) VALUES ('$storeId', '$sku', '$productName', '$price', '$date')";

    $res = mysqli_query($connection, $query);
  }

  mysqli_close($connection);
  if($res){
    echo json_encode(['status'=>200]); exit;
  }
  echo json_encode(['status'=>400]); exit;

}