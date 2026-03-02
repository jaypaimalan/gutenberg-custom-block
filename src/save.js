/**
 * Custom Card Block — save.js
 *
 * Defines the static HTML saved to the database / rendered on the front-end.
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		imageUrl,
		imageAlt,
		title,
		description,
		buttonText,
		buttonUrl,
		buttonTarget,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'custom-card-block',
	} );

	return (
		<div { ...blockProps }>
			<div className="custom-card-block__card">

				{ /* Image */ }
				{ imageUrl && (
					<div className="custom-card-block__image-wrapper">
						<img
							src={ imageUrl }
							alt={ imageAlt }
							className="custom-card-block__image"
						/>
					</div>
				) }

				{ /* Card Body */ }
				<div className="custom-card-block__body">

					{ /* Title */ }
					{ title && (
						<RichText.Content
							tagName="h3"
							className="custom-card-block__title"
							value={ title }
						/>
					) }

					{ /* Description */ }
					{ description && (
						<RichText.Content
							tagName="p"
							className="custom-card-block__description"
							value={ description }
						/>
					) }

					{ /* Button */ }
					{ buttonText && (
						<div className="custom-card-block__button-wrapper">
							<a
								href={ buttonUrl }
								target={ buttonTarget }
								rel={ buttonTarget === '_blank' ? 'noopener noreferrer' : undefined }
								className="custom-card-block__button"
							>
								<RichText.Content value={ buttonText } />
							</a>
						</div>
					) }
				</div>
			</div>
		</div>
	);
}
