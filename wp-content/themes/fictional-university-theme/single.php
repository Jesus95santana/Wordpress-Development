<?php echo get_header(); ?>


	<h1>I am a single Blog Page</h1>
<?php
while ( have_posts() ) :
	the_post();
	?>
	<h2><?php the_title(); ?></h2>
	<p><?php the_content(); ?></p>
	<hr>


<?php endwhile; ?>


<?php
get_footer();

