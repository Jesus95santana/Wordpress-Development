<?php
function university_files() {

	wp_enqueue_script(
		'main-university-js',
		get_theme_file_uri( '/build/index.js' ),
		array( 'jquery' ),
		'1.0',
		true
	);
	wp_enqueue_style(
		'google-fonts',
		'//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i',
	);
	wp_enqueue_style(
		'font-awesome',
		'//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
	);
	wp_enqueue_style( 'university_main_styles', get_theme_file_uri( '/build/style-index.css' ) );
	wp_enqueue_style( 'university_extra_styles', get_theme_file_uri( '/build/index.css' ) );
}


add_action( 'wp_enqueue_scripts', 'university_files' );

function university_features() {
	register_nav_menu( 'headerMenuLocation', 'Header Menu Location' );
	register_nav_menu( 'footerLocation1', 'Footer Location One' );
	register_nav_menu( 'footerLocation2', 'Footer Location Two' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'editor-styles' );
	add_editor_style(
		array(
			'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i',
			'build/style-index.css',
			'build/index.css',
		)
	);
}


add_action( 'after_setup_theme', 'university_features' );
//function bannerBlock() {
//  wp_register_script(
//      'bannerBlockScript',
//      get_stylesheet_directory_uri() . '/build/banner.js',
//      array( 'wp-blocks', 'wp-editor' )
//  );
//  register_block_type(
//      'ourblocktheme/banner',
//      array(
//          'editor_script' => 'bannerBlockScript',
//      )
//  );
//}
//
//add_action( 'init', 'bannerBlock' );

class JSXBlock {
	public function __construct( $name, $renderCallback = null, $data = null ) {
		$this->name           = $name;
		$this->data           = $data;
		$this->renderCallback = $renderCallback;
		add_action( 'init', array( $this, 'onInit' ) );
	}

	public function ourRenderCallback( $attributes, $content ) {
		ob_start();
		require get_theme_file_path( "/our-blocks/{$this->name}.php" );

		return ob_get_clean();
	}

	public function onInit() {
		wp_register_script(
			$this->name,
			get_stylesheet_directory_uri() . "/build/{$this->name}.js",
			array( 'wp-blocks', 'wp-editor' )
		);
		if ( $this->data ) {
			wp_localize_script( $this->name, $this->name, $this->data );
		}
		$ourArgs = array(
			'editor_script' => $this->name,
		);

		if ( $this->renderCallback ) {
			$ourArgs['render_callback'] = array( $this, 'ourRenderCallback' );
		}

		register_block_type(
			"ourblocktheme/{$this->name}",
			$ourArgs
		);
	}
}

new JSXBlock(
	'banner',
	true,
	array( 'fallbackimage' => get_theme_file_uri( '/images/library-hero.jpg' ) )
);


class PlaceholderBlock {
	public function __construct( $name ) {
		$this->name = $name;

		add_action( 'init', array( $this, 'onInit' ) );
	}

	public function ourRenderCallback( $attributes, $content ) {
		ob_start();
		require get_theme_file_path( "/our-blocks/{$this->name}.php" );

		return ob_get_clean();
	}

	public function onInit() {
		wp_register_script(
			$this->name,
			get_stylesheet_directory_uri() . "/our-blocks/{$this->name}.js",
			array( 'wp-blocks', 'wp-editor' )
		);

		register_block_type(
			"ourblocktheme/{$this->name}",
			array(
				'editor_script'   => $this->name,
				'render_callback' => array( $this, 'ourRenderCallback' ),
			)
		);
	}
}

new JSXBlock( 'genericheading' );
new JSXBlock( 'genericbutton' );
new JSXBlock( 'slideshow', true );
new JSXBlock( 'slide', true );

new PlaceholderBlock( 'eventsandblogs' );
new PlaceholderBlock( 'header' );
new PlaceholderBlock( 'footer' );
