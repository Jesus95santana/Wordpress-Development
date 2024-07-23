<?php

// Register new blocks
function new_blocks() {
	register_block_type_from_metadata(__DIR__ . '/build/banner');
}

add_action('init', 'new_blocks');

