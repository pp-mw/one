<?php
/**
 * Template Name: Einzelseite
 */

get_header();
the_post();
?>
<main id="content">
	<section id="single-page" class="row">
		<div class="section">
		<?php
		the_title( '<h1>', '</h1>' );
		the_flexible_content( 'flexible' );
		?>
	</div>
	</section>
</main>
<?php
get_footer();
