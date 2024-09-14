import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_IamPolicyAssignmentIdentities {
  // Array of Quicksight group names to assign the policy to.
  groups?: Array<string>;

  // Array of Quicksight user names to assign the policy to.
  users?: Array<string>;
}

export function quicksight_IamPolicyAssignmentIdentities_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "groups",
      "Array of Quicksight group names to assign the policy to.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "users",
      "Array of Quicksight user names to assign the policy to.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
