<?php
session_start();
@include 'confi.php';
if (isset($_POST['submit'])) {
    $username=$_POST['name'];
    $pass=$_POST['password'];

    $user_find=" select * from ocsdatabase where username='$username' ";
    $result=mysqli_query($con,$user_find);
    $user_count=mysqli_num_rows($result);
    if ($user_count) {
        $user=mysqli_fetch_assoc($result);
        $database_pass=$user_pass[`password`];
        $pass_decode=password_verify($pass,$database_pass);
        if($pass_decode){
            echo "login Successfully";
        }
        else{
            echo"Incorrect Password";
        }
    }
    else{
        echo"Wrong Email";
    }