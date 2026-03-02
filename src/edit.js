/**
 * Custom Card Block — edit.js
 *
 * The edit function renders in the Gutenberg editor.
 */

import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	URLInput,
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	Placeholder,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { image as imageIcon } from '@wordpress/icons';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		imageUrl,
		imageAlt,
		imageId,
		title,
		description,
		buttonText,
		buttonUrl,
		buttonTarget,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'custom-card-block',
	} );

	const onSelectImage = ( media ) => {
		setAttributes( {
			imageUrl: media.url,
			imageAlt: media.alt,
			imageId: media.id,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			imageUrl: '',
			imageAlt: '',
			imageId: 0,
		} );
	};

	return (
		<>
			{ /* ── Inspector / Sidebar Controls ── */ }
			<InspectorControls>
				<PanelBody title={ __( 'Button Settings', 'custom-card-block' ) } initialOpen={ true }>
					<PanelRow>
						<fieldset style={ { width: '100%' } }>
							<legend>{ __( 'Button URL', 'custom-card-block' ) }</legend>
							<URLInput
								value={ buttonUrl }
								onChange={ ( url ) => setAttributes( { buttonUrl: url } ) }
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __( 'Link Target', 'custom-card-block' ) }
							value={ buttonTarget }
							options={ [
								{ label: __( 'Same Tab', 'custom-card-block' ), value: '_self' },
								{ label: __( 'New Tab', 'custom-card-block' ), value: '_blank' },
							] }
							onChange={ ( val ) => setAttributes( { buttonTarget: val } ) }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Image Settings', 'custom-card-block' ) } initialOpen={ false }>
					<PanelRow>
						<TextControl
							label={ __( 'Alt Text', 'custom-card-block' ) }
							value={ imageAlt }
							onChange={ ( val ) => setAttributes( { imageAlt: val } ) }
							help={ __( 'Describe the image for screen readers.', 'custom-card-block' ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{ /* ── Block Canvas ── */ }
			<div { ...blockProps }>
				<div className="custom-card-block__card">

					{ /* Image Area */ }
					<div className="custom-card-block__image-wrapper">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) =>
									imageUrl ? (
										<div className="custom-card-block__image-container">
											<img
												src={ imageUrl }
												alt={ imageAlt }
												className="custom-card-block__image"
											/>
											<div className="custom-card-block__image-actions">
												<Button
													variant="secondary"
													isSmall
													onClick={ open }
												>
													{ __( 'Replace Image', 'custom-card-block' ) }
												</Button>
												<Button
													variant="link"
													isDestructive
													isSmall
													onClick={ onRemoveImage }
												>
													{ __( 'Remove', 'custom-card-block' ) }
												</Button>
											</div>
										</div>
									) : (
										<Placeholder
											icon={ imageIcon }
											label={ __( 'Card Image', 'custom-card-block' ) }
											instructions={ __( 'Upload or select an image for the card.', 'custom-card-block' ) }
										>
											<Button variant="primary" onClick={ open }>
												{ __( 'Upload Image', 'custom-card-block' ) }
											</Button>
										</Placeholder>
									)
								}
							/>
						</MediaUploadCheck>
					</div>

					{ /* Card Body */ }
					<div className="custom-card-block__body">

						{ /* Title */ }
						<RichText
							tagName="h3"
							className="custom-card-block__title"
							value={ title }
							onChange={ ( val ) => setAttributes( { title: val } ) }
							placeholder={ __( 'Card Title…', 'custom-card-block' ) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
						/>

						{ /* Description */ }
						<RichText
							tagName="p"
							className="custom-card-block__description"
							value={ description }
							onChange={ ( val ) => setAttributes( { description: val } ) }
							placeholder={ __( 'Write a short description…', 'custom-card-block' ) }
							allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
						/>

						{ /* Button */ }
						<div className="custom-card-block__button-wrapper">
							<RichText
								tagName="span"
								className="custom-card-block__button"
								value={ buttonText }
								onChange={ ( val ) => setAttributes( { buttonText: val } ) }
								placeholder={ __( 'Button text…', 'custom-card-block' ) }
								allowedFormats={ [] }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
