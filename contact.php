<?php
if (!is_dir("messages")) {
  mkdir("messages");
}
$count = count(glob("messages/*"));
$file = fopen("messages/" . ($count + 1) . ".txt", "w");
fwrite($file, $_POST["name"] . "\n");
fwrite($file, $_POST["email"] . "\n");
fwrite($file, $_POST["message"]);
fclose($file);
?>
