<?php
function insertData($a,$b,$c,$d,$e,$f){
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost:3306", "demo1_user", "12345", "Sunbright-Consultancy");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Attempt insert query execution
$sql = "INSERT INTO queries (name, mobile, email,course,branch,message) VALUES ('$a','$b','$c','$d','$e','$f')";
if(mysqli_query($link, $sql)){
     return "Successfully added row";
} else{
    return "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
}

 header('Content-Type: application/json');

    $aResult = array();

  
   if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

    if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

    if( !isset($aResult['error']) ) {

        switch($_POST['functionname']) {
            case 'insertData':
               if( !is_array($_POST['arguments']) || (count($_POST['arguments']) < 6) ) {
                   $aResult['error'] = 'Error in arguments!';
               }
               else {
        
                   $aResult['result'] = insertData($_POST['arguments'][0], intval($_POST['arguments'][1]),$_POST['arguments'][2], 
                                                  $_POST['arguments'][3],$_POST['arguments'][4],$_POST['arguments'][5]);
               }
               break;

               default:
                 $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
                 break;
        }

    }

    echo json_encode($aResult);

?>