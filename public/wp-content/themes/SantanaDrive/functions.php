<?php
// Registering Files
function santanadrive_files() {
	wp_enqueue_style( 'university_main_styles', get_theme_file_uri( '/build/style-index.css' ) );
}

add_action( 'wp_enqueue_scripts', 'santanadrive_files' );


// Adding Blocks
function bannerFunction() {
	wp_register_script( 'bannerScriptName', get_stylesheet_directory_uri() . '/build/banner.js', array( 'wp-blocks', 'wp-editor' ) );
	register_block_type( 'blocktheme/banner', array(
		'editor_script' => 'bannerScriptName',
	) );
}

add_action( 'init', 'bannerFunction' );