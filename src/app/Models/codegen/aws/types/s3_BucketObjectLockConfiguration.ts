import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketObjectLockConfigurationRule,
  s3_BucketObjectLockConfigurationRule_GetTypes,
} from "./s3_BucketObjectLockConfigurationRule";

export interface s3_BucketObjectLockConfiguration {
  // Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.
  objectLockEnabled?: string;

  // Object Lock rule in place for this bucket (documented below).
  rule?: s3_BucketObjectLockConfigurationRule;
}

export function s3_BucketObjectLockConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectLockEnabled",
      "Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rule",
      "Object Lock rule in place for this bucket (documented below).",
      () => s3_BucketObjectLockConfigurationRule_GetTypes(),
      false,
      false,
    ),
  ];
}
