<?php
namespace EqualBlockHeights\Activation;

class Dependencies
{
	public function __construct()
	{
		add_action('admin_init', [$this, 'registerAdminScripts']);
		add_action('wp_enqueue_scripts', [$this, 'scripts']);
	}

	/**
	* Enqueue the Admin Scripts
	*/
	public function registerAdminScripts()
	{	
		$script_deps = apply_filters('wp_equal_block_heights_script_dependencies', ['wp-blocks', 'wp-dom-ready', 'lodash', 'wp-editor']);
		$dep = [
			'dependencies' => $script_deps,
			'version' => WP_EQUAL_BLOCK_HEIGHTS_VERSION
		];
		wp_enqueue_script(
			'wp-equal-block-heights-editor',
			WP_EQUAL_BLOCK_HEIGHTS_DIRECTORY . '/assets/dist/script_admin.js',
			$dep['dependencies'],
			$dep['version']
		);
	}

	/**
	* Enqueue the Front end scripts
	*/
	public function scripts()
	{
		wp_enqueue_script(
			'equal-block-heights-scripts',
			WP_EQUAL_BLOCK_HEIGHTS_DIRECTORY . '/assets/dist/script.js',
			[],
			WP_EQUAL_BLOCK_HEIGHTS_VERSION,
			true
		);
	}
}