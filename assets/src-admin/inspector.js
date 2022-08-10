/**
 * External dependencies
 */
import { get, times, slice, assign, escape, includes } from 'lodash';
import withSelect from './withSelect';
import allowedEqualHeightsBlocks from './allowedEqualHeightsBlocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, BaseControl, HorizontalRule, ToggleControl, TextControl, RangeControl } = wp.components;

/**
 * Used to modify the block’s edit component.
 * It receives the original block BlockEdit component and returns a new wrapped component.
 *
 * @param  	{Function} 	BlockEdit 		Original component.
 * @return 	{string}            		Wrapped component.
 */
const addBlockHeightControls = createHigherOrderComponent( ( BlockEdit ) => {
	return withSelect( ( { ...props } ) => {
		const { attributes, setAttributes, isSelected, getSelectedBlock } = props;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ isSelected && (
					<Fragment>
						{ includes( allowedEqualHeightsBlocks, getSelectedBlock.name ) && (
							<InspectorControls>
								<PanelBody
									title={ __( 'Equal Heights', 'wp-equal-block-heights' ) }
									initialOpen={ false }
								>
									<Fragment>
										<HorizontalRule />
										<BaseControl>
											<ToggleControl
												label={ __( 'Include Equal Height', 'block-data-attribute' ) }
												value={ props.equalBlockHeightBool }
												onChange={ ( value ) => setAttributes( { equalBlockHeightBool: value } ) }
												checked={ props.attributes.equalBlockHeightBool }
											/>
											{ props.attributes.equalBlockHeightBool &&
											<TextControl
												label={ __( 'Key', 'wp-equal-block-heights' ) }
												value={ props.attributes.equalBlockHeightKey }
												onChange={ ( value ) => setAttributes( { equalBlockHeightKey: value } ) }
											/>
											}
										</BaseControl>
									</Fragment>
		
								</PanelBody>
							</InspectorControls>
						) }
					</Fragment>
				) }
			</Fragment>
		);
	} );
}, 'addBlockHeightControls' );
addFilter( 'editor.BlockEdit', 'wp-block-animations/controls', addBlockHeightControls );
