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

// Register new blocks
function new_blocks() {
	register_block_type_from_metadata(__DIR__ . '/build/sd-banner');
	register_block_type_from_metadata(__DIR__ . '/build/sd-heading');
	register_block_type_from_metadata(__DIR__ . '/build/sd-paragraph');
	register_block_type_from_metadata(__DIR__ . '/build/sd-button');
}

add_action('init', 'new_blocks');

