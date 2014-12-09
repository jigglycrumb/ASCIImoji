<?php

  header('Cache-Control: no-cache, must-revalidate');
  header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
  header('Content-type: application/json');

  $words = trim($_POST['words']);
  $ascii = trim($_POST['ascii']);

  if( strlen($words) > 0 and strlen($ascii) > 0) {

    require_once('config.php'); // contains $db and $email_to

    $res = mysql_connect($db['host'], $db['user'], $db['pass']);

    mysql_query("SET NAMES 'utf8'");
    mysql_select_db($db['name']);

    $sql = "INSERT INTO submissions (words,ascii,added) VALUES('".$words."','".$ascii."',".time().")";
    mysql_query($sql, $res);
    $id = mysql_insert_id();
    $response = array('success'=>false);
    if($id > 0 ) {
      $response = array('success'=>true);
      $subject = 'ASCIImoji - new emoticon submitted';
      $message = 'Someone submitted a new ASCIImoji emoticon!
Words: '.$words.'
ASCII: '.$ascii;

      mail($email_to, $subject, $message);
    }
    echo json_encode($response);
  }

  exit;
?>