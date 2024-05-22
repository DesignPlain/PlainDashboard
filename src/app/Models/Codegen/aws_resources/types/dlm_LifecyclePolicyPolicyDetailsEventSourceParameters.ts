import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dlm_LifecyclePolicyPolicyDetailsEventSourceParameters {
  // The type of event. Currently, only `shareSnapshot` events are supported.
  eventType?: string;

  // The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account.
  snapshotOwners?: Array<string>;

  // The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
  descriptionRegex?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsEventSourceParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "descriptionRegex",
      "The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventType",
      "The type of event. Currently, only `shareSnapshot` events are supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "snapshotOwners",
      "The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
