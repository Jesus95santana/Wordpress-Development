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
}


add_action( 'after_setup_theme', 'university_features' );


######### This part filters out any files that shouldnt be exported within all-in-one wp migration
add_filter( 'ai1wm_exclude_content_from_export', 'ignoreCertainFiles' );
function ignoreCertainFiles( $exclude_filters ) {
	$exclude_filters[] = 'themes/fictional-university-theme/node_modules';

	return $exclude_filters;
}
