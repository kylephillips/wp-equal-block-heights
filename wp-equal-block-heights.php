<?php
/*
Plugin Name: Equal Block Heights
Plugin URI: https://github.com/kylephillips/wp-equal-block-heights
Description: Adds ability to make blocks of a given key the same height.
Version: 1.0.1
Author: Kyle Phillips
Author URI: https://github.com/kylephillips
License: GPL
*/
$loader = require_once(__DIR__ . '/vendor/autoload.php');
require_once(__DIR__ . '/app/Bootstrap.php');
new EqualBlockHeights\Bootstrap;