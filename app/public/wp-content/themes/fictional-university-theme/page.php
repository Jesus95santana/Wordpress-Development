<?php echo get_header(); ?>


<?php
while ( have_posts() ) :
	the_post();
	pageBanner(
		array(
			//  'title'    => 'Hello This is title',
			//  'subtitle' => 'Hi, This is the subtitle',
			//  'photo'    => 'data:image/jpeg;base64,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',
		)
	);
	?>


    <div class="container container--narrow page-section">
		<?php
		$the_parent = wp_get_post_parent_id( get_the_ID() );
		if ( wp_get_post_parent_id() ) :
			?>
            <div class="metabox metabox--position-up metabox--with-home-link">
                <p>
                    <a class="metabox__blog-home-link"
                       href="<?php echo get_permalink( wp_get_post_parent_id() ); ?>"><i
                                class="fa fa-home"
                                aria-hidden="true"></i> Back to
						<?php echo get_the_title( wp_get_post_parent_id() ); ?></a> <span
                            class="metabox__main"><?php the_title(); ?></span>
                </p>
            </div>
		<?php endif; ?>

		<?php
		$test_array = get_pages(
			array(
				'child_of' => get_the_ID(),
			)
		);
		if ( $the_parent || $test_array ) :
			?>
            <div class="page-links">
                <h2 class="page-links__title"><a href="<?php echo get_permalink( $the_parent ); ?>">
						<?php echo get_the_title( $the_parent ); ?>
                    </a>
                </h2>
                <ul class="min-list">
					<?php
					if ( true ) {
						if ( $the_parent ) {
							$find_children_of = $the_parent;
						} else {
							$find_children_of = get_the_ID();
						}
						wp_list_pages(
							array(
								'title_li'    => null,
								'child_of'    => $find_children_of,
								'sort_column' => 'menu_order',
							)
						);
					}
					?>
                </ul>

            </div>
		<?php endif ?>
        <div class="generic-content">
			<?php the_content(); ?>
        </div>
    </div>


<?php endwhile; ?>


<?php
get_footer();