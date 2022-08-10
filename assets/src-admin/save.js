/**
 * External dependencies
 */
import { get, times, has, includes, escape, filter, assign } from 'lodash';
import allowedEqualHeightsBlocks from './allowedEqualHeightsBlocks';

/**
 * WordPress dependencies
 */
const { addFilter } = wp.hooks;

/**
 * A filter that applies to the block returning a WP Element in the save function.
 * This filter is used to add extra props to the root element of the save function.
 *
 * @param  	{Object} 	extraProps 		Additional props applied to save element.
 * @param  	{Object} 	blockType  		Block type.
 * @param  	{Object} 	attributes 		Current block attributes.
 * @return 	{Object}            		Filtered props applied to save element.
 */
function addSaveEqualHeightsProps( extraProps, blockType, attributes ) {
	const extraAttrs = {};
	const { equalBlockHeightBool: equalBlockHeightBool, equalBlockHeightKey: equalBlockHeightKey } = attributes;

	if ( includes( allowedEqualHeightsBlocks, blockType.name ) ) {
		if ( attributes.equalBlockHeightBool ){
			extraAttrs['data-equal-height'] = ( attributes.equalBlockHeightKey ) ? attributes.equalBlockHeightKey : '';
		}
	}

	return assign( extraProps, extraAttrs );
}

addFilter( 'blocks.getSaveContent.extraProps', 'wp-block-animations/save', addSaveEqualHeightsProps );
