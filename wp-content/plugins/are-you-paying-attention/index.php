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
		wp_register_script(
			'ournewblocktype',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			array( 'wp-blocks', 'wp-element' )
		);
		register_block_type(
			'ourplugin/are-you-paying-attention',
			array(
				'editor_script'   => 'ournewblocktype',
				'render_callback' => array( $this, 'the_html' ),
			)
		);
	}

	public function the_html( $attributes ) {
		ob_start(); ?>
		<p>
			Today the sky is <?php echo esc_html( $attributes['skyColor'] ); ?> and the grass is
			<?php echo esc_html( $attributes['grassColor'] ); ?>!!!!
		</p>
		<?php
		return ob_get_clean();
	}
}

$are_you_paying_attention = new areYouPayingAttention();
