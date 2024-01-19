<?php

$names = [
    'brad',
    'john',
    'meow'
];
function loopNames($array) {
    foreach ($array as $index=>$name) {
        echo "<h1>Hi, my name is $name</h1>";
        echo "<p>There are $index in arrays</p>";
    }
}
?>

<?= loopNames($names);?>