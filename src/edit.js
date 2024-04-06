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
  ToolbarGroup,
  ToolbarButton,
  ToolbarDropdownMenu,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import "./editor.scss";

function Edit(props) {
  const { attributes, setAttributes } = props;
  const inlineStyles = {
    maxWidth: attributes.boxwidth + "px",
    fontSize: attributes.fontsize + "vw",
    textAlign: attributes.textalign,
  };
  const blockProps = useBlockProps({
    className: attributes.styleclass,
    style: inlineStyles,
  });

  return (
    <>
      <div {...blockProps}>{__(attributes.textinput, metadata.textdomain)}</div>
      <BlockControls>
        <AlignmentToolbar
          value={attributes.textalign}
          onChange={(textalign) => setAttributes({ textalign })}
        />
      </BlockControls>

      <InspectorControls>
        <PanelBody
          title={__("CONTROLS", metadata.texdomain)}
          initialOpen={true}>
          <TextControl
            label={__("Text")}
            value={attributes.textinput}
            onChange={(textinput) => setAttributes({ textinput })}
          />
          <SelectControl
            label={__("Style", metadata.texdomain)}
            value={attributes.styleclass}
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
            label='Box Width'
            value={attributes.boxwidth}
            onChange={(boxwidth) => setAttributes({ boxwidth })}
            min={300}
            max={1500}
          />
          <RangeControl
            label='Font Size'
            value={attributes.fontsize}
            onChange={(fontsize) => setAttributes({ fontsize })}
            min={1}
            max={15}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
}
export default Edit;
