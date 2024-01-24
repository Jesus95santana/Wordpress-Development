<?php

/**
 * Plugin Name: Are you paying attention quiz
 * Description: Gives your readers a multiple choice question.
 * Version: 1.0
 * Author: Monkey
 * Author URI: www.google.com
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

class areYouPayingAttention {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'admin_assets' ) );
	}

	public function admin_assets() {
		wp_enqueue_script(
			'ournewblocktype',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			array( 'wp-blocks', 'wp-element' )
		);
	}
}

$are_you_paying_attention = new areYouPayingAttention();
