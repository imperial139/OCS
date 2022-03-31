<?php
 
@include 'confi.php';
if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($con, $_POST['fullname']);
    $contact =  mysqli_real_escape_string($con, $_POST['contact']); 
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $cpass =mysqli_real_escape_string($con, $_POST['cpass']);
    $user_type = mysqli_real_escape_string($con, $_POST['format']);
    $gender=mysqli_real_escape_string($con, $_POST['gender']);

    $bipass=password_hash($password,PASSWORD_BCRYPT);
    $bicpass=password_hash($cpass,PASSWORD_BCRYPT);
    $emailfind=" select * from userdetails where email='$email'";
    $query=mysqli_query($con,$emailfind);
    $emailcount=mysqli_num_rows($query);
    if($emailcount>0){
        echo "email already there";
    }else{
        if($password==$cpass){
            $select = "INSERT INTO `userdetails`(`Name`, `contact_no`, `email`, `username`, `password`, `cpass`, `user_type`, `gender`)
            VALUES ('[ $name]','[$contact]','[$email]','[$username]','[$bipass]','[$bicpass]','[$user_type]','[$gender]')";
            $quer=mysqli_query($con,$select);
            if($quer){
                ?>
    <script>
        alert("succesfully register thanju");
    </script>
    <?php
            }
            else{
                ?>
        <script>
            alert("something went wrongs");
        </script>
        <?php
            }
        }
        else{
            echo " password are not matching";
        }
    }





    // $select = "INSERT INTO `userdetails`(`Name`, `contact_no`, `email`, `username`, `password`, `comfirmpass`, `user_type`, `gender`)
    //  VALUES ('[ $name]','[$contact]','[$email]','[$username]','[$password]','[$cpass]','[$user_type]','[]')"; 
}


?>