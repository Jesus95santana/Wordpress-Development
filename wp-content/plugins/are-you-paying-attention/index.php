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
		add_action( 'init', array( $this, 'admin_assets' ) );
	}

	public function admin_assets() {
		register_block_type(
			__DIR__,
			array(
				'render_callback' => array( $this, 'the_html' ),
			)
		);
	}

	public function the_html( $attributes ) {

		ob_start(); ?>
		<div class="paying-attention-update-me">
			<pre style="display: none;"><?php echo wp_json_encode( $attributes ); ?></pre>
		</div>
		<?php
		return ob_get_clean();
	}
}

$are_you_paying_attention = new areYouPayingAttention();
