<?php
$db = new mysqli("127.0.0.1", "root", "8KSfUUEmZ4xWiujS@xU&I@x*nKChc&", "short");
if(!isset($_GET['short'])) {
    header("Location: /404");
    die();
}
$short = $_GET['short'];
$sql = "SELECT url FROM links WHERE title='".$db->real_escape_string($_GET['short'])."'";
$result = $db->query($sql);

if($result->num_rows == 0) {
    header("Location: /404");
    die();
}

$row = mysqli_fetch_assoc($result);
header("Location: ".$row['url']);
?>