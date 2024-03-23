<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(isset($_POST['submit'])){
    if(!empty($_POST['name']) && !empty($_POST['name']) && !empty($_POST['name'])){
        //i'd write this code later
    }else{
        echo"Error";
    }
}
?>