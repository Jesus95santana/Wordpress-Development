<?php

/**
 * Plugin Name: Our Word Filter Plugin
 * Description: Replaces a list of words..
 * Version: 1.0
 * Author: Monkey
 * Author URI: www.google.com
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

class OurWordFilterPlugin {
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'our_menu' ) );
	}

	public function our_menu() {
		$main_page_hook = add_menu_page(
			'Words To Filter',
			'Word Filter',
			'manage_options',
			'ourwordfilter',
			array( $this, 'word_filter_page' ),
			//'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAyMEMxNS41MjI5IDIwIDIwIDE1LjUyMjkgMjAgMTBDMjAgNC40NzcxNCAxNS41MjI5IDAgMTAgMEM0LjQ3NzE0IDAgMCA0LjQ3NzE0IDAgMTBDMCAxNS41MjI5IDQuNDc3MTQgMjAgMTAgMjBaTTExLjk5IDcuNDQ2NjZMMTAuMDc4MSAxLjU2MjVMOC4xNjYyNiA3LjQ0NjY2SDEuOTc5MjhMNi45ODQ2NSAxMS4wODMzTDUuMDcyNzUgMTYuOTY3NEwxMC4wNzgxIDEzLjMzMDhMMTUuMDgzNSAxNi45Njc0TDEzLjE3MTYgMTEuMDgzM0wxOC4xNzcgNy40NDY2NkgxMS45OVoiIGZpbGw9IiNGRkRGOEQiLz4KPC9zdmc+Cg==',
			plugin_dir_url( __FILE__ ) . 'custom.svg',
			100
		);
		add_submenu_page(
			'ourwordfilter',
			'Words To Filter',
			'Words List',
			'manage_options',
			'ourwordfilter',
			array( $this, 'word_filter_page' ),
			7
		);
		add_submenu_page(
			'ourwordfilter',
			'Word Filter Options',
			'Options',
			'manage_options',
			'word-filter-options',
			array( $this, 'options_sub_page' ),
			7
		);
		add_action( "load-{$main_page_hook}", array( $this, 'main_page_assets' ) );
	}

	public function main_page_assets() {
		wp_enqueue_style( 'filter_admin_css', plugin_dir_url( __FILE__ ) . 'styles.css' );
	}

	public function word_filter_page() {
		?>
		<div class="wrap">
			<h1>Word Filter</h1>
			<form method="POST">
				<label for="plugin_words_to_filter">
					<p>Enter a <strong>comma-seperated</strong> list
						of words to filter from your site's content.</p>
				</label>
				<div class="word-filter__flex-container">
					<textarea name="plugin_words_to_filter" id="plugin_words_to_filter"
								placeholder="la, la, la, la">
					</textarea>
				</div>
				<input type="submit" name="submit" id="submit" class="button button-primary"
						value="Save Changes">
			</form>
		</div>
		<?php
	}

	public function options_sub_page() {
		?>
		Hello World From Optioons page
		<?php
	}
}

$our_word_filter_plugin = new OurWordFilterPlugin();