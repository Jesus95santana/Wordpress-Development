<?php echo get_header(); ?>


<?php
while ( have_posts() ) :
	the_post();
	?>
	<div class="page-banner">
		<div class="page-banner__bg-image"
			style="background-image: url(<?php echo get_theme_file_uri( '/images/ocean.jpg' ); ?>)"></div>
		<div class="page-banner__content container container--narrow">
			<h1 class="page-banner__title"><?php the_title(); ?></h1>
			<div class="page-banner__intro">
				<p>Dont forget to place me later.</p>
			</div>
		</div>
	</div>

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