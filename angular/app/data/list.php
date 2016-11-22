<?php
  echo 'jinru';
  $conn = mysqli_connect('127.0.0.1','root','','fontdata');
  $sql = "set names utf8";
  mysqli_query($conn,$sql);
  $sql = "select * from tb_list";
  $result = mysqli_query($conn,$sql);

  if($result){
    $output['result'] = '0';
    while(($row=mysqli_fetch_assoc($result)) !== null){
      $output['data'] = $row;
    }
  }else{
    $output['reulst'] = '-1';
    $output['data'] = 'you are foolish!';
  }
  echo json_encode($output);
?>
