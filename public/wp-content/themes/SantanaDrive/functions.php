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

class JSXBlock {
	function __construct( $name ) {
		$this->name = $name;
		add_action( 'init', [ $this, 'onInit' ] );
	}

	function onInit() {
		wp_register_script( $this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array( 'wp-blocks', 'wp-editor' ) );
		register_block_type( "blocktheme/{$this->name}", array(
			'editor_script' => "{$this->name}",
		) );
	}
}

new JSXBlock( 'banner' );
new JSXBlock( 'genericheading' );
new JSXBlock( 'genericbutton' );