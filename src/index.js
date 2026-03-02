/**
 * Custom Card Block — index.js
 *
 * Registers the block type in the editor.
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	...metadata,
	title: __( 'Custom Card Block', 'custom-card-block' ),
	edit: Edit,
	save,
} );
