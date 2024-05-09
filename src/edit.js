/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	SelectControl,
	RangeControl,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

export default function Edit({ attributes, setAttributes }) {
	const { boxwidth, fontsize, textalign, textinput, styleclass } = attributes;
	const inlineStyles = {
		maxWidth: boxwidth + "vw",
		fontSize: fontsize + "vw",
		textAlign: textalign,
	};
	const blockProps = useBlockProps({
		className: styleclass,
		style: inlineStyles,
	});

	return (
		<>
			<div {...blockProps}>{__(textinput, metadata.textdomain)}</div>

			<BlockControls>
				<AlignmentToolbar
					value={textalign}
					onChange={(textalign) => setAttributes({ textalign })}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={__("CONTROLS", metadata.texdomain)}
					initialOpen={true}
				>
					<TextControl
						label={__("Text")}
						value={textinput}
						onChange={(textinput) => setAttributes({ textinput })}
					/>
					<SelectControl
						label={__("Style", metadata.texdomain)}
						value={styleclass}
						options={[
							{
								label: __("Elegant", metadata.texdomain),
								value: "elegantshadow",
							},
							{ label: __("Deep", metadata.texdomain), value: "deepshadow" },
							{ label: __("Inset", metadata.texdomain), value: "insetshadow" },
							{ label: __("Retro", metadata.texdomain), value: "retroshadow" },
						]}
						onChange={(styleclass) => {
							setAttributes({ styleclass });
						}}
						__nextHasNoMarginBottom
					/>
					<RangeControl
						label="Font Size"
						value={fontsize}
						onChange={(fontsize) => setAttributes({ fontsize })}
						min={3}
						max={15}
					/>
					<RangeControl
						label="Box Width"
						value={boxwidth}
						onChange={(boxwidth) => setAttributes({ boxwidth })}
						min={3}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
