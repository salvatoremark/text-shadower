/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

function Save(props) {
  const { attributes } = props;
  const inlineStyles = {
    fontSize: attributes.fontsize + "vw",
  };

  const blockProps = useBlockProps.save({
    className: attributes.styleclass,
    style: inlineStyles,
  });

  return <div {...blockProps}>{attributes.textinput}</div>;
}
export default Save;
