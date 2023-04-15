<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');
error_reporting(0);



if ($_SERVER['REQUEST_METHOD'] === 'GET' && empty($_GET['id'])) { 
  $connection = mysqli_connect('localhost', 'root', '', 'test');
  $query = "SELECT * FROM pricing ";

  $res = mysqli_query($connection, $query);

  $response = [];
  $i = 0;
  while ($row = mysqli_fetch_assoc($res)) {
    $response[$i]['storeId'] = $row['store_id'];
    $response[$i]['sku'] = $row['sku'];
    $response[$i]['productName'] = $row['product_name'];
    $response[$i]['price'] = $row['price'];
    $response[$i]['date'] = $row['date'];
    $i++;
  }

  echo json_encode($response);
  

}elseif($_SERVER['REQUEST_METHOD'] === 'POST'){
    $_POST = json_decode(file_get_contents("php://input"), true);
    $connection = mysqli_connect('localhost', 'root', '', 'test');
    $query = "UPDATE pricing SET sku=".$_POST['sku']." , product_name ='".$_POST['productname']."',price=".$_POST['price'].",date='".$_POST['date']."' WHERE store_id=".$_POST['store_id'];


    $res = mysqli_query($connection, $query);

    if($res){
        echo json_encode(['status'=>200,'msg'=>'data updated...']);exit;
    }
    echo json_encode(['status'=>400,'msg'=>'error']);exit;
}else{
    $connection = mysqli_connect('localhost', 'root', '', 'test');
    $query = "SELECT * FROM pricing where store_id=".$_GET['id'];

    $res = mysqli_query($connection, $query);

    $response=[];
    while ($row = mysqli_fetch_assoc($res)) {
        $response['storeId'] = $row['store_id'];
        $response['sku'] = $row['sku'];
        $response['productName'] = $row['product_name'];
        $response['price'] = $row['price'];
        $response['date'] = $row['date'];
    }
    

    echo json_encode([$response]);
}