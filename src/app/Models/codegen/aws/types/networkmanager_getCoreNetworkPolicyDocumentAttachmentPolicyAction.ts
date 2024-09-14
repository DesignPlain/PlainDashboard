import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction {
  // Defines how a segment is mapped. Values can be `constant` or `tag`. `constant` statically defines the segment to associate the attachment to. `tag` uses the value of a tag to dynamically try to map to a segment.reference_policies_elements_condition_operators.html) to evaluate.
  associationMethod?: string;

  // Determines if this mapping should override the segment value for `require_attachment_acceptance`. You can only set this to `true`, indicating that this setting applies only to segments that have `require_attachment_acceptance` set to `false`. If the segment already has the default `require_attachment_acceptance`, you can set this to inherit segment’s acceptance value.
  requireAcceptance?: boolean;

  // Name of the `segment` to share as defined in the `segments` section. This is used only when the `association_method` is `constant`.
  segment?: string;

  // Maps the attachment to the value of a known key. This is used with the `association_method` is `tag`. For example a `tag` of `stage = “test”`, will map to a segment named `test`. The value must exactly match the name of a segment. This allows you to have many segments, but use only a single rule without having to define multiple nearly identical conditions. This prevents creating many similar conditions that all use the same keys to map to segments.
  tagValueOfKey?: string;

  // The name of the network function group to attach to the attachment policy.
  addToNetworkFunctionGroup?: string;
}

export function networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "associationMethod",
      "Defines how a segment is mapped. Values can be `constant` or `tag`. `constant` statically defines the segment to associate the attachment to. `tag` uses the value of a tag to dynamically try to map to a segment.reference_policies_elements_condition_operators.html) to evaluate.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireAcceptance",
      "Determines if this mapping should override the segment value for `require_attachment_acceptance`. You can only set this to `true`, indicating that this setting applies only to segments that have `require_attachment_acceptance` set to `false`. If the segment already has the default `require_attachment_acceptance`, you can set this to inherit segment’s acceptance value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segment",
      "Name of the `segment` to share as defined in the `segments` section. This is used only when the `association_method` is `constant`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagValueOfKey",
      "Maps the attachment to the value of a known key. This is used with the `association_method` is `tag`. For example a `tag` of `stage = “test”`, will map to a segment named `test`. The value must exactly match the name of a segment. This allows you to have many segments, but use only a single rule without having to define multiple nearly identical conditions. This prevents creating many similar conditions that all use the same keys to map to segments.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "addToNetworkFunctionGroup",
      "The name of the network function group to attach to the attachment policy.",
      () => [],
      false,
      false,
    ),
  ];
}
