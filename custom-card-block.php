<?php
/**
 * Plugin Name:       Custom Card Block
 * Description:       A custom Gutenberg card block with image, title, description, and button.
 * Version:           1.0.0
 * Author:            Your Name
 * License:           GPL-2.0-or-later
 * Text Domain:       custom-card-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the block using block.json metadata.
 */
function custom_card_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'custom_card_block_init' );
