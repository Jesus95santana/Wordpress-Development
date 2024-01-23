<?php
/**
 * Plugin Name: Our Test Plugin
 * Description: A truly amazing plugin.
 * Version: 1.0
 * Author: Monkey
 * Author URI: www.google.com
 */

# This code generates a basic text under the content of a Page

//add_filter( 'the_content', 'add_to_end_of_post' );
//
//function add_to_end_of_post( $content ) {
//  if ( is_page() && is_main_query() ) {
//      return $content . '<p>This is a plugin at the end of Content</p>';
//  }
//
//  return $content;
//}

class WordCountAndTimePlugin {
	function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_page' ) );
	}

	function admin_page() {
		add_options_page(
			'Word Count Settings',
			'Word Count',
			'manage_options',
			'word-count-settings-page',
			array( $this, 'our_HTML' )
		);
	}

	function our_HTML() {
		?>
		<div class="wrap">
			<h1>Word Count Settings</h1>
		</div>
		<?php
	}
}

$wordCountAndTimePlug = new WordCountAndTimePlugin();



