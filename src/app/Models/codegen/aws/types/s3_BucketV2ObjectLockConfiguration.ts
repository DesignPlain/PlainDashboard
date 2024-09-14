import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketV2ObjectLockConfigurationRule,
  s3_BucketV2ObjectLockConfigurationRule_GetTypes,
} from "./s3_BucketV2ObjectLockConfigurationRule";

export interface s3_BucketV2ObjectLockConfiguration {
  // Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.
  objectLockEnabled?: string;

  // Object Lock rule in place for this bucket (documented below).
  rules?: Array<s3_BucketV2ObjectLockConfigurationRule>;
}

export function s3_BucketV2ObjectLockConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectLockEnabled",
      "Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Object Lock rule in place for this bucket (documented below).",
      () => s3_BucketV2ObjectLockConfigurationRule_GetTypes(),
      false,
      false,
    ),
  ];
}
