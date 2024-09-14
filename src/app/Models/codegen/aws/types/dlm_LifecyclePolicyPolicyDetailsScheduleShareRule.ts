import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dlm_LifecyclePolicyPolicyDetailsScheduleShareRule {
  // The IDs of the AWS accounts with which to share the snapshots.
  targetAccounts?: Array<string>;

  // The period after which snapshots that are shared with other AWS accounts are automatically unshared.
  unshareInterval?: number;

  // The unit of time for the automatic unsharing interval. Valid values are `DAYS`, `WEEKS`, `MONTHS`, `YEARS`.
  unshareIntervalUnit?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleShareRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "unshareInterval",
      "The period after which snapshots that are shared with other AWS accounts are automatically unshared.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unshareIntervalUnit",
      "The unit of time for the automatic unsharing interval. Valid values are `DAYS`, `WEEKS`, `MONTHS`, `YEARS`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetAccounts",
      "The IDs of the AWS accounts with which to share the snapshots.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
