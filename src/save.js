/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { boxwidth, fontsize, textalign, textinput, styleclass } = attributes;
	const inlineStyles = {
		maxWidth: boxwidth + "vw",
		fontSize: fontsize + "vw",
		textAlign: textalign,
	};

	const blockProps = useBlockProps.save({
		className: styleclass,
		style: inlineStyles,
	});

	return <div {...blockProps}>{textinput}</div>;
}
