<?php

// Registering Files
function santanadrive_files() {
	wp_enqueue_style( 'main_styles', get_theme_file_uri( '/build/style-index.css' ) );
	// Enqueue Tailwind CSS
	wp_enqueue_style( 'tailwind_styles', get_theme_file_uri( '/build/tailwind.css' ) );
}

add_action( 'wp_enqueue_scripts', 'santanadrive_files' );

function features() {
	add_theme_support( 'editor-styles' );
	add_editor_style( array( 'build/style-index.css', 'build/tailwind.css' ) );
}

add_action( 'after_setup_theme', 'features' );

// Adding Blocks
function bannerFunction() {
	wp_register_script( 'bannerScriptName', get_stylesheet_directory_uri() . '/build/banner.js', array( 'wp-blocks', 'wp-editor' ) );
	register_block_type( 'blocktheme/banner', array(
		'editor_script' => 'bannerScriptName',
	) );
}

add_action( 'init', 'bannerFunction' );