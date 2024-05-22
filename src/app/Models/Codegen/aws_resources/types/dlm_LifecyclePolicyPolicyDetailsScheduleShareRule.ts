import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dlm_LifecyclePolicyPolicyDetailsScheduleShareRule {
  // The IDs of the AWS accounts with which to share the snapshots.
  targetAccounts?: Array<string>;

  //
  unshareInterval?: number;

  //
  unshareIntervalUnit?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleShareRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetAccounts",
      "The IDs of the AWS accounts with which to share the snapshots.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unshareInterval",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unshareIntervalUnit",
      "",
      [],
      false,
      false,
    ),
  ];
}
