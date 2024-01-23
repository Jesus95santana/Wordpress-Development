<?php
/**
 * Plugin Name: Our Test Plugin
 * Description: A truly amazing plugin.
 * Version: 1.0
 * Author: Monkey
 * Author URI: www.google.com
 */


class WordCountAndTimePlugin {
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_page' ) );
		add_action( 'admin_init', array( $this, 'settings' ) );
	}

	public function settings() {
		add_settings_section( 'wcp_first_section', null, null, 'word-count-settings-page' );
		# Location Text
		add_settings_field(
			'wcp_location',
			'Display Location',
			array( $this, 'location_html' ),
			'word-count-settings-page',
			'wcp_first_section'
		);
		register_setting(
			'wordcountplugin',
			'wcp_location',
			array(
				'sanitize_callback' => array( $this, 'sanitize_location' ),
				'default'           => '0',
			)
		);

		# Headline
		add_settings_field(
			'wcp_headline',
			'Headline Text',
			array( $this, 'headline_html' ),
			'word-count-settings-page',
			'wcp_first_section'
		);
		register_setting(
			'wordcountplugin',
			'wcp_headline',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => 'Post Statistics',
			)
		);

		# WordCount
		add_settings_field(
			'wcp_wordcount',
			'Word Count',
			array( $this, 'checkbox_html' ),
			'word-count-settings-page',
			'wcp_first_section',
			array( 'theName' => 'wcp_wordcount' )
		);
		register_setting(
			'wordcountplugin',
			'wcp_wordcount',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => '1',
			)
		);

		# Character Count
		add_settings_field(
			'wcp_charactercount',
			'Character Count',
			array( $this, 'checkbox_html' ),
			'word-count-settings-page',
			'wcp_first_section',
			array( 'theName' => 'wcp_charactercount' )
		);
		register_setting(
			'wordcountplugin',
			'wcp_charactercount',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => '1',
			)
		);

		# Read Time
		add_settings_field(
			'wcp_readtime',
			'Read Time',
			array( $this, 'checkbox_html' ),
			'word-count-settings-page',
			'wcp_first_section',
			array( 'theName' => 'wcp_readtime' )
		);
		register_setting(
			'wordcountplugin',
			'wcp_readtime',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => '1',
			)
		);
	}

	/**
	 * # Old Code
	 * public function readtime_html() {
	 * ?>
	 * <input type="checkbox" name="wcp_readtime"
	 * value="1" <?php checked( get_option( 'wcp_readtime' ), 1 ); ?>>
	 * <?php
	 * }
	 *
	 * public function charactercount_html() {
	 * ?>
	 * <input type="checkbox" name="wcp_charactercount"
	 * value="1" <?php checked( get_option( 'wcp_charactercount' ), 1 ); ?>>
	 * <?php
	 * }
	 *
	 * public function wordcount_html() {
	 * ?>
	 * <input type="checkbox" name="wcp_wordcount"
	 * value="1" <?php checked( get_option( 'wcp_wordcount' ), 1 ); ?>>
	 * <?php
	 * }
	 */

	public function sanitize_location( $input ) {
		if ( $input !== '0' && $input !== '1' ) {
			add_settings_error(
				'wcp_location',
				'wpc_location_error',
				'Display Location must be beginning or end'
			);

			return get_option( 'wcp_location' );
		}

		return $input;
	}

	public function checkbox_html( $args ) {

		?>
		<input type="checkbox" name="<?php echo $args['theName']; ?>"
				value="1" <?php checked( get_option( $args['theName'], 1 ) ); ?>>
		<?php
	}

	public function headline_html() {
		?>
		<input type="text" name="wcp_headline"
				value="<?php echo esc_attr( get_option( 'wcp_headline' ) ); ?>">
		<?php
	}

	public function location_html() {
		?>
		<select name="wcp_location">
			<option value="0" <?php selected( get_option( 'wcp_location' ), '0' ); ?>>Beginning of
				post
			</option>
			<option value="1" <?php selected( get_option( 'wcp_location' ), '1' ); ?> >End of post
			</option>
		</select>
		<?php
	}

	public function admin_page() {
		add_options_page(
			'Word Count Settings',
			'Word Count',
			'manage_options',
			'word-count-settings-page',
			array( $this, 'our_html' )
		);
	}

	public function our_html() {
		?>
		<div class="wrap">
			<h1>Word Count Settings</h1>
			<form action="options.php" method="POST">
				<?php
				settings_fields( 'wordcountplugin' );
				do_settings_sections( 'word-count-settings-page' );
				submit_button();
				?>
			</form>
		</div>
		<?php
	}
}

$wordCountAndTimePlug = new WordCountAndTimePlugin();



