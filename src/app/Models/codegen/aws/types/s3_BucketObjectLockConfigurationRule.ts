import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketObjectLockConfigurationRuleDefaultRetention,
  s3_BucketObjectLockConfigurationRuleDefaultRetention_GetTypes,
} from "./s3_BucketObjectLockConfigurationRuleDefaultRetention";

export interface s3_BucketObjectLockConfigurationRule {
  // Default retention period that you want to apply to new objects placed in this bucket (documented below).
  defaultRetention?: s3_BucketObjectLockConfigurationRuleDefaultRetention;
}

export function s3_BucketObjectLockConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultRetention",
      "Default retention period that you want to apply to new objects placed in this bucket (documented below).",
      () => s3_BucketObjectLockConfigurationRuleDefaultRetention_GetTypes(),
      true,
      false,
    ),
  ];
}
