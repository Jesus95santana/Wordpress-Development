<?php
function university_post_types() {
	// Event Post Type
	register_post_type(
		'event',
		array(
			'capability_type' => 'event',
			'map_meta_cap'    => true,
			'supports'        => array( 'title', 'editor', 'excerpt' ),
			'rewrite'         => array( 'slug' => 'events' ),
			'has_archive'     => true,
			'public'          => true,
			'show_in_rest'    => true,
			'labels'          => array(
				'name'          => 'Events',
				'add_new_item'  => 'Add New Event',
				'edit_item'     => 'Edit Event',
				'all_items'     => 'All Events',
				'singular_name' => 'Event',
			),
			'menu_icon'       => 'dashicons-calendar',
		)
	);

	// Program Post Type
	register_post_type(
		'program',
		array(
			'supports'     => array( 'title', 'editor' ),
			'rewrite'      => array( 'slug' => 'programs' ),
			'has_archive'  => true,
			'public'       => true,
			'show_in_rest' => true,
			'labels'       => array(
				'name'          => 'Programs',
				'add_new_item'  => 'Add New Program',
				'edit_item'     => 'Edit Program',
				'all_items'     => 'All Programs',
				'singular_name' => 'Program',
			),
			'menu_icon'    => 'dashicons-awards',
		)
	);

	// Professor Post Type
	register_post_type(
		'professor',
		array(
			'show_in_rest' => true,
			'supports'     => array( 'title', 'thumbnail' ),
			'public'       => true,
			'labels'       => array(
				'name'          => 'Professors',
				'add_new_item'  => 'Add New Professor',
				'edit_item'     => 'Edit Professor',
				'all_items'     => 'All Professors',
				'singular_name' => 'Professor',
			),
			'menu_icon'    => 'dashicons-welcome-learn-more',
		)
	);

	// Note Post Type
	register_post_type(
		'note',
		array(
			'capability_type' => 'note',
			'map_meta_cap'    => 'true',
			'show_in_rest'    => true,
			'supports'        => array( 'title', 'editor' ),
			'public'          => false,
			'show_ui'         => true,
			'labels'          => array(
				'name'          => 'Notes',
				'add_new_item'  => 'Add New Note',
				'edit_item'     => 'Edit Note',
				'all_items'     => 'All Notes',
				'singular_name' => 'Note',
			),
			'menu_icon'       => 'dashicons-welcome-write-blog',
		)
	);
}

add_action( 'init', 'university_post_types' );
