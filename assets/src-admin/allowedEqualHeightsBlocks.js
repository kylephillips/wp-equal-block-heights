const allowedEqualHeightsCoreBlocks = [ 
	'core/paragraph', 
	'core/heading', 
	'core/button', 
	'core/buttons', 
	'core/quote', 
	'core/group', 
	'core/columns', 
	'core/column', 
	'core/list', 
	'core/separator'
];
const allowedEqualHeightsBlocks = wp.hooks.applyFilters('wp_equal_block_heights_allowed_blocks', allowedEqualHeightsCoreBlocks);
export default allowedEqualHeightsBlocks;