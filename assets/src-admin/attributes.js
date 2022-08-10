/**
 * External dependencies
 */
import { assign, includes, isUndefined } from 'lodash';
import allowedEqualHeightsBlocks from './allowedEqualHeightsBlocks';

/**
 * WordPress dependencies
 */
const { addFilter } = wp.hooks;

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param 	{Object}   blockSettings    Original block settings.
 * @return 	{Object} 			   		Filtered block settings.
 */
function addEqualHeightsAttributes( blockSettings ) {
	if ( isUndefined( blockSettings.attributes ) || ! includes( allowedEqualHeightsBlocks, blockSettings.name ) )
		return blockSettings;

	return assign( {}, blockSettings, {
		attributes: assign( {}, blockSettings.attributes, {
			equalBlockHeightBool: {
				type: 'boolean',
				default: false,
			},
			equalBlockHeightKey: {
				type: 'text',
				default: '',
			},
		} ),
	} );
}

addFilter( 'blocks.registerBlockType', 'wp-equal-block-heights/attributes', addEqualHeightsAttributes );
