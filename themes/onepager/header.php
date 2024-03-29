<!DOCTYPE html>
<html id="totop" <?php language_attributes(); ?> class="no-js" data-path="<?php echo esc_url( get_template_directory_uri() ); ?>">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body>
		<div class="outer">
			<ul id="skiplinks">
				<li><a class="show-on-focus" href="#main-menu">Zum Hauptmenü</a></li>
				<li><a class="show-on-focus" href="#search">Zur Suche</a></li>
				<li><a class="show-on-focus" href="#content">Zum Inhalt</a></li>
				<li><a class="show-on-focus" href="#footer">Zu den Service-Informationen</a></li>
			</ul>

				<header class="header">
					<div class="section header-container">
					<nav class="main-nav">
						<button class="menu-button toggle" data-for="main-menu" title="Menü ein-/ausblenden" aria-haspopup="true" aria-expanded="false">
						<svg role="img" class="symbol" aria-hidden="true" focusable="false"><use xlink:href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons.svg#menu"></use></svg>
						<span class="menu-button-label">Menü</span>
					</button>
							<ul id="main-menu">
										<?php
										wp_nav_menu(
											array(
												'theme_location' => 'main-nav',
												'walker' => new Simple_Nav_Walker(),
												'container' => '',
												'items_wrap' => '%3$s',
												'depth'  => 1,
											)
										);
										?>
						  </ul>
					 </nav>
					 <nav class="social-nav">
				 <ul id="social-menu">
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'social-nav',
										'walker'         => new Social_Nav_Walker(),
										'container'      => '',
										'items_wrap'     => '%3$s',
										'depth'          => 1,
									)
								);
								?>
				 </ul>
			   </nav>
			 </div>
			<div class="logos">
				 <img class="beans" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/beans-a-books-logo.svg" alt="">
				 <img class="pfennigparade" src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/pp-logo.svg" alt="">
			  </div>
				</header>
