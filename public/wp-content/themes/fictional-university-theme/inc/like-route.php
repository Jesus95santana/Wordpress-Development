<?php

add_action( 'rest_api_init', 'universityLikeRoutes' );

function universityLikeRoutes() {
	register_rest_route(
		'university/v1',
		'manageLike',
		array(
			'methods'  => 'POST',
			'callback' => 'createLike',
		)
	);
	register_rest_route(
		'university/v1',
		'manageLike',
		array(
			'methods'  => 'DELETE',
			'callback' => 'deleteLike',
		)
	);
}

function createLike() {
	return 'Thank For like!';
}

function deleteLike() {
	return 'Thank For not like!';
}