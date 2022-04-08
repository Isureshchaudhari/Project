<?php
session_start();

$con = mysqli_connect('localhost','root');

mysqli_select_db($con, 'userRegisteration');

$name = $_POST['username'];
$email= $_POST['Email'];
$pass = $_POST['password'];

$s = "select * from usertable where name = '$name'";

$result = mysqli_query($con,$s);

$num = mysqli_num_rows($result);

if($num ==1){
    echo"username aleready taken";
}
else{
    $reg = "insert into usertable(username,Email,password) values ('$name','$email','$pass')";
    mysqli_query($con,$reg);
    echo "Registeration Successful";
}

?>