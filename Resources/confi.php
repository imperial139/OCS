<?php


$con=mysqli_connect('localhost','root','','ocsdatabase');

 if(mysqli_connect_errno())
{
    echo "database bot connected";
}
else{
    echo "database conntect";
}


?>