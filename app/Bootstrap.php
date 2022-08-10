<?php 
namespace EqualBlockHeights;

/**
* Primary Plugin class
*/
class Bootstrap 
{
	function __construct()
	{
		$this->defineGlobals();
		$this->pluginInit();
	}

	/**
	* Define Globals
	*/
	public function defineGlobals()
	{
		define('WP_EQUAL_BLOCK_HEIGHTS_VERSION', '1.0.1');
		define('WP_EQUAL_BLOCK_HEIGHTS_DIRECTORY', plugins_url() . '/' . basename(dirname(dirname(__FILE__))));
		define('WP_EQUAL_BLOCK_HEIGHTS_VERSION_PATH', dirname(dirname(__FILE__)));
	}

	public function pluginInit()
	{
		new Activation\Dependencies;
	}
}