<?php
  include('./library/conn.php');

  $id = $_REQUEST['id'];

  $sql = "select * from product1 where id=$id";

  $res = $mysql->query($sql);

  $row = $res->fetch_assoc();

  echo json_encode($row);

?>