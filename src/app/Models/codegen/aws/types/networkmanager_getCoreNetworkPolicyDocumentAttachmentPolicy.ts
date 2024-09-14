import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition,
  networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition_GetTypes,
} from "./networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition";
import {
  networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction,
  networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction_GetTypes,
} from "./networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction";

export interface networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicy {
  // A user-defined description that further helps identify the rule.
  description?: string;

  // An integer from `1` to `65535` indicating the rule's order number. Rules are processed in order from the lowest numbered rule to the highest. Rules stop processing when a rule is matched. It's important to make sure that you number your rules in the exact order that you want them processed.
  ruleNumber?: number;

  // Action to take when a condition is true. Detailed Below.
  action?: networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction;

  // Valid values include `and` or `or`. This is a mandatory parameter only if you have more than one condition. The `condition_logic` apply to all of the conditions for a rule, which also means nested conditions of `and` or `or` are not supported. Use `or` if you want to associate the attachment with the segment by either the segment name or attachment tag value, or by the chosen conditions. Use `and` if you want to associate the attachment with the segment by either the segment name or attachment tag value and by the chosen conditions. Detailed Below.
  conditionLogic?: string;

  // A block argument. Detailed Below.
  conditions?: Array<networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition>;
}

export function networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ruleNumber",
      "An integer from `1` to `65535` indicating the rule's order number. Rules are processed in order from the lowest numbered rule to the highest. Rules stop processing when a rule is matched. It's important to make sure that you number your rules in the exact order that you want them processed.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action to take when a condition is true. Detailed Below.",
      () =>
        networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "conditionLogic",
      "Valid values include `and` or `or`. This is a mandatory parameter only if you have more than one condition. The `condition_logic` apply to all of the conditions for a rule, which also means nested conditions of `and` or `or` are not supported. Use `or` if you want to associate the attachment with the segment by either the segment name or attachment tag value, or by the chosen conditions. Use `and` if you want to associate the attachment with the segment by either the segment name or attachment tag value and by the chosen conditions. Detailed Below.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "A block argument. Detailed Below.",
      () =>
        networkmanager_getCoreNetworkPolicyDocumentAttachmentPolicyCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A user-defined description that further helps identify the rule.",
      () => [],
      false,
      false,
    ),
  ];
}
